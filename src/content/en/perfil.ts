// ─────────────────────────────────────────────────────────────
// PROFESSIONAL PROFILE — English version of src/content/perfil.ts.
// Same facts, same order. Names of institutions stay in Portuguese, with
// a short explanation where it helps an international reader.
// ─────────────────────────────────────────────────────────────

import type { Experiencia } from "../perfil";

export const formacao = [
  {
    titulo: "Bachelor’s degree in Psychology",
    instituicao: "Pontifical Catholic University of São Paulo (PUC-SP)",
    sigla: "PUC-SP",
  },
  {
    titulo: "Specialization in Hospital Psychology",
    instituicao: "Hospital das Clínicas, University of São Paulo Medical School (HCFMUSP)",
    sigla: "HCFMUSP",
    periodo: "2025–2026",
  },
  {
    titulo: "Academic exchange in Psychology",
    instituicao: "Università Cattolica del Sacro Cuore, Milan, Italy",
    sigla: "Milan",
    periodo: "Feb.–Jul. 2023",
  },
];

export const complementar = [
  {
    titulo: "Theoretical-Practical Volunteer Programme at the Analytical Psychology Outpatient Clinic",
    instituicao: "Centre for Integral Women’s Health Care (CAISM/UNIFESP)",
    periodo: "2026",
  },
  {
    titulo: "Moitará 2026",
    instituicao: "Brazilian Society of Analytical Psychology (SBPA)",
    periodo: "2026",
    nota: "A multidisciplinary gathering devoted to dialogue on, and deeper study of, themes in Analytical Psychology.",
  },
];

export const cursos = [
  { titulo: "English for Business (CEFR B2 Upper Intermediate)", instituicao: "LSI London / British Council", periodo: "Jan. 2020" },
  { titulo: "Introduction to Human Resources Management", instituicao: "Fundação Getulio Vargas (FGV)", periodo: "Jul. 2020" },
  { titulo: "IELTS General Training (CEFR B2)", instituicao: "British Council", periodo: "Sep. 2022" },
];

export const eventos = [
  {
    titulo: "Presentation of a monograph article at the 21st Scientific Meeting of the Postgraduate (Lato Sensu) Programme",
    instituicao: "HCFMUSP",
    periodo: "Feb. 2026",
  },
  { titulo: "Speaker at the Careers Day", instituicao: "Colégio João XXIII, São Paulo", periodo: "Sep. 2025" },
];

export const experiencias: Experiencia[] = [
  {
    cargo: "Clinical psychologist",
    lugar: "CAISM/UNIFESP — Escola Paulista de Medicina",
    periodo: "Mar. 2026 — present",
    modalidade: "Hybrid",
    descricao:
      "Psychotherapy with adults in the Theoretical-Practical Volunteer Programme of the Analytical Psychology Outpatient Clinic. Clinical supervision and work with a multidisciplinary team.",
    destaque: true,
  },
  {
    cargo: "Clinical psychologist",
    lugar: "Private practice",
    periodo: "Mar. 2025 — present",
    modalidade: "Online",
    descricao:
      "Psychotherapy with children, adolescents, adults and older adults. Sessions are currently online only, in Portuguese and in English, for people in Brazil and abroad.",
    destaque: true,
  },
  {
    cargo: "Psychologist in specialization",
    lugar: "Hospital das Clínicas, University of São Paulo Medical School",
    periodo: "Mar. 2025 — Feb. 2026",
    modalidade: "In person",
    descricao:
      "Brief psychotherapy and psychological care in the Otorhinolaryngology, Ophthalmology and Neurology clinics, with children, adolescents, adults and older adults. Psychological assessment for cochlear implants at the hospital’s Central Institute.",
    destaque: true,
  },
  {
    cargo: "Psychological care (internship)",
    lugar: "EPM/UNIFESP — PROAD, Alcohol and Drugs Programme",
    periodo: "Mar. — Dec. 2024",
    modalidade: "Hybrid",
    descricao: "Psychotherapy with adults and support in coordinating welcome groups (CAISM, Vila Mariana).",
  },
  {
    cargo: "Psychological care (internship)",
    lugar: "Ana Maria Poppovic Psychology Clinic",
    periodo: "Feb. — Dec. 2024",
    modalidade: "In person",
    descricao: "Clinical psychotherapy with adults.",
  },
  {
    cargo: "HR consulting (internship)",
    lugar: "Pão de Açúcar",
    periodo: "Aug. — Dec. 2023",
    modalidade: "Hybrid",
    descricao: "Project design for the Young Apprentice Programme.",
  },
  {
    cargo: "School psychologist (internship)",
    lugar: "E. E. Carlos Maximiliano Pereira dos Santos (state school)",
    periodo: "Aug. — Dec. 2023",
    modalidade: "In person",
    descricao: "“Therapeutic letters” project, to improve emotional communication among lower-secondary students.",
  },
  {
    cargo: "Mental health professional (internship)",
    lugar: "ADJ Diabetes Brasil",
    periodo: "Aug. — Dec. 2023",
    modalidade: "Remote",
    descricao: "Coordination of therapeutic groups for children and adolescents with diabetes and for their parents.",
  },
  {
    cargo: "Copywriter and content producer",
    lugar: "Freelance",
    periodo: "Jan. — Dec. 2022",
    modalidade: "Remote",
    descricao: "Materials for online courses and Instagram content (posts, stories and reels) for therapists.",
  },
  {
    cargo: "Psychological care (internship)",
    lugar: "Ana Maria Poppovic Psychology Clinic",
    periodo: "Feb. — Jun. 2022",
    modalidade: "In person",
    descricao: "Psychodiagnosis of adolescents.",
  },
  {
    cargo: "Psychology intern",
    lugar: "Instituto Jô Clemente (IJC)",
    periodo: "Feb. — Jun. 2021",
    modalidade: "Remote",
    descricao: "Online follow-up of the activities of people with intellectual disabilities, aged 16 to 74, and support for the institution’s staff.",
  },
  {
    cargo: "HR consultant, manager and director",
    lugar: "PsicoPUC Jr. — Human Resources Consulting",
    periodo: "Jul. 2019 — Dec. 2021",
    descricao: "Consultant (2019), manager (2020) and HR director (Aug. 2020 — Dec. 2021).",
  },
  {
    cargo: "Volunteer — Youth Committee",
    lugar: "Children’s Institute, Hospital das Clínicas (HCFMUSP)",
    periodo: "Apr. — Dec. 2019",
    descricao: "Recreational and welcoming activities for hospitalised children and adolescents.",
  },
];

