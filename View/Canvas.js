class Canvas {

    constructor(gridView){
        this.gridView = gridView;
        this.canvas = document.querySelector('canvas');
        this.g = this.canvas.getContext('2d');

        const debounce = (func) => {
            let timer
            return (event) => {
              if (timer) { clearTimeout(timer) }
              timer = setTimeout(func, 100, event)
            }
        }
          
        window.addEventListener('resize', debounce(() => {
            this.resize();
        }))

        this.resize();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.gridView.resize(this.canvas, this.g);
    }
}