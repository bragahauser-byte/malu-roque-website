// ─────────────────────────────────────────────────────────────
// PERFIL PROFISSIONAL
// Fonte: documento "Site Malu" (formação, experiências, pesquisas).
// Edite aqui para atualizar Sobre, Consultório e Pesquisa.
// ─────────────────────────────────────────────────────────────

export const formacao = [
  {
    titulo: "Graduação em Psicologia",
    instituicao: "Pontifícia Universidade Católica de São Paulo (PUC-SP)",
    sigla: "PUC-SP",
  },
  {
    titulo: "Especialização em Psicologia Hospitalar",
    instituicao: "Hospital das Clínicas da Faculdade de Medicina da USP (HCFMUSP)",
    sigla: "HCFMUSP",
    periodo: "2025–2026",
  },
  {
    titulo: "Intercâmbio acadêmico em Psicologia",
    instituicao: "Università Cattolica del Sacro Cuore, Milão, Itália",
    sigla: "Milão",
    periodo: "fev.–jul. 2023",
  },
];

export const complementar = [
  {
    titulo: "Programa de Voluntariado Teórico-Prático no Ambulatório de Psicologia Analítica",
    instituicao: "Centro de Atenção Integral à Saúde da Mulher (CAISM/UNIFESP)",
    periodo: "2026",
  },
  {
    titulo: "Moitará 2026",
    instituicao: "Sociedade Brasileira de Psicologia Analítica (SBPA)",
    periodo: "2026",
    nota: "Encontro multidisciplinar dedicado ao diálogo e ao aprofundamento de temas da Psicologia Analítica.",
  },
];

export const cursos = [
  { titulo: "English for Business (CEFR B2 Upper Intermediate)", instituicao: "LSI London / British Council", periodo: "jan. 2020" },
  { titulo: "Introdução à Gestão de Recursos Humanos", instituicao: "Fundação Getulio Vargas (FGV)", periodo: "jul. 2020" },
  { titulo: "IELTS General Training (CEFR B2)", instituicao: "British Council", periodo: "set. 2022" },
];

export const eventos = [
  {
    titulo: "Apresentação de artigo monográfico no XXI Encontro Científico do Curso de Pós-Graduação (Lato Sensu)",
    instituicao: "HCFMUSP",
    periodo: "fev. 2026",
  },
  { titulo: "Palestrante na Jornada de Carreiras", instituicao: "Colégio João XXIII, São Paulo", periodo: "set. 2025" },
];

export type Experiencia = {
  cargo: string;
  lugar: string;
  periodo: string;
  modalidade?: string;
  descricao: string;
  /** destaque aparece na linha do tempo resumida da página Sobre */
  destaque?: boolean;
};

