/// [Settings Variables]
const FRAME_RATE = 30; // frames per second

const INFO_BOX_WIDTH = 1350;
const INFO_BOX_HEIGHT = 850;

const BOAT_SIZE = 100; // pixels

const TRANSITION_DURATION = 60; // frames

const CURVE_EDIT_MODE = false;
const SHOW_DEBUG_INFO = false;

/// [Data Variables]

const paths = [
    [1736, 1065, 1688, 1049, 1598, 968, 1610, 910],
    [1610, 910, 1598, 968, 2021, 1787, 590, 1619],
    [590, 1619, 710, 1580, 857, 1427, 878, 1355],
    [878, 1355, 806, 1379, 746, 1322, 710, 1286],
    [710, 1286, 668, 1193, 596, 932, 680, 806],
    [680, 806, 632, 863, 581, 905, 521, 935],
    [521, 935, 434, 869, 410, 761, 401, 683],
    [401, 683, 350, 806, 371, 908, 521, 935],
    [521, 935, 689, 923, 794, 968, 869, 1070],
    [869, 1070, 902, 1115, 932, 1190, 977, 1253],
    [977, 1253, 1019, 1331, 1001, 1418, 917, 1457],
    [917, 1457, 827, 1490, 725, 1481, 653, 1460],
    [653, 1460, 890, 1445, 1223, 1391, 1286, 1085],
    [1286, 1085, 1286, 1136, 1283, 1178, 1322, 1217]
]

const data = [
    {
        title: "Troy",
        description: `At the end of the Trojan War, Odysseus
            and his men set off back to Ithaca.`,
        crew: 600
    },
    {
        title: "Ismarus",
        description: `The land of the Cicones, where Odysseus
            and his crew raid the city. However, they
            get too greedy, and when Ciconean
            reinforcements arrive, Odysseus loses
            six men to every ship.`,
        crew: 528
    },
    {
        title: "The Lotus-Eaters",
        description: `Three scouts are sent to explore the land
        and are given a halucinogenic drug by
        the Lotus-Eaters. Odysseus has to drag
        them back to the ship and tie them down
        to prevent them from staying with the
        Lotus-Eaters.`,
        crew: 528
    },
    {
        title: "The Cyclops",
        description: `The Cyclops, Polyphemus, traps
        Odysseus and some of his men in a cave.
        Cunning Odysseus blinds the Cyclops
        and they escape, but not before angered
        Polyphemus curses Odysseus.`,
        crew: 522
    },
    {
        title: "Aeolia",
        description: `King Aeolus puts all but the west wind
        in a bag so that Odysseus can sail home;
        however his crew, jealous of the treasures
        Odysseus has revieved during the
        journey, open the bag, and the freed
        winds blow them back to Aeolia.`,
        crew: 522
    },
    {
        title: "The Laestrygonians",
        description: `Odysseus and his crew meet the
        Laestrygonians, a group of cannibal
        giants who destroy all but one of the
        ships. Odysseus and the remaining crew
        sail away in terror.`,
        crew: 50
    },
    {
        title: "Circe",
        description: `After Circe turns part of his crew into
        swine, Odysseus, with the help of
        Hermes, resists her magic, and Circe falls
        in love with him. After Circe turns the
        crew back, they stay on the island for a
        year. As they are leaving, Elpenor, a crew
        member, falls off the roof and dies.`,
        crew: 49
    },
    {
        title: "Land of the Dead",
        description: `Odysseus follows Circe's instruction to
        summon the spirits of the dead and speak
        with the prophet Tiresias. After Tiresias
        tells Odysseus how to get home, he sees
        his mother and realises how much
        distress his absence is causing to his
        family.`,
        crew: 49
    },
    {
        title: "Circe (Again)",
        description: `After returning to Circe's island,
        Odysseus and his crew mourn and bury
        Elpenor. They then set sail once more
        after receiving more advice from Circe.`,
        crew: 49
    },
    {
        title: "The Sirens",
        description: `Odysseus has his crew tie him to the mast
        of the ship so that he can listen to the
        Sirens' song safely. The crew all plug
        their ears with beeswax so as to not be
        lured in by the sirens.`,
        crew: 49
    },
    {
        title: "Scylla and Charybdis",
        description: `Odysseus has to face the choice between
        two dangers: Scylla, a six-headed
        monster who will eat a crew member
        with each head, or Charybdis, a giant
        whirlpool that could swallow the whole
        ship at any moment. He chooses Scylla
        and loses six men.`,
        crew: 43
    },
    {
        title: "The Cattle of the Sun",
        description: `Despite Odysseus's firm instructions, the
        crew slaughters the sacred cattle of the
        Sun God Helios while Odysseus is
        sleeping. After they set sail, Zeus sends a
        strong lightning bolt down to the ship,
        smashing it to pieces. Only Odysseus
        survives and is washed up on the shore
        of Ogygia.`,
        crew: undefined
    },
    {
        title: "Ogygia",
        description: `Odysseus is held on the island of the
        nymph Calypso for seven years.
        Eventually, the gods order Calypso to
        free him, and Odysseus leaves on a raft.
        After days at sea a storm arrives, and the
        raft is smashed to pieces.`,
        crew: undefined
    },
    {
        title: "Phaeacia",
        description: `Odysseus washes up on the island of the
        Phaeacians, where he is taken to the king
        by Princess Nausicaa. He tells the king of
        his adventures, and the Phaeacians agree
        to sail him home to Ithaca. The king
        gives Odysseus so many gifts that he has
        to raise taxes to pay for them.`,
        crew: undefined
    },
    {
        title: "Ithaca",
        description: `Odysseus finally returns home but
        cannot reveal himself straight away. With
        the help of his son Telemachus, he devises
        a plan to kill the suitors who are courting
        his wife Penelope. After revealing
        himself, Odysseus murders all the suitors
        and reclaims his throne.`,
        crew: undefined
    },
]

