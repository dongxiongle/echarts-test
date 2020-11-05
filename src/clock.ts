const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d');
const FONT_HEIGHT = 15;
const MARGIN = 35;
const HAND_TRUNCATION = canvas.width / 25;
const HOUR_HAND_TRUNCATION = canvas.width / 10;
const NUMBERAL_SPACING = 20;
const RADIUS = canvas.width / 2 - MARGIN;
const HAND_RADIUS = RADIUS + NUMBERAL_SPACING;

function drawCircle() {
  context.beginPath();
  context.arc(canvas.width / 2, canvas.height / 2, RADIUS, 0, Math.PI * 2, true);
  context.stroke();
}
function drawNumerals() {
  const numerals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let angle = 0;
  let numeralWidth = 0;
  numerals.forEach((numeral: number) => {
    angle = Math.PI / 6 * (numeral - 3);
    numeralWidth = context.measureText(String(numeral)).width;
    context.fillText(String(numeral), canvas.width / 2 + Math.cos(angle) * HAND_RADIUS - numeralWidth / 2, canvas.height / 2 + Math.sin(angle) * HAND_RADIUS + FONT_HEIGHT / 3);
  });
}

function drawCenter() {
  context.beginPath();
  context.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI, true);
  context.fill();
}

function drawHan(loc: number, isHour: boolean) {
  const angle = Math.PI * 2 * loc / 60 - Math.PI * 2;
  const handRadius = isHour ? RADIUS - HAND_TRUNCATION - HOUR_HAND_TRUNCATION : RADIUS - HAND_TRUNCATION;
  context.moveTo(canvas.width / 2, canvas.height / 2);
  context.lineTo(canvas.width / 2 + Math.cos(angle) * handRadius, canvas.height / 2 + Math.sin(angle) * handRadius);
  context.stroke();
}