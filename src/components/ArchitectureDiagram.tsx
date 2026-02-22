"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import mermaid from "mermaid";

const DIAGRAM = `graph TB
    subgraph Client["Client Layer"]
        Browser["🌐 Web Browser"]
    end

    subgraph Frontend["Frontend - Next.js"]
        NextApp["⚛️ Next.js App Router<br/>(SSR / SSG)"]
        subgraph NextAPIs["Next.js API Routes"]
            API_ProjectResume["Project Resume<br/>autofill · save-version · realtime-sanity-check"]
            API_BorrowerResume["Borrower Resume<br/>autofill · save-version · realtime-sanity-check"]
            API_AI["AI Q&A<br/>project-qa · borrower-qa · om-qa"]
            API_OM["OM Insights<br/>generate-insights · field-access"]
            API_Meetings["Meetings<br/>create · update · cancel · availability"]
            API_Calendar["Calendar<br/>callback · disconnect"]
            API_Daily["Daily.co<br/>room · meeting-token · delete-room"]
            API_OnlyOffice["OnlyOffice<br/>config · callback"]
            API_Other["Lenders · Security-logos"]
        end
    end

    subgraph Backend["Backend - FastAPI"]
        FastAPI["🐍 FastAPI Main Server<br/>Python 3.11 · Port 8000"]
        subgraph BackendRouters["API Routers"]
            R_ProjectResume["Project Resume<br/>/project-resume"]
            R_BorrowerResume["Borrower Resume<br/>/borrower-resume"]
            R_Webhooks["Webhooks<br/>trigger-refresh · daily"]
            R_OM["OM Insights<br/>/projects/.../om"]
            R_AI["AI Q&A<br/>/ai"]
            R_Underwriting["Underwriting<br/>/underwriting"]
            R_UnderwritingChat["Underwriting Chat<br/>/underwriting threads"]
            R_Documents["Documents<br/>/documents"]
            R_Auth["Auth<br/>/auth"]
            R_Users["Users<br/>/users"]
            R_Projects["Projects<br/>/projects"]
            R_Chat["Chat<br/>/chat"]
            R_Calendar["Calendar<br/>/calendar"]
            R_Health["Health<br/>/health · /health/live · /health/ready"]
        end
        subgraph BackendMiddleware["Middleware"]
            MW_Auth["🔐 Auth"]
            MW_CORS["CORS"]
            MW_RateLimit["Rate Limit"]
            MW_Security["Security Headers"]
            MW_GZip["GZip"]
            MW_Cache["HTTP Cache"]
            MW_Metrics["Metrics"]
            MW_Perf["Performance"]
        end
        RAG["🧠 RAG Service<br/>LightRAG · Neo4j + PGVector"]
    end

    subgraph LenderMatching["Lender Matching"]
        LenderMatchingCore["🤝 Lender Matching<br/>Matchmaking algorithm matches developers<br/>with lenders by filters · deal types · criteria"]
        DeveloperFeatures["Developer / Project<br/>features & profile"]
        LenderCriteria["Lender criteria<br/>buy-box · deal types · filters"]
        MatchedLenders["Matched<br/>Lenders"]
    end

    subgraph AI["AI / LLM"]
        LiteLLM["🤖 LiteLLM Proxy<br/>Load Balancing · Model Routing"]
        Gemini["Gemini API"]
        Mistral["Mistral API"]
    end

    subgraph PlatformData["Data Layer - Supabase"]
        PlatformDB[("🗄️ PostgreSQL<br/>Users · Projects · Resumes · Chat")]
        Storage[("📦 Storage<br/>Documents · Images")]
        Auth[("🔑 Auth<br/>JWT · Accounts")]
    end

    subgraph Warehouse["Data Warehouse - Supabase"]
        WarehouseDB[("📚 PostgreSQL + PostGIS<br/>Census · BLS · HUD · FEMA · Marts")]
        DataLake[("☁️ Data Lake<br/>Raw API Responses")]
        VectorStore[("🧬 PGVector<br/>Document Chunks")]
    end

    subgraph ETL["ETL - Prefect"]
        Prefect["🎡 Prefect Orchestrator"]
        Ingest["⬇️ Ingest Flows"]
        Transform["✂️ Transform Flows"]
        Mart["📊 Mart Flows"]
        subgraph Sources["Data Sources"]
            S_Census["Census Bureau"]
            S_BLS["BLS"]
            S_HUD["HUD"]
            S_FEMA["FEMA"]
            S_EPA["EPA"]
            S_FRED["FRED"]
            S_Redfin["Redfin"]
        end
    end

    subgraph Infra["Backend Infrastructure"]
        Neo4j[("🕸️ Neo4j<br/>Knowledge Graph")]
        Redis[("⚡ Redis<br/>Rate Limit · Cache")]
        Celery["⚙️ Celery<br/>Background Tasks"]
    end

    subgraph External["External"]
        GoogleCal["📅 Google Calendar"]
        Daily["🎥 Daily.co"]
        Resend["📧 Resend"]
        Prometheus["📊 Prometheus<br/>/metrics"]
    end

    subgraph Planned["Planned / Future"]
        RefiRadar["📡 Refi Radar<br/>AI monitors market conditions & rates<br/>Alerts developers when refinance<br/>opportunity is favorable"]
        RefiRadarSearch["🌐 Continuous<br/>Internet / Market Search"]
        RefiRadarAlerts["🔔 Refinance<br/>Opportunity Alerts"]
    end

    Browser --> NextApp --> NextAPIs
    API_ProjectResume & API_BorrowerResume & API_AI & API_OM & API_Meetings & API_Calendar & API_Daily & API_OnlyOffice --> FastAPI
    FastAPI --> BackendRouters
    FastAPI --> BackendMiddleware
    FastAPI --> RAG
    FastAPI --> PlatformDB & Storage & Auth
    FastAPI --> Neo4j & Redis
    RAG --> Neo4j & VectorStore
    FastAPI & RAG --> LiteLLM
    LiteLLM --> Gemini & Mistral
    S_Census & S_BLS & S_HUD & S_FEMA & S_EPA & S_FRED & S_Redfin --> Ingest
    Prefect --> Ingest --> DataLake
    DataLake --> Transform --> WarehouseDB
    Mart --> WarehouseDB
    WarehouseDB -.-> FastAPI
    R_Webhooks --> Celery
    FastAPI --> GoogleCal & Daily
    GoogleCal & Daily -.->|Webhooks| FastAPI
    FastAPI --> Prometheus
    FastAPI --> Resend

    PlatformDB --> DeveloperFeatures
    DeveloperFeatures --> LenderMatchingCore
    LenderCriteria --> LenderMatchingCore
    LenderMatchingCore --> MatchedLenders
    MatchedLenders --> FastAPI
    FastAPI --> LenderMatchingCore

    RefiRadarSearch -.->|"feeds"| RefiRadar
    RefiRadar -.->|"AI analysis"| LiteLLM
    RefiRadar -.->|"alerts"| RefiRadarAlerts
    RefiRadarAlerts -.->|"notify users"| FastAPI
    RefiRadarAlerts -.->|"email/push"| Resend
    WarehouseDB -.->|"rates · market data"| RefiRadar

    classDef client fill:#ffffff,stroke:#1976d2,stroke-width:2px
    classDef frontend fill:#e8f4fc,stroke:#1976d2,stroke-width:2px
    classDef backend fill:#bbdefb,stroke:#1565c0,stroke-width:2px
    classDef data fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
    classDef external fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    classDef llm fill:#e8f4fc,stroke:#1565c0,stroke-width:2px
    classDef etl fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    classDef infra fill:#ffffff,stroke:#1976d2,stroke-width:2px
    classDef planned fill:#e8f4fc,stroke:#1565c0,stroke-width:2px,stroke-dasharray: 5 5
    classDef matching fill:#bbdefb,stroke:#1565c0,stroke-width:2px

    class Browser client
    class NextApp,NextAPIs,API_ProjectResume,API_BorrowerResume,API_AI,API_OM,API_Meetings,API_Calendar,API_Daily,API_OnlyOffice,API_Other frontend
    class FastAPI,BackendRouters,R_ProjectResume,R_BorrowerResume,R_Webhooks,R_OM,R_AI,R_Underwriting,R_UnderwritingChat,R_Documents,R_Auth,R_Users,R_Projects,R_Chat,R_Calendar,R_Health,BackendMiddleware,MW_Auth,MW_CORS,MW_RateLimit,MW_Security,MW_GZip,MW_Cache,MW_Metrics,MW_Perf,RAG backend
    class PlatformDB,Storage,Auth,WarehouseDB,DataLake,VectorStore data
    class GoogleCal,Daily,Resend,Prometheus external
    class LiteLLM,Gemini,Mistral llm
    class Prefect,Ingest,Transform,Mart,Sources,S_Census,S_BLS,S_HUD,S_FEMA,S_EPA,S_FRED,S_Redfin etl
    class Neo4j,Redis,Celery infra
    class RefiRadar,RefiRadarSearch,RefiRadarAlerts planned
    class LenderMatchingCore,DeveloperFeatures,LenderCriteria,MatchedLenders matching
`;

