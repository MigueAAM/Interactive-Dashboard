/* 
Here we import the js file for our LikeButton component
import + nameofcomponent + from + @/+path to component file
*/
import LikeButton from "@/components/LikeButton";

export default function Home() {
  return (
    <main style={{ maxWidth: '600px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      
      {/* --- SERVER COMPONENT SECTION (Static) --- */}
      <section>
        <h1>Welcome to My Portfolio</h1>
        <h2>Hello, I am a Web Developer</h2>
        <p>
          Everything you are reading right now was rendered on the server. 
          It makes the site load incredibly fast and helps search engines 
          read the content instantly!
        </p>
        <ul>
          <li>Skill 1: HTML & CSS</li>
          <li>Skill 2: JavaScript</li>
          <li>Skill 3: Next.js Fundamentals</li>
        </ul>
      </section>

      {/* --- CLIENT COMPONENT SECTION (Interactive) --- */}
      <LikeButton />
      
      
    </main>
  );
}