export const experiencias: Experiencia[] = [
  {
    cargo: "Psicóloga clínica",
    lugar: "CAISM/UNIFESP — Escola Paulista de Medicina",
    periodo: "mar. 2026 — atual",
    modalidade: "Híbrido",
    descricao:
      "Psicoterapia de adultos no Programa de Voluntariado Teórico-Prático do Ambulatório de Psicologia Analítica. Supervisão clínica e atividades com equipe multidisciplinar.",
    destaque: true,
  },
  {
    cargo: "Psicóloga clínica",
    lugar: "Consultório próprio",
    periodo: "mar. 2025 — atual",
    modalidade: "Híbrido",
    descricao: "Psicoterapia de crianças, adolescentes, adultos e idosos, nas modalidades presencial e remota.",
    destaque: true,
  },
  {
    cargo: "Psicóloga especializanda",
    lugar: "Hospital das Clínicas da FMUSP",
    periodo: "mar. 2025 — fev. 2026",
    modalidade: "Presencial",
    descricao:
      "Psicoterapia breve e atendimento psicológico nas clínicas de Otorrinolaringologia, Oftalmologia e Neurologia, com crianças, adolescentes, adultos e idosos. Avaliação psicológica de implante coclear no Instituto Central do HC.",
    destaque: true,
  },
  {
    cargo: "Atendimento psicológico (estágio)",
    lugar: "EPM/UNIFESP — PROAD, Programa de Álcool e Drogas",
    periodo: "mar. — dez. 2024",
    modalidade: "Híbrido",
    descricao: "Psicoterapia de adultos e auxílio na coordenação de grupos de acolhimento (CAISM, Vila Mariana).",
  },
  {
    cargo: "Atendimento psicológico (estágio)",
    lugar: "Clínica Psicológica Ana Maria Poppovic",
    periodo: "fev. — dez. 2024",
    modalidade: "Presencial",
    descricao: "Psicoterapia clínica de adultos.",
  },
  {
    cargo: "Consultoria em RH (estágio)",
    lugar: "Pão de Açúcar",
    periodo: "ago. — dez. 2023",
    modalidade: "Híbrido",
    descricao: "Elaboração de projeto para o Programa Jovem Aprendiz.",
  },
  {
    cargo: "Psicóloga escolar (estágio)",
    lugar: "E. E. Carlos Maximiliano Pereira dos Santos",
    periodo: "ago. — dez. 2023",
    modalidade: "Presencial",
    descricao: "Projeto “Cartas terapêuticas”, para aprimorar a comunicação emocional de alunos do Ensino Fundamental II.",
  },
  {
    cargo: "Profissional de saúde mental (estágio)",
    lugar: "ADJ Diabetes Brasil",
    periodo: "ago. — dez. 2023",
    modalidade: "Remota",
    descricao: "Coordenação de grupos terapêuticos para crianças e adolescentes com diabetes e seus pais.",
  },
  {
    cargo: "Copywriter e produtora de conteúdo",
    lugar: "Autônoma",
    periodo: "jan. — dez. 2022",
    modalidade: "Remota",
    descricao: "Materiais para cursos digitais e conteúdos para Instagram (posts, stories e reels) destinados a terapeutas.",
  },
  {
    cargo: "Atendimento psicológico (estágio)",
    lugar: "Clínica Psicológica Ana Maria Poppovic",
    periodo: "fev. — jun. 2022",
    modalidade: "Presencial",
    descricao: "Psicodiagnóstico de adolescentes.",
  },
  {
    cargo: "Estagiária de Psicologia",
    lugar: "Instituto Jô Clemente (IJC)",
    periodo: "fev. — jun. 2021",
    modalidade: "Remota",
    descricao:
      "Acompanhamento online das atividades de pessoas com deficiência intelectual, de 16 a 74 anos, e apoio aos profissionais da instituição.",
  },
  {
    cargo: "Consultora, gerente e diretora de RH",
    lugar: "PsicoPUC Jr. — Consultoria em Recursos Humanos",
    periodo: "jul. 2019 — dez. 2021",
    descricao: "Consultora (2019), gerente (2020) e diretora de RH (ago. 2020 — dez. 2021).",
  },
  {
    cargo: "Voluntária — Comitê Juvenil",
    lugar: "Instituto da Criança do Hospital das Clínicas (HCFMUSP)",
    periodo: "abr. — dez. 2019",
    descricao: "Atividades recreativas e de acolhimento para crianças e adolescentes hospitalizados.",
  },
];

/** Linha do tempo poética da página Sobre: ano → acontecimento (só fatos do documento). */
export const linhaDoTempo = [
  { ano: "2019", texto: "PsicoPUC Jr., consultoria em recursos humanos, e o voluntariado com crianças hospitalizadas no Instituto da Criança do HC." },
  { ano: "2021", texto: "Instituto Jô Clemente: acompanhar de perto pessoas com deficiência intelectual, de 16 a 74 anos." },
  { ano: "2023", texto: "Um semestre em Milão, na Università Cattolica del Sacro Cuore. Na volta, as “Cartas terapêuticas” numa escola estadual." },
  { ano: "2024", texto: "Clínica Ana Maria Poppovic e PROAD/UNIFESP. O TCC sobre deusas hindus e arquétipos femininos." },
  { ano: "2025", texto: "Especialização em Psicologia Hospitalar no HCFMUSP e a abertura do consultório." },
  { ano: "2026", texto: "Ambulatório de Psicologia Analítica do CAISM/UNIFESP, o Moitará da SBPA e o artigo “Do Vulcão ao Guerreiro”." },
];

