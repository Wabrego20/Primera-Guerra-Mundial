/* =====ELEMENTOS DEL MODAL NORMAL========= */
const botones = document.querySelectorAll(".boton-seccion");
const modal = document.getElementById("modal");
const modalTitulo = document.getElementById("modalTitulo");
const modalIcono = document.getElementById("modalIcono");
const modalDescripcion = document.getElementById("modalDescripcion");
const cerrarModal = document.getElementById("cerrarModal");

/* =======ELEMENTOS DEL VISOR DE PÁGINAS========== */
const modalPagina = document.getElementById("modalPagina");
const imagenPagina = document.getElementById("imagenPagina");
const cerrarPagina = document.getElementById("cerrarPagina");

/* ======BOTONES DE LAS SECCIONES 01.png - 09.png================== */

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const pagina = boton.dataset.pagina;
        /* Si el botón tiene una imagen asociada,
           la mostramos dentro del visor */
        if (pagina) {
            imagenPagina.src = pagina;
            imagenPagina.alt = boton.dataset.titulo;
            modalPagina.classList.add("activo");
            /* Evita que la portada se desplace
               mientras el visor está abierto */
            document.body.style.overflow = "hidden";
        }
    });
});

/* ==========CERRAR EL VISOR CON EL BOTÓN X====== */
cerrarPagina.addEventListener("click", () => {
    modalPagina.classList.remove("activo");
    imagenPagina.src = "";
    document.body.style.overflow = "";
});

/* =====CERRAR EL VISOR AL HACER CLIC FUERA======== */
modalPagina.addEventListener("click", (evento) => {
    if (evento.target === modalPagina) {
        modalPagina.classList.remove("activo");
        imagenPagina.src = "";
        document.body.style.overflow = "";
    }
});


/* ===CERRAR EL VISOR CON ESC============ */

document.addEventListener("keydown", (evento) => {
    if (
        evento.key === "Escape" &&
        modalPagina.classList.contains("activo")
    ) {
        modalPagina.classList.remove("activo");
        imagenPagina.src = "";
        document.body.style.overflow = "";
    }
});

/* ========ELEMENTOS DE LOS VIDEOS============ */
const videos = document.querySelectorAll(".video-card");
const modalVideo = document.getElementById("modalVideo");

/* ===ABRIR LOS VIDEOS EN EL MODAL============= */
videos.forEach(video => {
    video.addEventListener("click", () => {
        const archivo = video.dataset.video;
        const titulo = video.dataset.titulo;
        const descripcion = video.dataset.descripcion;

        /* Información del modal */
        modalTitulo.textContent = titulo;
        modalIcono.textContent = "▶";
        modalDescripcion.textContent = descripcion;
        /* Cargar el video */
        modalVideo.src = archivo;
        /* Mostrar modal */
        modal.classList.add("activo");
        /* Evitar desplazamiento de la página */
        document.body.style.overflow = "hidden";
        /* Intentar reproducir automáticamente */
        modalVideo.play().catch(() => { });
    });
});


/* ====CERRAR MODAL DE VIDEOS================== */
cerrarModal.addEventListener("click", () => {
    modal.classList.remove("activo");
    /* Detener y limpiar el video */
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modalVideo.src = "";
    document.body.style.overflow = "";
});

/* =====CERRAR MODAL AL HACER CLIC FUERA===== */
modal.addEventListener("click", (evento) => {
    if (evento.target === modal) {
        modal.classList.remove("activo");
        /* Detener el video */
        modalVideo.pause();
        modalVideo.currentTime = 0;
        modalVideo.src = "";
        document.body.style.overflow = "";
    }
});

/* ======CERRAR MODAL DE VIDEO CON ESC========= */
document.addEventListener("keydown", (evento) => {
    if (
        evento.key === "Escape" &&
        modal.classList.contains("activo")
    ) {
        modal.classList.remove("activo");
        /* Detener el video */
        modalVideo.pause();
        modalVideo.currentTime = 0;
        modalVideo.src = "";
        document.body.style.overflow = "";
    }
});
