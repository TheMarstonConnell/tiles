let field;
let patterns = [];
let colors = []

const MAP = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

const from_b58 = function(S,A){var d=[],b=[],i,j,c,n;for(i in S){j=0,c=A.indexOf(S[i]);if(c<0)return undefined;c||b.length^i?i:b.push(0);while(j in d||c){n=d[j];n=n?n*58+c:c;c=n>>8;d[j]=n%256;j++}}while(j--)b.push(d[j]);return new Uint8Array(b)};

function preload() {
    
    patterns = [
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.rect(0, height / 9 * 3, width, height  / 9 * 3)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.rect(width / 9 * 3, 0, width / 9 * 3, height)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.rect(0, 0, width / 2, height)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.rect(width / 2, 0, width / 2, height)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.rect(0, 0, width, height / 2)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.rect(0, height / 2, width, height / 2)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.circle(width / 2, height / 2, width / 2, height / 2)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.rect(0, 0, width, height)
            tp.fill(colors[0]);
            tp.circle(width / 2, height / 2, width / 2, height / 2)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.rect(0, 0, width, height)
            tp.fill(colors[2]);
            tp.circle(width / 2, height / 2, width / 2, height / 2)
        },
        (tp, width, height, colors) => { //beige half slant
            tp.fill(colors[1]);
            tp.triangle(0, 0, width, height, 0, height)
        },
        (tp, width, height, colors) => { 
            tp.fill(colors[1]);
            tp.triangle(0, 0, width, 0, 0, height)
        },
        (tp, width, height, colors) => { //beige half slant
            tp.fill(colors[1]);
            tp.triangle(width, 0, width, height, 0, height)
        },
        (tp, width, height, colors) => { 
            tp.fill(colors[1]);
            tp.triangle(width, 0, 0, 0, width, height)
        },
        (tp, width, height, colors) => { //beige triangle
            tp.fill(colors[1]);
            tp.triangle(0, 0, width, height / 2, 0, height)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.triangle(width, 0, 0, height / 2, width, height)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.triangle(0, height, width / 2, 0, width, height)
        },(tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.triangle(0, 0, width / 2, height, width, 0)
        },
        (tp, width, height, colors) => { //beige short triangle
            tp.fill(colors[1]);
            tp.triangle(0, 0, width / 2, height / 2, 0, height)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.triangle(width, 0, width / 2, height / 2, width, height)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.triangle(0, height, width / 2, height / 2, width, height)
        },(tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.triangle(0, 0, width / 2, height / 2, width, 0)
        },
        (tp, width, height, colors) => { //beige half circle
            tp.fill(colors[1]);
            tp.circle(0, height / 2, width, height)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.circle(width, height / 2, width, height)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.circle(width / 2, 0, width, height)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.circle(width / 2, height, width, height)
        },
        (tp, width, height, colors) => { // green half circle
            tp.fill(colors[1]);
            tp.rect(0, 0, width, height)
            tp.fill(colors[0]);
            tp.circle(0, height / 2, width, height)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.rect(0, 0, width, height)
            tp.fill(colors[0]);
            tp.circle(width, height / 2, width, height)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.rect(0, 0, width, height)
            tp.fill(colors[0]);
            tp.circle(width / 2, 0, width, height)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.rect(0, 0, width, height)
            tp.fill(colors[0]);
            tp.circle(width / 2, height, width, height)
        },
        (tp, width, height, colors) => { //black half circle
            tp.fill(colors[1]);
            tp.rect(0, 0, width, height)
            tp.fill(colors[2]);
            tp.circle(0, height / 2, width, height)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.rect(0, 0, width, height)
            tp.fill(colors[2]);
            tp.circle(width, height / 2, width, height)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.rect(0, 0, width, height)
            tp.fill(colors[2]);
            tp.circle(width / 2, 0, width, height)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.rect(0, 0, width, height)
            tp.fill(colors[2]);
            tp.circle(width / 2, height, width, height)
        },
        (tp, width, height, colors) => { // primary quater circle
            tp.fill(colors[1]);
            tp.rect(0, 0, width, height)
            tp.fill(colors[0]);
            tp.circle(0, 0, width * 2, height * 2)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.rect(0, 0, width, height)
            tp.fill(colors[0]);
            tp.circle(width, 0, width * 2, height * 2)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.rect(0, 0, width, height)
            tp.fill(colors[0]);
            tp.circle(width, height, width * 2, height * 2)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.rect(0, 0, width, height)
            tp.fill(colors[0]);
            tp.circle(0, height, width * 2, height * 2)
        },
        (tp, width, height, colors) => { // secondary quater circle
            tp.fill(colors[1]);
            tp.circle(0, 0, width * 2, height * 2)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.circle(width, 0, width * 2, height * 2)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.circle(width, height, width * 2, height * 2)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.circle(0, height, width * 2, height * 2)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.quad(width / 2, 0, width, height / 2, width / 2, height, 0, height / 2)
        },
        (tp, width, height, colors) => {
            tp.fill(colors[1]);
            tp.rect(0, 0, width, height)
            tp.fill(colors[2]);
            tp.quad(width / 2, 0, width, height / 2, width / 2, height, 0, height / 2)
        },
        (tp, width, height, colors) => { // diamond
            tp.fill(colors[0]);
            tp.rect(0, 0, width, height)
            tp.fill(colors[1]);
            tp.circle(width / 2, height / 2, width, height)
        },
        (tp, width, height, colors) => { // primary quater circle with dot
            tp.fill(colors[1]);
            tp.rect(0, 0, width, height)
            tp.fill(colors[0]);
            tp.circle(0, 0, width * 2, height * 2)
            tp.fill(colors[0]);
            tp.circle(width - width / 6, height - height / 6, width / 4, height / 4)
        },
        // (tp, width, height, colors) => {
        //     tp.fill(colors[1]);
        //     tp.rect(0, 0, width, height)
        //     tp.fill(colors[0]);
        //     tp.circle(width, 0, width * 2, height * 2)
        // },
        // (tp, width, height, colors) => {
        //     tp.fill(colors[1]);
        //     tp.rect(0, 0, width, height)
        //     tp.fill(colors[0]);
        //     tp.circle(width, height, width * 2, height * 2)
        // },
        // (tp, width, height, colors) => {
        //     tp.fill(colors[1]);
        //     tp.rect(0, 0, width, height)
        //     tp.fill(colors[0]);
        //     tp.circle(0, height, width * 2, height * 2)
        // },
    ]

    colors = [
        [
            '#729C65',
            "#D4BE9A",
            "#212526",
        ],
        [
            "#576CA8",
            "#302B27",
            "#F5F3F5",
        ],
        [
            "#CEB3AB",
            "#B49A67",
            "#C4C6E7",
        ],
        [
            "#B2B09B",
            "#43AA8B",
            "#DB504A",
        ],
        [
            "#828E82",
            "#AAAE8E",
            "#E0E0E0",
        ]
    ]
    
}

