import CollectionCard from "./CollectionCard";
import collections from "./CollectionData";


const CollectionsGrid = () => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12">

            {/* LEFT - Featured Kitchen */}
            <div className="lg:col-span-7">
                <CollectionCard
                    item={collections[0]}
                />
            </div>


            {/* RIGHT - Bath & Window */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:col-span-5">

                <CollectionCard
                    item={collections[1]}
                />

                <CollectionCard
                    item={collections[2]}
                />

            </div>


            {/* Bottom Row */}
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 lg:col-span-12">

                <CollectionCard
                    item={collections[3]}
                />

                <CollectionCard
                    item={collections[4]}
                />

                <CollectionCard
                    item={collections[5]}
                />

            </div>


        </div>
    );
};


export default CollectionsGrid;
