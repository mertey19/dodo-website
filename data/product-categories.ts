import type { ProductCategory } from "@/types";

type CategoryContent = {
  title: string;
  description: string;
  heading: string;
  intro: string;
  productIds: string[];
  sections: { heading: string; text: string }[];
  questions: { question: string; answer: string }[];
  guideSlugs: string[];
};

export const categoryContent: Record<ProductCategory, CategoryContent> = {
  dana: {
    title: "Mersin Dana Eti, Kıyma ve Kuşbaşı | Akdeniz Kasabı",
    description: "Dana kıyma, kuşbaşı, bonfile ve antrikot seçeneklerini inceleyin. Mersin Toroslar’da 7/24 açık Akdeniz Kasabı’ndan güncel fiyat ve kesim bilgisi alın.",
    heading: "Mersin’de dana eti çeşitleri",
    intro: "Köftelik kıymadan tencere yemeğine, tavada pişecek dilimlerden mangala kadar önce hazırlayacağınız yemeği seçin. Dana ürünlerini karşılaştırın; miktar, kesim ve güncel fiyatı Toroslar’daki mağazamızla netleştirin.",
    productIds: ["dana-kiyma", "dana-kusbasi", "dana-bonfile", "dana-antrikot"],
    sections: [
      { heading: "Kıyma mı, kuşbaşı mı, dilim et mi?", text: "Köfte ve kıymalı yemeklerde çekim ve yağ tercihi; sote ve tencere yemeklerinde kuşbaşı büyüklüğü önemlidir. Tava veya ızgara için dilim et arıyorsanız antrikot ve bonfile seçeneklerini görüşebilirsiniz. Ürün adının yanında nasıl pişireceğinizi belirtmeniz kesim tercihini anlaşılır kılar." },
      { heading: "Kesim ve paketlemeyi birlikte belirleyin", text: "Kıymayı hangi yemekte kullanacağınızı, kuşbaşını küçük mü iri mi istediğinizi ve dilim etin kalınlığını sipariş mesajınıza ekleyin. Ayrı öğünler için paketleme istiyorsanız paket sayısını da yazın. Her özel hazırlama isteğinin uygunluğunu işletmeyle teyit edin." },
      { heading: "Dana eti fiyatını karşılaştırırken", text: "Fiyat sorarken ürünün tam adını, kilogram miktarını ve hazırlama tercihini birlikte iletin. Farklı kesimlerin kilogram fiyatlarını aynı ürünmüş gibi karşılaştırmayın. Bu sayfa sabit fiyat listesi değildir; güncel stok, kilogram fiyatı ve toplam tutar görüşme sırasında paylaşılır." },
    ],
    questions: [
      { question: "Köftelik kıyma için ne söylemeliyim?", answer: "Hazırlayacağınız yemeği, istediğiniz miktarı, yağ ve çekim tercihinizi belirtin. Emin değilseniz tercihleri kasapla birlikte netleştirebilirsiniz." },
      { question: "Dana antrikot ve bonfile aynı ürün mü?", answer: "Hayır, farklı kesimlerdir. Antrikot–bonfile rehberinde seçim sırasında sorabileceğiniz soruları bulabilir, ürünün mevcut kesimini ve fiyatını mağazadan öğrenebilirsiniz." },
    ],
    guideSlugs: ["mersin-dana-kiyma-secimi", "mersin-antrikot-bonfile-farki", "mersin-istege-gore-et-dograma-kiyma-cekimi"],
  },
  kuzu: {
    title: "Mersin Kuzu Eti ve Pirzola | Akdeniz Kasabı",
    description: "Kuzu pirzola ve kuşbaşı seçenekleri, kesim ve paketleme bilgileri. Mersin Toroslar Akdeniz Kasabı’ndan güncel stok ve fiyatı WhatsApp ile öğrenin.",
    heading: "Mersin’de kuzu eti ve pirzola",
    intro: "Pirzola ve kuşbaşı arasında seçim yaparken pişireceğiniz yemek, kemik tercihi ve kişi sayısını birlikte düşünün. Kuzu eti seçeneklerini inceleyip hazırlama talebinizi Toroslar’daki Akdeniz Kasabı’na iletebilirsiniz.",
    productIds: ["kuzu-pirzola", "kuzu-kusbasi"],
    sections: [
      { heading: "Pirzola ve kuşbaşını kullanımına göre seçin", text: "Izgara veya tava için pirzola, yemeklik ya da şişlik hazırlık için kuşbaşı seçeneklerini görüşebilirsiniz. Aynı ürünün farklı büyüklükte hazırlanması pişirme planınızı değiştirir. Alışverişten önce ürünün hangi yemekte kullanılacağını söyleyin." },
      { heading: "Kemik, kalınlık ve miktar soruları", text: "Pirzola isterken parça sayısı ile toplam ağırlığın farklı bilgiler olduğunu unutmayın. Kemiğin tartıma dahil olup olmadığını, dilim kalınlığını ve tahmini toplam miktarı sorun. Kuşbaşında ise doğrama boyutunu ve ayrı paket isteğinizi belirtin." },
      { heading: "Gelmeden önce hazırlığı teyit edin", text: "Özellikle belirli bir kesim veya kalabalık sofra için alışveriş yapacaksanız ürünün o anki stokunu sorun. Kuzu ürünlerinin fiyatı ve hazırlanma zamanı görüşme sırasında netleşir. Mağazamız 7/24 açıktır; bu bilgi her kesimin her an hazır olduğu anlamına gelmez." },
    ],
    questions: [
      { question: "Kuzu pirzolayı adetle mi kilogramla mı sorabilirim?", answer: "İstediğiniz parça sayısını ve kişi sayısını iletebilirsiniz. Son ağırlık, kilogram fiyatı ve toplam tutarı işletmeyle ayrıca teyit edin." },
      { question: "Kuzu kuşbaşı şiş için hazırlanabilir mi?", answer: "Şişte kullanacağınızı ve istediğiniz doğrama boyutunu belirtin; uygun ürün ve hazırlama seçeneğini sipariş görüşmesinde öğrenin." },
    ],
    guideSlugs: ["mersin-kuzu-eti-pirzola-secimi", "mersin-mangal-paketi-hazirlama", "mersin-dana-kusbasi-kuzu-kusbasi-secimi"],
  },
  tavuk: {
    title: "Mersin Tavuk Kasabı ve Tavuk Ürünleri | Akdeniz Kasabı",
    description: "Tavuk pirzola ve marine tavuk şiş seçeneklerini inceleyin. Mersin Toroslar’daki Akdeniz Kasabı’na miktarınızı yazın; güncel stok ve fiyatı öğrenin.",
    heading: "Mersin’de tavuk ürünleri",
    intro: "Fırın, tava veya mangal hazırlığınız için tavuk pirzola ve marine tavuk şiş seçeneklerini karşılaştırın. Akdeniz Kasabı’nın Toroslar mağazasına ürün, miktar ve hazırlama tercihinizi tek mesajla iletebilirsiniz.",
    productIds: ["tavuk-pirzola", "tavuk-sis"],
    sections: [
      { heading: "Tavuk pirzola mı, marine şiş mi?", text: "Pirzolada parça büyüklüğü, deri ve kemik tercihini; tavuk şişte ise doğrama ve marinasyonu sorun. Pişireceğiniz ekipmanı ve kişi sayısını paylaşın. Burada listelenen seçenekler pirzola ve şiştir; farklı bir tavuk kesimi arıyorsanız stok bilgisini doğrudan mağazadan alın." },
      { heading: "Marinasyonun içeriğini öğrenin", text: "Marine üründe kullanılan baharat ve diğer bileşenleri siparişten önce teyit edin. Alerjiniz veya kaçındığınız bir içerik varsa bunu açıkça bildirin; fotoğraftan içerik çıkarımı yapmayın. Daha sade bir hazırlık isteğinizin mümkün olup olmadığını ayrıca sorun." },
      { heading: "Tavuk siparişi için kısa kontrol listesi", text: "Ürünün adı, istediğiniz kilogram veya parça miktarı, hazırlama tercihi ve teslim almayı düşündüğünüz zaman mesajınızda yer alsın. Kilogram fiyatı ile toplam tutarı ayrı ayrı teyit edin. Özel hazırlığın uygunluğu, stok ve teslim seçenekleri işletmenin yanıtıyla kesinleşir." },
    ],
    questions: [
      { question: "Tavuk ürünlerinde güncel fiyatı nasıl öğrenirim?", answer: "Pirzola veya şiş tercihinizi ve miktarı WhatsApp’tan yazın; stok, kilogram fiyatı ve toplam tutarı sorun. Sayfadaki görseller temsili sunumlardır." },
      { question: "Marine tavuk şişin içeriğini değiştirebilir miyim?", answer: "İstediğiniz değişikliği ve varsa alerjen hassasiyetinizi işletmeye iletin. Mevcut ürünün içeriği ve farklı hazırlığın mümkün olup olmadığı sipariş öncesinde teyit edilmelidir." },
    ],
    guideSlugs: ["mersin-tavuk-kasabi-urunleri", "mersin-whatsapp-et-siparisi", "mersin-et-market-taze-et-alisverisi"],
  },
  hazir: {
    title: "Mersin Kasap Köfte | İçerik ve Sipariş | Akdeniz Kasabı",
    description: "Kasap köfte için miktar, içerik ve hazırlama tercihlerinizi görüşün. Mersin Toroslar’da 7/24 açık Akdeniz Kasabı’ndan güncel fiyat ve stok bilgisi alın.",
    heading: "Mersin’de kasap köfte",
    intro: "Hazır kasap köfte arıyorsanız önce içeriği, miktarı ve pişirme planınızı netleştirin. Toroslar’daki mağazamızdan mevcut köftenin özelliklerini öğrenebilir, sofranıza uygun hazırlama seçeneklerini görüşebilirsiniz.",
    productIds: ["kasap-kofte"],
    sections: [
      { heading: "Hazır köfte ile köftelik kıymayı ayırın", text: "Kasap köfte hazırlanmış bir üründür; köftelik kıyma ise kendi tarifinizde kullanacağınız et seçimidir. Baharat ve diğer bileşenleri kendiniz belirlemek istiyorsanız dana kıyma seçeneklerine de bakın. Hazır köftede mevcut karışımın içeriğini işletmeye sorun." },
      { heading: "İçerik ve porsiyon bilgisi isteyin", text: "Baharat, tuz ve diğer bileşenler konusunda tercihiniz varsa sipariş öncesinde paylaşın. Alerjen hassasiyetini özellikle belirtin; görselden veya ürün adından glutensiz ya da katkısız olduğu sonucu çıkarılmaz. Adet isteğinde köfte büyüklüğünü ve toplam ağırlığı da konuşun." },
      { heading: "Paket ve teslim planınızı yazın", text: "Köfteyi aynı öğünde mi yoksa ayrı öğünlerde mi kullanacağınızı belirtmek paket talebini netleştirir. Kişi sayısı, istenen miktar ve teslim alma zamanı ile fiyat isteyin. Hazırlama değişiklikleri, güncel stok ve toplam tutar işletmeyle görüşülerek belirlenir." },
    ],
    questions: [
      { question: "Köftenin içeriğini nereden öğrenebilirim?", answer: "Güncel ürün içeriğini doğrudan işletmeden isteyin. Özel beslenme tercihiniz veya alerjiniz varsa siparişten önce belirtin ve uygunluğu teyit edin." },
      { question: "Köfte yerine köftelik kıyma alabilir miyim?", answer: "Dana kıyma ürünümüzü inceleyebilirsiniz. Yapacağınız köfte tarifini, miktarı, yağ ve çekim tercihinizi mesajınıza ekleyin." },
    ],
    guideSlugs: ["mersin-kasap-kofte-siparisi", "mersin-dana-kiyma-secimi"],
  },
  sarkuteri: {
    title: "Mersin Kasap Sucuğu | Ürün ve Sipariş | Akdeniz Kasabı",
    description: "Akdeniz Kasabı’nın sucuk seçeneğini inceleyin; içerik, miktar ve dilimleme bilgisini sorun. Toroslar, Mersin mağazasından güncel fiyat ve stok alın.",
    heading: "Mersin’de kasap sucuğu",
    intro: "Kahvaltı, tost veya mangal için sucuk seçerken ürün adı kadar içeriği ve nasıl kullanacağınız da önemlidir. Ev Yapımı Sucuk seçeneğimizin güncel özelliklerini, fiyatını ve stokunu mağazamızla görüşebilirsiniz.",
    productIds: ["ev-yapimi-sucuk"],
    sections: [
      { heading: "Ürün adı tek başına içerik bilgisi değildir", text: "Et türü, baharatlar ve diğer bileşenler hakkında işletmeden bilgi alın. Ev yapımı ifadesi tek başına katkısızlık, belirli bir üretim yöntemi veya sertifika anlamına gelmez. Hassasiyetiniz varsa ilgili içeriği açıkça sorup uygunluğu teyit edin." },
      { heading: "Bütün veya dilimleme tercihini belirtin", text: "Sucukla hazırlayacağınız yemeği ve kullanacağınız miktarı paylaşın. Bütün ya da dilimlenmiş ürün tercihinizi, dilim istiyorsanız kalınlığını konuşun. Ürünün o anki sunumu ve hazırlama seçenekleri mağaza tarafından bildirilir." },
      { heading: "Fiyat ve ürün bilgisini birlikte isteyin", text: "Kilogram fiyatı, istediğiniz miktarın toplam tutarı ve ambalaj bilgisi aynı görüşmede netleştirilebilir. Ürünle birlikte verilen saklama ve kullanım açıklamalarını esas alın. Bu sayfadaki görsel temsildir; mevcut ürünün görünümü ve paket biçimi farklı olabilir." },
    ],
    questions: [
      { question: "Sucuk katkısız veya özel sertifikalı mı?", answer: "Bu sayfada böyle bir iddia bulunmuyor. İçerik ve varsa belge bilgisi için işletmeye başvurun; yalnızca ürün adına bakarak karar vermeyin." },
      { question: "Sucuk için dilimleme talebi iletebilir miyim?", answer: "Kullanım amacınızı ve istediğiniz dilim kalınlığını yazabilirsiniz. Güncel hazırlama seçeneğinin uygunluğunu mağazadan teyit edin." },
    ],
    guideSlugs: ["mersin-kasap-sucugu-secimi", "mersin-kasap-fiyatlari-ucretleri"],
  },
  izgaralik: {
    title: "Mersin Mangallık Et ve Izgara Çeşitleri | Akdeniz Kasabı",
    description: "Mangal için antrikot, kuzu pirzola, köfte ve tavuk şiş seçenekleri. Mersin Toroslar Akdeniz Kasabı ile kişi sayısına göre ürün ve miktarı planlayın.",
    heading: "Mersin’de mangallık et ve ızgara çeşitleri",
    intro: "Tek bir et çeşidi ya da karışık bir mangal listesi hazırlayın. Dana, kuzu, köfte ve tavuk seçenekleri arasından tercihlerinizi belirleyin; içerik, miktar ve toplam fiyatı sipariş öncesinde birlikte netleştirelim.",
    productIds: ["dana-antrikot", "kuzu-pirzola", "kasap-kofte", "tavuk-sis", "karisik-izgara"],
    sections: [
      { heading: "Kişi sayısından önce tercihleri belirleyin", text: "Misafirlerin hangi ürünleri tercih ettiğini, yan yemekleri ve sofrada çocuk olup olmadığını düşünün. Her sofra için tek bir sabit miktar önermek yerine istediğiniz ürün dağılımını paylaşın. Kişi sayısıyla birlikte bu bilgiler toplam alışverişi planlamayı kolaylaştırır." },
      { heading: "Karışık seçkide ürünleri tek tek yazın", text: "Sadece mangal paketi demek yerine antrikot, pirzola, köfte ve tavuk şişten hangilerini istediğinizi belirtin. Karışık Izgara Seçkisi sabit içerikli ve sabit fiyatlı bir paket taahhüdü değildir. Ürünlerin mevcut stokuna göre miktar ve seçenekler görüşülür." },
      { heading: "Kesim ve ayrı paket talepleri", text: "Dilim etin kalınlığı, pirzola hazırlığı ve şiş miktarı gibi ayrıntıları iletin. Farklı ürünlerin ayrı paketlenmesini ve pakette hangi ürünün bulunduğunun belirtilmesini isteyebilirsiniz. Teslim almayı düşündüğünüz zamanı ve toplam fiyatı işletmeyle teyit edin." },
    ],
    questions: [
      { question: "Mangal paketi sabit fiyatlı mı?", answer: "Bu sayfada sabit fiyat veya sabit gramaj ilan edilmiyor. Seçtiğiniz ürünler, miktar ve güncel fiyatlar üzerinden toplam tutar paylaşılır." },
      { question: "Pakette tavuk ve kırmızı eti birlikte seçebilir miyim?", answer: "Tercih ettiğiniz ürünleri ve miktarları aynı talepte iletebilirsiniz. Stok, ayrı paketleme ve hazırlama seçeneklerini işletmeyle netleştirin." },
    ],
    guideSlugs: ["mersin-mangal-paketi-hazirlama", "mersin-antrikot-bonfile-farki", "mersin-7-24-acik-kasap"],
  },
};
