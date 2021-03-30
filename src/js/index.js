import '/scss/main.scss';
const frag = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform sampler2D displacement;
varying vec2 v_texcoord;

vec4 rgb(float r, float g, float b) {
    return vec4(r/255.0, g/255.0, b/255.0, 1.0);
}

void main(void) {
    vec2 uv = v_texcoord;
    
    vec2 point = fract(uv* 0.1 + u_time*0.05);
    vec4 dispColor = texture2D(displacement, point);

    vec4 color1 = rgb(255.0, 97.0, 236.0);
    vec4 color2 = rgb(148.0, 41.0, 255.0);
    vec4 color3 = rgb(255.0, 216.0, 74.0);
    vec4 color4 = rgb(20.0, 255.0, 232.0);
    
    float dispY =  mix(-0.5, 0.5, dispColor.r);
    float dispX = mix(-0.5, 0.5, dispColor.r);
    
    vec4 color = mix(
        mix(color1, color2, uv.x + dispX), 
        mix(color3, color4, uv.x - dispX), 
        uv.y + dispY
    );
    
    gl_FragColor = color;
}
`

import { Canvas, glsl } from 'glsl-canvas-js';
import image from '/images/displacement1.jpg';
const canvas = document.querySelector('canvas');
const sandbox = new Canvas(canvas, {
    // vertexString: ``,
    // fragmentString: ``
});
sandbox.load(frag)
sandbox.setUniform('displacement', image)