function cone(radius, height) {
  let r2 = radius * radius;
  let l = Math.sqrt(radius * radius + height * height);
  let volume = (Math.PI * r2 * height) / 3;
  let surface = Math.PI * radius * l + Math.PI * r2;

  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${surface.toFixed(4)}`);
}
cone(3.3, 7.8);