/// [Get all necessary DOM elements]
const title = document.getElementById('title');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

/// [Load iamges]
const mapImg = new Image();
mapImg.src = 'map.png';

const boatImg = new Image();
boatImg.src = 'boat.png';

const scrollImg = new Image();
scrollImg.src = 'scroll.png';

const compassImg = new Image();
compassImg.src = 'compass.jpg';

/// [State variables]
let currentPoint = getCookie('currentPoint') ? parseInt(getCookie('currentPoint')) : 0;

let boatX = currentPoint < paths.length ? paths[currentPoint][0] : paths[paths.length - 1][6];
let boatY = currentPoint < paths.length ? paths[currentPoint][1] : paths[paths.length - 1][7];

let isTransitioning = false;
let transitionProgress = TRANSITION_DURATION; // frames
let isReversed = false;

let bezier = paths[paths.length - 1].slice();
let bezierPrev = paths[paths.length - 1];

/// [Main Loop]
setInterval(() => {
    drawMapBase();

    if (isTransitioning) {
        transitionProgress++;

        console.log(`Transitioning... (${Math.round(transitionProgress / TRANSITION_DURATION * 100)}%)`);

        if (transitionProgress >= TRANSITION_DURATION) {
            isTransitioning = false;
            console.log("Transition complete");
        }

        console.log(`Getting point on bezier curve idx ${isReversed ? currentPoint - 1 : currentPoint}`);
        [boatX, boatY] = getPointOnBezier(
            isReversed ? paths[currentPoint + 0] : paths[currentPoint - 1],
            isReversed ? transitionProgress / TRANSITION_DURATION * -1 + 1 : transitionProgress / TRANSITION_DURATION
        );
    }

    if (CURVE_EDIT_MODE) {
        for (let i = 1; i <= paths.length - 2; i++) {
            drawBezierCurve(paths[i], 2, 'grey');
            drawCrosshair(paths[i][0], paths[i][1], 20, 'white');
        }

        drawBezierCurve(bezierPrev, 5, 'gray');
        drawCrosshair(bezierPrev[0], bezierPrev[1], 20, 'gray');

        drawBezierCurve(bezier, 5, 'red');
        drawCrosshair(bezier[0], bezier[1], 20, 'red');
        drawCrosshair(bezier[2], bezier[3], 20, 'orange');
        drawCrosshair(bezier[4], bezier[5], 20, 'purple');
        drawCrosshair(bezier[6], bezier[7], 20, 'blue');

        drawInfoBox("Bezier Curve Edit Mode", `Shift+Click: Move start point (red)
Alt+Shift+Click: Move start control point (orange)
Ctrl+Click: Move end point (blue)
Alt+Ctrl+Click: Move end control point (purple)
Alt+Click: Reverse curve direction
Current Bezier Points: [${bezier.toString()}]
        `);

        return;
    }

    for (let i = 0; i <= paths.length - 1; i++) {
        if (i >= currentPoint) {
            drawBezierCurve(paths[i], 4, 'rgba(104, 168, 210, 0.54)');
        } else {
            drawBezierCurve(paths[i], 5, 'rgba(27, 52, 99, 1)');
            drawCrosshair(paths[i][0], paths[i][1], 20, 'rgba(5, 71, 66, 1)');
        }
        // drawCrosshair(paths[i][0], paths[i][1], 20, 'white');
    }

    // if (currentPoint < paths.length) drawBezierCurve(paths[currentPoint], 7, 'rgba(9, 28, 50, 1)');
    // if (currentPoint != 0) drawBezierCurve(paths[currentPoint - 1], 7, 'rgba(9, 28, 50, 1)');

    drawBoat(boatX, boatY);

    setTitle(data[currentPoint].title);
    drawInfoBox(
        data[currentPoint].title,
        data[currentPoint].description,
        data[currentPoint].crew,
        transitionProgress / TRANSITION_DURATION
    );

    if (SHOW_DEBUG_INFO) {
        drawDebugInfoBox();
    }
}, 1000 / FRAME_RATE);


