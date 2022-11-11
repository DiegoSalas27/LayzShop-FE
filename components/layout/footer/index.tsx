function Footer() {
  return (
    <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
      <div className="container flex px-3 py-8 ">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="flex w-full lg:w-1/2 ">
            <div className="px-3 md:px-0">
              <h3 className="font-bold text-gray-900">About</h3>
              <p className="py-4">
                Lazy Shop is the place where you will be able to find the product that you need, at the price that you need.
                We compare products between many stores and give you the best results.
              </p>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
            <div className="px-3 md:px-0">
              <h3 className="font-bold text-gray-900">Social</h3>
              <ul className="list-reset items-center pt-3">
                <li>
                  <a
                    className="inline-block no-underline hover:text-black hover:underline py-1"
                    href="#"
                  >
                    Follow us on Instagram (if we had one :D)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
