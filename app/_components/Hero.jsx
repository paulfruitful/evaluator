import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Mulish } from 'next/font/google';
import {
  SignInButton,
  SignedIn,
  SignUp,
  SignedOut,
  UserButton,
  SignUpButton
} from '@clerk/nextjs'

const mulish=Mulish({subsets:['latin'],weight:['200','300','600']})
const Hero = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30; // Adjust camera position

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x4F46E5); // Set background color to purple
    mountRef.current.appendChild(renderer.domElement);

    // Star creation with varying sizes and initial positions
    const starGeometry = new THREE.SphereGeometry(0.1, 24, 24);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Use MeshBasicMaterial for white stars

    const stars = []; // Array to hold star objects
    const trails = []; // Array to hold trail objects

    function addStar() {
      const star = new THREE.Mesh(starGeometry, starMaterial);
      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(50)); // Adjust range for spread
      star.position.set(x, y, z);
      star.scale.setScalar(Math.random() * 1.5); // Randomly scale stars
      scene.add(star);
      stars.push(star); // Add to stars array for animation

      // Create a trail for each star
      const trailLength = 10;
      const trailGeometry = new THREE.BufferGeometry();
      const trailVertices = new Float32Array(trailLength * 3); // 3 vertices per point
      trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailVertices, 3));
      const trailMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
      const trail = new THREE.Line(trailGeometry, trailMaterial);
      scene.add(trail);
      trails.push(trail); // Add to trails array for animation
    }

    Array(200).fill().forEach(addStar);

    // Lighting
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
    scene.add(ambientLight);

    // Animation loop with twinkling effect, slight movement, and trails
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the scene for animation
      scene.rotation.y += 0.001;

      stars.forEach((star, index) => {
        // Twinkling effect: randomize opacity
        star.material.opacity = Math.abs(Math.sin(Date.now() * 0.001 + star.position.x));

        // Slight movement effect
        star.position.x += (Math.random() - 0.5) * 0.001; // Random small movement in X
        star.position.y += (Math.random() - 0.5) * 0.001; // Random small movement in Y

        // Update trail position
        const trail = trails[index];
        const positions = trail.geometry.attributes.position.array;

        // Shift positions for motion trail effect
        for (let i = positions.length - 3; i > 0; i -= 3) {
          positions[i] = positions[i - 3];
          positions[i + 1] = positions[i - 2];
          positions[i + 2] = positions[i - 1];
        }

        // Set the first vertex position to the current star position
        positions[0] = star.position.x;
        positions[1] = star.position.y;
        positions[2] = star.position.z;

        trail.geometry.attributes.position.needsUpdate = true;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Update renderer and camera on window resize
    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    // Clean up on unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ overflow: 'hidden' }}>
    

     <div
        
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          zIndex: 2,
        }}
      >
        <SignedOut>      
            <h1 style={{marginBottom:'-30px'}} className='text-[3rem] lg:text-[6rem] text-green-100 text-white  z-2 font-bold'>Automate </h1>
        <p  className='lg:text-xl lg:mt-1 mt-[30px]  text-lg z-2 '>Evaluation & Recommendations of Tutors</p>
     </SignedOut>
   <SignedIn>
 <div className="flex-col w-full flex">
        <h1 style={{marginBottom:'-30px'}} className='text-[3rem] lg:text-[6rem] text-green-100 text-white  z-2 font-bold'>Get </h1>
        <p  className='lg:text-xl lg:mt-1 mt-[30px]  text-lg z-2 '>Evaluation & Recommendations of Tutors</p>

     <a
          href="/dashboard"
          className={`bg-white self-center mt-6 font-extrabold rounded-lg ${mulish.className} p-2 lg:p-3 text-sm lg:text-lg font-semibold border-2 border-white border-solid flex shadow-lg text-indigo-600`}>
              Get Started 🚀
            </a> 
             </div>
        </SignedIn>


        </div> 
  </div>;
};

export default Hero;
