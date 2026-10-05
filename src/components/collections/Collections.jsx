import SectionHeader from "./SectionHeader";
import CollectionsGrid from "./CollectionGrid";


const Collections = () => {
    return (
        <section className="bg-white py-10 sm:py-12 lg:py-16">

            <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">

                <SectionHeader />

                <div className="mt-8 sm:mt-10">
                    <CollectionsGrid />
                </div>

            </div>

        </section>
    );
};


export default Collections;
