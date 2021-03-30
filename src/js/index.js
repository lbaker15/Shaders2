import '/scss/main.scss';
import { Canvas, glsl } from 'glsl-canvas-js';
import image1 from '/images/trails.jpg';
import image2 from '/images/flowers.jpg';
import image3 from '/images/light.jpg';

const canvas = document.querySelector("div.canvas-holder canvas")
const sandbox = new Canvas(canvas)

const calcSize = function () {
    let ww = window.innerWidth
    let wh = window.innerHeight
    let dpi = window.devicePixelRatio
    
    let s = Math.max(wh, ww + 200)
    
    canvas.width = s * dpi
    canvas.height = s * dpi
    canvas.style.width = s + "px"
    canvas.style.height = s + "px"
}
calcSize()  
window.addEventListener("resize", function () {
    calcSize()
})

const frag = `

#ifdef GL_ES
precision highp float;
#endif

#define SEGMENTS 32.0
#define PI 3.141592653589

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

uniform sampler2D image;

varying vec2 v_texcoord;

void main(void)
{
    vec2 uv = v_texcoord;
    uv *= 2.0;
    uv -= 1.0;
	
		// make mouse
		vec2 mouse = u_mouse / u_resolution;
    
    // get angle and radius
    float radius = length(uv) * mix(1.0, 2.0, 4.0);
    float angle = atan(uv.y, uv.x);
    
    // get a segment
    angle /= PI * 2.0;
    angle *= SEGMENTS;
    
    // repeat segment
    if (mod(angle, 2.0) >= 1.0) {
        angle = fract(angle);
    } else {
        angle = 1.0 - fract(angle);
    }
    
    angle += u_time * 0.5;
		// angle += (mouse.y + mouse.x);
    
    // unsquash segment
    angle /= SEGMENTS;
    angle *= PI * 2.0;
        
    vec2 point = vec2(radius * cos(angle), radius * sin(angle));
		point *= vec2(1.0, 1000.0 / 1500.0);
    point = fract(point);
    
    vec4 color = texture2D(image, point);
    
    gl_FragColor = color;
}

`
sandbox.load(frag)

const images = ["../images/trails.jpg", "../images/flowers.jpg", "../images/light.jpg"]
let current = 0;
canvas.addEventListener("click", function () {
  current += 1;
  if (current >= images.length) {
    current = 0
  }
  sandbox.setUniform("image", images[current])
})
sandbox.setUniform("image", images[current])
