<div>
                <span>Contador:{contador}</span>
                <button onClick={handleIncrementar}>Incrementar</button>
                <button onClick={() => setContador(contador - 1)}>Decrementar</button>
                <button onClick={() => setContador(0)}>Reset</button>
            </div> 