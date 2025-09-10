import React from 'react';

class LiveEditorErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('LiveEditor Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="live-editor-error">
          <h3>Error en el Live Editor</h3>
          <p>Ha ocurrido un error al cargar el editor de código.</p>
          <details style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#666' }}>
            <summary>Detalles del error</summary>
            <pre style={{ marginTop: '0.5rem', whiteSpace: 'pre-wrap' }}>
              {this.state.error?.toString()}
            </pre>
          </details>
          <button 
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#1b1b1b',
              color: '#dbd9c3',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Intentar de nuevo
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default LiveEditorErrorBoundary;
