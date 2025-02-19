
const topics = [
    { 
        name: "Analog and Digital Electronics Lab-I", 
        description: "Hands-on experiments with fundamental analog and digital circuits, including logic gates, amplifiers, and microcontrollers.",
        college: "IIT Roorkee"
    },
    { 
        name: "Analog and Digital Electronics Lab-II", 
        description: "Builds on foundational concepts, focusing on advanced circuit design, signal processing, and microprocessor-based applications.",
        college: "IIT Roorkee"
    },
    { 
        name: "Analog Electronics Circuits Virtual Lab", 
        description: "Interactive platform for simulating and experimenting with analog circuits, including amplifiers, oscillators, and signal processing components.",
        college: "IIT Kharagpur"
    },
    { 
        name: "Basic Electronics Lab", 
        description: "Hands-on experience with fundamental electronic components, circuits, and measurement techniques essential for understanding electronic systems.",
        college: "IIT Kharagpur"
    },
    { 
        name: "Digital Applications Lab", 
        description: "Practical implementations of digital circuits and systems, focusing on logic design, microprocessors, and embedded applications.",
        college: "IIT Bombay"
    },
    { 
        name: "Digital Electronic Circuits Lab", 
        description: "Hands-on experience with logic gates, combinational and sequential circuits, and FPGA-based digital system design.",
        college: "IIT Kharagpur"
    },
    { 
        name: "Digital Electronics Lab-I", 
        description: "Hands-on experience with digital logic design, covering logic gates, combinational and sequential circuits, and hardware implementation.",
        college: "IIT Roorkee"
    },
    { 
        name: "Digital Electronics Lab-II", 
        description: "Focuses on advanced digital circuit design, including sequential logic, FPGA implementation, and microprocessor-based systems.",
        college: "IIT Guwahati"
    },
    { 
        name: "Digital Logic Design Lab", 
        description: "Hands-on experience in designing, simulating, and implementing digital circuits using logic gates, combinational and sequential circuits, and hardware description languages.",
        college: "IIT Bombay"
    },
    { 
        name: "Hybrid Electronics Lab", 
        description: "Integration of analog, digital, and power electronics, focusing on circuit design, signal processing, and embedded systems.",
        college: "COEP Technological University Pune"
    },
    { 
        name: "Microelectronics & VLSI Engineering Lab", 
        description: "Focuses on designing, simulating, and testing semiconductor devices, IC fabrication, and VLSI circuit development.",
        college: "IIT Kharagpur"
    },
    { 
        name: "Digital Signal Processing Virtual Lab", 
        description: "Interactive platform for experimenting with DSP concepts like filtering, sampling, and Fourier analysis through simulations.",
        college: "IIT Kharagpur"
    },
];


const cseCardsContainer = document.getElementById("cseCards");

topics.forEach(topic => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h2>${topic.name}</h2>
        <p>${topic.description}</p>
        <p class="college"><strong>College:</strong> ${topic.college}</p>
        <div class="buttons">
            <button class="btn white-btn">Reference Books</button>
            <button class="btn orange-btn">Syllabus Mapping</button>
        </div>
    `;

    cseCardsContainer.appendChild(card);
});
