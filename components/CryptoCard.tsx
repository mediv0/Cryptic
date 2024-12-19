
const CryptoCard = ({ crypto}: { crypto: any}) => {
    return (
        <div className="bg-white shadow-sm border rounded-md w-full px-[20px] py-[15px]">
           <div className="flex items-center justify-between mb-[20px]">
                <div className="flex items-center">
                    <img alt="icon" src={crypto.icon} />
                    <div className="ml-[20px]">
                        <p className="font-bold">{ crypto.name }</p>
                        <p className="text-gray-500">{ crypto.symbol }</p>
                    </div>
                </div>
                <p className="font-medium text-lg">{ crypto.price }</p>
            </div> 
            <div className="flex items-center justify-between">
                <div className="flex items-center text-center gap-x-[15px]">
                    <div> 
                        <p>{ crypto.percentChange1h }</p>
                        <p className="text-sm text-gray-400">1h</p>
                    </div>
                    <div> 
                        <p>{ crypto.percentChange24h }</p>
                        <p className="text-sm text-gray-400">24h</p>
                    </div>
                    <div> 
                        <p>{ crypto.percentChange7d }</p>
                        <p className="text-sm text-gray-400">7d</p>
                    </div>
                </div>
                <div> 
                    <p>{ crypto.marketCap }</p>
                    <p className="text-sm text-gray-400">market cap</p>
                </div>
            </div>
       </div>
    )
} 

export default CryptoCard;