export const linhaDoTempo = [
  { ano: "2019", texto: "PsicoPUC Jr., a human resources consultancy, and volunteering with hospitalised children at the HC Children’s Institute." },
  { ano: "2021", texto: "Instituto Jô Clemente: closely accompanying people with intellectual disabilities, aged 16 to 74." },
  { ano: "2023", texto: "A semester in Milan, at the Università Cattolica del Sacro Cuore. Back home, the “Therapeutic letters” at a state school." },
  { ano: "2024", texto: "Ana Maria Poppovic Clinic and PROAD/UNIFESP. The undergraduate thesis on Hindu goddesses and feminine archetypes." },
  { ano: "2025", texto: "Specialization in Hospital Psychology at HCFMUSP and the start of her own clinical practice." },
  { ano: "2026", texto: "The Analytical Psychology Outpatient Clinic at CAISM/UNIFESP, SBPA’s Moitará and the article “From the Volcano to the Warrior”." },
];

export const publico = ["Children", "Adolescents", "Adults", "Older adults"];

export const temas = [
  {
    titulo: "Anxiety and emotional distress",
    texto: "When the body speeds up, sleep slips away or everything feels too heavy. Therapy offers a place to name what tightens and to understand where it comes from.",
    forma: "circulo",
    cor: "var(--lilas)",
    imagem: "vermeer-jarro",
  },
  {
    titulo: "Identity and self-knowledge",
    texto: "Who am I beyond the roles I play? An unhurried inquiry into desires, stories and choices.",
    forma: "losango",
    cor: "var(--amarelo)",
    imagem: "redon-sita",
  },
  {
    titulo: "Relationships and emotional bonds",
    texto: "Family, friendships, love. The encounters that shape us and the patterns that repeat without our noticing.",
    forma: "quadrado",
    cor: "var(--creme-2)",
    imagem: "bocklin-sea",
  },
  {
    titulo: "Growing up and adult life",
    texto: "The process of becoming an adult: leaving home, choosing paths, standing by decisions and dealing with what is lost and gained.",
    forma: "estrela",
    cor: "var(--rosa)",
    imagem: "degas-star",
  },
  {
    titulo: "Inner conflicts and autonomy",
    texto: "Voices pulling in different directions. Therapy helps to listen to each of them and to find a position of one’s own.",
    forma: "meia-lua",
    cor: "var(--rosa)",
    imagem: "moreau-inspiration",
  },
  {
    titulo: "Dreams, symbols and the unconscious",
    texto: "Dreams, recurring images and striking coincidences are taken seriously, as messages to be understood.",
    forma: "gota",
    cor: "var(--lilas)",
    imagem: "redon-flower-clouds",
  },
] as const;

export const recursos = ["Mythology and fairy tales", "Literature", "Music and film", "Art and expressive resources", "Symbolic analysis"];

