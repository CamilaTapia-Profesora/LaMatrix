import React, { ReactNode } from \"react\";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(\"Error boundary caught:\", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: \"100vh\",
            display: \"flex\",
            alignItems: \"center\",
            justifyContent: \"center\",
            background: \"#050914\",
            color: \"#fff\",
          }}
        >
          <div style={{ textAlign: \"center\" }}>
            <h1 style={{ fontSize: \"2rem\", marginBottom: \"1rem\" }}>
              ⚠️ Algo salió mal
            </h1>
            <p style={{ fontSize: \"1rem\", color: \"rgba(255,255,255,0.7)\" }}>
              {this.state.error?.message || \"Error desconocido\"}
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                marginTop: \"2rem\",
                padding: \"0.75rem 1.5rem\",
                background: \"#00f5d4\",
                color: \"#050914\",
                border: \"none\",
                borderRadius: \"0.5rem\",
                cursor: \"pointer\",
                fontWeight: 600,
              }}
            >
              Recargar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;