function setup() {

    let l = 600;
    let border = 40;
    let k = l - border;
    field = genStaticField(k, k)

    createCanvas(l, l);
    let tiles = createGraphics(k, k);

    background("#535351")
    // console.log("Done generating field...")

    tiles.blendMode(OVERLAY);

    pg = createGraphics(k, k);

    let tw = Math.floor(fxrand() * 4) + 2

    colorChoice = Math.floor(fxrand() * colors.length)

    for (let x = 0; x < tw; x++) {
        for (let y = 0; y < tw; y++) {
            tile(tiles, k / tw * x, k / tw * y, k / tw, colorChoice)
        }
    }

    // console.log("Done generating tiles...")



    for (let x = 0; x < k; x++) {
        for (let y = 0; y < k; y++) {
            let f = field[x][y] * 255
            let c = color(f, f, f, 15)
            pg.set(x, y, c)
        }
    }
    pg.updatePixels()
    pg.filter(BLUR, 1.5)
    tiles.image(pg, 0, 0)

    image(tiles, border / 2, border / 2)

    // console.log("Done generating static...")

    fill("#838381");
    
    text(`unit ${CryptoJS.MD5(fxhash)}`, 8, l - 6);

}


function genStaticField(width, height) {
    field = []
    for (let a = 0; a < width; a++) {
        f = []
        for (let b = 0; b < height; b++) {
            f[b] = fxrand()
        }
        field[a] = f
    }
    return field
}

function buildTilePattern(pattern, width, height, c) {
    let tp = createGraphics(width, height)
    tp.noStroke()
    let primary = colors[c][0]
    tp.fill(primary);
    tp.rect(0, 0, width, height)

    let secondary = colors[c][1]

    let tertiary = colors[c][2]

    let p = patterns[pattern]
    p(tp, width, height, [primary, secondary, tertiary])
    return tp
}
  
function tile(m, x, y, size, c) {
    noStroke()
    let ts = fxrand()
    let pp = Math.floor(ts * patterns.length)
    let t = buildTilePattern(pp, size, size, c)
    m.image(t, x, y)

    let s = 2

    m.strokeWeight(s);
    m.strokeCap(SQUARE);
    let xOff = s / 2

    // stroke(10)
    m.stroke('rgba(255,255,255,0.8)');

    m.line(x + xOff, y, x + xOff, y + size);
    m.line(x, y + xOff, x + size, y + xOff);
    m.stroke('rgba(0,0,0,0.2)');
    m.line(x - xOff + size, y, x + size - xOff, y + size);
    m.line(x, y + size - xOff, x + size, y + size - xOff);
}