export const pesquisas = [
  {
    tipo: "Undergraduate thesis",
    titulo: "Hindu Goddesses and the Feminine Archetypes in the Individuation Process",
    autoria: "Maria Luiza Dias Roque",
    instituicao: "Pontifical Catholic University of São Paulo (PUC-SP), Faculty of Human and Health Sciences, Psychology programme",
    ano: "2024",
    detalheRotulo: "Supervisor",
    detalhe: "Prof. Dr. Irene Pereira Gaeta",
    descricao:
      "A theoretical, exploratory and qualitative study of the archetypal manifestations of the feminine in Hindu goddesses. Drawing on the tales “Durga” and “Kali”, it examines how these images help us understand the individuation process, and concludes that the two goddesses symbolically describe aspects of this human journey and the need to integrate the feminine in the psyche.",
    palavras: ["Hinduism", "Goddesses", "Individuation", "Archetypes", "Feminine"],
    link: { rotulo: "Read the full thesis (PDF in Portuguese, PUC-SP repository)", url: "https://repositorio.pucsp.br/jspui/bitstream/handle/44593/1/TCC.pdf_Maria%20Luiza%20Dias%20Roq.pdf" },
    foto: "tcc-banner",
    imagem: "lakshmi-sarasvati",
  },
  {
    tipo: "Article — case study, Specialization in Hospital Psychology",
    titulo: "From the Volcano to the Warrior: symbolic manifestations after a kidney transplant",
    autoria: "Giovana Gatto Nogueira, Maria Luiza Dias Roque and Marina Guimarães da Rocha",
    instituicao: "Hospital das Clínicas, University of São Paulo Medical School (HCFMUSP)",
    ano: "2026",
    detalheRotulo: "Presentation",
    detalhe:
      "21st Scientific Meeting of the Lato Sensu Postgraduate Programme of the Psychology Division, HCFMUSP Central Institute, on 26 February 2026.",
    descricao:
      "A qualitative case study, in the light of Analytical Psychology, based on seven bedside psychological sessions with a patient in prolonged hospitalisation after a kidney transplant. Using the method of symbolic amplification, the work follows three central symbols: the volcano (pent-up feelings seeking expression), the warrior (coping and regaining autonomy) and the lift (the ups and downs of recovery).",
    palavras: ["Jungian theory", "Symbolism", "Hospital psychology", "Kidney transplant", "Psychosomatic medicine"],
    link: null,
    foto: "hc-escadaria",
    imagem: "volaire-vesuvius",
  },
] as const;

export const outroLado = [
  {
    pergunta: "If it were a place",
    resposta:
      "A cosy room with yellowish light, the smell of lavender and flowers scattered around. Piles of books, objects brought back from trips, photographs of loved ones and a playlist mixing the 80s with today’s artists.",
    imagem: "redon-still-life",
  },
  {
    pergunta: "If it were a shop",
    resposta:
      "It would sell objects with a story: books on literature, psychology, mythology and philosophy, independent magazines, prints, notebooks and little things to pass the time, like clay, painting, lego and crochet.",
    imagem: "redon-pandora",
  },
  {
    pergunta: "If it were a universe",
    resposta:
      "A world where princes, mermaids, fairies, kings and queens live alongside ordinary people, sons, daughters and families. The fantastic and the everyday side by side, with the atmosphere of an independent film.",
    imagem: "shahnama-festa-sada",
  },
  {
    pergunta: "If it were an experience",
    resposta: "Walking into a record shop while a song you love is playing, really loud. Pleasure, nostalgia and the wish to stay.",
    imagem: "redon-olhos-fechados-tela",
  },
] as const;

export const atlas = [
  {
    ideia: "The dream",
    obra: "redon-vaso-rosa",
    texto: "For Jung, the dream is a spontaneous expression of the unconscious: less a disguise to be decoded, more an image to be listened to.",
  },
  {
    ideia: "The shadow",
    obra: "seurat-parade",
    texto: "The shadow gathers what we do not recognise in ourselves. What is denied does not disappear: it tends to return, sometimes where we least expect it, like the figures in the half-light of a show.",
  },
  {
    ideia: "The crossing",
    obra: "hokusai-ponte-kameido",
    texto: "Every transformation asks for a passage, like a bridge over water: something is left behind so that something else can begin.",
  },
  {
    ideia: "The union of opposites",
    obra: "rosarium-rei-rainha",
    texto: "Jung studied these 1550 woodcuts in “The Psychology of the Transference” (1946). The king and the queen, the sun and the moon: opposites that meet without cancelling each other out.",
  },
  {
    ideia: "Transformation",
    obra: "splendor-solis-sol",
    texto: "Jung read alchemy as a symbolic language of psychic transformation. After the night, a sun rising over the city.",
  },
  {
    ideia: "The centre",
    obra: "mandala-jnanadakini",
    texto: "Jung drew mandalas for years and recognised them in very distant cultures: circles that organise chaos around a centre, an image of what he called the Self.",
  },
] as const;
