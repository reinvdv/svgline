let kaders = document.querySelectorAll('.deel');
const svgns = "http://www.w3.org/2000/svg";

const maakSVGs = () =>
{
  for (let i=0; i<kaders.length; i++){
    //bepaal afmeting sectie
    let breedte = kaders[i].offsetWidth;
    let hoogte = kaders[i].offsetHeight;
    let omtrek = breedte+breedte+hoogte+hoogte;

    //svg maken
    let fig = document.createElementNS(svgns, 'svg');
    let rh  =document.createElementNS(svgns, 'rect');
    //stijl beschrijven
    let stijlString = 'stroke-dasharray:'+omtrek+'; stroke-dashoffset:'+omtrek+';';
    let stijlStringHover = 'stroke-dasharray:'+omtrek+'; stroke-dashoffset:'+0+';';
    rh.setAttribute('width', breedte);
    rh.setAttribute('height', hoogte);
    rh.setAttribute('class', 'deel__rechthoek');
    rh.setAttribute('style', stijlString);
    rh.addEventListener('mouseover', () => {
      rh.setAttribute('style', stijlStringHover);
    });
    rh.addEventListener('mouseout', () => {
      rh.setAttribute('style', stijlString);
    });

    fig.setAttribute('class', 'deel__kader');
    fig.setAttribute('width', breedte);
    fig.setAttribute('height', hoogte);
    //recht hoek toevoegen aan svg
    fig.appendChild(rh);
    //
    kaders[i].appendChild(fig);
  }

}
const verwijderSVGs = () => {
  let  alleSVGs = document.querySelectorAll('.deel__kader');
  while(alleSVGs[0]) {
    alleSVGs[0].parrentNode.removeChild(alleSVGs[0]);
    alleSVGs = document.querySelectorAll('.deel__kader');

  }
}

maakSVGs();

window.addEventListener('resize', () => {
  verwijderSVGs();
  maakSVGs();
})
