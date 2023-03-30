import {$} from "../../core/dom";


export function resizeHandler(event, $root){
    const $resizer = $(event.target);
    const $parent = $resizer.closest('[data-type="resizable"]');
    const coords = $parent.getBoundingClientRect();
    const resizeType = event.target.dataset.resize;

    $resizer.addClass('active');

    let valueX;
    let valueY;


    document.onmousemove = e => {
      $resizer.css({opacity:1})
      if (resizeType === 'col') {
        const deltaX = e.pageX - coords.right;
        valueX = coords.width + deltaX;
        $resizer.css({right: -deltaX + 'px'});
      } else {
        const deltaY = e.pageY - coords.bottom;
        valueY = coords.height + deltaY;
        $resizer.css({bottom: -deltaY + 'px'});
      }
    }

    document.onmouseup = e => {
      document.onmousemove = null;
      document.onmouseup = null;
      $resizer.removeClass('active');
      $resizer.css({opacity: 0,right:0,bottom:0});

      if (resizeType==='col'){
        $parent.css({width: valueX + 'px'});
        $root
          .findAll(`[data-col=${$parent.data.col}]`)
          .forEach(el => el.style.width = valueX + 'px');
      } else {
        $parent.css({height : valueY + 'px'});
      }
    }
}