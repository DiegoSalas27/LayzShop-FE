/*
  AUTHOR: Diego Salas Noain
  FILENAME: index.tsx
  SPECIFICATION: 
    - Displays a banner with informative content
  FOR: CS 5364 Information Retrieval Section 001 
*/

/*
  NAME: Banner
  PARAMETERS: title
  PURPOSE: Display a banner with informative content
  PRECONDITION: None
  POSTCONDITION: A Banner is retrieved
*/

function Banner({ title }: any) {
  return (
    <div
      className="carousel relative container mx-auto"
      style={{ maxWidth: 1600 }}
    >
      <div className="carousel-inner relative overflow-hidden w-full">
        <div
          className="carousel-item absolute"
          style={{ height: "25vh", position: "static", opacity: 100 }}
        >
          <div
            className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80')`,
            }}
          >
            <div className="container mx-auto">
              <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                <p className="text-black text-2xl my-4">{title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
