const NotFound = () => {
    return (
        <section className="flex min-h-screen items-center justify-center bg-[#F8F7F4] px-6">

            <div className="text-center">

                <p className="text-[16px] font-medium uppercase tracking-[0.4em] text-[#B89565]">
                    PAGE NOT FOUND
                </p>

                <h1 className="mt-5 font-serif text-[64px] text-[#1F2937]">
                    404
                </h1>

                <p className="mt-4 text-[17px] text-[#596273]">
                    The page you're looking for doesn't exist.
                </p>

            </div>

        </section>
    );
};


export default NotFound;
