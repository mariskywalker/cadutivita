import { ScrollEffects } from "../components/ScrollEffects";

function ArrowSm() {
  return (
    <svg width={14} height={14} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2.5}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

function ArrowMd() {
  return (
    <svg width={15} height={15} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2.5}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

const TICKER = [
  "Mais valor para sua plataforma",
  "Camada de inteligência clínica",
  "Continuidade dos dados do paciente",
  "Diferenciação no mercado",
  "Gestão + inteligência do cuidado",
  "Estrutura clínica ao acompanhamento",
  "Visão evolutiva do paciente",
  "Integração entre profissionais",
];

export default function TivitaPage() {
  const tickerDup = [...TICKER, ...TICKER];

  return (
    <>
      <ScrollEffects />

      <nav>
        <a href="https://cadu.health" className="nav-brand">
          <span className="nav-wordmark">CADU</span>
          <span className="nav-slash">/</span>
          <span className="nav-context">Tivita</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#contexto">Contexto</a>
          </li>
          <li>
            <a href="#gap">O gap</a>
          </li>
          <li>
            <a href="#complemento">Complemento</a>
          </li>
          <li>
            <a href="#parceria">Parceria</a>
          </li>
          <li>
            <a href="#piloto">Piloto</a>
          </li>
        </ul>
        <a href="#proximo" className="nav-cta">
          Explorar parceria
          <ArrowSm />
        </a>
      </nav>

      <main id="tivita-landing">
        <section id="hero">
          <div className="blobs">
            <div className="blob hero-blob-orange" />
            <div className="blob hero-blob-pink" />
            <div className="blob hero-blob-blue" />
          </div>
          <div className="wrap">
            <div className="hero-brand-stage hero-brand-stage--text" aria-hidden="true">
              <div className="hero-brand enter-1">CADU</div>
              <div className="hero-brand-sub">para Tivita</div>
            </div>
            <div className="hero-scrollspace" data-hero-scrollspace />
          </div>
        </section>

        <section id="hero-content" className="hero-content">
          <div className="wrap">
            <div className="hero-main hero-main-single">
              <div className="hero-left">
                <div className="hero-inline-brand" aria-hidden="true">
                  CADU
                </div>
                <div className="pill-tag reveal">
                  <span className="pill-dot" />
                  CADU / Tivita — Proposta de Parceria
                </div>
                <h1 className="hero-headline reveal d1">
                  Expanda o valor da Tivita com uma camada de inteligência no cuidado.
                </h1>
                <p className="hero-body reveal d2">
                  O Cadu estrutura o acompanhamento longitudinal do neurodesenvolvimento — uma camada clínica que a
                  automação operacional da Tivita não foi desenhada para cobrir, e que expande o valor do produto para as
                  clínicas.
                </p>
                <div className="hero-btns reveal d3">
                  <a
                    href="mailto:contato@cadu.health?subject=Parceria%20CADU%20×%20Tivita"
                    className="btn-red"
                  >
                    Explorar parceria
                    <ArrowMd />
                  </a>
                  <a href="mailto:contato@cadu.health?subject=Contato%20CADU%20×%20Tivita" className="btn-ghost">
                    Falar com a equipe
                  </a>
                </div>
                <p
                  className="reveal d3"
                  style={{
                    marginTop: "1.25rem",
                    maxWidth: "40rem",
                    fontSize: "0.8125rem",
                    lineHeight: 1.55,
                    color: "var(--text-2)",
                  }}
                >
                  Desenvolvido a partir da Clínica Casa do Urso — ambiente clínico real com dados estruturados desde
                  2023.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="ticker">
          <div className="ticker-track">
            {tickerDup.map((label, i) => (
              <div key={`${label}-${i}`} className="ticker-item">
                <span className="ticker-dot" aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <section id="contexto">
          <div className="blobs">
            <div className="blob problema-blob" />
          </div>
          <div className="wrap">
            <div className="problema-grid">
              <div className="reveal">
                <p className="eyebrow">Contexto</p>
                <h2 className="section-headline">O sistema está organizado — mas o cuidado ainda não está integrado.</h2>
                <p className="section-body">
                  A Tivita coloca a clínica no piloto automático: automação de cobrança, agenda, prontuários, agentes
                  digitais. A operação funciona. Mas o acompanhamento do paciente — especialmente em casos de
                  neurodesenvolvimento — continua fragmentado.
                </p>
                <p
                  className="section-body"
                  style={{
                    marginTop: "1.4rem",
                    color: "var(--black)",
                    fontWeight: 800,
                    fontSize: "max(1.08rem, var(--text-min))",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.45,
                  }}
                >
                  A operação está automatizada.
                  <br />
                  Mas o cuidado clínico não se conecta.
                </p>
                <ul className="urgencia-list" style={{ marginTop: "1rem" }}>
                  <li>Múltiplos profissionais atuando sem eixo comum</li>
                  <li>Informações distribuídas entre sistemas e contextos</li>
                  <li>Ausência de histórico estruturado ao longo do tempo</li>
                </ul>
              </div>
              <div className="issue-cards reveal d2">
                <div className="issue-card">
                  <div className="issue-icon orange">👥</div>
                  <div style={{ flex: 1 }}>
                    <div className="issue-title">Múltiplos profissionais, dados separados</div>
                    <div className="issue-desc">
                      Fonoaudiólogo, terapeuta, psicólogo — cada um registra no seu sistema, sem cruzamento.
                    </div>
                  </div>
                </div>
                <div className="issue-card">
                  <div className="issue-icon blue">📂</div>
                  <div style={{ flex: 1 }}>
                    <div className="issue-title">Sem continuidade entre atendimentos</div>
                    <div className="issue-desc">
                      Cada sessão começa do zero. Não existe linha do tempo clínica estruturada e acessível.
                    </div>
                  </div>
                </div>
                <div className="issue-card">
                  <div className="issue-icon green">📈</div>
                  <div style={{ flex: 1 }}>
                    <div className="issue-title">Evolução invisível</div>
                    <div className="issue-desc">
                      O progresso da criança não é capturado de forma estruturada — e não pode ser comunicado com
                      clareza.
                    </div>
                  </div>
                </div>
                <div className="issue-card">
                  <div className="issue-icon red">🏛️</div>
                  <div style={{ flex: 1 }}>
                    <div className="issue-title">Decisões sem contexto longitudinal</div>
                    <div className="issue-desc">
                      Ajustes de plano terapêutico são feitos com base em recortes isolados, não em trajetória real.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gap" className="section-setor">
          <div className="wrap">
            <div className="reveal">
              <p className="eyebrow">O gap</p>
              <h2 className="section-headline">O que falta não é gestão. É continuidade.</h2>
              <p className="section-body" style={{ marginTop: "1rem", maxWidth: "48rem" }}>
                A Tivita automatiza agenda, cobrança, documentos e agentes de atendimento. A operação está resolvida. Mas
                existe uma camada do cuidado que nenhuma automação operacional cobre — e que faz toda a diferença em
                neurodesenvolvimento.
              </p>
            </div>
            <div className="setor-grid" style={{ marginTop: "2.25rem" }}>
              {[
                "Não existe visão longitudinal do paciente entre profissionais",
                "O desenvolvimento não é acompanhado de forma estruturada ao longo do tempo",
                "Decisões são tomadas com base em recortes isolados, não em trajetória",
                "A família não tem acesso a uma visão organizada da evolução da criança",
                "Operadoras e escolas não conseguem acompanhar o cuidado em andamento",
              ].map((t, i) => (
                <div key={t} className={`setor-card reveal${i > 0 ? ` d${Math.min(i, 4)}` : ""}`}>
                  {t}
                </div>
              ))}
            </div>
            <div className="reveal" style={{ marginTop: "2.25rem" }}>
              <p className="section-body" style={{ margin: 0, maxWidth: "44rem" }}>
                Falta uma camada que organize o cuidado clínico ao longo do tempo — integrada à operação que a Tivita já
                domina.
              </p>
            </div>
          </div>
        </section>

        <section id="solucao">
          <div className="wrap">
            <div className="solucao-intro reveal">
              <p className="solucao-lead">
                O Cadu não substitui a Tivita.
                <br />
                Ele expande o que ela pode oferecer.
              </p>
              <p className="section-body solucao-vacuo">
                Uma camada de estrutura sobre o cuidado — que se integra ao que a Tivita já automatiza nas clínicas.
              </p>
              <p className="eyebrow">O que o Cadu adiciona</p>
              <h2 className="section-headline">Uma camada de estrutura sobre o cuidado.</h2>
              <p className="section-body">
                O Cadu é um sistema de registro estruturado e coordenação do cuidado que centraliza as informações da
                criança em um perfil único, alimentado por múltiplos profissionais ao longo do tempo.
              </p>
            </div>
            <div className="solucao-grid">
              {[
                {
                  n: "01",
                  icon: "🗂️",
                  title: "Perfil único por criança",
                  body: "Todos os dados centralizados em um lugar — alimentado por todos os profissionais envolvidos no cuidado.",
                  tag: "Centralização",
                },
                {
                  n: "02",
                  icon: "📅",
                  title: "Linha do tempo clínica",
                  body: "Histórico longitudinal real — não snapshots isolados, mas uma trajetória contínua e estruturada.",
                  tag: "Continuidade",
                },
                {
                  n: "03",
                  icon: "🤝",
                  title: "Integração multiprofissional",
                  body: "Fonoaudiólogo, terapeuta, psicólogo, escola e família — todos conectados ao mesmo eixo clínico.",
                  tag: "Coordenação",
                },
                {
                  n: "04",
                  icon: "📈",
                  title: "Visão evolutiva do paciente",
                  body: "Evolução estruturada e comunicável — para a família, para o time clínico e para quem financia o cuidado.",
                  tag: "Inteligência",
                },
                {
                  n: "05",
                  icon: "🔗",
                  title: "Integração com sistemas existentes",
                  body: "Não substitui a Tivita — funciona como camada complementar, sem ruptura operacional nas clínicas.",
                  tag: "Compatibilidade",
                },
                {
                  n: "06",
                  icon: "🏥",
                  title: "Dados para toda a rede de cuidado",
                  body: "Família, clínica, escola e operadora — cada agente com acesso ao que precisa, no momento certo.",
                  tag: "Ecossistema",
                },
              ].map((card, i) => (
                <div key={card.n} className={`sol-card reveal${i % 3 === 1 ? " d1" : i % 3 === 2 ? " d2" : ""}`}>
                  <span className="sol-num">{card.n}</span>
                  <span className="sol-icon">{card.icon}</span>
                  <div className="sol-title">{card.title}</div>
                  <div className="sol-body">{card.body}</div>
                  <span className="sol-tag">{card.tag}</span>
                </div>
              ))}
            </div>
            <div className="solucao-axioms reveal d1">
              <div>Não substitui a Tivita.</div>
              <div>Não muda a operação das clínicas.</div>
              <div>Adiciona uma nova camada de valor.</div>
            </div>
          </div>
        </section>

        <section id="complemento" className="section-dados">
          <div className="wrap">
            <div className="dados-head reveal">
              <p className="eyebrow">Como se complementam</p>
              <h2 className="section-headline">Tivita + Cadu.</h2>
              <p className="dados-hint">
                Dois sistemas com escopos distintos e complementares — que juntos cobrem a gestão e o cuidado de ponta a
                ponta.
              </p>
            </div>

            <div className="split-compare reveal d1">
              <div className="split-col">
                <span className="split-col-label">Tivita automatiza</span>
                <ul className="split-list">
                  <li>Automação da operação da clínica</li>
                  <li>Agenda, cobrança e emissão de documentos</li>
                  <li>Controle financeiro e prontuários</li>
                  <li>Agentes digitais para tarefas operacionais</li>
                  <li>Redução de trabalho manual e aceleração do faturamento</li>
                </ul>
              </div>
              <div className="split-col">
                <span className="split-col-label">Cadu adiciona</span>
                <ul className="split-list">
                  <li>Acompanhamento estruturado do neurodesenvolvimento</li>
                  <li>Linha do tempo clínica longitudinal por criança</li>
                  <li>Integração entre todos os profissionais do cuidado</li>
                  <li>Visão evolutiva comunicável para família e parceiros</li>
                  <li>Base de dados para decisão assistencial e financeira</li>
                </ul>
              </div>
            </div>
            <div className="split-together reveal d2">
              <span className="split-together-label">Juntos entregam</span>
              <span className="split-together-value">Gestão + inteligência do cuidado</span>
            </div>
          </div>
        </section>

        <section className="section-valor">
          <div className="wrap">
            <div className="reveal">
              <p className="eyebrow">O que isso gera para a Tivita</p>
              <h2 className="section-headline">Mais valor para sua plataforma.</h2>
              <p className="section-body" style={{ marginTop: "1rem" }}>
                A integração com o Cadu não é uma feature — é uma expansão de escopo. A Tivita já automatiza o &quot;como
                fazer&quot;. Com o Cadu, ela passa a estruturar o &quot;o que está acontecendo com o paciente&quot;.
              </p>
            </div>
            <div className="valor-grid" style={{ marginTop: "2.25rem" }}>
              {[
                "Ampliação do escopo do produto sem redevelopment interno",
                "Diferenciação clara no mercado de software clínico",
                "Entrada em uma camada mais estratégica do cuidado",
                "Maior retenção de clientes com mais profundidade de uso",
              ].map((t, i) => (
                <div key={t} className={`valor-card reveal${i > 0 ? ` d${Math.min(i, 3)}` : ""}`}>
                  {t}
                </div>
              ))}
            </div>

            <div className="statement-block reveal d1">
              <p className="statement-text">
                O Cadu não compete com a Tivita.
                <br />
                Ele <em>expande</em> o que a Tivita pode oferecer.
              </p>
            </div>
          </div>
        </section>

        <section className="section-setor">
          <div className="wrap">
            <div className="reveal">
              <p className="eyebrow">Oportunidade</p>
              <h2 className="section-headline">O neurodesenvolvimento exige um novo nível de sistema.</h2>
              <p className="section-body" style={{ marginTop: "1rem", maxWidth: "48rem" }}>
                O crescimento dos casos de TEA e outras condições exige mais do que gestão eficiente. Exige estrutura,
                coordenação e continuidade — que sistemas atuais não foram desenhados para entregar.
              </p>
            </div>
            <div className="setor-grid" style={{ marginTop: "2.25rem" }}>
              {[
                "Diagnósticos de TEA +15–20%/ano — demanda crescente e persistente",
                "Mais profissionais envolvidos no cuidado de cada criança",
                "Operadoras exigindo mais rastreabilidade e evidência clínica",
                "Famílias cada vez mais informadas e exigentes",
                "Open Health estruturando novas obrigações de dados estruturados",
              ].map((t, i) => (
                <div key={t} className={`setor-card reveal${i > 0 ? ` d${Math.min(i, 4)}` : ""}`}>
                  {t}
                </div>
              ))}
            </div>
            <div className="reveal" style={{ marginTop: "2.25rem" }}>
              <p className="section-body" style={{ margin: 0, maxWidth: "44rem" }}>
                Sistemas atuais não foram desenhados para isso. Essa é a oportunidade de evolução — e ela está disponível
                agora.
              </p>
            </div>
          </div>
        </section>

        <section className="section-arch">
          <div className="wrap">
            <div className="reveal">
              <p className="eyebrow">Arquitetura de integração</p>
              <h2 className="section-headline">Como funciona junto.</h2>
              <p className="section-body" style={{ marginTop: "1rem" }}>
                A Tivita continua sendo o sistema de automação e gestão das clínicas. O Cadu atua como camada de dados
                clínicos — complementar, integrada, sem ruptura.
              </p>
            </div>
            <div className="arch-panel reveal d1">
              <div className="arch-chain">
                <span className="arch-node tivita">Tivita</span>
                <span className="arch-arrow" aria-hidden="true" />
                <span className="arch-node">Clínica</span>
                <span className="arch-arrow" aria-hidden="true" />
                <span className="arch-node">Profissionais</span>
                <span className="arch-arrow" aria-hidden="true" />
                <span className="arch-node">Pacientes</span>
              </div>
              <div className="arch-hub">
                <div className="arch-hub-title">CADU</div>
                <p className="arch-hub-desc">
                  Camada de registro estruturado, continuidade clínica e coordenação do cuidado
                </p>
              </div>
              <div className="arch-chain">
                <span className="arch-node cadu">Perfil longitudinal</span>
                <span className="arch-arrow" aria-hidden="true" />
                <span className="arch-node cadu">Visão evolutiva</span>
                <span className="arch-arrow" aria-hidden="true" />
                <span className="arch-node cadu">Dados para decisão</span>
              </div>
            </div>
          </div>
        </section>

        <section id="parceria" className="section-dados">
          <div className="wrap">
            <div className="dados-head reveal">
              <p className="eyebrow">Modelo de parceria</p>
              <h2 className="section-headline">Como podemos trabalhar juntos.</h2>
              <p className="dados-hint">Três formatos possíveis — a depender do momento e do apetite estratégico da Tivita.</p>
            </div>
            <div className="dados-grid" style={{ marginTop: "2.5rem" }}>
              <div className="dados-card reveal">
                <h3 className="dados-card-title">Integração entre plataformas</h3>
                <p className="dados-card-body">
                  API ou conector entre Tivita e Cadu — dados de gestão e dados clínicos circulando de forma estruturada
                  entre os dois sistemas.
                </p>
              </div>
              <div className="dados-card reveal d1">
                <h3 className="dados-card-title">Cadu como camada complementar</h3>
                <p className="dados-card-body">
                  Clínicas usuárias da Tivita adotam o Cadu como ferramenta adicional para o acompanhamento longitudinal —
                  sem migração ou substituição.
                </p>
              </div>
              <div className="dados-card reveal d2">
                <h3 className="dados-card-title">Piloto conjunto com clínicas selecionadas</h3>
                <p className="dados-card-body">
                  Validação em ambiente real — com clínicas que já usam a Tivita, medindo valor concreto antes de qualquer
                  decisão de escala.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="piloto" className="section-piloto-ppp">
          <div className="blobs" aria-hidden="true">
            <div className="blob piloto-blob" />
          </div>
          <div className="wrap">
            <div className="reveal">
              <p className="eyebrow">Piloto</p>
              <h2 className="section-headline">Primeiro passo: validação conjunta.</h2>
              <p className="section-body" style={{ marginTop: "1rem", maxWidth: "44rem" }}>
                Um piloto estruturado com clínicas já usuárias da Tivita — para validar a complementaridade com dados
                reais, sem compromisso de escala imediata.
              </p>
            </div>
            <div className="piloto-ppp-grid">
              <div>
                <ol className="piloto-ppp-steps">
                  <li className="reveal">
                    <span className="piloto-ppp-n">1</span>
                    <div>
                      <div className="step-title">Seleção de clínicas parceiras</div>
                      <p className="step-desc">
                        Clínicas usuárias da Tivita com pacientes em acompanhamento de neurodesenvolvimento — TEA como foco
                        principal.
                      </p>
                    </div>
                  </li>
                  <li className="reveal d1">
                    <span className="piloto-ppp-n">2</span>
                    <div>
                      <div className="step-title">Ativação do Cadu em paralelo</div>
                      <p className="step-desc">
                        O Cadu é ativado como camada complementar, sem substituir o uso da Tivita nas clínicas
                        selecionadas.
                      </p>
                    </div>
                  </li>
                  <li className="reveal d2">
                    <span className="piloto-ppp-n">3</span>
                    <div>
                      <div className="step-title">Acompanhamento estruturado</div>
                      <p className="step-desc">
                        Período de 3 a 6 meses com registro longitudinal, integração entre profissionais e captura de
                        evolução por criança.
                      </p>
                    </div>
                  </li>
                  <li className="reveal d3">
                    <span className="piloto-ppp-n">4</span>
                    <div>
                      <div className="step-title">Avaliação de valor conjunto</div>
                      <p className="step-desc">
                        Relatório consolidado com dados reais — base para decisão sobre formato de parceria e próximos
                        passos.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="reveal d2 tivita-pilot-aside">
                <div className="pilot-indicators">
                  <p className="pilot-indicators-title">Estrutura do piloto</p>
                  <ul className="pilot-indicators-list">
                    <li>Clínicas usuárias da Tivita</li>
                    <li>Pacientes em acompanhamento ativo</li>
                    <li>Período: 3 a 6 meses</li>
                    <li>Sem migração de sistema</li>
                    <li>Sem compromisso de escala imediata</li>
                  </ul>
                </div>
                <div className="pilot-indicators">
                  <p className="pilot-indicators-title">O que o piloto entrega</p>
                  <ul className="pilot-indicators-list">
                    <li>Dados estruturados por criança</li>
                    <li>Acompanhamento longitudinal real</li>
                    <li>Insights sobre evolução clínica</li>
                    <li>Validação da integração técnica</li>
                    <li>Base concreta para decisão estratégica</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proximo" className="section-proximo">
          <div className="blobs" aria-hidden="true">
            <div className="blob cta-blob" />
          </div>
          <div className="wrap" style={{ textAlign: "center" }}>
            <p className="cta-eyebrow reveal">CADU × Tivita</p>
            <h2 className="cta-headline reveal d1">Vamos construir essa camada juntos?</h2>
            <p className="cta-sub reveal d2">
              O Cadu não compete com a Tivita. Ele expande o que a Tivita pode oferecer — e essa expansão começa com uma
              conversa.
            </p>
            <div className="cta-btns reveal d3">
              <a
                href="mailto:contato@cadu.health?subject=Iniciar%20conversa%20de%20parceria%20CADU%20×%20Tivita"
                className="btn-white"
              >
                Iniciar conversa de parceria
                <ArrowMd />
              </a>
              <a href="mailto:contato@cadu.health?subject=Piloto%20conjunto%20CADU%20×%20Tivita" className="btn-outline">
                Propor piloto conjunto
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-left">
          CADU — Estrutura e continuidade no cuidado em neurodesenvolvimento · Proposta para a Tivita
        </div>
        <div className="footer-right">Parceria · Integração · TEA · Neurodesenvolvimento</div>
      </footer>
    </>
  );
}