mermaid.initialize({
  startOnLoad: false,
  theme: "default",
  flowchart: { curve: "basis", htmlLabels: true },
  securityLevel: "loose",
});

const MIN_SCALE = 0.2;
const MAX_SCALE = 8;

export function ArchitectureDiagram() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef({ x: 0, y: 0 });
  const translateStart = useRef({ x: 0, y: 0 });

  // Keep refs in sync so event handlers always read current values
  const scaleRef = useRef(scale);
  const translateRef = useRef(translate);
  useEffect(() => { scaleRef.current = scale; }, [scale]);
  useEffect(() => { translateRef.current = translate; }, [translate]);

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

  // Wheel zoom (centered on cursor) - uses refs to avoid stale closures
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = wrapper.getBoundingClientRect();
      const cursorX = e.clientX - rect.left;
      const cursorY = e.clientY - rect.top;

      const zoomFactor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
      const prevScale = scaleRef.current;
      const nextScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, prevScale * zoomFactor));
      const ratio = nextScale / prevScale;

      const prevT = translateRef.current;
      const newTranslate = {
        x: cursorX - ratio * (cursorX - prevT.x),
        y: cursorY - ratio * (cursorY - prevT.y),
      };

      setScale(nextScale);
      setTranslate(newTranslate);
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
          <span className="text-[11px] text-gray-500 font-medium tabular-nums min-w-[3rem] text-center select-none">
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
        style={{ height: "680px", cursor: isPanning ? "grabbing" : "grab" }}
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
            minWidth: "2000px",
            padding: "24px",
          }}
        >
          <p className="text-gray-400 text-sm animate-pulse">Loading architecture diagram…</p>
        </div>
      </div>
    </div>
  );
}

