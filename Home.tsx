import { Link } from "wouter";
import { BookOpen, Compass, Zap } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#050914" }}>
      <NavBar />

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              La Matriz
            </h1>
            <p
              className="text-xl md:text-2xl text-white mb-8"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Plataforma Educativa Interactiva
            </p>
            <p
              className="text-sm"
              style={{
                color: "rgba(0, 245, 212, 0.8)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Liceo O'Higgins · Educación para el Futuro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Link href="/fisica">
              <a style={{ textDecoration: "none", color: "inherit" }}>
                <div
                  className="cyber-card rounded-xl p-8 text-center cursor-pointer hover:scale-105 transition-all"
                  style={{
                    background: "rgba(13, 27, 42, 0.8)",
                    border: "1px solid rgba(0, 245, 212, 0.15)",
                  }}
                >
                  <Zap
                    size={40}
                    style={{
                      color: "#00f5d4",
                      marginBottom: "1rem",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <h2
                    className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Física
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.6)" }}>
                    Explora leyes de movimiento, energía, electricidad y más
                  </p>
                </div>
              </a>
            </Link>

            <Link href="/primero-medio">
              <a style={{ textDecoration: "none", color: "inherit" }}>
                <div
                  className="cyber-card rounded-xl p-8 text-center cursor-pointer hover:scale-105 transition-all"
                  style={{
                    background: "rgba(13, 27, 42, 0.8)",
                    border: "1px solid rgba(0, 245, 212, 0.15)",
                  }}
                >
                  <BookOpen
                    size={40}
                    style={{
                      color: "#ffd60a",
                      marginBottom: "1rem",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <h2
                    className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Primero Medio
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.6)" }}>
                    Contenidos especializados para Primero Medio
                  </p>
                </div>
              </a>
            </Link>

            <Link href="/orientacion">
              <a style={{ textDecoration: "none", color: "inherit" }}>
                <div
                  className="cyber-card rounded-xl p-8 text-center cursor-pointer hover:scale-105 transition-all"
                  style={{
                    background: "rgba(13, 27, 42, 0.8)",
                    border: "1px solid rgba(0, 245, 212, 0.15)",
                  }}
                >
                  <Compass
                    size={40}
                    style={{
                      color: "#f72585",
                      marginBottom: "1rem",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <h2
                    className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Orientación
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.6)" }}>
                    Guía de orientación vocacional y personal
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
