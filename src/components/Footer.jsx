function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
            <div className="text-center text-sm leading-6 text-white md:text-left">
              <p>所属：無所属</p>
              <p>事務所住所：△△町△丁目△番地</p>
              <p>メールアドレス：masaru-aoyama@example.com</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LINE</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S15.33 9 14.5 9 13 9.67 13 10.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S8.33 9 7.5 9 6 9.67 6 10.5 6.67 12 7.5 12zm3.5 0c.83 0 1.5-.67 1.5-1.5S11.83 9 11 9 9.5 9.67 9.5 10.5 10.17 12 11 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.493v-9.294H9.688v-3.622h3.129V8.41c0-3.069 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.92c-1.5 0-1.791 1.096-1.791 2.57v2.252h3.592l-.467 3.622h-3.125V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">X</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-10 flex justify-center space-x-10 md:justify-start">
            <p className="text-sm leading-6 text-white">
              © {new Date().getFullYear()} 青山まさる後援会. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
