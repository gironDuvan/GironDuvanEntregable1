document.addEventListener('DOMContentLoaded', () => {

    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 100;
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    const statNumbers = document.querySelectorAll('.stat-number');
    let animatedStats = false;

    const animateStats = () => {
        const statsSection = document.querySelector('.stats-section');
        if (!statsSection) return;

        const sectionPos = statsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight;

        if (sectionPos < screenPos && !animatedStats) {
            animatedStats = true;
            statNumbers.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const duration = 2000;
                const stepTime = 20;
                const steps = duration / stepTime;
                const increment = target / steps;
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.innerText = target.toLocaleString();
                        clearInterval(timer);
                    } else {
                        counter.innerText = Math.ceil(current).toLocaleString();
                    }
                }, stepTime);
            });
        }
    };

    window.addEventListener('scroll', animateStats);

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.background = 'rgba(2, 32, 19, 0.95)';
        } else {
            navbar.style.padding = '0.9rem 0';
            navbar.style.background = 'rgba(2, 32, 19, 0.85)';
        }
    });
    const menuNavbar = document.getElementById('navbarContent');
    const enlacesMenu = menuNavbar.querySelectorAll('.nav-link, .btn-custom-action');

    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', () => {
            if (menuNavbar.classList.contains('show')) {
                bootstrap.Collapse.getOrCreateInstance(menuNavbar).hide();
            }
        });
    });
});

const materiasPorSemestre = {
    1: [
        { nombre: "Matemáticas I", imagen: "matematicas1.jpg" },
        { nombre: "Física I", imagen: "fisica1.jpg" },
        { nombre: "Biología General", imagen: "biologia.jpg" },
        { nombre: "Introducción a la Ingeniería", imagen: "ingenieria.jpg" },
        { nombre: "Lógica y Algoritmos I", imagen: "algoritmos1.jpg" },
        { nombre: "Comunicación", imagen: "comunicacion.jpg" },
        { nombre: "Deportes y Cultura", imagen: "deportes.jpg" }
    ],

    2: [
        { nombre: "Matemáticas II", imagen: "matematicas2.jpg" },
        { nombre: "Física II", imagen: "fisica2.jpg" },
        { nombre: "Química I", imagen: "quimica.jpg" },
        { nombre: "Teoría General de Sistemas", imagen: "sistemas.jpg" },
        { nombre: "Lógica y Algoritmos II", imagen: "algoritmos2.jpg" },
        { nombre: "Constitución y Democracia", imagen: "constitucion.jpg" }
    ],

    3: [
        { nombre: "Álgebra Lineal", imagen: "algebra.jpg" },
        { nombre: "Matemáticas Discretas", imagen: "discretas.jpg" },
        { nombre: "Análisis de Sistemas", imagen: "analisis.jpg" },
        { nombre: "Estructuras de Datos I", imagen: "estructuras1.jpg" },
        { nombre: "Idioma Extranjero I", imagen: "idiomas.jpg" }
    ],

    4: [
        { nombre: "Ecuaciones Diferenciales", imagen: "ecuaciones.jpg" },
        { nombre: "Estadística para Ingeniería", imagen: "estadistica.jpg" },
        { nombre: "Ingeniería de Software I", imagen: "software1.jpg" },
        { nombre: "Estructuras de Datos II", imagen: "estructuras2.jpg" },
        { nombre: "Sistemas Operativos", imagen: "sistemasoperativos.jpg" }
    ],

    5: [
        { nombre: "Métodos Numéricos", imagen: "numericos.jpg" },
        { nombre: "Ingeniería de Software II", imagen: "software2.jpg" },
        { nombre: "Programación Web", imagen: "web.jpg" },
        { nombre: "Diseño de Base de Datos", imagen: "basesdatos.jpg" },
        { nombre: "Idioma Extranjero II", imagen: "idiomas2.jpg" }
    ],

    6: [
        { nombre: "Modelos Determinísticos", imagen: "modelos.jpg" },
        { nombre: "Ingeniería de Software III", imagen: "software3.jpg" },
        { nombre: "Programación Móvil", imagen: "movil.jpg" },
        { nombre: "Redes Informáticas I", imagen: "redes1.jpg" },
        { nombre: "Filosofía e Historia de la Ciencia", imagen: "filosofia.jpg" }
    ],

    7: [
        { nombre: "Proyectos Software", imagen: "proyectos.jpg" },
        { nombre: "Inteligencia Computacional I", imagen: "inteligencia1.jpg" },
        { nombre: "Redes Informáticas II", imagen: "redes2.jpg" },
        { nombre: "Administración de Base de Datos", imagen: "administracionbd.jpg" },
        { nombre: "Metodología de la Investigación I", imagen: "investigacion1.jpg" }
    ],
        
    8: [
        { nombre: "PESI", imagen: "pesi.jpg" },
        { nombre: "Inteligencia Computacional II", imagen: "inteligencia2.jpg" },
        { nombre: "Taller: Emprendimiento e Innovación", imagen: "emprendimiento.jpg" },
        { nombre: "Metodología de la Investigación II", imagen: "investigacion2.jpg" },
        { nombre: "Ética", imagen: "etica.jpg" },
        { nombre: "Desarrollo Humano", imagen: "desarrollo.jpg" }
    ],

    9: [
        { nombre: "Electiva I", imagen: "electiva1.jpg" },
        { nombre: "Electiva II", imagen: "electiva2.jpg" },
        { nombre: "Gestión Tecnológica", imagen: "gestion.jpg" },
        { nombre: "Taller de Escritura Científica", imagen: "escritura.jpg" },
        { nombre: "Universidad, Región y Medio Ambiente", imagen: "ambiente.jpg" }
    ],

    10: [
        { nombre: "Electiva III", imagen: "electiva3.jpg" },
        { nombre: "Electiva IV", imagen: "electiva4.jpg" },
        { nombre: "Opción de Grado", imagen: "grado.jpg" }
    ]
};

const botonesSemestre = document.querySelectorAll(".semester-btn");
const contenedorMaterias = document.getElementById("subjectsContainer");
const tituloSemestre = document.getElementById("semesterTitle");
const descripcionSemestre = document.getElementById("semesterDescription");

function mostrarMaterias(semestre) {
    contenedorMaterias.innerHTML = "";

    const materias = materiasPorSemestre[semestre];

    tituloSemestre.textContent = "Semestre " + semestre;
    descripcionSemestre.textContent = "Asignaturas correspondientes al semestre " + semestre + ".";

    materias.forEach(materia => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("subject-card");

        tarjeta.innerHTML = `
            <img src="image/${materia.imagen}" alt="${materia.nombre}">

            <div class="subject-semester">Semestre ${semestre}</div>

            <div class="subject-overlay">
                <h4>${materia.nombre}</h4>
                <p>Ingeniería de Sistemas</p>
            </div>
        `;

        contenedorMaterias.appendChild(tarjeta);
    });
}

botonesSemestre.forEach(boton => {

    boton.addEventListener("click", function() {
        
        botonesSemestre.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        mostrarMaterias(this.dataset.semester);
    });
});
