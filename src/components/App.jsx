import NavBar from './NavBar';

function App() {
    return (
        <>
        <NavBar />
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <h1 className="display-4 fw-light mb-4">Noah Noel Arredondo Torres</h1>
                    <div className="p-4 bg-light bg-opacity-75 rounded-3 shadow-sm">
                        <p className="lead text-muted">
                            Desarrollador Web & Estudiante de Ingeniería
                        </p>
                        <hr className="my-4" />
                        <p className="text-secondary">
                            Explorando el mundo del desarrollo web con React
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default App;