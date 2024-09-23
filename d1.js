const d1processesInputDiv = document.getElementById('d1-processes-input-div');
const d1ClearButton = document.getElementById('d1-clear-button');
const d1ProcessNumberInput = document.getElementById('d1-process-number');
const d1CalculateButton = document.getElementById('d1-calculate-button');

let d1ProcessesServiceTimes = [];

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

d1ProcessNumberInput.addEventListener('change', (e) => {
  d1processesInputDiv.innerHTML = '';
  const num = e.target.value;

  for (let i = 0; i < num; i++) {
    const containerDiv = document.createElement('div');

    const newS = `
            <label for="d1-process-${i}-service-time">Процесс ${getProgramName(
      i
    )} service time</label>
            <input type="number" id="d1-process-${i}-service-time" />
            <br>
            <br>
        `;

    containerDiv.innerHTML = newS;

    d1processesInputDiv.appendChild(containerDiv);
  }
});

d1ClearButton.addEventListener('click', () => {
  d1processesInputDiv.innerHTML = '';
  d1ProcessNumberInput.value = '';
});

d1CalculateButton.addEventListener('click', () => {
  const processNum = parseInt(d1ProcessNumberInput.value);
  d1ProcessesServiceTimes = [];
  if (!processNum) {
    alert('Утгуудыг бүрэн бөглөнө үү');
    return;
  }

  for (let i = 0; i < processNum; i++) {
    const ithProcess = parseInt(
      document.getElementById(`d1-process-${i}-service-time`).value
    );

    if (!ithProcess) {
      alert('Утгуудыг бүрэн бөглөнө үү');
      return;
    }

    d1ProcessesServiceTimes.push(ithProcess);
  }

  console.log(d1ProcessesServiceTimes);
});
