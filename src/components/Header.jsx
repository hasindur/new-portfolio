import 'boxicons/css/boxicons.min.css';




function Header() {
    const toggleMenu = () => {
        const mobileMenu = document.getElementById('mobileMenu')
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden')
        } else {
            mobileMenu.classList.add('hidden')
        }
    }

    return (

        <header className='bg-glass-100 flex justify-between items-center py-2 px-2 lg:px-5 '>
            <h1 className='text-3xl  lg:5xl m-0 font-light text-amber-50' >hasindur</h1>

            {/* Navigation */}
            <nav className='hidden md:flex items-center justify-center gap-10'>
                <a className='text-amber-50 text-base tracking-wider transition-colors hover:text-purple-600 z-50 ' href="#">Home</a>
                <a className='text-amber-50 text-base tracking-wider transition-colors hover:text-purple-600 z-50  ' href="#">About</a>
                <a className='text-amber-50 text-base tracking-wider transition-colors hover:text-purple-600 z-50  ' href="#">Projects</a>
                <a className='text-amber-50 text-base tracking-wider transition-colors hover:text-purple-600 z-50  ' href="#">Contact</a>
            </nav>

            <button onClick={toggleMenu} className='md:hidden px2 py-2 rounded-3xl cursor-pointer tracking-wider transition-colors hover:text-black z-50'>
                <i class='bx  bx-menu bg-black text-amber-50 txt-5xl'  ></i>
            </button>
            {/* mobileMenu */}

            <div id='mobileMenu' className='hidden absolute top-10 right-0 bottom-0 left-0 p-5 z-50 '>
                <nav className='flex flex-col items-center gap-5'>
                    <a className='text-amber-50 text-base tracking-wider transition-colors hover:text-purple-600 z-50 ' href="#">Home</a>
                    <a className='text-amber-50 text-base tracking-wider transition-colors hover:text-purple-600 z-50  ' href="#">About</a>
                    <a className='text-amber-50 text-base tracking-wider transition-colors hover:text-purple-600 z-50  ' href="#">Projects</a>
                    <a className='text-amber-50 text-base tracking-wider transition-colors hover:text-purple-600 z-50  ' href="#">Contact</a>

                </nav>
            </div>
        </header>


    )
}
export default Header 