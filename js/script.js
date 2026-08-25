async function buscarAtracao() {
    const campoAtracao = document.getElementById('atracoes');
    const resultado = document.getElementById('resultado');

    const atracao = campoAtracao.value.trim();

    if (atracao === "") {
        resultado.innerHTML = '<p class="erro">Digite uma atração.</p>';
        return;
    }

    resultado.innerHTML = '<p>Carregando...</p>';

    try {
        const url = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${encodeURIComponent(atracao)}&apikey=iJCoGf0LLkFGcHpSBX91tLna8tstv8c9`;

        const response = await fetch(url);

        const dados = await response.json();

        console.log(dados);

        if (!dados._embedded || !dados._embedded.events) {
            resultado.innerHTML = '<p class="erro">Nenhum evento encontrado.</p>';
            return;
        }

        let html = '<h2>Eventos encontrados</h2>';

        dados._embedded.events.forEach(function(evento) {
            html += `
                <p>
                    <strong>Evento:</strong> ${evento.name}<br>
                    <strong>Data:</strong> ${evento.dates.start.localDate}
                </p>
                <hr>
            `;
        });

        resultado.innerHTML = html;

    } catch (error) {
        console.error(error);
        resultado.innerHTML = '<p class="erro">Erro ao buscar os eventos.</p>';
    }
}