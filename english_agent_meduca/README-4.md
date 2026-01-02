# english_agent_meduca

Agente educativo de **planificación curricular de Inglés (Primaria)** alineado al **currículo oficial MEDUCA Panamá**.

## Descripción
Este agente genera planeamientos didácticos completos, coherentes y evaluables para docentes de primaria, siguiendo estrictamente la estructura oficial del currículo MEDUCA:
- 8 Scenarios por grado
- 2 Themes por Scenario
- 5 Lessons por combinación Scenario/Theme
- 5 habilidades: Listening, Speaking, Reading, Writing, Mediation

## Estructura del repositorio
```
english_agent_meduca/
│
├── README.md                # Información del proyecto
├── LICENSE                  # Licencia MIT
├── agents/
│   └── english_agent/
│       ├── master_prompt.md # Prompt principal del agente
│       ├── examples/        # Ejemplos completos
│       │   ├── grade3_example.md
│       │   └── grade5_example.md
│       └── templates/       # Plantilla base
│           └── planning_template.md
```

## Cómo usar
1. Coloca los archivos en la estructura indicada.
2. Sube el repositorio a GitHub.
3. (Opcional) Integra el agente con un modelo LLM o usa el código Python para generar planeamientos.

## Referencias oficiales MEDUCA
- [Estándares de Competencia de Inglés y Programas 2025](https://guias.meduca.gob.pa/estandares-programa-ingles)
- [Scope and Sequence – English Curriculum](https://guias.meduca.gob.pa/standards-English-Curriculum)
- [Manual de Orientaciones Curriculares 2024](https://www.meduca.gob.pa/manuales-de-orientaciones-curriculares-como-apoyo-academico-y-pedagogico/)

## Licencia
Este proyecto está bajo la licencia MIT.