function next() {
    // if (isTransitioning) return;
    if (currentPoint >= data.length - 1) return;

    isTransitioning = true;
    isReversed = false;
    transitionProgress = 0;

    currentPoint++;
    setCookie('currentPoint', currentPoint, 30);
}

function prev() {
    // if (isTransitioning) return;
    if (currentPoint <= 0) return;

    isTransitioning = true;
    isReversed = true;
    transitionProgress = 0;

    currentPoint--;
    setCookie('currentPoint', currentPoint, 30);
}


function drawMapBase() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw map
    ctx.drawImage(mapImg, 0, 0, canvas.width, canvas.height);

    // Draw compass
    ctx.globalCompositeOperation = 'darken';
    ctx.drawImage(compassImg, 2450, 1550, 500, 500);
    ctx.globalCompositeOperation = 'source-over';

    // Draw title
    ctx.fillStyle = 'black';
    ctx.font = '220px spartacus';
    const titleLines = "Odysseus's\nJourney".split('\n');
    for (let i = 0; i < titleLines.length; i++) {
        ctx.fillText(titleLines[i], 70, 230 + i * 170);
    }
}

function drawBoat(x, y) {
    ctx.drawImage(boatImg, x - BOAT_SIZE / 2, y - BOAT_SIZE / 1.1, BOAT_SIZE, BOAT_SIZE);
}

function drawInfoBox(title, content, crew, opacity = 1.0) {
    ctx.drawImage(scrollImg, (2970 - INFO_BOX_WIDTH), 10, INFO_BOX_WIDTH, INFO_BOX_HEIGHT);

    // ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    // ctx.beginPath();
    // ctx.roundRect(42, 44, INFO_BOX_WIDTH, INFO_BOX_HEIGHT, 30);
    // ctx.fill();

    // ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    // ctx.beginPath();
    // ctx.roundRect(30, 30, INFO_BOX_WIDTH, INFO_BOX_HEIGHT, 30);
    // ctx.fill();
    // ctx.strokeStyle = 'black';
    // ctx.lineWidth = 4;
    // ctx.stroke();

    ctx.fillStyle = `rgba(0, 0, 0, ${opacity * 0.8})`
    ctx.font = '100px spartacus';
    ctx.fillText(title, 3235 - INFO_BOX_WIDTH, 210);

    ctx.font = 'bold 50px Ariel';
    const lines = content.split('\n');
    let lineHeight = 62;
    for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i].replaceAll(/  +/gm, '').replaceAll(/(^\s+)|(\s+$)/g, ''), 3235 - INFO_BOX_WIDTH, 280 + (i * lineHeight));
    }
    if (crew !== undefined) {
        ctx.fillStyle = `rgba(0, 0, 200, ${opacity * 0.8})`
        ctx.fillText(`Crew Remaining: ${crew}`, 3235 - INFO_BOX_WIDTH, 280 + (lines.length * lineHeight) + 10);
    }
}