export const publico = ["Crianças", "Adolescentes", "Adultos", "Idosos"];

export const temas = [
  {
    titulo: "Ansiedade e sofrimento emocional",
    texto:
      "Quando o corpo acelera, o sono foge ou tudo parece pesado demais. A terapia oferece um lugar para nomear o que aperta e compreender de onde vem.",
    forma: "circulo",
    cor: "var(--lavanda)",
    imagem: "munch-window",
  },
  {
    titulo: "Identidade e autoconhecimento",
    texto: "Quem sou eu para além dos papéis que ocupo? Uma investigação sem pressa sobre desejos, histórias e escolhas.",
    forma: "losango",
    cor: "var(--ambar)",
    imagem: "redon-sita",
  },
  {
    titulo: "Relacionamentos e vínculos afetivos",
    texto: "Família, amizades, amores. Os encontros que nos formam e os padrões que se repetem sem que a gente perceba.",
    forma: "quadrado",
    cor: "var(--ardosia)",
    imagem: "bocklin-sea",
  },
  {
    titulo: "Amadurecimento e vida adulta",
    texto: "O processo de tornar-se adulto: sair de casa, escolher caminhos, sustentar decisões e lidar com o que se perde e se ganha.",
    forma: "estrela",
    cor: "var(--tule)",
    imagem: "degas-star",
  },
  {
    titulo: "Conflitos internos e autonomia",
    texto: "Vozes que puxam para lados diferentes. A terapia ajuda a escutar cada uma delas e a encontrar uma posição própria.",
    forma: "meia-lua",
    cor: "var(--malva)",
    imagem: "moreau-inspiration",
  },
  {
    titulo: "Sonhos, símbolos e o inconsciente",
    texto: "Sonhos, imagens recorrentes e coincidências que chamam atenção são levados a sério, como mensagens a serem compreendidas.",
    forma: "gota",
    cor: "var(--portal)",
    imagem: "redon-flower-clouds",
  },
] as const;

export const recursos = ["Mitologia e contos", "Literatura", "Música e cinema", "Arte e recursos expressivos", "Análise simbólica"];

export const pesquisas = [
  {
    tipo: "Trabalho de Conclusão de Curso",
    titulo: "Deusas Hindus e os Arquétipos Femininos no Processo de Individuação",
    instituicao: "Pontifícia Universidade Católica de São Paulo (PUC-SP)",
    ano: "2024",
    detalhe: "Orientadora: Profa. Dra. Irene Pereira Gaeta",
    descricao:
      "Pesquisa que aborda as relações entre deusas da mitologia hindu, os arquétipos femininos e o processo de individuação, a partir da perspectiva da Psicologia Analítica.",
    imagem: "redon-sita",
    imagem2: "lakshmi-sarasvati",
    palavras: ["mitologia hindu", "arquétipos", "feminino", "individuação"],
  },
  {
    tipo: "Artigo monográfico — Psicologia Hospitalar",
    titulo: "Do Vulcão ao Guerreiro: manifestações simbólicas em pós-operatório de transplante renal",
    instituicao: "Hospital das Clínicas da Faculdade de Medicina da USP (HCFMUSP)",
    ano: "2026",
    detalhe:
      "Apresentado no XXI Encontro Científico do Curso de Pós-Graduação Lato Sensu da Divisão de Psicologia do Instituto Central do HCFMUSP, em 26 de fevereiro de 2026.",
    descricao:
      "Estudo de caso que explora manifestações simbólicas no contexto pós-operatório de transplante renal, articulando a experiência do adoecimento e do tratamento com conceitos da Psicologia Analítica e a compreensão dos processos simbólicos.",
    imagem: "volaire-vesuvius",
    imagem2: "redon-siren",
    palavras: ["psicologia hospitalar", "transplante renal", "símbolo", "estudo de caso"],
  },
] as const;
