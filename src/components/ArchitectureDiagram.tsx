"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import mermaid from "mermaid";

const DIAGRAM = `graph TB
    subgraph "Client Layer"
        Browser["🌐 Web Browser"]
    end

    subgraph "Frontend — Next.js"
        NextApp["⚛️ Next.js App Router<br/>(SSR / SSG)"]
        APIRoutes["🔌 API Routes<br/>Project Resume · AI Q&A<br/>Meetings · Calendar · Docs"]
    end

    subgraph "Backend — FastAPI (Python)"
        FastAPI["🐍 FastAPI<br/>Auth · Projects · Chat<br/>Resume Processing · OM Insights"]
        RAG["🧠 RAG Service<br/>LightRAG / Neo4j + PGVector"]
        Middleware["🔐 Auth · CORS · Rate Limit"]
    end

    subgraph "AI / LLM"
        LiteLLM["🤖 LiteLLM Proxy<br/>Load Balancing · Model Routing"]
        Gemini["Gemini API"]
        Mistral["Mistral API"]
    end

    subgraph "Data Layer — Supabase"
        PlatformDB[("🗄️ PostgreSQL<br/>Users · Projects · Resumes · Chat")]
        Storage[("📦 Storage<br/>Documents · Images")]
        Auth[("🔑 Auth<br/>JWT · Accounts")]
    end

    subgraph "Data Warehouse — Supabase"
        WarehouseDB[("📚 PostgreSQL + PostGIS<br/>Census · BLS · HUD · FEMA")]
        DataLake[("☁️ Data Lake<br/>Raw API Responses")]
        VectorStore[("🧬 PGVector<br/>Document Chunks")]
    end

    subgraph "ETL — Prefect"
        Prefect["🎡 Prefect Orchestrator"]
        Ingest["⬇️ Ingest Flows"]
        Transform["✂️ Transform Flows"]
    end

    subgraph "External"
        APIs["🌐 Census · BLS · HUD<br/>FEMA · EPA · FRED · Redfin"]
        Calendar["📅 Google Calendar"]
        Daily["🎥 Daily.co"]
        Email["📧 Resend"]
    end

    Browser --> NextApp --> APIRoutes
    APIRoutes --> FastAPI
    FastAPI --> Middleware
    FastAPI --> PlatformDB & Storage & Auth
    FastAPI --> RAG
    RAG --> VectorStore
    FastAPI & RAG --> LiteLLM
    LiteLLM --> Gemini & Mistral
    APIs --> Ingest --> DataLake
    DataLake --> Transform --> WarehouseDB
    Prefect --> Ingest
    WarehouseDB -.-> FastAPI
    FastAPI --> Calendar & Daily
    Calendar & Daily -.->|Webhooks| FastAPI

    classDef client fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
    classDef frontend fill:#fff3e0,stroke:#f57c00,stroke-width:2px
    classDef backend fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
    classDef data fill:#e1f5fe,stroke:#0277bd,stroke-width:2px
    classDef external fill:#fce4ec,stroke:#c2185b,stroke-width:2px
    classDef llm fill:#e0f2f1,stroke:#00695c,stroke-width:2px
    classDef etl fill:#f1f8e9,stroke:#558b2f,stroke-width:2px

    class Browser client
    class NextApp,APIRoutes frontend
    class FastAPI,RAG,Middleware backend
    class PlatformDB,Storage,Auth,WarehouseDB,DataLake,VectorStore data
    class APIs,Calendar,Daily,Email external
    class LiteLLM,Gemini,Mistral llm
    class Prefect,Ingest,Transform etl
`;

mermaid.initialize({
  startOnLoad: false,
  theme: "default",
  flowchart: { curve: "basis", htmlLabels: true },
  securityLevel: "loose",
});

const MIN_SCALE = 0.3;
const MAX_SCALE = 3;

export function ArchitectureDiagram() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef({ x: 0, y: 0 });
  const translateStart = useRef({ x: 0, y: 0 });

  // Render mermaid once
  useEffect(() => {
    const render = async () => {
      if (!svgContainerRef.current) return;
      try {
        const id = "arch-diagram-" + Date.now();
        const { svg } = await mermaid.render(id, DIAGRAM);
        svgContainerRef.current.innerHTML = svg;
        const svgEl = svgContainerRef.current.querySelector("svg");
        if (svgEl) {
          svgEl.removeAttribute("height");
          svgEl.removeAttribute("width");
          svgEl.style.width = "100%";
          svgEl.style.height = "auto";
        }
      } catch (err) {
        console.error("Mermaid render error:", err);
        if (svgContainerRef.current) {
          svgContainerRef.current.innerHTML =
            '<p class="text-gray-400 text-sm">Architecture diagram could not render.</p>';
        }
      }
    };
    render();
  }, []);

  // Wheel zoom (centered on cursor)
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = wrapper.getBoundingClientRect();
      const cursorX = e.clientX - rect.left;
      const cursorY = e.clientY - rect.top;

      const zoomFactor = e.deltaY < 0 ? 1.12 : 1 / 1.12;

      setScale((prev) => {
        const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, prev * zoomFactor));
        const ratio = next / prev;
        setTranslate((t) => ({
          x: cursorX - ratio * (cursorX - t.x),
          y: cursorY - ratio * (cursorY - t.y),
        }));
        return next;
      });
    };

    wrapper.addEventListener("wheel", handleWheel, { passive: false });
    return () => wrapper.removeEventListener("wheel", handleWheel);
  }, []);

  // Pan handlers
  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      setIsPanning(true);
      panStart.current = { x: e.clientX, y: e.clientY };
      translateStart.current = { ...translate };
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [translate],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isPanning) return;
      setTranslate({
        x: translateStart.current.x + (e.clientX - panStart.current.x),
        y: translateStart.current.y + (e.clientY - panStart.current.y),
      });
    },
    [isPanning],
  );

  const onPointerUp = useCallback(() => setIsPanning(false), []);

  // Button zoom
  const zoomIn = () => {
    setScale((s) => Math.min(MAX_SCALE, s * 1.25));
  };
  const zoomOut = () => {
    setScale((s) => Math.max(MIN_SCALE, s / 1.25));
  };
  const resetView = () => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  };

  return (
    <div className="w-full border border-gray-200 rounded-lg bg-white overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-gray-100 bg-gray-50/60">
        <span className="text-[11px] text-gray-400 font-medium select-none">
          Scroll to zoom · Drag to pan
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={zoomOut}
            className="w-7 h-7 rounded flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
            aria-label="Zoom out"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
          <span className="text-[11px] text-gray-500 font-medium tabular-nums w-10 text-center select-none">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={zoomIn}
            className="w-7 h-7 rounded flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
            aria-label="Zoom in"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 4v8M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
          <div className="w-px h-4 bg-gray-200 mx-1" />
          <button
            onClick={resetView}
            className="px-2 h-7 rounded text-[11px] text-gray-500 font-medium hover:bg-gray-200 transition-colors"
            aria-label="Reset view"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Canvas area */}
      <div
        ref={wrapperRef}
        className="relative overflow-hidden"
        style={{ height: "520px", cursor: isPanning ? "grabbing" : "grab" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div
          ref={svgContainerRef}
          style={{
            transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
            transformOrigin: "0 0",
            transition: isPanning ? "none" : "transform 0.15s ease-out",
            minWidth: "800px",
            padding: "24px",
          }}
        >
          <p className="text-gray-400 text-sm animate-pulse">Loading architecture diagram…</p>
        </div>
      </div>
    </div>
  );
}

