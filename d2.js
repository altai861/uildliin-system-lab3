const d2ClearButton = document.getElementById('d2-clear-button');
const d2InstNumberInput = document.getElementById('d2-inst-number');
const d2InstInputsDiv = document.getElementById('d2-inst-input-div');
const d2CalculateButton = document.getElementById('d2-calculate-button');
let d2InstState = [];
function getProgramName(i) {
  const alphas = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const pres = Math.floor(i / 26); // Number of times we go over the alphabet
  const itself = i % 26; // The index in the alphabet

  // Generate the name based on pres and itself
  if (pres === 0) {
    return alphas[itself]; // If pres is 0, we just return the corresponding letter
  }

  return alphas[pres - 1] + alphas[itself];
}

d2ClearButton.addEventListener('click', () => {
  d2InstNumberInput.value = '';
  d2InstInputsDiv.innerHTML = '';
});

d2InstNumberInput.addEventListener('change', (e) => {
  d2InstInputsDiv.innerHTML = '';
  const instNum = e.target.value;

  for (let i = 0; i < instNum; i++) {
    const containerDiv = document.createElement('div');

    const newS = `
                <label for="d2-inst-${i}-speed">Заавар ${getProgramName(
      i
    )} ажиллах хурд</label>
                <input type="number" id="d2-inst-${i}-speed" />
                <label for="d2-inst-${i}-freq">Давтамж ${getProgramName(
      i
    )}</label>
                <input type="number" id="d2-inst-${i}-freq" />
                <br>
                <br>
            `;

    containerDiv.innerHTML = newS;

    d2InstInputsDiv.appendChild(containerDiv);
  }
});

d2CalculateButton.addEventListener('click', () => {
  const instNum = parseInt(d2InstNumberInput.value);
  d2InstState = [];

  if (!instNum) {
    alert('Утгуудыг бүрэн бөглөнө үү');
    return;
  }

  for (let i = 0; i < instNum; i++) {
    const ithInstSpeed = parseInt(
      document.getElementById(`d2-inst-${i}-speed`).value
    );

    const ithInstFreq = parseInt(
      document.getElementById(`d2-inst-${i}-freq`).value
    );

    if (!ithInstSpeed || !ithInstFreq) {
      alert('Утгуудыг бүрэн бөглөнө үү');
      return;
    }

    d2InstState.push([ithInstSpeed, ithInstFreq]);
  }

  console.log(d2InstState);
});