function setTitle(newTitle) {
    title.innerText = newTitle;
}

function drawBezierCurve(b, width, color = 'green') {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;

    ctx.beginPath();
    ctx.moveTo(b[0], b[1]);
    ctx.bezierCurveTo(b[2], b[3], b[4], b[5], b[6], b[7]);
    ctx.stroke();
}

function drawCrosshair(x, y, size, color = 'blue') {
    ctx.strokeStyle = color;
    // draw crosshair
    ctx.beginPath();
    ctx.moveTo(x - size, y);
    ctx.lineTo(x + size, y);
    ctx.moveTo(x, y - size);
    ctx.lineTo(x, y + size);
    ctx.stroke();
}

function drawDebugInfoBox() {
    const debugInfo = `Boat Position: (${Math.round(boatX)}, ${Math.round(boatY)})
Current Point: ${currentPoint}
Transitioning: ${isTransitioning}
Transition Progress: ${transitionProgress}/${TRANSITION_DURATION}
Boat pos: ${boatX}, ${boatY}
`;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillStyle = 'black';
    ctx.font = '40px monospace';
    const lines = debugInfo.split('\n');
    let lineHeight = 45;
    for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], 30, 650 + (i * lineHeight));
    }
}

canvas.addEventListener('click', (event) => {
    const x = (event.clientX * 3) - 25;
    const y = (event.clientY * 3) - 175;

    console.log(`Canvas clicked at (${x}, ${y})`);

    if (event.shiftKey) {
        if (event.altKey) {
            bezier[2] = x;
            bezier[3] = y;
        } else {
            bezier[0] = x;
            bezier[1] = y;
        }
    } else if (event.ctrlKey) {
        if (event.altKey) {
            bezier[4] = x;
            bezier[5] = y;
        } else {
            bezier[6] = x;
            bezier[7] = y;
        }
    } else if (event.altKey) {
        const b = bezier.slice();
        bezier[0] = b[6];
        bezier[1] = b[7];
        bezier[2] = b[4];
        bezier[3] = b[5];
        bezier[4] = b[2];
        bezier[5] = b[3];
        bezier[6] = b[0];
        bezier[7] = b[1];
    } else {
        console.log(bezier.toString());
    }

    // drawCrosshair(x, y, 50, 'blue');
});



/**
 * Evaluates a cubic Bezier curve at a given progress value.
 * 
 * @param {number[]} bezier - Array of 8 numbers: [x0, y0, x1, y1, x2, y2, x3, y3]
 * @param {number} t - Progress value between 0 and 1
 * @returns {{ x: number, y: number }} - Point on the curve at progress t
 */
function getPointOnBezier(bezier, t) {
    if (!Array.isArray(bezier) || bezier.length !== 8) {
        throw new Error("Bezier curve must be an array of 8 numbers.");
    }
    if (typeof t !== "number" || t < 0 || t > 1) {
        throw new Error("Progress (t) must be a number between 0 and 1.");
    }

    const [x0, y0, x1, y1, x2, y2, x3, y3] = bezier;

    // Cubic Bezier formula
    const oneMinusT = 1 - t;
    const oneMinusT2 = oneMinusT * oneMinusT;
    const oneMinusT3 = oneMinusT2 * oneMinusT;
    const t2 = t * t;
    const t3 = t2 * t;

    const x =
        oneMinusT3 * x0 +
        3 * oneMinusT2 * t * x1 +
        3 * oneMinusT * t2 * x2 +
        t3 * x3;

    const y =
        oneMinusT3 * y0 +
        3 * oneMinusT2 * t * y1 +
        3 * oneMinusT * t2 * y2 +
        t3 * y3;

    return [x, y];
}

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) == 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}