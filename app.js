// Registro del Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js');
  });
}

const vocabMap = {
  'A Walk in the Neighborhood': {
    'Places I Can Go': ['market','school','river','farm','library','clinic','park','bridge']
  },
  "It's a School Day!": {
    'School Days': ['classroom','teacher','student','desk','book','schedule']
  },
  'A Guide to Panama': {
    'Our Historical Sites': ['ruins','museum','heritage','preserve','site','history','tour'],
    'Panama Canal Trip': ['canal','lock','vessel','route','engineer','cargo']
  }
};

const grammarDefault = ['Present simple (SVO)','There is/There are','Prepositions (near, next to, across)','Adjectives (big/small)','Linker: because'];

function grammarByScenario(scenario){
  if(scenario==='A Guide to Panama'){ return ['Past simple (facts)','Present simple (descriptions)','Linkers (first, then, finally; because; so)','Comparatives (older than)']; }
  return grammarDefault;
}

function generateMarkdown(){
  const school = document.getElementById('school').value||'CEBG Barrigón';
  const teacher = document.getElementById('teacher').value||'José White';
  const grade = document.getElementById('grade').value||'3';
  const year = document.getElementById('year').value||'2026';
  const term = document.getElementById('term').value||'Trimester 1';
  const level = document.getElementById('level').value;
  const scenario = document.getElementById('scenario').value;
  const theme = document.getElementById('theme').value;
  const context = document.getElementById('context').value||'Grupo de primaria en contexto panameño; recursos básicos; enfoque comunicativo y proyectos.';

  const vocab = (vocabMap[scenario] && vocabMap[scenario][theme]) ? vocabMap[scenario][theme] : ['community','place','favorite','near','because','visit'];
  const grammar = grammarByScenario(scenario);

  const productionNote = level==='Básico' ? 'Producciones guiadas con plantillas y apoyos visuales; frases modelo.'
    : level==='Enriquecido' ? 'Mayor complejidad; reflexión crítica y extensión del producto final.'
    : 'Autonomía progresiva; producciones breves funcionales.';

  const md = `# MEDUCA English Planning (${grade})\n\n`+
  `## 1. General Information\n`+
  `- **School:** ${school}\n- **Teacher:** ${teacher}\n- **Subject:** English\n- **Grade:** ${grade}\n- **School year:** ${year}\n- **Term:** ${term}\n\n`+
  `## 2. Curricular Focus\n`+
  `- **Scenario:** ${scenario}\n- **Theme:** ${theme}\n\n`+
  `## 3. Context\n${context}\n\n`+
  `## 4. General Objective (SMART)\n`+
  `En 5 sesiones, los estudiantes identificarán y comunicarán contenidos del Scenario/Theme mediante oraciones simples y producciones breves, alcanzando ≥80% en instrumentos alineados (rúbricas/listas de cotejo).\n\n`+
  `## 5. Learning Outcomes\n`+
  `- **Listening:** Reconoce vocabulario e ideas clave del Scenario/Theme (≥80%).\n`+
  `- **Speaking:** Expresa preferencias/ideas en oraciones simples con conectores básicos.\n`+
  `- **Reading:** Localiza información específica en textos breves (50–150 palabras).\n`+
  `- **Writing:** Redacta entre 5–6 oraciones (Gr.1–4) o 120–150 palabras (Gr.5–6) de forma organizada.\n`+
  `- **Mediation:** Parafrasea información ES→EN en 2–5 oraciones manteniendo la idea central.\n\n`+
  `## 6. Linguistic Content\n`+
  `- **Key vocabulary:** ${vocab.join(', ')}\n`+
  `- **Grammar structures:** ${grammar.join(', ')}\n\n`+
  `## 7. Lessons (1–5)\n`+
  `### Lesson 1 – Listening\n- **LO específico:** Identificar vocabulario e ideas clave en audio/imagen (≥80%).\n- **Warm-up:** Activación de conocimientos con soportes visuales.\n- **Presentation:** Modelado del lenguaje y/o insumo (audio/imagen) del Scenario/Theme.\n- **Practice:** Práctica guiada (señalar/parear).\n- **Production:** Resumen oral en parejas (20–40 s). ${productionNote}\n- **Assessment:** Lista de cotejo.\n- **Closure:** Metacognición ("one fact").\n\n`+
  `### Lesson 2 – Speaking\n- **LO específico:** Expresar preferencias/ideas usando conectores básicos.\n- **Warm-up:** Activación con imágenes/gestos.\n- **Presentation:** Marcos de frase (My favorite ... because ...).\n- **Practice:** Role-play de 30–60 s.\n- **Production:** Mini presentación. ${productionNote}\n- **Assessment:** Rúbrica simple.\n- **Closure:** Palabra nueva.\n\n`+
  `### Lesson 3 – Reading\n- **LO específico:** Extraer datos específicos de un texto breve.\n- **Warm-up:** Predicción por títulos.\n- **Presentation:** Lectura guiada.\n- **Practice:** Organizador Who/Where/What.\n- **Production:** Preguntas y respuestas. ${productionNote}\n- **Assessment:** Ítems de comprensión.\n- **Closure:** Hecho sorprendente.\n\n`+
  `### Lesson 4 – Writing\n- **LO específico:** Producir texto acorde al grado con estructura básica.\n- **Warm-up:** Banco de palabras/conectores.\n- **Presentation:** Modelo de texto.\n- **Practice:** Borrador guiado.\n- **Production:** Póster o folleto. ${productionNote}\n- **Assessment:** Lista de cotejo.\n- **Closure:** Galería rápida.\n\n`+
  `### Lesson 5 – Mediation\n- **LO específico:** Parafrasear ES→EN de manera clara.\n- **Warm-up:** Estrategias de mediación.\n- **Presentation:** Ejemplos de paráfrasis.\n- **Practice:** Duplas (reformulación).\n- **Production:** Guion "Tourist welcome" (45–60 s). ${productionNote}\n- **Assessment:** Rúbrica de mediación.\n- **Closure:** Dos estrellas y un deseo.\n\n`+
  `## 8. Final Project (21st Century Project)\n- **Title:** Proyecto integrador del Scenario/Theme\n- **Description:** Producto bilingüe (póster/folleto/audio con QR) que integre habilidades y competencias del siglo XXI.\n\n`+
  `## 9. Assessment Tools\n- Listas de cotejo por habilidad\n- Rúbrica del proyecto (contenido, lenguaje, organización, colaboración)\n- Observación guiada (participación, uso del inglés)\n`;

  document.getElementById('preview').textContent = md;
  return md;
}

function download(md){
  const blob = new Blob([md], {type:'text/markdown'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'plan_meduca_english.md';
  a.click();
  URL.revokeObjectURL(a.href);
}

document.getElementById('generate').addEventListener('click', ()=>{
  generateMarkdown();
});

document.getElementById('copyBtn').addEventListener('click', async ()=>{
  const md = generateMarkdown();
  try{
    await navigator.clipboard.writeText(md);
    alert('Markdown copiado al portapapeles');
  }catch(e){ alert('No se pudo copiar.'); }
});

document.getElementById('downloadBtn').addEventListener('click', ()=>{
  const md = generateMarkdown();
  download(md);
});
