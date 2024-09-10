const NumerosAleatorios = Array.from({ length: 5 }, () => Math.floor(Math.random() * 500));
const NumerosPequenos = NumerosAleatorios.filter(num => num < 250);
console.log('Números aleatórios:', NumerosAleatorios);
console.log('Números menores que 250:', NumerosPequenos);