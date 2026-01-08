// Add hover effect to buttons
const buttonsWithHoverEffect = document.querySelectorAll(".hover-effect");
buttonsWithHoverEffect.forEach((buttonWithHoverEffect) => {
  buttonWithHoverEffect.addEventListener("mouseover", hoverButton);
  buttonWithHoverEffect.addEventListener("mouseout", unhoverButton);
  buttonWithHoverEffect.addEventListener("click", unhoverButton);
  buttonWithHoverEffect.addEventListener("touchstart", hoverButton);
  buttonWithHoverEffect.addEventListener("touchend", unhoverButton);

  function hoverButton() {
    buttonWithHoverEffect.classList.add("active");
  }

  function unhoverButton() {
    buttonWithHoverEffect.classList.remove("active");
  }
});

// Toggle Collapsible Content
const collapsibleTitle = document.querySelectorAll(
  ".collapsible-content-title"
);
const numberOfCollapsibleTitles = collapsibleTitle.length;
const plusIcon = document.querySelectorAll(".plus-icon");
const verticalLine = document.querySelectorAll(".vertical-line");
const horizontalLine = document.querySelectorAll(".horizontal-line");

for (let i = 0; i < numberOfCollapsibleTitles; i++) {
  collapsibleTitle[i].addEventListener("click", function () {
    const collapsibleContent = this.nextElementSibling;
    if (!collapsibleContent.classList.contains("collapsible-content-hidden")) {
      verticalLine[i].classList.remove("vertical-line-rotate");
      horizontalLine[i].classList.remove("horizontal-line-rotate");
      collapsibleContent.classList.add("collapsible-content-hidden");
      setTimeout(function () {
        collapsibleContent.classList.remove("collapsible-content-animation");
      }, 100);
    } else {
      collapsibleContent.classList.remove("collapsible-content-hidden");
      verticalLine[i].classList.add("vertical-line-rotate");
      horizontalLine[i].classList.add("horizontal-line-rotate");
      setTimeout(function () {
        collapsibleContent.classList.add("collapsible-content-animation");
      }, 100);
    }
  });
}

// C3 Note
const c3Note = new AudioContext();
let isTouchInteraction = false;

