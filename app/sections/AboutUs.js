import Image from "next/image";


/**
 * Represents the about me section
 * @returns About me section
 */
export default function AboutMeSection() {
    // The technologies
    const COLLABORATORS = [
      
      "Jai Burry",
      "Jonah Scott",
      "Jean-Pierre Nde-Forgwang",
      "Valentine Jingwa",
      "Nicholas Gonzalez",
      "Elvis Chizoba",
    
    ];
  
    /**
     * Represents an item component to be used within the sum of technologies section
     * @param {String} param0 The item to print out
     * @returns An item component
     */
    const Item = ({ children }) => {
      return (
        <div className="flex flex-row items-center">
          <p className="text-gray-400 font-normal text-lg">{children}</p>
        </div>
      );
    };
  
    return (
      <section className="flex flex-col gap-6 lg:w-[64rem] w-full lg:p-4">
        <h1 className="text-3xl font-semibold text-gray-50 w-full">About Us</h1>
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-col gap-8">
            <p className="text-gray-400 font-normal text-lg">
              Created as our SAIT Capstone Project.
            </p>
  
            <div className="flex flex-col gap-1 w-fit">
              <h2 className="text-gray-50 font-semibold text-lg">
                Collaborators
              </h2>
              <div className="grid grid-cols-3 w-full gap-1">
                {COLLABORATORS.map((person) => (
                  <Item key={person}>{person}</Item>
                ))}
              </div>
            </div>
  
            <p className="text-gray-400 font-normal text-lg">
              This projects was created in the span of 2 semesters, demonstrating our understanding of the concepts and technologies we have learned in the last 4 semesters at SAIT.
            </p>
          </div>
          
          <div className="hidden lg:block">
            <Image 
                className="filter brightness-250 " 
                src="/img/logo12.png" 
                alt="logo" width={400} height={400} />
          </div>
        </div>
        <style jsx>{`
            .image-container {
                width: 400px;
                height: 400px;
            }
            @media (max-width: 768px) {
                .image-container {
                    width: 100px;
                    height: 100px;
                }
                `}
        </style>

      </section>
    );
  }