import { Component, ErrorInfo } from 'react'
import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.type'

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error to an error reporting service
    console.error(error, errorInfo)
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