async function loadAudio(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await c3Note.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

const c3Url = "notes/c-3.mp3";

const c3Key = document.getElementById("c-3");

loadAudio(c3Url)
  .then((audioBuffer) => {
    c3Key.addEventListener("mousedown", () => {
      if (!isTouchInteraction) {
        playC3(audioBuffer);
      }
      isTouchInteraction = false;
    });

    c3Key.addEventListener("touchstart", () => {
      playC3(audioBuffer);
      isTouchInteraction = true;
    });

    // Flag to track if note is currently playing to prevent repeated playing when key is held down
    let isC3NotePlaying = false;

    document.addEventListener("keydown", function (event) {
      if (event.key === "a" && !isC3NotePlaying) {
        playC3(audioBuffer);
        isC3NotePlaying = true;
      }
      // Add a keyup event listener to reset the flag when the key is released
      document.addEventListener("keyup", function (event) {
        if (event.key === "a") {
          releaseC3();
          isC3NotePlaying = false;
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error loading audio:", error);
  });

c3Key.addEventListener("mouseup", () => {
  releaseC3();
});

function playC3(audioBuffer) {
  const sourceNode = c3Note.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.connect(c3Note.destination);
  sourceNode.start();
  c3Key.classList.add("active");
}

function releaseC3() {
  c3Key.classList.remove("active");
}

// C#3 Note
const cSharp3Note = new AudioContext();

async function loadAudio(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await cSharp3Note.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

const cSharp3Url = "notes/c-sharp-3.mp3";

const cSharp3Key = document.getElementById("c-sharp-3");

loadAudio(cSharp3Url)
  .then((audioBuffer) => {
    cSharp3Key.addEventListener("mousedown", () => {
      if (!isTouchInteraction) {
        playCSharp3(audioBuffer);
      }
      isTouchInteraction = false;
    });

    cSharp3Key.addEventListener("touchstart", () => {
      playCSharp3(audioBuffer);
      isTouchInteraction = true;
    });

    // Flag to track if note is currently playing to prevent repeated playing when key is held down
    let isCSharp3NotePlaying = false;

    document.addEventListener("keydown", function (event) {
      if (event.key === "w" && !isCSharp3NotePlaying) {
        playCSharp3(audioBuffer);
        isCSharp3NotePlaying = true;
      }
      // Add a keyup event listener to reset the flag when the key is released
      document.addEventListener("keyup", function (event) {
        if (event.key === "w") {
          releaseCSharp3();
          isCSharp3NotePlaying = false;
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error loading audio:", error);
  });

cSharp3Key.addEventListener("mouseup", () => {
  releaseCSharp3();
});

function playCSharp3(audioBuffer) {
  const sourceNode = cSharp3Note.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.connect(cSharp3Note.destination);
  sourceNode.start();
  cSharp3Key.classList.add("active");
}

function releaseCSharp3() {
  cSharp3Key.classList.remove("active");
}

// D3 Note
const d3Note = new AudioContext();

async function loadAudio(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await d3Note.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

const d3Url = "notes/d-3.mp3";

const d3Key = document.getElementById("d-3");

loadAudio(d3Url)
  .then((audioBuffer) => {
    d3Key.addEventListener("mousedown", () => {
      if (!isTouchInteraction) {
        playD3(audioBuffer);
      }
      isTouchInteraction = false;
    });

    d3Key.addEventListener("touchstart", () => {
      playD3(audioBuffer);
      isTouchInteraction = true;
    });

    // Flag to track if note is currently playing to prevent repeated playing when key is held down
    let isD3NotePlaying = false;

    document.addEventListener("keydown", function (event) {
      if (event.key === "s" && !isD3NotePlaying) {
        playD3(audioBuffer);
        isD3NotePlaying = true;
      }
      // Add a keyup event listener to reset the flag when the key is released
      document.addEventListener("keyup", function (event) {
        if (event.key === "s") {
          releaseD3();
          isD3NotePlaying = false;
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error loading audio:", error);
  });

d3Key.addEventListener("mouseup", () => {
  releaseD3();
});

function playD3(audioBuffer) {
  const sourceNode = d3Note.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.connect(d3Note.destination);
  sourceNode.start();
  d3Key.classList.add("active");
}

function releaseD3() {
  d3Key.classList.remove("active");
}

// D#3 Note
const dSharp3Note = new AudioContext();

async function loadAudio(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await dSharp3Note.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

const dSharp3Url = "notes/d-sharp-3.mp3";

const dSharp3Key = document.getElementById("d-sharp-3");

loadAudio(dSharp3Url)
  .then((audioBuffer) => {
    dSharp3Key.addEventListener("mousedown", () => {
      if (!isTouchInteraction) {
        playDSharp3(audioBuffer);
      }
      isTouchInteraction = false;
    });

    dSharp3Key.addEventListener("touchstart", () => {
      playDSharp3(audioBuffer);
      isTouchInteraction = true;
    });

    // Flag to track if note is currently playing to prevent repeated playing when key is held down
    let isDSharp3NotePlaying = false;

    document.addEventListener("keydown", function (event) {
      if (event.key === "e" && !isDSharp3NotePlaying) {
        playDSharp3(audioBuffer);
        isDSharp3NotePlaying = true;
      }
      // Add a keyup event listener to reset the flag when the key is released
      document.addEventListener("keyup", function (event) {
        if (event.key === "e") {
          releaseDSharp3();
          isDSharp3NotePlaying = false;
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error loading audio:", error);
  });

dSharp3Key.addEventListener("mouseup", () => {
  releaseDSharp3();
});

function playDSharp3(audioBuffer) {
  const sourceNode = dSharp3Note.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.connect(dSharp3Note.destination);
  sourceNode.start();
  dSharp3Key.classList.add("active");
}

function releaseDSharp3() {
  dSharp3Key.classList.remove("active");
}

// E3 Note
const e3Note = new AudioContext();

async function loadAudio(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await e3Note.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

const e3Url = "notes/e-3.mp3";

const e3Key = document.getElementById("e-3");

loadAudio(e3Url)
  .then((audioBuffer) => {
    e3Key.addEventListener("mousedown", () => {
      if (!isTouchInteraction) {
        playE3(audioBuffer);
      }
      isTouchInteraction = false;
    });

    e3Key.addEventListener("touchstart", () => {
      playE3(audioBuffer);
      isTouchInteraction = true;
    });

    // Flag to track if note is currently playing to prevent repeated playing when key is held down
    let isE3NotePlaying = false;

    document.addEventListener("keydown", function (event) {
      if (event.key === "d" && !isE3NotePlaying) {
        playE3(audioBuffer);
        isE3NotePlaying = true;
      }
      // Add a keyup event listener to reset the flag when the key is released
      document.addEventListener("keyup", function (event) {
        if (event.key === "d") {
          releaseE3();
          isE3NotePlaying = false;
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error loading audio:", error);
  });

e3Key.addEventListener("mouseup", () => {
  releaseE3();
});

function playE3(audioBuffer) {
  const sourceNode = e3Note.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.connect(e3Note.destination);
  sourceNode.start();
  e3Key.classList.add("active");
}

function releaseE3() {
  e3Key.classList.remove("active");
}

// F3 Note
const f3Note = new AudioContext();

async function loadAudio(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await f3Note.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

const f3Url = "notes/f-3.mp3";

const f3Key = document.getElementById("f-3");

loadAudio(f3Url)
  .then((audioBuffer) => {
    f3Key.addEventListener("mousedown", () => {
      if (!isTouchInteraction) {
        playF3(audioBuffer);
      }
      isTouchInteraction = false;
    });

    f3Key.addEventListener("touchstart", () => {
      playF3(audioBuffer);
      isTouchInteraction = true;
    });

    // Flag to track if note is currently playing to prevent repeated playing when key is held down
    let isF3NotePlaying = false;

    document.addEventListener("keydown", function (event) {
      if (event.key === "f" && !isF3NotePlaying) {
        playF3(audioBuffer);
        isF3NotePlaying = true;
      }
      // Add a keyup event listener to reset the flag when the key is released
      document.addEventListener("keyup", function (event) {
        if (event.key === "f") {
          releaseF3();
          isF3NotePlaying = false;
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error loading audio:", error);
  });

f3Key.addEventListener("mouseup", () => {
  releaseF3();
});

function playF3(audioBuffer) {
  const sourceNode = f3Note.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.connect(f3Note.destination);
  sourceNode.start();
  f3Key.classList.add("active");
}

function releaseF3() {
  f3Key.classList.remove("active");
}

// F#3 Note
const fSharp3Note = new AudioContext();

async function loadAudio(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await fSharp3Note.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

const fSharp3Url = "notes/f-sharp-3.mp3";

const fSharp3Key = document.getElementById("f-sharp-3");

loadAudio(fSharp3Url)
  .then((audioBuffer) => {
    fSharp3Key.addEventListener("mousedown", () => {
      if (!isTouchInteraction) {
        playFSharp3(audioBuffer);
      }
      isTouchInteraction = false;
    });

    fSharp3Key.addEventListener("touchstart", () => {
      playFSharp3(audioBuffer);
      isTouchInteraction = true;
    });

    // Flag to track if note is currently playing to prevent repeated playing when key is held down
    let isFSharp3NotePlaying = false;

    document.addEventListener("keydown", function (event) {
      if (event.key === "t" && !isFSharp3NotePlaying) {
        playFSharp3(audioBuffer);
        isFSharp3NotePlaying = true;
      }
      // Add a keyup event listener to reset the flag when the key is released
      document.addEventListener("keyup", function (event) {
        if (event.key === "t") {
          releaseFSharp3();
          isFSharp3NotePlaying = false;
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error loading audio:", error);
  });

fSharp3Key.addEventListener("mouseup", () => {
  releaseFSharp3();
});

function playFSharp3(audioBuffer) {
  const sourceNode = fSharp3Note.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.connect(fSharp3Note.destination);
  sourceNode.start();
  fSharp3Key.classList.add("active");
}

function releaseFSharp3() {
  fSharp3Key.classList.remove("active");
}

// G3 Note
const g3Note = new AudioContext();

async function loadAudio(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await g3Note.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

const g3Url = "notes/g-3.mp3";

const g3Key = document.getElementById("g-3");

loadAudio(g3Url)
  .then((audioBuffer) => {
    g3Key.addEventListener("mousedown", () => {
      if (!isTouchInteraction) {
        playG3(audioBuffer);
      }
      isTouchInteraction = false;
    });

    g3Key.addEventListener("touchstart", () => {
      playG3(audioBuffer);
      isTouchInteraction = true;
    });

    // Flag to track if note is currently playing to prevent repeated playing when key is held down
    let isG3NotePlaying = false;

    document.addEventListener("keydown", function (event) {
      if (event.key === "g" && !isG3NotePlaying) {
        playG3(audioBuffer);
        isG3NotePlaying = true;
      }
      // Add a keyup event listener to reset the flag when the key is released
      document.addEventListener("keyup", function (event) {
        if (event.key === "g") {
          releaseG3();
          isG3NotePlaying = false;
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error loading audio:", error);
  });

g3Key.addEventListener("mouseup", () => {
  releaseG3();
});

function playG3(audioBuffer) {
  const sourceNode = g3Note.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.connect(g3Note.destination);
  sourceNode.start();
  g3Key.classList.add("active");
}

function releaseG3() {
  g3Key.classList.remove("active");
}

// G#3 Note
const gSharp3Note = new AudioContext();

async function loadAudio(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await gSharp3Note.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

const gSharp3Url = "notes/g-sharp-3.mp3";

const gSharp3Key = document.getElementById("g-sharp-3");

loadAudio(gSharp3Url)
  .then((audioBuffer) => {
    gSharp3Key.addEventListener("mousedown", () => {
      if (!isTouchInteraction) {
        playGSharp3(audioBuffer);
      }
      isTouchInteraction = false;
    });

    gSharp3Key.addEventListener("touchstart", () => {
      playGSharp3(audioBuffer);
      isTouchInteraction = true;
    });

    // Flag to track if note is currently playing to prevent repeated playing when key is held down
    let isGSharp3NotePlaying = false;

    document.addEventListener("keydown", function (event) {
      if (event.key === "y" && !isGSharp3NotePlaying) {
        playGSharp3(audioBuffer);
        isGSharp3NotePlaying = true;
      }
      // Add a keyup event listener to reset the flag when the key is released
      document.addEventListener("keyup", function (event) {
        if (event.key === "y") {
          releaseGSharp3();
          isGSharp3NotePlaying = false;
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error loading audio:", error);
  });

gSharp3Key.addEventListener("mouseup", () => {
  releaseGSharp3();
});

function playGSharp3(audioBuffer) {
  const sourceNode = gSharp3Note.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.connect(gSharp3Note.destination);
  sourceNode.start();
  gSharp3Key.classList.add("active");
}

function releaseGSharp3() {
  gSharp3Key.classList.remove("active");
}

// A3 Note
const a3Note = new AudioContext();

async function loadAudio(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await a3Note.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

const a3Url = "notes/a-3.mp3";

const a3Key = document.getElementById("a-3");

loadAudio(a3Url)
  .then((audioBuffer) => {
    a3Key.addEventListener("mousedown", () => {
      if (!isTouchInteraction) {
        playA3(audioBuffer);
      }
      isTouchInteraction = false;
    });

    a3Key.addEventListener("touchstart", () => {
      playA3(audioBuffer);
      isTouchInteraction = true;
    });

    // Flag to track if note is currently playing to prevent repeated playing when key is held down
    let isA3NotePlaying = false;

    document.addEventListener("keydown", function (event) {
      if (event.key === "h" && !isA3NotePlaying) {
        playA3(audioBuffer);
        isA3NotePlaying = true;
      }
      // Add a keyup event listener to reset the flag when the key is released
      document.addEventListener("keyup", function (event) {
        if (event.key === "h") {
          releaseA3();
          isA3NotePlaying = false;
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error loading audio:", error);
  });

a3Key.addEventListener("mouseup", () => {
  releaseA3();
});

function playA3(audioBuffer) {
  const sourceNode = a3Note.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.connect(a3Note.destination);
  sourceNode.start();
  a3Key.classList.add("active");
}

function releaseA3() {
  a3Key.classList.remove("active");
}

// A#3 Note
const aSharp3Note = new AudioContext();

async function loadAudio(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await aSharp3Note.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

const aSharp3Url = "notes/a-sharp-3.mp3";

const aSharp3Key = document.getElementById("a-sharp-3");

loadAudio(aSharp3Url)
  .then((audioBuffer) => {
    aSharp3Key.addEventListener("mousedown", () => {
      if (!isTouchInteraction) {
        playASharp3(audioBuffer);
      }
      isTouchInteraction = false;
    });

    aSharp3Key.addEventListener("touchstart", () => {
      playASharp3(audioBuffer);
      isTouchInteraction = true;
    });

    // Flag to track if note is currently playing to prevent repeated playing when key is held down
    let isASharp3NotePlaying = false;

    document.addEventListener("keydown", function (event) {
      if (event.key === "u" && !isASharp3NotePlaying) {
        playASharp3(audioBuffer);
        isASharp3NotePlaying = true;
      }
      // Add a keyup event listener to reset the flag when the key is released
      document.addEventListener("keyup", function (event) {
        if (event.key === "u") {
          releaseASharp3();
          isASharp3NotePlaying = false;
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error loading audio:", error);
  });

aSharp3Key.addEventListener("mouseup", () => {
  releaseASharp3();
});

function playASharp3(audioBuffer) {
  const sourceNode = aSharp3Note.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.connect(aSharp3Note.destination);
  sourceNode.start();
  aSharp3Key.classList.add("active");
}

function releaseASharp3() {
  aSharp3Key.classList.remove("active");
}

// B3 Note
const b3Note = new AudioContext();

async function loadAudio(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await b3Note.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

const b3Url = "notes/b-3.mp3";

const b3Key = document.getElementById("b-3");

loadAudio(b3Url)
  .then((audioBuffer) => {
    b3Key.addEventListener("mousedown", () => {
      if (!isTouchInteraction) {
        playB3(audioBuffer);
      }
      isTouchInteraction = false;
    });

    b3Key.addEventListener("touchstart", () => {
      playB3(audioBuffer);
      isTouchInteraction = true;
    });

    // Flag to track if note is currently playing to prevent repeated playing when key is held down
    let isB3NotePlaying = false;

    document.addEventListener("keydown", function (event) {
      if (event.key === "j" && !isB3NotePlaying) {
        playB3(audioBuffer);
        isB3NotePlaying = true;
      }
      // Add a keyup event listener to reset the flag when the key is released
      document.addEventListener("keyup", function (event) {
        if (event.key === "j") {
          releaseB3();
          isB3NotePlaying = false;
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error loading audio:", error);
  });

b3Key.addEventListener("mouseup", () => {
  releaseB3();
});

function playB3(audioBuffer) {
  const sourceNode = b3Note.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.connect(b3Note.destination);
  sourceNode.start();
  b3Key.classList.add("active");
}

function releaseB3() {
  b3Key.classList.remove("active");
}

// C4 Note
const c4Note = new AudioContext();

async function loadAudio(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await c4Note.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

const c4Url = "notes/c-4.mp3";

const c4Key = document.getElementById("c-4");

loadAudio(c4Url)
  .then((audioBuffer) => {
    c4Key.addEventListener("mousedown", () => {
      if (!isTouchInteraction) {
        playC4(audioBuffer);
      }
      isTouchInteraction = false;
    });

    c4Key.addEventListener("touchstart", () => {
      playC4(audioBuffer);
      isTouchInteraction = true;
    });

    // Flag to track if note is currently playing to prevent repeated playing when key is held down
    let isC4NotePlaying = false;

    document.addEventListener("keydown", function (event) {
      if (event.key === "k" && !isC4NotePlaying) {
        playC4(audioBuffer);
        isC4NotePlaying = true;
      }
      // Add a keyup event listener to reset the flag when the key is released
      document.addEventListener("keyup", function (event) {
        if (event.key === "k") {
          releaseC4();
          isC4NotePlaying = false;
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error loading audio:", error);
  });

c4Key.addEventListener("mouseup", () => {
  releaseC4();
});

function playC4(audioBuffer) {
  const sourceNode = c4Note.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.connect(c4Note.destination);
  sourceNode.start();
  c4Key.classList.add("active");
}

function releaseC4() {
  c4Key.classList.remove("active");
}

// C#4 Note
const cSharp4Note = new AudioContext();

async function loadAudio(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await cSharp4Note.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

const cSharp4Url = "notes/c-sharp-4.mp3";

const cSharp4Key = document.getElementById("c-sharp-4");

loadAudio(cSharp4Url)
  .then((audioBuffer) => {
    cSharp4Key.addEventListener("mousedown", () => {
      if (!isTouchInteraction) {
        playCSharp4(audioBuffer);
      }
      isTouchInteraction = false;
    });

    cSharp4Key.addEventListener("touchstart", () => {
      playCSharp4(audioBuffer);
      isTouchInteraction = true;
    });

    // Flag to track if note is currently playing to prevent repeated playing when key is held down
    let isCSharp4NotePlaying = false;

    document.addEventListener("keydown", function (event) {
      if (event.key === "o" && !isCSharp4NotePlaying) {
        playCSharp4(audioBuffer);
        isCSharp4NotePlaying = true;
      }
      // Add a keyup event listener to reset the flag when the key is released
      document.addEventListener("keyup", function (event) {
        if (event.key === "o") {
          releaseCSharp4();
          isCSharp4NotePlaying = false;
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error loading audio:", error);
  });

cSharp4Key.addEventListener("mouseup", () => {
  releaseCSharp4();
});

function playCSharp4(audioBuffer) {
  const sourceNode = cSharp4Note.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.connect(cSharp4Note.destination);
  sourceNode.start();
  cSharp4Key.classList.add("active");
}

function releaseCSharp4() {
  cSharp4Key.classList.remove("active");
}

// D4 Note
const d4Note = new AudioContext();

async function loadAudio(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await d4Note.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

const d4Url = "notes/d-4.mp3";

const d4Key = document.getElementById("d-4");

loadAudio(d4Url)
  .then((audioBuffer) => {
    d4Key.addEventListener("mousedown", () => {
      if (!isTouchInteraction) {
        playD4(audioBuffer);
      }
      isTouchInteraction = false;
    });

    d4Key.addEventListener("touchstart", () => {
      playD4(audioBuffer);
      isTouchInteraction = true;
    });

    // Flag to track if note is currently playing to prevent repeated playing when key is held down
    let isD4NotePlaying = false;

    document.addEventListener("keydown", function (event) {
      if (event.key === "l" && !isD4NotePlaying) {
        playD4(audioBuffer);
        isD4NotePlaying = true;
      }
      // Add a keyup event listener to reset the flag when the key is released
      document.addEventListener("keyup", function (event) {
        if (event.key === "l") {
          releaseD4();
          isD4NotePlaying = false;
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error loading audio:", error);
  });

d4Key.addEventListener("mouseup", () => {
  releaseD4();
});

function playD4(audioBuffer) {
  const sourceNode = d4Note.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.connect(d4Note.destination);
  sourceNode.start();
  d4Key.classList.add("active");
}

function releaseD4() {
  d4Key.classList.remove("active");
}

// D#4 Note
const dSharp4Note = new AudioContext();

async function loadAudio(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await dSharp4Note.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

const dSharp4Url = "notes/d-sharp-4.mp3";

const dSharp4Key = document.getElementById("d-sharp-4");

loadAudio(dSharp4Url)
  .then((audioBuffer) => {
    dSharp4Key.addEventListener("mousedown", () => {
      if (!isTouchInteraction) {
        playDSharp4(audioBuffer);
      }
      isTouchInteraction = false;
    });

    dSharp4Key.addEventListener("touchstart", () => {
      playDSharp4(audioBuffer);
      isTouchInteraction = true;
    });

    // Flag to track if note is currently playing to prevent repeated playing when key is held down
    let isDSharp4NotePlaying = false;

    document.addEventListener("keydown", function (event) {
      if (event.key === "p" && !isDSharp4NotePlaying) {
        playDSharp4(audioBuffer);
        isDSharp4NotePlaying = true;
      }
      // Add a keyup event listener to reset the flag when the key is released
      document.addEventListener("keyup", function (event) {
        if (event.key === "p") {
          releaseDSharp4();
          isDSharp4NotePlaying = false;
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error loading audio:", error);
  });

dSharp4Key.addEventListener("mouseup", () => {
  releaseDSharp4();
});

function playDSharp4(audioBuffer) {
  const sourceNode = dSharp4Note.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.connect(dSharp4Note.destination);
  sourceNode.start();
  dSharp4Key.classList.add("active");
}

function releaseDSharp4() {
  dSharp4Key.classList.remove("active");
}

// E4 Note
const e4Note = new AudioContext();

async function loadAudio(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await e4Note.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

const e4Url = "notes/e-4.mp3";

const e4Key = document.getElementById("e-4");

loadAudio(e4Url)
  .then((audioBuffer) => {
    e4Key.addEventListener("mousedown", () => {
      if (!isTouchInteraction) {
        playE4(audioBuffer);
      }
      isTouchInteraction = false;
    });

    e4Key.addEventListener("touchstart", () => {
      playE4(audioBuffer);
      isTouchInteraction = true;
    });

    // Flag to track if note is currently playing to prevent repeated playing when key is held down
    let isE4NotePlaying = false;

    document.addEventListener("keydown", function (event) {
      if (event.key === ";" && !isE4NotePlaying) {
        playE4(audioBuffer);
        isE4NotePlaying = true;
      }
      // Add a keyup event listener to reset the flag when the key is released
      document.addEventListener("keyup", function (event) {
        if (event.key === ";") {
          releaseE4();
          isE4NotePlaying = false;
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error loading audio:", error);
  });

e4Key.addEventListener("mouseup", () => {
  releaseE4();
});

function playE4(audioBuffer) {
  const sourceNode = e4Note.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.connect(e4Note.destination);
  sourceNode.start();
  e4Key.classList.add("active");
}

function releaseE4() {
  e4Key.classList.remove("active");
}

// Play Intervals

// Play minor second
const playMinorSecond = document.querySelectorAll(".play-interval")[0];
playMinorSecond.addEventListener("click", function () {
  loadAudio(c3Url)
    .then((c3AudioBuffer) => {
      playC3(c3AudioBuffer);

      setTimeout(function () {
        loadAudio(cSharp3Url)
          .then((cSharp3AudioBuffer) => {
            playCSharp3(cSharp3AudioBuffer);
            releaseC3();

            setTimeout(function () {
              releaseCSharp3();
            }, 1000);
          })
          .catch((error) => {
            console.error("Error loading C#3 audio:", error);
          });
      }, 1000);
    })
    .catch((error) => {
      console.error("Error loading C3 audio:", error);
    });
});

// Play second major
const playMajorSecond = document.querySelectorAll(".play-interval")[1];
playMajorSecond.addEventListener("click", function () {
  loadAudio(c3Url)
    .then((c3AudioBuffer) => {
      playC3(c3AudioBuffer);

      setTimeout(function () {
        loadAudio(d3Url)
          .then((d3AudioBuffer) => {
            playD3(d3AudioBuffer);
            releaseC3();

            setTimeout(function () {
              releaseD3();
            }, 1000);
          })
          .catch((error) => {
            console.error("Error loading D3 audio:", error);
          });
      }, 1000);
    })
    .catch((error) => {
      console.error("Error loading C3 audio:", error);
    });
});

// Play minor third
const playMinorThird = document.querySelectorAll(".play-interval")[2];
playMinorThird.addEventListener("click", function () {
  loadAudio(c3Url)
    .then((c3AudioBuffer) => {
      playC3(c3AudioBuffer);

      setTimeout(function () {
        loadAudio(dSharp3Url)
          .then((dSharp3AudioBuffer) => {
            playDSharp3(dSharp3AudioBuffer);
            releaseC3();

            setTimeout(function () {
              releaseDSharp3();
            }, 1000);
          })
          .catch((error) => {
            console.error("Error loading DSharp3 audio:", error);
          });
      }, 1000);
    })
    .catch((error) => {
      console.error("Error loading C3 audio:", error);
    });
});

// Play major third
const playMajorThird = document.querySelectorAll(".play-interval")[3];
playMajorThird.addEventListener("click", function () {
  loadAudio(c3Url)
    .then((c3AudioBuffer) => {
      playC3(c3AudioBuffer);

      setTimeout(function () {
        loadAudio(e3Url)
          .then((e3AudioBuffer) => {
            playE3(e3AudioBuffer);
            releaseC3();

            setTimeout(function () {
              releaseE3();
            }, 1000);
          })
          .catch((error) => {
            console.error("Error loading E3 audio:", error);
          });
      }, 1000);
    })
    .catch((error) => {
      console.error("Error loading C3 audio:", error);
    });
});

// Play perfect fourth
const playPerfectFourth = document.querySelectorAll(".play-interval")[4];
playPerfectFourth.addEventListener("click", function () {
  loadAudio(c3Url)
    .then((c3AudioBuffer) => {
      playC3(c3AudioBuffer);

      setTimeout(function () {
        loadAudio(f3Url)
          .then((f3AudioBuffer) => {
            playF3(f3AudioBuffer);
            releaseC3();

            setTimeout(function () {
              releaseF3();
            }, 1000);
          })
          .catch((error) => {
            console.error("Error loading F3 audio:", error);
          });
      }, 1000);
    })
    .catch((error) => {
      console.error("Error loading C3 audio:", error);
    });
});

// Play diminished fifth
const playDiminishedFifth = document.querySelectorAll(".play-interval")[5];
playDiminishedFifth.addEventListener("click", function () {
  loadAudio(c3Url)
    .then((c3AudioBuffer) => {
      playC3(c3AudioBuffer);

      setTimeout(function () {
        loadAudio(fSharp3Url)
          .then((fSharp3AudioBuffer) => {
            playFSharp3(fSharp3AudioBuffer);
            releaseC3();

            setTimeout(function () {
              releaseFSharp3();
            }, 1000);
          })
          .catch((error) => {
            console.error("Error loading FSharp3 audio:", error);
          });
      }, 1000);
    })
    .catch((error) => {
      console.error("Error loading C3 audio:", error);
    });
});

// Play perfect fifth
const playPerfectFifth = document.querySelectorAll(".play-interval")[6];
playPerfectFifth.addEventListener("click", function () {
  loadAudio(c3Url)
    .then((c3AudioBuffer) => {
      playC3(c3AudioBuffer);

      setTimeout(function () {
        loadAudio(g3Url)
          .then((g3AudioBuffer) => {
            playG3(g3AudioBuffer);
            releaseC3();

            setTimeout(function () {
              releaseG3();
            }, 1000);
          })
          .catch((error) => {
            console.error("Error loading G3 audio:", error);
          });
      }, 1000);
    })
    .catch((error) => {
      console.error("Error loading C3 audio:", error);
    });
});

// Play minor sixth
const playMinorSixth = document.querySelectorAll(".play-interval")[7];
playMinorSixth.addEventListener("click", function () {
  loadAudio(c3Url)
    .then((c3AudioBuffer) => {
      playC3(c3AudioBuffer);

      setTimeout(function () {
        loadAudio(gSharp3Url)
          .then((gSharp3AudioBuffer) => {
            playGSharp3(gSharp3AudioBuffer);
            releaseC3();

            setTimeout(function () {
              releaseGSharp3();
            }, 1000);
          })
          .catch((error) => {
            console.error("Error loading GSharp3 audio:", error);
          });
      }, 1000);
    })
    .catch((error) => {
      console.error("Error loading C3 audio:", error);
    });
});

// Play major sixth
const playMajorSixth = document.querySelectorAll(".play-interval")[8];
playMajorSixth.addEventListener("click", function () {
  loadAudio(c3Url)
    .then((c3AudioBuffer) => {
      playC3(c3AudioBuffer);

      setTimeout(function () {
        loadAudio(a3Url)
          .then((a3AudioBuffer) => {
            playA3(a3AudioBuffer);
            releaseC3();

            setTimeout(function () {
              releaseA3();
            }, 1000);
          })
          .catch((error) => {
            console.error("Error loading A3 audio:", error);
          });
      }, 1000);
    })
    .catch((error) => {
      console.error("Error loading C3 audio:", error);
    });
});

// Play minor seventh
const playMinorSeventh = document.querySelectorAll(".play-interval")[9];
playMinorSeventh.addEventListener("click", function () {
  loadAudio(c3Url)
    .then((c3AudioBuffer) => {
      playC3(c3AudioBuffer);

      setTimeout(function () {
        loadAudio(aSharp3Url)
          .then((aSharp3AudioBuffer) => {
            playASharp3(aSharp3AudioBuffer);
            releaseC3();

            setTimeout(function () {
              releaseASharp3();
            }, 1000);
          })
          .catch((error) => {
            console.error("Error loading ASharp3 audio:", error);
          });
      }, 1000);
    })
    .catch((error) => {
      console.error("Error loading C3 audio:", error);
    });
});

// Play major seventh
const playMajorSeventh = document.querySelectorAll(".play-interval")[10];
playMajorSeventh.addEventListener("click", function () {
  loadAudio(c3Url)
    .then((c3AudioBuffer) => {
      playC3(c3AudioBuffer);

      setTimeout(function () {
        loadAudio(b3Url)
          .then((b3AudioBuffer) => {
            playB3(b3AudioBuffer);
            releaseC3();

            setTimeout(function () {
              releaseB3();
            }, 1000);
          })
          .catch((error) => {
            console.error("Error loading B3 audio:", error);
          });
      }, 1000);
    })
    .catch((error) => {
      console.error("Error loading C3 audio:", error);
    });
});

// Play octave
const playOctave = document.querySelectorAll(".play-interval")[11];
playOctave.addEventListener("click", function () {
  loadAudio(c3Url)
    .then((c3AudioBuffer) => {
      playC3(c3AudioBuffer);

      setTimeout(function () {
        loadAudio(c4Url)
          .then((c4AudioBuffer) => {
            playC4(c4AudioBuffer);
            releaseC3();

            setTimeout(function () {
              releaseC4();
            }, 1000);
          })
          .catch((error) => {
            console.error("Error loading C4 audio:", error);
          });
      }, 1000);
    })
    .catch((error) => {
      console.error("Error loading C3 audio:", error);
    });
});

// Play scales

// Play C major scale
const playCMajorScale = document.querySelectorAll(".play-scale")[0];
playCMajorScale.addEventListener("click", function () {
  loadAudio(c3Url)
    .then((c3AudioBuffer) => {
      playC3(c3AudioBuffer);

      setTimeout(function () {
        loadAudio(d3Url)
          .then((d3AudioBuffer) => {
            playD3(d3AudioBuffer);
            releaseC3();

            setTimeout(function () {
              loadAudio(e3Url)
                .then((e3AudioBuffer) => {
                  playE3(e3AudioBuffer);
                  releaseD3();

                  setTimeout(function () {
                    loadAudio(f3Url)
                      .then((f3AudioBuffer) => {
                        playF3(f3AudioBuffer);
                        releaseE3();

                        setTimeout(function () {
                          loadAudio(g3Url)
                            .then((g3AudioBuffer) => {
                              playG3(g3AudioBuffer);
                              releaseF3();

                              setTimeout(function () {
                                loadAudio(a3Url)
                                  .then((a3AudioBuffer) => {
                                    playA3(a3AudioBuffer);
                                    releaseG3();

                                    setTimeout(function () {
                                      loadAudio(b3Url)
                                        .then((b3AudioBuffer) => {
                                          playB3(b3AudioBuffer);
                                          releaseA3();

                                          setTimeout(function () {
                                            loadAudio(c4Url)
                                              .then((c4AudioBuffer) => {
                                                playC4(c4AudioBuffer);
                                                releaseB3();
                                                setTimeout(function () {
                                                  releaseC4();
                                                }, 600);
                                              })

                                              .catch((error) => {
                                                console.error(
                                                  "Error loading C4 audio:",
                                                  error
                                                );
                                              });
                                          }, 600);
                                        })
                                        .catch((error) => {
                                          console.error(
                                            "Error loading B3 audio:",
                                            error
                                          );
                                        });
                                    }, 600);
                                  })
                                  .catch((error) => {
                                    console.error(
                                      "Error loading A3 audio:",
                                      error
                                    );
                                  });
                              }, 600);
                            })
                            .catch((error) => {
                              console.error("Error loading G3 audio:", error);
                            });
                        }, 600);
                      })
                      .catch((error) => {
                        console.error("Error loading F3 audio:", error);
                      });
                  }, 600);
                })
                .catch((error) => {
                  console.error("Error loading E3 audio:", error);
                });
            }, 600);
          })
          .catch((error) => {
            console.error("Error loading D3 audio:", error);
          });
      }, 600);
    })
    .catch((error) => {
      console.error("Error loading C3 audio:", error);
    });
});

// Play D major scale
const playDMajorScale = document.querySelectorAll(".play-scale")[1];
playDMajorScale.addEventListener("click", function () {
  loadAudio(d3Url)
    .then((d3AudioBuffer) => {
      playD3(d3AudioBuffer);

      setTimeout(function () {
        loadAudio(e3Url)
          .then((e3AudioBuffer) => {
            playE3(e3AudioBuffer);
            releaseD3();

            setTimeout(function () {
              loadAudio(fSharp3Url)
                .then((fSharp3AudioBuffer) => {
                  playFSharp3(fSharp3AudioBuffer);
                  releaseE3();

                  setTimeout(function () {
                    loadAudio(g3Url)
                      .then((g3AudioBuffer) => {
                        playG3(g3AudioBuffer);
                        releaseFSharp3();

                        setTimeout(function () {
                          loadAudio(a3Url)
                            .then((a3AudioBuffer) => {
                              playA3(a3AudioBuffer);
                              releaseG3();

                              setTimeout(function () {
                                loadAudio(b3Url)
                                  .then((b3AudioBuffer) => {
                                    playB3(b3AudioBuffer);
                                    releaseA3();

                                    setTimeout(function () {
                                      loadAudio(cSharp4Url)
                                        .then((cSharp4AudioBuffer) => {
                                          playCSharp4(cSharp4AudioBuffer);
                                          releaseB3();

                                          setTimeout(function () {
                                            loadAudio(d4Url)
                                              .then((d4AudioBuffer) => {
                                                playD4(d4AudioBuffer);
                                                releaseCSharp4();
                                                setTimeout(function () {
                                                  releaseD4();
                                                }, 600);
                                              })

                                              .catch((error) => {
                                                console.error(
                                                  "Error loading D4 audio:",
                                                  error
                                                );
                                              });
                                          }, 600);
                                        })
                                        .catch((error) => {
                                          console.error(
                                            "Error loading C#4 audio:",
                                            error
                                          );
                                        });
                                    }, 600);
                                  })
                                  .catch((error) => {
                                    console.error(
                                      "Error loading B3 audio:",
                                      error
                                    );
                                  });
                              }, 600);
                            })
                            .catch((error) => {
                              console.error("Error loading A3 audio:", error);
                            });
                        }, 600);
                      })
                      .catch((error) => {
                        console.error("Error loading G3 audio:", error);
                      });
                  }, 600);
                })
                .catch((error) => {
                  console.error("Error loading F#3 audio:", error);
                });
            }, 600);
          })
          .catch((error) => {
            console.error("Error loading E3 audio:", error);
          });
      }, 600);
    })
    .catch((error) => {
      console.error("Error loading D3 audio:", error);
    });
});

// Play chords

// Play C major chord
const playCMajorChord = document.querySelectorAll(".play-chord")[0];
playCMajorChord.addEventListener("click", function () {
  loadAudio(c3Url)
    .then((c3AudioBuffer) => {
      playC3(c3AudioBuffer);

      setTimeout(function () {
        loadAudio(e3Url)
          .then((e3AudioBuffer) => {
            playE3(e3AudioBuffer);
            releaseC3();

            setTimeout(function () {
              loadAudio(g3Url)
                .then((g3AudioBuffer) => {
                  playG3(g3AudioBuffer);
                  releaseE3();

                  setTimeout(function () {
                    releaseG3();

                    setTimeout(function () {
                      Promise.all([
                        playC3(c3AudioBuffer),
                        playE3(e3AudioBuffer),
                        playG3(g3AudioBuffer),
                      ])
                        .then(() => {
                          setTimeout(function () {
                            releaseC3();
                            releaseE3();
                            releaseG3();
                          }, 1000);
                        })
                        .catch((error) => {
                          console.error("Error playing notes together:", error);
                        });
                    }, 500);
                  }, 1000);
                })
                .catch((error) => {
                  console.error("Error loading G3 audio:", error);
                });
            }, 1000);
          })
          .catch((error) => {
            console.error("Error loading E3 audio:", error);
          });
      }, 1000);
    })
    .catch((error) => {
      console.error("Error loading C3 audio:", error);
    });
});

// Play D minor chord
const playDMinorChord = document.querySelectorAll(".play-chord")[1];
playDMinorChord.addEventListener("click", function () {
  loadAudio(d3Url)
    .then((d3AudioBuffer) => {
      playD3(d3AudioBuffer);

      setTimeout(function () {
        loadAudio(f3Url)
          .then((f3AudioBuffer) => {
            playF3(f3AudioBuffer);
            releaseD3();

            setTimeout(function () {
              loadAudio(a3Url)
                .then((a3AudioBuffer) => {
                  playA3(a3AudioBuffer);
                  releaseF3();

                  setTimeout(function () {
                    releaseA3();

                    setTimeout(function () {
                      Promise.all([
                        playD3(d3AudioBuffer),
                        playF3(f3AudioBuffer),
                        playA3(a3AudioBuffer),
                      ])
                        .then(() => {
                          setTimeout(function () {
                            releaseD3();
                            releaseF3();
                            releaseA3();
                          }, 1000);
                        })
                        .catch((error) => {
                          console.error("Error playing notes together:", error);
                        });
                    }, 500);
                  }, 1000);
                })
                .catch((error) => {
                  console.error("Error loading A3 audio:", error);
                });
            }, 1000);
          })
          .catch((error) => {
            console.error("Error loading F3 audio:", error);
          });
      }, 1000);
    })
    .catch((error) => {
      console.error("Error loading D3 audio:", error);
    });
});

// Play suspended chord progression
const playSuspendedChordProgression = document.querySelector(
  "#play-suspended-chord-progression"
);
playSuspendedChordProgression.addEventListener("click", function () {
  Promise.all([loadAudio(d3Url), loadAudio(f3Url), loadAudio(a3Url)])
    .then(([d3AudioBuffer, f3AudioBuffer, a3AudioBuffer]) => {
      playD3(d3AudioBuffer);
      playF3(f3AudioBuffer);
      playA3(a3AudioBuffer);

      setTimeout(function () {
        releaseD3();
        releaseF3();
        releaseA3();

        setTimeout(function () {
          Promise.all([loadAudio(c3Url), loadAudio(f3Url), loadAudio(g3Url)])
            .then(([c3AudioBuffer, f3AudioBuffer, g3AudioBuffer]) => {
              playC3(c3AudioBuffer);
              playF3(f3AudioBuffer);
              playG3(g3AudioBuffer);

              setTimeout(function () {
                releaseC3();
                releaseF3();
                releaseG3();

                setTimeout(function () {
                  Promise.all([
                    loadAudio(c3Url),
                    loadAudio(e3Url),
                    loadAudio(g3Url),
                  ])
                    .then(([c3AudioBuffer, e3AudioBuffer, g3AudioBuffer]) => {
                      playC3(c3AudioBuffer);
                      playE3(e3AudioBuffer);
                      playG3(g3AudioBuffer);

                      setTimeout(function () {
                        releaseC3();
                        releaseE3();
                        releaseG3();
                      }, 1000);
                    })
                    .catch((error) => {
                      console.error(
                        "Error loading audio for C major chord:",
                        error
                      );
                    });
                }, 500);
              }, 1000);
            })
            .catch((error) => {
              console.error("Error loading audio for Csus4 chord:", error);
            });
        }, 500);
      }, 1000);
    })
    .catch((error) => {
      console.error("Error loading audio for D minor chord:", error);
    });
});

// Play inverted chord progression
const playInvertedChordProgression = document.querySelector(
  "#play-inverted-chord-progression"
);
playInvertedChordProgression.addEventListener("click", function () {
  Promise.all([loadAudio(c3Url), loadAudio(e3Url), loadAudio(g3Url)])
    .then(([c3AudioBuffer, e3AudioBuffer, g3AudioBuffer]) => {
      playC3(c3AudioBuffer);
      playE3(e3AudioBuffer);
      playG3(g3AudioBuffer);

      setTimeout(function () {
        releaseC3();
        releaseE3();
        releaseG3();

        setTimeout(function () {
          Promise.all([loadAudio(c3Url), loadAudio(f3Url), loadAudio(a3Url)])
            .then(([c3AudioBuffer, f3AudioBuffer, a3AudioBuffer]) => {
              playC3(c3AudioBuffer);
              playF3(f3AudioBuffer);
              playA3(a3AudioBuffer);

              setTimeout(function () {
                releaseC3();
                releaseF3();
                releaseA3();
              }, 1000);
            })
            .catch((error) => {
              console.error(
                "Error loading audio for inverted F major chord:",
                error
              );
            });
        }, 500);
      }, 1000);
    })
    .catch((error) => {
      console.error("Error loading audio for C major chord:", error);
    });
});

// Play uninverted chord progression
const playUninvertedChordProgression = document.querySelector(
  "#play-uninverted-chord-progression"
);
playUninvertedChordProgression.addEventListener("click", function () {
  Promise.all([loadAudio(c3Url), loadAudio(e3Url), loadAudio(g3Url)])
    .then(([c3AudioBuffer, e3AudioBuffer, g3AudioBuffer]) => {
      playC3(c3AudioBuffer);
      playE3(e3AudioBuffer);
      playG3(g3AudioBuffer);

      setTimeout(function () {
        releaseC3();
        releaseE3();
        releaseG3();

        setTimeout(function () {
          Promise.all([loadAudio(f3Url), loadAudio(a3Url), loadAudio(c4Url)])
            .then(([f3AudioBuffer, a3AudioBuffer, c4AudioBuffer]) => {
              playF3(f3AudioBuffer);
              playA3(a3AudioBuffer);
              playC4(c4AudioBuffer);

              setTimeout(function () {
                releaseF3();
                releaseA3();
                releaseC4();
              }, 1000);
            })
            .catch((error) => {
              console.error("Error loading audio for F major chord:", error);
            });
        }, 500);
      }, 1000);
    })
    .catch((error) => {
      console.error("Error loading audio for C major chord:", error);
    });
});
