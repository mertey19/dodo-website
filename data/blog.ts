import type { ProductCategory } from "@/types";

export type BlogSection = {
  id: string;
  title: string;
  paragraphs: string[];
  tips?: string[];
  table?: { caption: string; columns: string[]; rows: string[][] };
  links?: { href: string; label: string }[];
};

export type BlogPost = {
  slug: string;
  district?: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  publishedAt: string;
  updatedAt?: string;
  intro: string;
  sections: BlogSection[];
  productCategory: ProductCategory;
  relatedSlugs: string[];
  sources?: { label: string; url: string }[];
};

const publishedAt = "2026-10-15T12:00:00+03:00";
const coldStorageSource = {
  label: "USDA: Soğutma ve gıda güvenliği",
  url: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/refrigeration",
};

export const districtPosts: BlogPost[] = [
  {
    slug: "toroslar-kasap-alisverisi-rehberi",
    district: "Toroslar",
    title: "Toroslar’da kasap alışverişi: yemeğe göre et seçimi",
    description: "Toroslar’da et alışverişi için kıyma, kuşbaşı ve ızgaralık seçim rehberi. Akdeniz Kasabı’nın 7/24 açık mağazası, hazırlama ve iletişim bilgileri.",
    category: "Kasap alışverişi",
    image: "/images/custom/category-dana.jpg",
    imageAlt: "Dana eti çeşitlerinden temsili ürün sunumu",
    publishedAt,
    updatedAt: "2026-10-19T00:00:00+03:00",
    intro: "Toroslar’da kasap alışverişine çıkarken ilk karar etin adı değil, yapacağınız yemek olmalı. Aynı miktardaki kıyma, kuşbaşı ve biftek farklı hazırlık ister. Mithat Toroğlu Mahallesi, Kuvayi Milliye Caddesi’ndeki Akdeniz Kasabı’nda isteğinizi anlatırken kullanabileceğiniz bu kısa rehber, alışveriş listesini netleştirmenize yardımcı olur.",
    sections: [
      { id: "mahalle-ve-urunler", title: "Mithat Toroğlu’nda et market alışverişini planlayın", paragraphs: ["Toroslar’da et market veya kasap arayanlar için mağazamız Mithat Toroğlu Mahallesi, Kuvayi Milliye Caddesi’ndedir. Dana kıyma alırken köftelik ya da yemeklik kullanımınızı, kuzu pirzolada dilim tercihinizi, kasap köftede içerik ve paket miktarını belirtin. Bu ayrıntılar aynı alışverişte bile ürün ürün değişir.", "Mangallık et alacaksanız hangi ürünleri birlikte istediğinizi ve her birinin miktarını yazın. Toroslar’dan WhatsApp sipariş görüşmesi başlatırken mağazadan alacağınız saati de paylaşın; ürün, toplam tutar ve hazırlık teyidini bekleyin. Gece veya pazar günü alışverişte özel kesimlerin hazır olacağını önceden varsaymayın."], links: [{ href: "/blog/mersin-et-market-taze-et-alisverisi", label: "Et markette tazelik ve ürün bilgisi kontrol listesi" }, { href: "/urunler/dana-eti", label: "Dana kıyma ve kuşbaşı seçenekleri" }, { href: "/urunler/kuzu-eti", label: "Kuzu pirzola ve kuşbaşı ürünleri" }, { href: "/blog/mersin-7-24-acik-kasap", label: "Toroslar’da 7/24 alışveriş ve hazırlık teyidi" }] },
      { id: "yemege-gore", title: "Tencere, tava ve ızgara için aynı kesimi istemeyin", paragraphs: ["Sote hazırlayacaksanız kısa sürede pişirmeyi düşündüğünüzü, güveç yapacaksanız uzun pişirme planınızı söyleyin. Kasabınızdan pişirme yöntemine uygun parçayı ve doğrama boyutunu önermesini isteyin. Küçük doğranmış her et aynı sürede yumuşamaz; parçanın geldiği bölüm de sonucu etkiler.", "Köfte için kıymanın yağ oranını ve çekimini, biftek için porsiyon kalınlığını görüşün. Kemikli et ile kemiksiz etin tartı miktarı aynı olsa da sofraya çıkan yenebilir miktar değişir. Bu yüzden kişi sayısı kadar, yanında servis edeceğiniz yemekleri de belirtin."] },
      { id: "hazirlama", title: "Sipariş mesajına hangi bilgileri yazmalı?", paragraphs: ["Ürün adı tek başına hazırlama talebini anlatmayabilir. Kaç kişi için alışveriş yaptığınızı, yemeği ne zaman pişireceğinizi ve eti nasıl kullanacağınızı kısa bir mesajda birleştirin. Fiyat ve stok bilgisi görüşme sırasında netleşir; web sitesindeki ürün listesi anlık stok garantisi değildir."], tips: ["Yemek adı ve kişi sayısı", "İstenen miktar ve kemikli/kemiksiz tercih", "Kuşbaşı boyutu, kıyma veya dilim tercihi", "Mağazadan almayı düşündüğünüz saat"] },
      { id: "magaza", title: "Toroslar’daki mağazaya gelmeden önce", paragraphs: ["Akdeniz Kasabı haftanın her günü 24 saat açıktır; tatil günü yoktur. Özellikle belirli bir kesim veya toplu hazırlık istiyorsanız yola çıkmadan 0553 776 61 62 üzerinden ulaşın. Açık olmak, her özel ürünün o anda hazır bulunduğu anlamına gelmez.", "Adresimiz Mithat Toroğlu, Kuvayi Milliye Cd., 33080 Toroslar/Mersin’dir. İletişim sayfasındaki yol tarifi mevcut konumunuzdan bu mağazaya rota açar. Ürünü alırken hazırlama isteğinizi ve paket sayısını birlikte kontrol etmek, eve döndüğünüzde işinizi kolaylaştırır."] },
    ],
    productCategory: "dana",
    relatedSlugs: ["akdeniz-gunluk-yemeklik-et-secimi", "yenisehir-haftalik-et-alisverisi", "akdeniz-kasabi-mersin-adres-iletisim"],
  },
  {
    slug: "akdeniz-gunluk-yemeklik-et-secimi",
    district: "Akdeniz",
    title: "Akdeniz ilçesi için günlük yemeklik et seçimi",
    description: "Akdeniz ilçesindeki ev sofraları için sotelik et, yemeklik kıyma ve kuşbaşı seçimi. Pişirme yöntemine göre hazırlama ve alışveriş önerileri.",
    category: "Günlük mutfak",
    image: "/images/custom/dana-kusbasi.jpg",
    imageAlt: "Yemeklik dana kuşbaşı için temsili ürün sunumu",
    publishedAt,
    intro: "Akdeniz ilçesinde günlük yemek planı yaparken kasap alışverişini üç soruyla kolaylaştırabilirsiniz: Tencerede mi tavada mı pişireceksiniz, ne kadar vaktiniz var ve kaç kişilik yemek hazırlayacaksınız? Bu soruların cevabı, yalnızca et türünü değil doğrama biçimini de belirler.",
    sections: [
      { id: "sote", title: "Hızlı bir sote için hazırlık", paragraphs: ["Kısa sürede sote yapmak istiyorsanız bunu alışverişte özellikle belirtin. Birbirine yakın büyüklükte doğranmış parçalar, tavada pişirme takibini kolaylaştırır. Tencere yemeğine uygun bir parçayı yalnızca daha küçük doğramak, onu otomatik olarak hızlı pişen sotelik ete dönüştürmez.", "Evdeki tavanın boyutunu da hesaba katın. Çok miktarda eti küçük tavaya tek seferde koymak yerine partiler halinde pişirme planı yapabilirsiniz. Sebzeleri ve etleri nasıl bir araya getireceğinizi önceden düşünmek, hazırlık sırasında acele etmenizi önler."] },
      { id: "kiyma", title: "Dolmalık, sosluk ve köftelik kıyma aynı tercih değildir", paragraphs: ["Dolmanın iç harcı, makarna sosu ve köfte farklı doku ister. Kıymayı hangi yemekte kullanacağınızı, dana veya kuzu tercihinizi ve yağ oranına ilişkin beklentinizi kasabınıza söyleyin. Hazır bir karışım düşünüyorsanız içeriğini sorun; yalnızca ürün adına bakarak baharat veya alerjen içermediğini varsaymayın."] },
      { id: "liste", title: "Bir akşamlık alışverişi sadeleştirin", paragraphs: ["Önce evdeki malzemeleri kontrol edin; ardından tek ana yemek için miktar belirleyin. Çorba, pilav ve salata gibi eşlikçiler et ihtiyacını değiştirir. Kesin bir kişi başı rakam yerine sofranın tamamını anlatmak, gereksiz alışverişi azaltır.", "Akdeniz ilçesinden Akdeniz Kasabı ile görüşüyorsanız mağazamızın Toroslar’da olduğunu dikkate alın. İsim benzerliği bir Akdeniz ilçesi şubesi anlamına gelmez. Güncel ürün, fiyat ve teslim seçeneklerini telefonla öğrenip yolculuğunuzu buna göre planlayabilirsiniz."], tips: ["Pişirme yöntemi: sote, tencere veya fırın", "Hazırlık için ayırdığınız süre", "Tek öğünlük veya ayrı paket isteği"] },
    ],
    productCategory: "dana",
    relatedSlugs: ["toroslar-kasap-alisverisi-rehberi", "gulnar-guveclik-et-secimi", "mersin-kasap-secimi-rehberi"],
  },
  {
    slug: "yenisehir-haftalik-et-alisverisi",
    district: "Yenişehir",
    title: "Yenişehir için haftalık et alışverişi ve porsiyon planı",
    description: "Yenişehir’de haftalık yemek planına göre kıyma, tavuk ve kuşbaşı alışverişini düzenleyin. Öğünlük paketleme ve bütçe karşılaştırma önerileri.",
    category: "Alışveriş planı",
    image: "/images/custom/dana-kiyma.jpg",
    imageAlt: "Öğünlük planlamada kullanılan dana kıyma için temsili görsel",
    publishedAt,
    intro: "Yenişehir’de yoğun bir haftanın yemeklerini önceden planlamak istiyorsanız tek büyük paket yerine öğünlere ayrılmış bir liste hazırlayın. Böylece hangi ürünü ne zaman kullanacağınız belli olur, alışverişi yalnızca kilogram fiyatıyla değerlendirmek zorunda kalmazsınız.",
    sections: [
      { id: "menu", title: "Ürün listesinden önce haftanın menüsünü yazın", paragraphs: ["Örneğin bir gün kıymalı sebze, başka bir gün tavuk yemeği, bir gün de dana sote planlayabilirsiniz. Evde yemek yenmeyecek günleri listeden çıkarın. Dolapta bulunan malzemeleri kontrol ettikten sonra eksikleri ekleyin; her ürün grubundan almak zorunda değilsiniz.", "Öğünleri evdeki kişi sayısına göre ayırın. Aynı kıymayı iki farklı yemekte kullanacaksanız toplam miktarı söylemenin yanında iki ayrı paket istediğinizi de belirtin. Bu ayrıntı, kullanacağınız miktarı her seferinde yeniden bölme ihtiyacını azaltır."] },
      { id: "butce", title: "Bütçeyi paket içeriğiyle karşılaştırın", paragraphs: ["İki teklifin fiyatını karşılaştırırken kemik, yağ, temizleme ve hazırlama tercihlerinin aynı olup olmadığına bakın. Kemikli bir ürün ile temizlenmiş kemiksiz ürünü yalnızca kilogram fiyatıyla kıyaslamak yanıltıcı olabilir. Toplam tutarı, hangi yemeklerde kullanılacağını ve kaç ayrı öğün çıkacağını birlikte değerlendirin."] },
      { id: "paket", title: "Paketlerin üzerinde kullanım planınız bulunsun", paragraphs: ["Eve geldiğinizde paketleri birbirinden ayırt edebilmek için ürün adını, paketleme tarihini ve kullanmayı düşündüğünüz yemeği not edin. Saklama koşullarında ürün etiketini ve satıcının bilgisini dikkate alın; haftalık alışveriş yapmak, bütün ürünleri hafta boyunca buzdolabında tutmak anlamına gelmez.", "Yenişehir’den Toroslar’daki mağazamıza gelmeden önce listenizi WhatsApp üzerinden paylaşabilirsiniz. Ürün, hazırlama, fiyat ve teslim alma zamanını görüşmek, çok kalemli siparişlerde eksikleri önceden fark etmeye yardımcı olur."], tips: ["Her yemek için ayrı ürün satırı açın.", "Paket sayısını miktarın yanına yazın.", "Stok ve toplam tutar teyidini alın."] },
    ],
    productCategory: "dana",
    relatedSlugs: ["erdemli-yazlikta-et-alisverisi", "bozyazi-tavuk-parcalari-secimi", "mersin-kasap-fiyatlari-ucretleri"],
  },
  {
    slug: "mezitli-mangallik-et-secimi",
    district: "Mezitli",
    title: "Mezitli için mangallık et seçimi ve hazırlık rehberi",
    description: "Mezitli’de mangal sofrası planlayanlar için antrikot, pirzola, köfte ve tavuk seçimi. Karışık menü, porsiyon ve hazırlık önerileri.",
    category: "Mangal ve ızgara",
    image: "/images/custom/campaign-mangal.jpg",
    imageAlt: "Karışık mangal ürünlerinin temsili sunumu",
    publishedAt,
    intro: "Mezitli’de mangal için alışveriş yaparken mümkün olan en çok ürünü seçmek yerine birlikte pişirmesi kolay bir menü kurmak daha kullanışlıdır. Kişi sayısı, ızgaranın büyüklüğü ve sofradaki eşlikçiler belli olduğunda et seçimi de kolaylaşır.",
    sections: [
      { id: "menu", title: "İki veya üç ürünle dengeli bir menü kurun", paragraphs: ["Antrikot, kuzu pirzola ve kasap köfte farklı dokular sunar. Hepsini aynı anda ve aynı kalınlıkta düşünmek yerine ana ürünü seçin, yanına bir alternatif ekleyin. Tavuk tercih eden misafirler varsa bunu ayrı bir kalem olarak planlayın; herkesin her üründen tam porsiyon yemesini beklemeyin.", "Kemikli pirzolanın tartı miktarı ile kemiksiz bifteğin miktarı aynı şekilde değerlendirilmez. Kasabınıza yetişkin sayısını, eşlikçileri ve tercihleri söyleyin. Bu bilgiler, yalnızca kişi sayısına bakarak yapılan tahminden daha anlamlıdır."] },
      { id: "kesim", title: "Kalınlık ve hazırlamayı baştan konuşun", paragraphs: ["Bifteklerin birbirine yakın kalınlıkta olması pişirmeyi yönetmenizi kolaylaştırır. Şişlik ürünlerde parçaların boyutunu ve şişe takılı mı ayrı mı istediğinizi belirtin. Marineli ürün alacaksanız içerik ve baharat bilgisini sorun; sosun rengini etin pişmiş olduğuna dair ölçüt olarak kullanmayın."] },
      { id: "organizasyon", title: "Alışveriş kadar servis sırasını da planlayın", paragraphs: ["Izgara alanı sınırlıysa ürünleri küçük partiler halinde hazırlayın. Çiğ ürünler için kullandığınız tabak ve ekipmanı pişmiş ürünlerin servisi için ayırın. Sofra malzemelerini önceden hazırlamak, etler hazır olduğunda bekletmeden servise geçmenizi sağlar.", "Mezitli’den mağazamıza gelmeyi planlıyorsanız Toroslar adresimizi ve dönüş planınızı dikkate alın. Açık alan kullanımı ve mangal uygunluğu için ilgili yerin güncel kurallarını kontrol edin; bu rehber belirli bir alanda mangal izni verildiği anlamına gelmez."], tips: ["Ana ürün ve alternatif ürün", "Kemikli/kemiksiz tercih", "Izgara kapasitesine uygun paketler", "Marinasyon ve içerik bilgisi"] },
    ],
    productCategory: "izgaralik",
    relatedSlugs: ["silifke-kalabalik-sofralar-et-plani", "camliyayla-yayla-mangal-hazirligi", "mersin-mangal-paketi-hazirlama"],
  },
  {
    slug: "tarsus-evde-tantuni-icin-et-secimi",
    district: "Tarsus",
    title: "Tarsus’ta evde tantuni hazırlığı: eti nasıl seçmeli?",
    description: "Tarsus’ta evde tantuni yapmak isteyenler için et seçimi, küçük doğrama ve kasaba anlatılacak hazırlama tercihleri. Mersin mutfağından öneriler.",
    category: "Mersin mutfağı",
    image: "/images/custom/dana-kusbasi.jpg",
    imageAlt: "Küçük doğrama et seçimini temsil eden dana kuşbaşı görseli",
    publishedAt,
    intro: "Tarsus’ta evde tantuni hazırlamak isteyenler için alışverişin en önemli kısmı, kasaba yalnızca kuşbaşı istemek yerine yapacağınız yemeği anlatmaktır. Tantuni için kesim boyutu, etin bölümü ve yağ tercihi birlikte düşünülür. Ev mutfağındaki ekipman da bu tercihleri etkiler.",
    sections: [
      { id: "gelenek", title: "Tantunilik et ile standart kuşbaşı arasındaki fark", paragraphs: ["Kültür ve Turizm Bakanlığı Kültür Portalı’ndaki Mersin Tantunisi açıklamasında dana kaburga eti ve küçük doğrama hazırlığı yer alır. Evde yapacağınız uyarlamada da hangi parçayı istediğinizi ve doğrama inceliğini baştan konuşmak önemlidir. Her dana kuşbaşı paketi bu hazırlığa doğrudan uygun olmayabilir.", "Kasabınıza sinir ve zar temizliği konusundaki beklentinizi söyleyin. Çok farklı boyutlarda parçalar yerine birbirine yakın büyüklükte doğrama isteyin. Etin yağ yapısı ile sonradan ekleyeceğiniz yağı birlikte düşünün; yalnızca en yağsız parçayı seçmek her tarif için aynı sonucu vermez."] },
      { id: "ekipman", title: "Evdeki tavaya göre miktar belirleyin", paragraphs: ["Profesyonel tantuni tepsisi ile ev tavası aynı kapasitede değildir. Büyük miktarı tek seferde hazırlamak yerine tavanızın kaldıracağı partileri planlayın. Ekmek veya lavaş, soğan, domates ve diğer eşlikçileri önceden hazırlamak, son aşamada servis düzenini kolaylaştırır."] },
      { id: "siparis", title: "Alışverişte tarifinizi kısaca anlatın", paragraphs: ["Kaç kişilik hazırlayacağınızı, evde hangi ekipmanı kullanacağınızı ve ne kadar küçük doğrama istediğinizi paylaşın. Dana veya farklı bir et tercihiniz varsa açıkça yazın. Web sitesindeki kuşbaşı görseli temsili bir sunumdur; size hazırlanacak kesimi görüşme sırasında teyit edin.", "Tarsus’tan bilgi almak için Akdeniz Kasabı’na telefonla veya WhatsApp üzerinden ulaşabilirsiniz. Mağazamız Toroslar’dadır. Özel doğrama talebinin uygunluğunu ve hazırlama zamanını önceden konuşmak, yola çıkmadan siparişinizi netleştirir."], tips: ["Yemek: evde tantuni", "Et türü ve parça tercihi", "Küçük, eşit doğrama isteği", "Kişi sayısı ve teslim alma zamanı"] },
    ],
    productCategory: "dana",
    relatedSlugs: ["akdeniz-gunluk-yemeklik-et-secimi", "mut-kavurmalik-et-secimi"],
    sources: [{ label: "Kültür Portalı: Mersin Tantunisi", url: "https://www.kulturportali.gov.tr/portal/mersintantunisi" }],
  },
  {
    slug: "erdemli-yazlikta-et-alisverisi",
    district: "Erdemli",
    title: "Erdemli’de yazlık mutfağı için et alışverişi planı",
    description: "Erdemli’de yazlıkta yemek hazırlarken dolap kapasitesi, öğün sayısı ve paketleme nasıl planlanır? Kısa konaklamalar için kasap alışverişi rehberi.",
    category: "Alışveriş planı",
    image: "/images/custom/kasap-kofte.jpg",
    imageAlt: "Pratik öğünler için temsili kasap köfte sunumu",
    publishedAt,
    intro: "Erdemli’de yazlıkta birkaç gün geçirecekseniz alışverişi evdeki alışkanlığınızla yapmak yerine konaklamanın koşullarına göre düzenleyin. Buzdolabının kapasitesi, mutfaktaki ekipman ve dışarıda yenilecek öğünler, alacağınız et miktarını doğrudan değiştirir.",
    sections: [
      { id: "mutfak", title: "Önce mutfağın imkânlarını kontrol edin", paragraphs: ["Fırın, geniş tava veya ızgara bulunup bulunmadığını öğrenin. Yalnızca küçük bir tava varsa büyük ve farklı kalınlıklarda parçalar yerine tavaya uygun hazırlanmış seçenekleri görüşebilirsiniz. Köfte, kıyma ve sotelik ürünler farklı yemeklere uyarlanabilir; seçimi gerçekten yapacağınız menüye göre yapın.", "Buzdolabını yalnızca boş raf sayısıyla değerlendirmeyin; çalıştığını ve uygun soğukluğu koruduğunu da kontrol edin. Yeni çalıştırılan bir dolap hazır olmadan soğukta tutulması gereken ürünleri içine yerleştirerek alışveriş planını tamamlamış saymayın."] },
      { id: "ogun", title: "Konaklama günü değil, evde yenilecek öğün sayın", paragraphs: ["Dört günlük konaklamada her akşam evde yemek yenmeyebilir. Önce kesin öğünleri yazın, ardından bu öğünlere yetecek paketleri belirleyin. Aynı ürünü iki yemek için kullanacaksanız ayrı paketletin; bir sonraki günün menüsünü ilk günün paketinden ayırmakla uğraşmazsınız."] },
      { id: "donus", title: "Dönüş gününü de alışverişe dahil edin", paragraphs: ["Son gün için çok sayıda açılmış paket bırakmayan bir menü seçin. Etiketleri saklayın ve ürünün saklama bilgisini takip edin. Planınız değişirse bütün ürünleri sırf satın alındı diye aynı yöntemle saklamaya çalışmayın; ürün türüne uygun koşulları değerlendirin.", "Toroslar’daki Akdeniz Kasabı’na uğrayarak Erdemli’ye geçecekseniz alışverişi diğer işlerin sonuna koymayı düşünün. Yol ve muhafaza imkânlarını önceden planlayın. Teslimat veya özel paketleme ihtiyacınız varsa mümkün olup olmadığını mağazadan teyit edin."], tips: ["Mutfaktaki pişirme ekipmanını öğrenin.", "Evde yenilecek kesin öğünleri sayın.", "Her öğün için ayrı paket isteyin.", "Son gün artacak ürünleri baştan düşünün."] },
    ],
    productCategory: "hazir",
    relatedSlugs: ["aydincik-kisa-konaklama-yemek-plani", "yenisehir-haftalik-et-alisverisi", "mersin-kasap-kofte-siparisi"],
  },
  {
    slug: "silifke-kalabalik-sofralar-et-plani",
    district: "Silifke",
    title: "Silifke’de kalabalık sofralar için et ve porsiyon planı",
    description: "Silifke’de misafir sofrası hazırlayanlar için et miktarı, kemikli ve kemiksiz seçimler, hazırlama sırası ve toplu alışveriş kontrol listesi.",
    category: "Misafir sofraları",
    image: "/images/custom/campaign-izgara.jpg",
    imageAlt: "Misafir sofrasına yönelik temsili ızgaralık et seçkisi",
    publishedAt,
    intro: "Silifke’de kalabalık bir aile sofrası veya misafir yemeği planlarken alışverişi tek bir kişi başı rakama bağlamak yeterli olmaz. Sofradaki yemek çeşitleri, kemikli ürün tercihi ve mutfağın kapasitesi birlikte değerlendirilmelidir. İyi bir hazırlık listesi hem alışverişi hem servisi kolaylaştırır.",
    sections: [
      { id: "porsiyon", title: "Önce misafirlerin tercihlerini netleştirin", paragraphs: ["Kaç kişinin kırmızı et, kaç kişinin tavuk tercih edeceğini öğrenin. Çocuk ve yetişkin sayısını ayrı not etmek yararlı olabilir; herkesin iştahı ve menü tercihi aynı değildir. Çorba, pilav, salata veya başka ana yemekler varsa bunları miktar görüşmesine dahil edin.", "Kemikli ve kemiksiz ürünlerin tartı miktarlarını doğrudan eşitlemeyin. Pirzola, biftek ve köfte gibi farklı ürünlerden oluşan menüde toplamı tek et türü gibi değerlendirmek fazla veya eksik alışverişe yol açabilir. Her ürünü hangi grup için aldığınızı listeye yazın."] },
      { id: "kapasite", title: "Pişirme kapasitesi ürün seçimini değiştirebilir", paragraphs: ["Tek fırında hazırlanacak yemek ile küçük bir mangalda parça parça pişecek menü farklı organizasyon ister. Servis saatine göre kaç parti hazırlayabileceğinizi düşünün. Birden fazla kesim seçiyorsanız eşit kalınlık ve ayrı paket isteği, mutfakta ürünleri takip etmenize yardımcı olur."] },
      { id: "teyit", title: "Toplu alışverişi yazılı bir listeyle teyit edin", paragraphs: ["Ürünleri, miktarları, paket sayısını ve hazırlama biçimini ayrı satırlara yazın. Toplam tutarı, stok durumunu ve teslim alma saatini görüşmeden kesin sipariş varsaymayın. Menüde özel beslenme tercihleri varsa hazır karışımların içeriğini ayrıca sorun.", "Silifke için planladığınız sofraya Toroslar’daki mağazamızdan alışveriş düşünüyorsanız taşıma koşullarını da miktar kadar önemseyin. Uzun bir yolculuk için uygun muhafaza imkânı yoksa alışveriş planınızı yeniden düzenleyin; mağaza uzaklığını teslimat sözü olarak değerlendirmeyin."], tips: ["Misafir sayısı ve ürün tercihleri", "Her ürünün miktarı ve paket sayısı", "Pişirme ekipmanı ve servis saati", "Hazırlama, fiyat ve teslim alma teyidi"] },
    ],
    productCategory: "izgaralik",
    relatedSlugs: ["mezitli-mangallik-et-secimi", "anamur-et-tasima-planlama"],
  },
  {
    slug: "anamur-et-tasima-planlama",
    district: "Anamur",
    title: "Anamur yolculuğunda et alışverişi ve taşıma planı",
    description: "Anamur’a yolculuk öncesi et alışverişi nasıl planlanır? Soğutucu, ambalaj, alışveriş sırası ve varışta muhafaza için pratik kontrol listesi.",
    category: "Taşıma ve muhafaza",
    image: "/images/custom/category-dana.jpg",
    imageAlt: "Ayrı paketlenmesi planlanan dana eti çeşitlerinin temsili sunumu",
    publishedAt,
    intro: "Anamur’a giderken Mersin merkezden et almayı düşünüyorsanız ilk karar hangi ürünün alınacağı değil, yol boyunca nasıl soğuk tutulacağı olmalı. Yolculuğun toplam süresine alışveriş sonrası bekleme ve molalar da dahildir. Bir soğutucuya sahip olmak tek başına yeterli bir taşıma planı oluşturmaz.",
    sections: [
      { id: "sogutucu", title: "Soğutucunun işlevini ve kapasitesini kontrol edin", paragraphs: ["USDA’nın gıda güvenliği rehberleri, etin soğuk tutulmasını ve sızdırmaz ambalajla diğer yiyeceklerden ayrılmasını önerir. Yalıtımlı bir kutu soğukluğu korumaya yardımcı olur; ürünü kendi başına soğutmaz. Yeterli soğutucu akü ve sıcaklığı izleme imkânı, yol planının parçası olmalıdır.", "Alacağınız miktarı kutunun kapasitesine göre belirleyin. Et paketleriyle içecekleri aynı yerde taşımak, kutunun sık açılmasına neden olabilir. Kutuyu yerleştireceğiniz alanı ve yol boyunca ne kadar sık açmanız gerekeceğini önceden düşünün."] },
      { id: "alisveris-sirasi", title: "Alışverişi diğer işlerden sonraya bırakın", paragraphs: ["Merkezde birden fazla işiniz varsa kasap ziyaretini dönüş öncesine planlayın. Paketi aldıktan sonra araç içinde bekletmek veya başka alışverişlere devam etmek, taşıma süresini uzatır. Görüşme sırasında yolculuk yapacağınızı söyleyin ve ambalaj ihtiyacınızı açıkça anlatın."] },
      { id: "varis", title: "Varıştaki muhafaza yerini önceden hazırlayın", paragraphs: ["Anamur’daki evde veya konaklama yerinde çalışan bir buzdolabı bulunduğunu ve yeterli yer olduğunu öğrenin. Ürünü varıştan sonra da araçta bırakacağınız bir program yapmayın. Taşıma koşulları konusunda şüpheniz varsa yalnızca görünüm veya kokuya bakarak güvenli olduğunu varsaymayın.", "Akdeniz Kasabı’nın mağazası Toroslar’dadır. Anamur’a teslimat veya özel soğuk taşıma hizmeti sunulduğunu bu yazıdan çıkarmayın; ihtiyaçlarınızı telefonla görüşün. Gerekli muhafazayı sağlayamıyorsanız eti varış noktanıza yakın bir yerden almak daha uygun bir plan olabilir."], tips: ["Yol, mola ve beklemeleri birlikte hesaplayın.", "Miktarı soğutucu kapasitesiyle sınırlandırın.", "Sızdırmaz ve ayrı ambalaj isteyin.", "Varışta kullanılacak dolabı kontrol edin."] },
    ],
    productCategory: "dana",
    relatedSlugs: ["aydincik-kisa-konaklama-yemek-plani", "camliyayla-yayla-mangal-hazirligi"],
    sources: [coldStorageSource, { label: "USDA: Ev dışında ızgara için soğuk taşıma", url: "https://ask.fsis.usda.gov/article/How-do-you-keep-meat-safe-when-grilling-away-from-home" }],
  },
  {
    slug: "aydincik-kisa-konaklama-yemek-plani",
    district: "Aydıncık",
    title: "Aydıncık’ta kısa konaklamalar için etli yemek planı",
    description: "Aydıncık’ta birkaç günlük konaklama için az malzemeli menü, uygun et kesimi ve öğünlük paketleme fikirleri. Alışverişi ihtiyaca göre planlayın.",
    category: "Pratik sofralar",
    image: "/images/custom/tavuk-sis.jpg",
    imageAlt: "Kısa konaklama menüsü için temsili tavuk şiş sunumu",
    publishedAt,
    intro: "Aydıncık’ta birkaç günlük konaklama için yemek planlarken çok sayıda farklı malzeme almak yerine ortak eşlikçileri olan iki ana yemek seçebilirsiniz. Amaç dolabı doldurmak değil, mevcut mutfakta rahatça hazırlayabileceğiniz öğünleri belirlemektir.",
    sections: [
      { id: "ortak-liste", title: "Aynı eşlikçilerle iki farklı öğün kurun", paragraphs: ["Örneğin bir öğünde köfte, başka bir öğünde tavuk tercih edip salata malzemelerini ortak kullanabilirsiniz. Ekmek, sebze ve yoğurt gibi eşlikçileri de gerçek tüketiminize göre planlayın. Böylece et alışverişi, unutulmuş yan malzemeler nedeniyle yeni bir alışveriş turuna dönüşmez.", "Dışarıda yiyeceğiniz öğünleri baştan hesaba katın. Geç varılan gün için uzun hazırlık isteyen bir yemek seçmek yerine ekipmanınıza uygun bir seçenek düşünün. Alışveriş listesini gün sayısına değil, gerçekten evde pişirilecek öğünlere göre oluşturun."] },
      { id: "ekipman", title: "Izgara görünümü yerine pişirme imkânını esas alın", paragraphs: ["Şişlik bir ürün seçmeniz, konakladığınız yerde mangal kullanabileceğiniz anlamına gelmez. Tava veya fırın kullanılacaksa bunu kasaba belirtin. Şişe dizilmiş ürün mü, ayrı parçalar mı istediğinizi ve paketlerin mutfaktaki ekipmana sığıp sığmayacağını düşünün."] },
      { id: "kucuk-paket", title: "Küçük ve anlaşılır paketler isteyin", paragraphs: ["Her öğünün ürününü ayrı paketletin ve hazır baharatlı ürünlerin içeriğini sorun. Aynı paketi birkaç öğüne bölmek yerine günlük ihtiyacınızı alışveriş sırasında netleştirmek, kısa konaklamalarda daha pratiktir. Etiket ve saklama bilgisini paketle birlikte koruyun.", "Aydıncık’a giderken Toroslar’daki mağazamıza uğramayı planlıyorsanız yolculuk ve muhafaza imkânını birlikte değerlendirin. Uygun soğuk taşıma sağlayamıyorsanız alışverişi varışa yakın yapmak daha mantıklı olabilir. Fiyat, stok ve hazırlama talepleri için önceden iletişime geçebilirsiniz."], tips: ["İki ana yemek ve ortak eşlikçiler belirleyin.", "Tava, fırın ve dolap imkânını öğrenin.", "Öğünlük ayrı paket isteyin.", "Dönüş günü için fazla ürün bırakmayın."] },
    ],
    productCategory: "tavuk",
    relatedSlugs: ["erdemli-yazlikta-et-alisverisi", "anamur-et-tasima-planlama"],
  },
  {
    slug: "bozyazi-tavuk-parcalari-secimi",
    district: "Bozyazı",
    title: "Bozyazı için tavuk alışverişi: şiş, pirzola ve fırınlık seçim",
    description: "Bozyazı’da tavuk yemeği planlayanlar için şişlik, pirzola ve fırınlık parça seçimi. Kemik, deri, marinasyon ve paketleme tercihlerini karşılaştırın.",
    category: "Tavuk rehberi",
    image: "/images/custom/tavuk-pirzola.jpg",
    imageAlt: "Tavuk pirzola için temsili ürün sunumu",
    publishedAt,
    intro: "Bozyazı’da evde tavuk yemeği hazırlamak için alışveriş yaparken yalnızca ürün adına bakmak yeterli olmayabilir. Şiş, pirzola ve fırınlık seçeneklerde kemik, deri ve kesim farklılıkları bulunabilir. Pişirme yönteminizi açıklamak, beklediğiniz ürünü almanızı kolaylaştırır.",
    sections: [
      { id: "parca", title: "Kemikli ve kemiksiz seçenekleri netleştirin", paragraphs: ["Tavuk pirzola adını gördüğünüzde ürünün hangi parçadan hazırlandığını, kemik içerip içermediğini ve derili olup olmadığını sorun. Aynı adla sunulan hazırlıklar farklılık gösterebilir. Fırın tepsisi için aldığınız parça ile şişe takılacak parçanın hazırlama ihtiyacı aynı değildir.", "Şişlik ürünlerde birbirine yakın büyüklükte doğrama isteyin. Göğüs veya but tercihinizi belirtin ve seçilen parçanın pişirme yönteminize uygunluğunu görüşün. Kilogram karşılaştırması yaparken kemik, deri ve temizleme farklarını hesaba katın."] },
      { id: "marine", title: "Hazır marinasyonun içeriğini sorun", paragraphs: ["Marineli ürünler hazırlık süresini azaltabilir, ancak içerik tercihlerinizle uyumlu olmalıdır. Süt ürünü, baharat veya başka bileşenler hakkında bilgi alın. Kendi sosunuzu kullanacaksanız sade ürün istemek daha kontrollü bir başlangıç sağlar. Sosun rengi ve kokusu, pişirme kontrolünün yerine geçmez."] },
      { id: "liste", title: "Menünüzü ve paketleri eşleştirin", paragraphs: ["Fırında sebzeli tavuk ile tavada şiş için ayrı paketler hazırlatabilirsiniz. Kaç öğün planladığınızı, her öğünün kişi sayısını ve kullanılacak ekipmanı yazın. Tavuk ile diğer ürünleri aynı siparişte alıyorsanız ayrı ambalaj isteyin.", "Bozyazı için alışveriş planınızı Akdeniz Kasabı ile görüşebilirsiniz; mağazamız Toroslar’dadır. Uzaktan bilgi almak, teslimatın otomatik olarak mümkün olduğu anlamına gelmez. Ürün, stok, hazırlama ve teslim seçeneklerini sipariş görüşmesinde teyit edin."], tips: ["Göğüs veya but tercihi", "Kemikli/kemiksiz ve derili/derisiz hazırlık", "Sade veya marineli ürün", "Öğün sayısına uygun ayrı paket"] },
    ],
    productCategory: "tavuk",
    relatedSlugs: ["aydincik-kisa-konaklama-yemek-plani", "mezitli-mangallik-et-secimi"],
  },
  {
    slug: "camliyayla-yayla-mangal-hazirligi",
    district: "Çamlıyayla",
    title: "Çamlıyayla için yayla sofrası ve mangal hazırlığı",
    description: "Çamlıyayla’da yayla sofrası planlarken et seçimi, ekipman, öğünlük paketler ve soğuk taşıma hazırlığı. Mangal öncesi alışveriş kontrol listesi.",
    category: "Yayla hazırlığı",
    image: "/images/custom/karisik-izgara.jpg",
    imageAlt: "Yayla sofrası için temsili karışık ızgaralık ürünler",
    publishedAt,
    intro: "Çamlıyayla’da yayla sofrası hazırlığı, et seçiminin yanında yol ve mutfak planını da gerektirir. Evdeki geniş mutfaktan farklı bir ortamda yemek yapacaksanız hangi ekipmanın bulunduğunu ve ürünleri nerede muhafaza edeceğinizi yola çıkmadan öğrenin.",
    sections: [
      { id: "ekipman", title: "Pişirme yerini ve ekipmanı doğrulayın", paragraphs: ["Mangal yapmayı düşünüyorsanız kullanılacak alandaki güncel kuralları ve varsa kısıtlamaları kontrol edin. Fırın veya ocak yedek planınız olsun. Izgaranın boyutu, seçilecek ürünleri ve tek seferde hazırlanabilecek porsiyon sayısını etkiler; çok çeşitli menü her zaman daha kolay değildir.", "Köfte ve eşit porsiyonlanmış kesimler hazırlığı sadeleştirebilir. Kemikli ürünler alıyorsanız tartı miktarını kemiksiz ürünlerle aynı şekilde değerlendirmeyin. Misafirlerin tercihlerini baştan öğrenerek gereksiz çeşitliliği azaltabilirsiniz."] },
      { id: "tasima", title: "Serin hava, soğuk muhafazanın yerine geçmez", paragraphs: ["Havanın serin olması et paketlerini araçta veya dışarıda bekletmek için yeterli bir ölçüt değildir. Soğutucu ve soğutucu akü ihtiyacını yolculuğa göre planlayın. USDA’nın ev dışında ızgara rehberi, ürünlerin kullanım anına kadar uygun soğuklukta tutulmasını önerir."] },
      { id: "paketler", title: "Sofrayı küçük partiler halinde hazırlayın", paragraphs: ["Her pişirme turunun ürününü ayrı paketlemek hazırlığı düzenler. Çiğ ürünlerle temas eden tabak ve ekipmanı servis malzemelerinden ayırın. Eşlikçileri ve servis tabaklarını önceden hazırlamak, et hazır olduğunda herkesin aynı anda sofraya oturmasına yardımcı olur.", "Çamlıyayla’ya hareket etmeden Toroslar’daki Akdeniz Kasabı’na uğrayacaksanız miktar ve hazırlama tercihinizi önceden paylaşın. Bu yazı belirli bir yaylada mağazamız veya sabit teslimat hattımız bulunduğunu ifade etmez; uygun seçenekleri doğrudan görüşebilirsiniz."], tips: ["Pişirme alanının güncel kurallarını öğrenin.", "Ocak veya fırın alternatifini kontrol edin.", "Taşıma ve varışta muhafazayı planlayın.", "Servis sırasına göre paket isteyin."] },
    ],
    productCategory: "izgaralik",
    relatedSlugs: ["mezitli-mangallik-et-secimi", "anamur-et-tasima-planlama"],
    sources: [{ label: "USDA: Ev dışında ızgara için soğuk taşıma", url: "https://ask.fsis.usda.gov/article/How-do-you-keep-meat-safe-when-grilling-away-from-home" }],
  },
  {
    slug: "gulnar-guveclik-et-secimi",
    district: "Gülnar",
    title: "Gülnar için güveçlik et seçimi ve doğrama rehberi",
    description: "Gülnar’da güveç ve tencere yemeği hazırlayanlar için dana-kuzu tercihi, kemikli et, doğrama boyutu ve sipariş öncesi sorulacak sorular.",
    category: "Tencere ve güveç",
    image: "/images/custom/kuzu-kusbasi.jpg",
    imageAlt: "Güveç hazırlığına yönelik temsili kuzu kuşbaşı sunumu",
    publishedAt,
    intro: "Gülnar’da ev sofrası için güveç veya uzun pişen tencere yemeği hazırlarken en pahalı kesim yerine yemeğin yöntemine uygun eti seçmek önemlidir. Dana veya kuzu tercihi kadar, doğrama boyutu ve sebzelerle birlikte pişirme planı da sonucu etkiler.",
    sections: [
      { id: "dana-kuzu", title: "Dana mı kuzu mu? Tarifi ve damak tadını birlikte düşünün", paragraphs: ["Dana ve kuzu farklı lezzet karakterleri sunar. Hangi eti tercih edeceğinizi tarifinize ve sofradakilerin alışkanlıklarına göre belirleyin. Kasabınızdan uzun pişirmeye uygun bir parça önermesini isteyin; ızgaralık bir ürünü seçmiş olmak güveçte kendiliğinden daha iyi sonuç vereceği anlamına gelmez.", "Kemikli hazırlık istiyorsanız parçaların tencereye sığacak şekilde hazırlanmasını konuşun. Kemik, tartı miktarının bir bölümünü oluşturur. Miktar görüşmesinde bunu ve yemeğe eklenecek sebzeleri belirtmek, sofraya çıkacak porsiyonu daha anlaşılır hale getirir."] },
      { id: "boyut", title: "Et ile sebzenin doğrama planını eşleştirin", paragraphs: ["Birbirinden çok farklı büyüklükte et parçaları pişirme takibini zorlaştırabilir. Küçük sotelik doğrama yerine tarifinizin gerektirdiği boyutu tarif edin. Sebzelerin ne zaman ekleneceği ve yemeğin ocakta mı fırında mı hazırlanacağı da kesim tercihini etkiler."] },
      { id: "sure", title: "Pişirme süresini tek bir rakama bağlamayın", paragraphs: ["Etin parçası, miktarı, kullanılan kap ve ekipman değiştikçe pişirme süresi de değişir. Alışveriş sırasında ne kadar vaktiniz olduğunu söyleyin. Özel bir misafir yemeği için daha önce kullanmadığınız bir kesim seçiyorsanız hazırlama önerisini de sorun.", "Gülnar’dan Toroslar’daki Akdeniz Kasabı’na danışırken yemek adını, dana-kuzu tercihini, kemik isteğini ve miktarı birlikte iletebilirsiniz. Yolculuk yapacaksanız alışveriş ve muhafaza koşullarını ayrıca değerlendirin. Güncel stok ve hazırlık uygunluğu görüşme sırasında belirlenir."], tips: ["Güveç, fırın veya tencere yöntemini belirtin.", "Dana-kuzu ve kemik tercihini yazın.", "Eşit büyüklükte doğrama isteyin.", "Hazırlık sürenizi ve kişi sayısını paylaşın."] },
    ],
    productCategory: "kuzu",
    relatedSlugs: ["mut-kavurmalik-et-secimi", "akdeniz-gunluk-yemeklik-et-secimi"],
  },
  {
    slug: "mut-kavurmalik-et-secimi",
    district: "Mut",
    title: "Mut için kavurmalık et seçimi: parça, yağ ve miktar",
    description: "Mut’ta evde kavurma hazırlamak için etin parçası, yağ tercihi ve doğrama boyutu nasıl seçilir? Günlük yemeklik kavurma için alışveriş rehberi.",
    category: "Et hazırlama",
    image: "/images/beef-cuts.jpg",
    imageAlt: "Kavurmalık et seçimini temsil eden dana eti sunumu",
    publishedAt,
    intro: "Mut’ta evde kavurma hazırlamayı planlıyorsanız kasap alışverişinde dana veya kuzu tercihinizle birlikte pişirme yöntemini de anlatın. Bu rehber sofrada servis edilecek günlük kavurma hazırlığı içindir; uzun süre saklanan konserve veya geleneksel saklama yöntemi tarifi değildir.",
    sections: [
      { id: "parca", title: "Kavurmalık etin hangi parçadan hazırlandığını sorun", paragraphs: ["Kuşbaşı adı doğrama biçimini anlatır; etin hangi bölümden geldiğini tek başına söylemez. Kavurma için alacağınız parçayı ve planladığınız pişirme süresini kasabınızla görüşün. Dana veya kuzu seçiminizi sofranın lezzet tercihine göre yapın; ürünün yalnızca görünümünden pişme süresi çıkarmayın.", "Aynı pakette çok farklı büyüklükte parçalar bulunması hazırlığı zorlaştırır. Eşit doğrama isteyin ve sinir temizliği konusundaki beklentinizi belirtin. Küçük doğrama her tarifte daha iyi sonuç vermez; kullanacağınız tavayı veya tencereyi de söyleyin."] },
      { id: "yag", title: "Yağ tercihini tarifin tamamıyla birlikte değerlendirin", paragraphs: ["Etin kendi yağ yapısı ile sonradan eklemeyi düşündüğünüz yağ aynı planın parçasıdır. Çok yağsız bir ürün alıp tarifte ayrıca yağ kullanacaksanız bunu alışverişte konuşun. Hazır bir karışım veya farklı etlerin birlikte kullanılması söz konusuysa içeriğini öğrenin."] },
      { id: "miktar", title: "Tencere kapasitesi ve öğün sayısını birlikte belirleyin", paragraphs: ["Büyük miktarda eti küçük bir kapta hazırlamak, beklediğiniz pişirme düzenini değiştirebilir. Tek öğün için mi yoksa ayrı günlerde hazırlanacak birkaç öğün için mi alışveriş yaptığınızı netleştirin. Ayrı günlerde kullanılacak miktarları alışveriş sırasında ayrı paketletmek daha düzenli bir başlangıç sağlar.", "Mut’tan Akdeniz Kasabı ile görüşürken yemeğinizi ve hazırlık tercihlerinizi mesajla paylaşabilirsiniz. Mağazamız Toroslar’dadır; yol, muhafaza ve teslim seçeneklerini önceden değerlendirin. Kesin fiyat ve stok bilgisini doğrudan işletmeden alın."], tips: ["Dana veya kuzu tercihi", "Günlük yemek için planlanan kişi sayısı", "Parça, yağ ve eşit doğrama isteği", "Tek öğün veya ayrı paket tercihi"] },
    ],
    productCategory: "dana",
    relatedSlugs: ["gulnar-guveclik-et-secimi", "tarsus-evde-tantuni-icin-et-secimi"],
  },
];

const shoppingGuidePosts: BlogPost[] = [
  {
    slug: "mersin-kasap-secimi-rehberi",
    title: "Mersin’de kasap seçimi: alışverişten önce sorulacak 7 soru",
    description: "Mersin’de kasap ararken ürün, kesim, fiyat ve hazırlama bilgilerini nasıl değerlendirmeli? Alışveriş öncesi sorulacak 7 soruyla kararınızı netleştirin.",
    category: "Kasap seçimi",
    image: "/images/custom/category-dana.jpg",
    imageAlt: "Kasap alışverişinde karşılaştırılabilecek dana eti çeşitlerinin temsili sunumu",
    publishedAt: "2026-10-15T21:50:00+03:00",
    updatedAt: "2026-10-19T00:00:00+03:00",
    intro: "Mersin’de kasap ararken arama sonuçlarındaki isimleri karşılaştırmak başlangıçtır; doğru alışveriş için tezgâhta hangi bilgileri soracağınızı da bilmeniz gerekir. Yapacağınız yemek, istediğiniz hazırlık ve toplam bütçe belli olduğunda seçenekler daha anlaşılır hale gelir. Aşağıdaki yedi soruyu aynı ürün için sormak, farklı teklifleri değerlendirmeyi kolaylaştırır.",
    sections: [
      { id: "ihtiyaca-gore-baslangic", title: "Alışveriş amacınıza göre nereden başlamalı?", paragraphs: ["Mersin kasap aramasında aynı listeye bakan iki kişinin ihtiyacı farklı olabilir: biri gece açık mağaza ararken diğeri haftalık et alışverişi veya özel kesim planlıyor olabilir. Önce açık saat ve ulaşımı, ardından ürünün kullanımını ve bütçeyi netleştirin. Yalnızca işletme adına bakarak bütün ihtiyaçların karşılandığını varsaymayın.", "Geç saatte gelecekseniz ürünün hazır olma durumunu; haftalık alışverişte paket sayısı ve muhafaza bilgisini; özel kesimde doğrama ve çekim tercihinizi konuşun. Aşağıdaki rehberler bu üç başlangıç noktasına göre hazırlanmıştır. Ardından bu yazıdaki yedi soruyla teklif ve hazırlık ayrıntılarını kontrol edebilirsiniz."], links: [{ href: "/blog/mersin-7-24-acik-kasap", label: "Gece ve pazar günü 7/24 kasap alışverişi" }, { href: "/blog/mersin-et-market-taze-et-alisverisi", label: "Taze et ve et market alışverişinde sorulacaklar" }, { href: "/blog/mersin-istege-gore-et-dograma-kiyma-cekimi", label: "Et doğrama ve kıyma çekimi için sipariş notu" }] },
      { id: "urun-ve-kesim", title: "1–3. Et hangi parçadan, nasıl hazırlanacak ve tartı neyi içeriyor?", paragraphs: ["Kuşbaşı ve kıyma ifadeleri tek başına hayvanın hangi bölümünün kullanılacağını anlatmaz. Önce dana veya kuzu tercihinizi, ardından yemek adını söyleyin. Sote için kısa sürede pişirmeye uygun bir hazırlık, güveç için farklı bir parça gerekebilir. İstediğiniz kesimin o anda bulunup bulunmadığını öğrenin.", "İkinci soru doğrama ve porsiyonlamadır: etin küçük kuşbaşı, eşit dilim veya ayrı öğünlük paketler halinde hazırlanmasını mı istiyorsunuz? Üçüncü soru ise tartıdır. Kemikli, kemiksiz ve temizlenmiş seçeneklerin miktarı aynı şekilde karşılaştırılmaz. Alacağınız ağırlığın hangi hazırlığı kapsadığını sorun."] },
      { id: "icerik-fiyat", title: "4–5. Hazır ürünün içeriği ve toplam fiyatı nedir?", paragraphs: ["Kasap köfte, sucuk veya marineli tavuk alırken ürünün içeriğini öğrenin. Et türü, baharat ve varsa diğer bileşenler tercihlerinizi etkiler. Belirli bir malzemeyi tüketemiyorsanız sadece görünüşe veya ürün adına güvenmek yerine bunu açıkça belirtin.", "Kilogram fiyatının yanında istediğiniz miktarın toplam tutarını da sorun. Kesim, hazırlama veya paketleme için ayrıca bir ücret söz konusuysa önceden öğrenin. Farklı kasaplardan alınan teklifleri aynı gün, aynı ürün ve aynı hazırlama koşulları üzerinden karşılaştırın."] },
      { id: "teslim-ve-muhafaza", title: "6–7. Ne zaman hazır olur ve eve nasıl götürmeliyim?", paragraphs: ["Mağazanın açık olması ile belirli bir ürünün hazırlanmış olması farklıdır. Özellikle özel kesim veya çok kalemli alışverişte teslim alma zamanını teyit edin. Ambalaj, etiket ve ürüne uygun muhafaza bilgilerini alırken yolculuk yapacağınızı da söyleyin.", "Kasaplar arasında seçim yaparken ulaşımınıza uygun gerçek adresi, iletişim kurabilmenizi ve sorularınıza verilen açık cevapları birlikte değerlendirin. Her müşteri için tek bir en iyi seçenek yoktur; günlük yemek, özel kesim ve toplu sofra ihtiyaçları değişir."] },
      { id: "akdeniz-kasabi", title: "Akdeniz Kasabı’na alışveriş listenizi nasıl iletebilirsiniz?", paragraphs: ["Akdeniz Kasabı Mersin’in Toroslar ilçesinde, Mithat Toroğlu Mahallesi, Kuvayi Milliye Caddesi’ndedir. Mağazamız haftanın her günü 24 saat açıktır. Ürünler sayfasından listenizi oluşturup miktar ve hazırlama tercihini WhatsApp mesajına ekleyebilirsiniz.", "Mesajınızı göndermek otomatik ödeme veya kesin sipariş oluşturmaz. Güncel fiyat, stok, hazırlama ve teslim alma bilgileri görüşmede netleşir. Kısa bir listeyle başlamak, hem ihtiyacınızı anlatmanızı hem de teklifleri karşılaştırmanızı kolaylaştırır."], tips: ["Ürün ve yemek adı", "Miktar, kesim ve paket sayısı", "Hazır ürünlerde içerik soruları", "Toplam fiyat ve hazırlanma saati"] },
      { id: "urun-rehberleri", title: "Seçtiğiniz ürün için hazırlık ayrıntılarına bakın", paragraphs: ["Temel soruları netleştirdikten sonra ürünün kendi hazırlığına geçin. Kıymada yemek ve çekim tercihi, biftekte kesim ve kalınlık, sucukta içerik ve kullanım miktarı ayrı kararlar gerektirir. Aşağıdaki rehberlerden yemeğinize uygun olanı açıp alışveriş listenizi somutlaştırabilirsiniz."], links: [{ href: "/blog/mersin-dana-kiyma-secimi", label: "Köftelik ve yemeklik dana kıyma seçimi" }, { href: "/blog/mersin-antrikot-bonfile-farki", label: "Antrikot ve bonfileyi karşılaştırma" }, { href: "/blog/mersin-kasap-sucugu-secimi", label: "Kasap sucuğunda içerik, dilim ve miktar" }] },
    ],
    productCategory: "dana",
    relatedSlugs: ["mersin-kasap-fiyatlari-ucretleri", "akdeniz-kasabi-mersin-adres-iletisim", "mersin-dana-kiyma-secimi"],
  },
  {
    slug: "mersin-kasap-fiyatlari-ucretleri",
    title: "Mersin kasap fiyatları ve ücretleri: doğru teklif alma rehberi",
    description: "Mersin kasap ücretleri ve et fiyatlarını karşılaştırırken kesim, yağ oranı, kemik ve miktarı birlikte değerlendirin. Güncel fiyat istemek için örnek liste.",
    category: "Fiyat ve bütçe",
    image: "/images/custom/dana-kusbasi.jpg",
    imageAlt: "Fiyat teklifi istenirken kesimi belirtilen dana kuşbaşının temsili görseli",
    publishedAt: "2026-10-15T21:50:00+03:00",
    updatedAt: "2026-10-19T00:00:00+03:00",
    intro: "Mersin kasap fiyatları veya kasap ücretleri aramasında tek bir kilogram rakamı görmek, alışverişin tamamını anlatmaz. Etin türü, bölümü, kemik durumu ve hazırlama tercihi karşılaştırmayı değiştirir. Akdeniz Kasabı’nda güncel fiyat bilgisi ürün ve miktarınıza göre iletişim sırasında paylaşılır; bu rehberde fiyat teklifi isterken hangi ayrıntıları belirtmeniz gerektiğini bulabilirsiniz.",
    sections: [
      { id: "guncel-fiyat-sorulari", title: "Dana kıyma, kuzu eti ve mangallık et fiyatı nasıl sorulur?", paragraphs: ["Mersin dana kıyma fiyatlarını öğrenirken yağ ve çekim tercihinizi, toplam miktarı ve paket sayısını birlikte iletin. Kuzu eti için yalnızca türü değil pirzola mı kuşbaşı mı istediğinizi söyleyin; kemikli ve kemiksiz seçeneklerin tartısını ayrı değerlendirin. Güncel fiyatı, satın almayı planladığınız gün ve hazırlık koşulları için isteyin.", "Mangallık et fiyatında tek bir paket rakamından önce dana, kuzu, tavuk ve köfte miktarlarını ayrı ayrı görün. Aynı ağırlıktaki iki karışık paket farklı ürün oranları içerebilir. Bu sayfa sabit veya anlık fiyat listesi değildir; mağazamızdan alacağınız teklifin geçerliliğini ve varsa ek hazırlama ücretlerini teyit edin."], links: [{ href: "/urunler/dana-eti", label: "Dana kıyma ve diğer dana ürünleri için seçenekler" }, { href: "/urunler/kuzu-eti", label: "Kuzu eti fiyatı sorarken karşılaştırılacak ürünler" }, { href: "/urunler/mangallik-et", label: "Mangallık et ve karışık ızgara seçenekleri" }] },
      { id: "ayni-urun", title: "Önce aynı ürünü karşılaştırdığınızdan emin olun", paragraphs: ["Dana kıyma, dana kuşbaşı ve antrikot birbirinin yerine fiyatlandırılacak tek bir et grubu değildir. Kıymada et türü ve yağ tercihi, kuşbaşında seçilen parça ve doğrama, pirzolada kemik durumu önemlidir. Sadece ürün adına bakarak iki fiyatın aynı hazırlığa ait olduğunu varsaymayın.", "Teklifleri farklı günlerde aldıysanız güncelliklerini yeniden teyit edin. İnternette görülen bir kampanya veya eski fiyat görseli, bugün aynı koşulların geçerli olduğunu göstermez. Miktar ve hazırlama isteğiniz değiştiğinde toplam tutarı da yeniden sorun."], table: { caption: "Ürün bazında fiyat teklifi için gerekli ayrıntılar", columns: ["Ürün", "Teklifte belirtilmesi gereken"], rows: [["Dana kıyma", "Et türü, yağ tercihi, miktar ve paket sayısı"], ["Dana kuşbaşı", "Kullanılacak yemek, parça ve doğrama boyutu"], ["Kuzu pirzola", "Kemik durumu, dilim tercihi ve miktar"], ["Tavuk şiş / pirzola", "Kullanılan parça, deri-kemik durumu ve marinasyon"], ["Kasap köfte", "İçerik, gramaj veya miktar ve hazırlama tercihi"]] } },
      { id: "toplam-ucret", title: "Kilogram fiyatını toplam alışveriş tutarına çevirin", paragraphs: ["Temel hesap ürünün birim fiyatı ile alınan ağırlığın çarpımıdır. Fakat birden fazla ürün içeren pakette her kalemin ağırlığı bilinmeden toplamı değerlendirmek zordur. Karışık mangal paketi alıyorsanız içindeki ürünleri ve miktarlarını ayrı ayrı isteyin.", "Temizleme, özel doğrama, paketleme veya varsa teslimatla ilgili ücretleri ayrıca sorun. Bu kalemlerin ücretsiz ya da ücretli olduğunu baştan varsaymayın. Aynı toplam bütçenin hangi ürünleri, ne kadar miktarı ve hangi hazırlığı kapsadığını netleştirmek daha sağlıklı bir karşılaştırma sağlar."] },
      { id: "fiyat-mesaji", title: "Güncel fiyat için gönderilebilecek örnek mesaj", paragraphs: ["Talebinizi şu şekilde yazabilirsiniz: Merhaba, iki ayrı pakette toplam 1 kg dana kıyma ve sote için 500 g dana kuşbaşı düşünüyorum. Kıymanın yağ seçenekleri, ürünlerin kilogram fiyatı, toplam tutar ve hazırlanma zamanı hakkında bilgi verebilir misiniz?", "Buradaki miktarlar yalnızca mesajı örneklendirir; kişi başı tüketim önerisi değildir. Kendi yemek planınıza göre değiştirin. İşletmeden gelen yanıtta birim fiyat, toplam miktar ve toplam tutarın birlikte bulunmasına dikkat edin."] },
      { id: "butce", title: "Bütçe için kullanılacak öğünü ve miktarı birlikte planlayın", paragraphs: ["Bir ürünü düşük birim fiyatı nedeniyle gereğinden fazla almak toplam harcamayı artırabilir. Evde bulunan malzemeleri, sofradaki eşlikçileri ve kaç öğün pişireceğinizi değerlendirin. Kemikli bir ürünün ağırlığını tamamen yenebilir et miktarı olarak düşünmeyin.", "Toroslar’daki Akdeniz Kasabı’na 0553 776 61 62 üzerinden ulaşarak güncel fiyat isteyebilirsiniz. Sipariş listesindeki ürünleri gönderdikten sonra stok, miktar ve teslim alma ayrıntılarını birlikte teyit edin. Mağazamız 7/24 açıktır; belirli kesimlerin hazırlık durumunu gelmeden önce sormak faydalıdır."] },
    ],
    productCategory: "dana",
    relatedSlugs: ["mersin-kasap-secimi-rehberi", "mersin-mangal-paketi-hazirlama", "yenisehir-haftalik-et-alisverisi"],
  },
  {
    slug: "mersin-tavuk-kasabi-urunleri",
    title: "Mersin’de tavuk kasabı arayanlara ürün ve sipariş rehberi",
    description: "Mersin’de tavuk kasabı arıyorsanız tavuk şiş ve pirzola seçeneklerini, sade-marineli hazırlığı ve sipariş sorularını inceleyin. Akdeniz Kasabı Toroslar.",
    category: "Tavuk ürünleri",
    image: "/images/custom/category-tavuk.jpg",
    imageAlt: "Tavuk ürünleri için temsili kasap sunumu",
    publishedAt: "2026-10-15T21:50:00+03:00",
    updatedAt: "2026-10-19T00:00:00+03:00",
    intro: "Tavuk kasabı ararken ihtiyacınız bazen akşam yemeği için tavuk şiş, bazen de fırına uygun tavuk pirzola olabilir. Mersin’de alışverişinizi kolaylaştırmak için ürünün hangi parçadan hazırlandığını, kemik ve deri durumunu, sade mi marineli mi olduğunu birlikte değerlendirin. Akdeniz Kasabı’nın ürünler sayfasında tavuk şiş ve tavuk pirzola seçenekleri bulunur; güncel stok görüşmede teyit edilir.",
    sections: [
      { id: "pirzola-mi-marine-sis-mi", title: "Tavuk pirzola mı marine tavuk şiş mi?", paragraphs: ["Mersin’de tavuk eti alışverişinde bu iki seçenek arasında karar verirken hazırlığı hangi aşamada devralmak istediğinizi düşünün. Kendi sosunuzu ayarlamak istiyorsanız sade ürünün uygunluğunu sorun. Marine tavuk şiş tercihinde kullanılan parçayı, sos içeriğini ve ürünün şişe dizilmiş olarak verilip verilmediğini netleştirin.", "Tavuk pirzolada kemik ve deri tercihi, marine tavuk şişte sos ve parça boyutu öne çıkar. Birinin diğerinden her durumda daha ekonomik veya kolay olduğunu varsaymayın. Toplam miktar, net et ağırlığı, hazırlık ve pişirme ekipmanınız birlikte değerlendirilmelidir. Seçeneklerin güncel uygunluğunu işletmeden teyit edebilirsiniz."], links: [{ href: "/urunler/tavuk-urunleri", label: "Tavuk pirzola ve marine tavuk şiş seçenekleri" }, { href: "/blog/mersin-mangal-paketi-hazirlama", label: "Tavuğu karışık mangal listesine ekleme rehberi" }] },
      { id: "tavuk-sis", title: "Tavuk şiş isterken yalnızca miktarı söylemeyin", paragraphs: ["Şişlik ürünün hangi parçadan hazırlandığını sorun; göğüs ve but tercihiniz varsa belirtin. Etin şişe takılı mı, yalnızca doğranmış mı olacağını netleştirin. Kendi şişlerinizi kullanacaksanız parça boyutunun ekipmanınıza uygun olması hazırlığı kolaylaştırır.", "Tavada veya fırında pişirecekseniz bunu mesajınıza ekleyin. Ürünün şişlik olarak adlandırılması, yalnızca mangalda kullanılabileceği anlamına gelmez. Asıl önemli olan hazırlama biçiminin planladığınız yemeğe uymasıdır."] },
      { id: "tavuk-pirzola", title: "Tavuk pirzolada kemik, deri ve porsiyonu sorun", paragraphs: ["Tavuk pirzola adıyla sunulan hazırlıklar değişebileceği için hangi bölümün kullanıldığını ve kemik durumunu öğrenin. Derili veya derisiz tercihinizi, parçaların tek öğünde mi farklı günlerde mi kullanılacağını söyleyin. Paket sayısını da miktarın yanında belirtin.", "Fiyatları karşılaştırırken bu ayrıntıların aynı olmasına dikkat edin. Kemikli bir hazırlık ile tamamen temizlenmiş bir ürünü yalnızca kilogram fiyatına göre kıyaslamak, sofraya gelecek miktarı yanlış değerlendirmenize neden olabilir."] },
      { id: "sos-ve-icerik", title: "Sade ve marineli ürün arasında nasıl karar vermeli?", paragraphs: ["Kendi sosunuzu hazırlayacaksanız sade ürün istemek tercihlerinizi yönetmenizi kolaylaştırır. Hazır marinasyon istiyorsanız baharatı ve kullanılan bileşenleri sorun. Süt ürünü veya başka bir malzemeyle ilgili hassasiyetiniz varsa işletmeye belirtin; ürün adına bakarak içerik çıkarımı yapmayın.", "Çiğ tavuk ürünlerini diğer hazır yiyeceklerden ayrı ve sızdırmaz ambalajla taşımak gerekir. Ürünü alırken saklama ve pişirme bilgisini öğrenin. Yolculuk veya uzun süre dışarıda kalma planınız varsa taşıma ihtiyacını alışverişten önce değerlendirin."] },
      { id: "siparis", title: "Toroslar’daki mağazadan bilgi ve fiyat alma", paragraphs: ["Ürünler sayfasında tavuk kategorisini açıp istediğiniz ürünleri sipariş listenize ekleyebilirsiniz. Miktar, parça, marinasyon ve paketleme tercihlerini not alanına yazın. WhatsApp üzerinden paylaşılan liste, görüşmeyi başlatır; fiyat ve stok teyidinin yerini tutmaz.", "Mağazamız Mithat Toroğlu, Kuvayi Milliye Caddesi, Toroslar/Mersin’dedir ve her gün 24 saat açıktır. Telefonumuz 0553 776 61 62. Gelmeden önce istediğiniz tavuk ürününün ve hazırlama seçeneğinin uygunluğunu sorabilirsiniz."], tips: ["Ürün: tavuk şiş veya tavuk pirzola", "Tercih: sade veya marineli", "Kemik, deri ve parça isteği", "Miktar, paket sayısı ve teslim alma saati"] },
    ],
    productCategory: "tavuk",
    relatedSlugs: ["bozyazi-tavuk-parcalari-secimi", "mersin-kasap-fiyatlari-ucretleri", "mersin-mangal-paketi-hazirlama"],
    sources: [coldStorageSource],
  },
  {
    slug: "akdeniz-kasabi-mersin-adres-iletisim",
    title: "Akdeniz Kasabı Mersin: adres, telefon ve 7/24 çalışma saatleri",
    description: "Akdeniz Kasabı Mersin’de nerede? Mithat Toroğlu, Kuvayi Milliye Cd., Toroslar. Telefon 0553 776 61 62; haftanın her günü 24 saat açık. Sipariş ve ulaşım bilgileri.",
    category: "Mağaza rehberi",
    image: "/images/hero-butcher.jpg",
    imageAlt: "Akdeniz Kasabı’nın ürün gruplarını temsil eden et sunumu",
    publishedAt: "2026-10-15T21:50:00+03:00",
    updatedAt: "2026-10-19T00:00:00+03:00",
    intro: "Akdeniz Kasabı Mersin’i arıyorsanız mağazamız Toroslar ilçesinde, Mithat Toroğlu Mahallesi, Kuvayi Milliye Caddesi’ndedir. Telefon ve WhatsApp numaramız 0553 776 61 62’dir. Haftanın her günü 24 saat açığız; tatil günü yoktur. İlk kez gelecekler ve sipariş öncesinde bilgi almak isteyenler için temel bilgileri burada bir araya getirdik.",
    sections: [
      { id: "mithat-toroglu-kuvayi-milliye", title: "Mithat Toroğlu ve Kuvayi Milliye Caddesi için doğru mağaza", paragraphs: ["Mithat Toroğlu kasap veya Kuvayi Milliye Caddesi kasap aramasıyla geldiyseniz adres satırında Toroslar/Mersin bilgisini kontrol edin. Akdeniz Kasabı Mersin ve Akdeniz Kasabı Toroslar ifadeleri aynı mağazamızı anlatır. Benzer işletme adlarını ayırmak için 0553 776 61 62 telefon numarasını da karşılaştırın.", "Haritadaki hedef doğru olsa bile başlangıç konumu önceki bir yolculuktan kalmış olabilir. Yol Tarifi ekranında mevcut konumunuzu veya adresinizi seçin ve ulaşım türünü kontrol edin. Geceleri, pazar günleri ve tatillerde mağazamız açıktır; almak istediğiniz ürünün hazırlanma durumu için önceden arayabilirsiniz."], links: [{ href: "/iletisim", label: "Mithat Toroğlu mağazasının haritası ve yol tarifi" }, { href: "/blog/mersin-7-24-acik-kasap", label: "7/24 çalışma düzeni ve gece alışverişi rehberi" }] },
      { id: "adres", title: "Akdeniz Kasabı nerede?", paragraphs: ["Tam adresimiz Mithat Toroğlu, Kuvayi Milliye Cd., 33080 Toroslar/Mersin’dir. Akdeniz, işletmemizin adıdır; mağaza adresindeki ilçe Toroslar’dır. Haritada işletme ararken isimle birlikte adres ve telefon bilgisini karşılaştırmanız doğru noktayı bulmanıza yardımcı olur.", "İletişim sayfamızdaki Yol Tarifi bağlantısı mağazanın konumunu hedef alır. Harita uygulamasında başlangıç noktasını mevcut konumunuz olarak seçebilirsiniz. Konum izni vermek istemezseniz bulunduğunuz adresi elle girerek de rota oluşturabilirsiniz."] },
      { id: "saatler", title: "Gece, hafta sonu ve tatil günlerinde açık mı?", paragraphs: ["Mağazamız 7 gün 24 saat açıktır; hafta sonları ve tatil günleri için kapanış günü bulunmaz. Gece alışverişinde de 0553 776 61 62 üzerinden ulaşabilirsiniz. Belirli bir et parçası, özel doğrama veya toplu hazırlık istiyorsanız gelmeden önce bilgi alın.", "Çalışma saatleri mağazanın açık olduğu zamanı gösterir. İstediğiniz her ürünün o anda hazır bulunması veya özel hazırlığın hemen tamamlanması anlamına gelmez. Stok ve hazırlık süresini önceden konuşmak özellikle gece ve kalabalık sofra alışverişinde zaman kazandırır."] },
      { id: "urunler", title: "Hangi ürünler hakkında bilgi alabilirsiniz?", paragraphs: ["Sitemizde dana eti, kuzu eti, tavuk ürünleri, köfte ve hazır ürünler, sucuk ve şarküteri ile ızgaralık ürün grupları yer alır. Dana kıyma, kuşbaşı, antrikot, bonfile, kuzu pirzola, tavuk şiş ve kasap köfte gibi seçenekleri ürünler sayfasında inceleyebilirsiniz.", "Görseller temsili ürün sunumlarıdır; alacağınız ürünün kesimi ve hazırlama biçimi görüşme sırasında belirlenir. Güncel fiyat ve stok için ürün adını ve miktarı paylaşın. Fotoğraftaki paket miktarını otomatik olarak sipariş miktarı kabul etmeyin."] },
      { id: "iletisim", title: "WhatsApp sipariş görüşmesi nasıl ilerler?", paragraphs: ["Ürünler sayfasından listenize ürün ekleyin, miktarları yazın ve varsa hazırlama notunuzu belirtin. Listeyi WhatsApp’a aktarınca mesajı kontrol ederek kendiniz gönderebilirsiniz. Bu işlem üyelik veya online ödeme gerektirmez.", "İşletmeyle görüşmede fiyat, stok, hazırlama zamanı ve teslim alma ayrıntıları netleşir. Mağazadan teslim alma planınızı paylaşabilir; farklı teslim seçeneklerinin uygunluğunu sorabilirsiniz. İlçe veya mahalle adını söylemeniz, o bölgeye teslimatın önceden onaylandığı anlamına gelmez."], tips: ["Adres: Mithat Toroğlu, Kuvayi Milliye Cd., Toroslar/Mersin", "Telefon ve WhatsApp: 0553 776 61 62", "Çalışma: her gün 24 saat, tatil yok", "Güncel ürün ve fiyat: telefon veya WhatsApp görüşmesi"] },
    ],
    productCategory: "dana",
    relatedSlugs: ["mersin-en-yakin-kasap-yol-tarifi", "mersin-kasap-fiyatlari-ucretleri", "toroslar-kasap-alisverisi-rehberi"],
  },
  {
    slug: "mersin-en-yakin-kasap-yol-tarifi",
    title: "Mersin’de en yakın kasap nasıl bulunur? Adres ve yol tarifi rehberi",
    description: "Mersin’de en yakın kasabı ararken konum, açık saatler ve ürün bilgisini doğrulayın. Atakent, Çavak ve Toroslar aramalarında doğru adresi bulma rehberi.",
    category: "Konum ve yol tarifi",
    image: "/images/custom/category-hazir.jpg",
    imageAlt: "Kasap alışverişi planını temsil eden hazır et ürünleri sunumu",
    publishedAt: "2026-10-15T21:50:00+03:00",
    intro: "En yakın kasap aramasının cevabı, Mersin’de o anda bulunduğunuz noktaya göre değişir. Mağazanın adına bakmanın yanında haritadaki adresi, yol süresini, çalışma saatini ve ihtiyacınız olan ürünü kontrol etmek gerekir. Bu rehber, bulunduğunuz bölgeden alışverişe çıkmadan önce hangi bilgileri doğrulamanız gerektiğini anlatır.",
    sections: [
      { id: "konum", title: "Aramanın başlangıç konumunu kontrol edin", paragraphs: ["Harita uygulaması eski bir konumu veya elle seçilmiş farklı bir bölgeyi kullanıyorsa yakınlık değerlendirmesi size uymayabilir. Başlangıç noktasının bulunduğunuz adres olduğunu kontrol edin. Konum paylaşmak istemiyorsanız mahalle, cadde ve ilçe bilgilerini kendiniz girebilirsiniz.", "Yalnızca haritadaki kuş uçuşu mesafeye bakmayın. Seçtiğiniz ulaşım şekli ve güncel trafik, yol süresini değiştirir. Araçla, yürüyerek veya başka bir ulaşım yöntemiyle gidecekseniz haritada uygun seçeneği işaretleyin."] },
      { id: "mahalle-aramalari", title: "Atakent veya Çavak için kasap ararken adresi nasıl doğrulamalı?", paragraphs: ["Atakent kasap ya da Çavak kasabı gibi bir arama yaptıysanız sonuçtaki işletmenin gerçekten aradığınız bölgede olup olmadığını adres satırından kontrol edin. İşletme adında veya bir blog yazısında bir yerin geçmesi, o yerde mağazası olduğunu tek başına göstermez.", "Akdeniz Kasabı’nın mağazası Mithat Toroğlu Mahallesi, Kuvayi Milliye Caddesi, Toroslar/Mersin’dedir. Atakent veya Çavak’tan mağazamıza gelmeyi düşünüyorsanız başlangıç adresinizi kullanarak rotayı hesaplatın. En yakın işletme olduğumuza dair sabit bir iddia yerine, size uygun mesafeyi haritada kendiniz değerlendirebilirsiniz."] },
      { id: "arama-sonuclari", title: "İsim, telefon ve mağaza adresi aynı işletmeye ait olmalı", paragraphs: ["Benzer isimli işletmeleri karıştırmamak için telefon ve adres bilgisini birlikte karşılaştırın. Harita kaydı, işletmenin kendi sitesi ve iletişim bilgisinin tutarlı olmasına dikkat edin. Özellikle genel bir marka veya bölge adıyla yapılan aramada yalnızca ilk görünen isme bakarak hareket etmeyin.", "Akdeniz Kasabı için kullanabileceğiniz telefon ve WhatsApp numarası 0553 776 61 62’dir. Mağazamız her gün 24 saat açıktır. Gelmeden önce ürün ve hazırlama uygunluğunu sormak, boş yere yolculuk yapmanızı önleyebilir."] },
      { id: "yol-tarifi", title: "Sitemizden doğru mağazaya yol tarifi alın", paragraphs: ["İletişim sayfasını açıp Yol Tarifi bağlantısını kullanın. Hedef, Toroslar’daki mağazamızın konumudur. Harita uygulamasında başlangıç noktasını kontrol ettikten sonra rotayı başlatın. Önceki yolculuktan kalan başlangıç adresi varsa güncelleyin.", "Alışveriş sonrası başka işleriniz varsa et ürünlerini nasıl muhafaza edeceğinizi de planlayın. Uzak bir noktadan geliyorsanız yolculuk süresini ve uygun taşıma imkânını değerlendirin; mağaza adresi veya bir blog yazısı teslimat hizmetinin onayı değildir."], tips: ["Başlangıç konumunu doğrulayın.", "Adres, telefon ve işletme adını birlikte kontrol edin.", "Ürün ve hazırlama uygunluğunu telefonla sorun.", "Yol tarifi ekranında hedefi yeniden gözden geçirin."] },
    ],
    productCategory: "dana",
    relatedSlugs: ["akdeniz-kasabi-mersin-adres-iletisim", "silifke-kalabalik-sofralar-et-plani", "yenisehir-haftalik-et-alisverisi"],
  },
  {
    slug: "mersin-kasap-kofte-siparisi",
    title: "Mersin’de kasap köfte siparişi: içerik, miktar ve hazırlık",
    description: "Mersin’de kasap köfte alırken et karışımı, baharat, porsiyon ve paketlemeyi nasıl seçmeli? Aile yemeği ve mangal için sipariş kontrol listesi.",
    category: "Kasap köfte",
    image: "/images/custom/kasap-kofte.jpg",
    imageAlt: "Kasap köfte için temsili ürün sunumu",
    publishedAt: "2026-10-15T21:50:00+03:00",
    updatedAt: "2026-10-19T00:00:00+03:00",
    intro: "Kasap köfte, günlük akşam yemeğinden kalabalık mangal sofrasına kadar farklı planlara uyarlanabilir. Mersin’de köfte siparişi verirken yalnızca kaç kilogram istediğinizi söylemek yerine içeriğini, porsiyon biçimini ve pişirme yöntemini de konuşun. Böylece eve götürdüğünüz ürünün beklentinize uygun olup olmadığını önceden netleştirebilirsiniz.",
    sections: [
      { id: "gunluk-kofte-ve-paket", title: "Günlük köfte ve köfte paketi ararken neyi teyit etmeli?", paragraphs: ["Mersin’de günlük köfte arıyorsanız satın alacağınız ürünün ne zaman hazırlandığını, içerik bilgisini ve muhafaza talimatını sorun. Günlük sözcüğünü tek başına hazırlama tarihi veya belirli bir ürün standardının kanıtı olarak kabul etmeyin. Ürün adı ve temsili fotoğraf yerine alacağınız köftenin bilgilerini netleştirin.", "Köfte paketi isterken yalnızca adet değil toplam net ağırlık, şekil ve paket sayısını da belirtin. Toroslar’daki Akdeniz Kasabı’ndan tek öğünlük veya ayrı paketler halinde hazırlık isteyebilirsiniz; uygunluk ve ücret görüşmede belirlenir. Hazır bir paketin içeriği değiştirilirse yeni miktar ve toplam fiyatı yeniden teyit edin."], links: [{ href: "/urunler/kasap-kofte", label: "Kasap köfte ürünü ve hazırlama seçenekleri" }, { href: "/blog/mersin-whatsapp-et-siparisi", label: "Köfte paketi için WhatsApp sipariş notu hazırlama" }] },
      { id: "icerik", title: "Köftenin et ve baharat içeriğini sorun", paragraphs: ["Kasap köfte adı her işletmede aynı karışımın kullanıldığı anlamına gelmez. Dana veya kuzu içeriğini, baharat tercihlerini ve varsa ek bileşenleri öğrenin. Tuz ya da belirli bir malzemeye ilişkin beklentiniz varsa hazırlanmadan önce belirtin.", "Glutensiz, alerjensiz veya belirli bir beslenme tercihine uygun olduğunu yalnızca ürün adına bakarak varsaymayın. İçerik bilgisinin yanında aynı çalışma alanındaki hazırlama koşulları da sizin için önemli olabilir. Bu tür ihtiyaçlarınızı doğrudan işletmeyle görüşün."] },
      { id: "porsiyon", title: "Adet ile ağırlığı birbirine karıştırmayın", paragraphs: ["Aynı sayıda köfte farklı boyutlarda hazırlanabilir. Teklif isterken toplam ağırlığı, yaklaşık parça büyüklüğünü ve kaç kişi için düşündüğünüzü birlikte söyleyin. Çocukların, yetişkinlerin ve sofradaki diğer ana yemeklerin varlığı ihtiyaç duyulan miktarı değiştirir.", "Tavaya uygun daha küçük porsiyonlar veya ızgara için farklı bir şekil istiyorsanız bu tercihi yazın. Standart hazırlığın dışındaki isteklerin mümkün olup olmadığını teyit edin; ürün fotoğrafını kesin boyut veya porsiyon garantisi olarak değerlendirmeyin."] },
      { id: "hazirlik", title: "Tava, fırın ve mangal için hazırlığı ayırın", paragraphs: ["Pişirme ekipmanının boyutunu ve tek seferde ne kadar ürün hazırlayabileceğinizi düşünün. Kalabalık sofrada küçük partiler halinde servis yapmak gerekebilir. Yan yemekleri ve servis tabaklarını önceden hazırlamak mutfaktaki iş sırasını düzenler.", "İki ayrı öğün için alışveriş yapıyorsanız miktarları ayrı paketletin. Çiğ ürünlerle temas eden malzemeleri servis için kullanacaklarınızdan ayırın. Saklama ve pişirme konusunda ürünle birlikte verilen bilgiyi izleyin."] },
      { id: "siparis", title: "Akdeniz Kasabı’ndan köfte için nasıl bilgi alınır?", paragraphs: ["Ürünler sayfasındaki köfte ve hazır ürünler bölümünden kasap köfteyi inceleyin. Listenize miktarı ekledikten sonra baharat, porsiyon veya paketleme tercihinizi not edin. WhatsApp mesajı üzerinden güncel fiyat, stok ve hazırlanma saatini görüşebilirsiniz.", "Toroslar’daki mağazamız 7/24 açıktır. Aile yemeği veya toplu sofra için belirli bir hazırlık düşünüyorsanız 0553 776 61 62 numarasından önceden ulaşın. Paket seçenekleri ve teslim alma zamanı, talebinizin ayrıntılarına göre netleştirilir."], tips: ["Et karışımı ve içerik bilgisi", "Toplam ağırlık ve parça tercihi", "Tava, fırın veya mangal kullanımı", "Ayrı öğünler için paket sayısı"] },
    ],
    productCategory: "hazir",
    relatedSlugs: ["mersin-mangal-paketi-hazirlama", "mersin-kasap-fiyatlari-ucretleri", "erdemli-yazlikta-et-alisverisi"],
  },
  {
    slug: "mersin-mangal-paketi-hazirlama",
    title: "Mersin’de mangal paketi nasıl hazırlanır? İçerik ve miktar rehberi",
    description: "Mersin’de mangal paketi alırken dana, kuzu, tavuk ve köfte miktarlarını nasıl planlamalı? Paket içeriği, bütçe ve hazırlama için karşılaştırma rehberi.",
    category: "Mangal paketi",
    image: "/images/custom/campaign-mangal.jpg",
    imageAlt: "Dana, kuzu ve tavuk seçeneklerini temsil eden karışık mangal sunumu",
    publishedAt: "2026-10-15T21:50:00+03:00",
    updatedAt: "2026-10-19T00:00:00+03:00",
    intro: "Mersin’de mangal paketi ararken paketin adından çok hangi ürünleri ve ne kadar miktarı içerdiğine bakın. Bir paketin aile boyu veya karışık olarak adlandırılması, sizin sofranıza yeteceğini tek başına göstermez. Kişi sayısı, yemek tercihleri ve ızgara kapasitesi üzerinden plan yapmak alışverişi daha anlaşılır hale getirir.",
    sections: [
      { id: "toroslar-izgaralik-secimi", title: "Toroslar’da mangallık et: dana ızgaralık ve karışık paket", paragraphs: ["Yalnızca dana ızgaralık almak istiyorsanız antrikot, bonfile veya önerilen diğer kesimin adını netleştirin. Dilim kalınlığı ve porsiyon sayısını ızgaranızın kapasitesine göre görüşün. Karışık mangal paketinde ise dana etine eklenen kuzu, tavuk ve köftenin miktarları ayrı ayrı belli olsun; karışık ifadesini sabit bir içerik garantisi saymayın.", "Toroslar’daki mağazamızdan alacağınız paket için mangal günü ve teslim alma saatinizi yazın. Bir ürünün yerine başka ürün eklenmesini istiyorsanız yeni içeriğin ve fiyatın onayını alın. Fotoğraflardaki sunum siparişin kesin miktarı veya paket içeriği değildir; hazırlanacak listeyi işletmeyle birlikte netleştirin."], links: [{ href: "/urunler/mangallik-et", label: "Izgaralık et ve karışık mangal ürünleri" }, { href: "/blog/mersin-antrikot-bonfile-farki", label: "Dana antrikot ve bonfile arasındaki seçim" }, { href: "/blog/mersin-7-24-acik-kasap", label: "Gece veya pazar günü mağazadan teslim alma" }] },
      { id: "icerik", title: "Paket içeriğini ürün ürün yazdırın", paragraphs: ["Dana antrikot, kuzu pirzola, tavuk şiş, köfte veya sucuk seçeneklerinden hangilerinin bulunduğunu öğrenin. Toplam ağırlığın yanında her ürünün miktarını da sorun. Kemikli ürün ağırlığı ile kemiksiz et ağırlığının sofrada aynı miktarı vermediğini dikkate alın.", "Hazır paket içeriğini değiştirmenin mümkün olup olmadığını görüşün. Bir ürünü çıkarıp başka bir ürün eklemek toplam fiyatı veya hazırlanma süresini değiştirebilir. Yeni içeriği ve toplam tutarı siparişi netleştirmeden önce teyit edin."] },
      { id: "menu", title: "Misafir tercihleriyle ızgara kapasitesini eşleştirin", paragraphs: ["Herkesin her üründen tam porsiyon yiyeceğini varsaymak gereğinden fazla alışverişe neden olabilir. Kırmızı et, tavuk ve köfte tercihlerini öğrenin; sofradaki pilav, salata ve diğer yemekleri de miktar görüşmesine dahil edin.", "Birden çok ürün aynı hazırlık ve pişirme planına sahip değildir. Mangal küçükse menüyü sadeleştirmek servis sırasını kolaylaştırabilir. Kesim kalınlığını ve parçaların hangi sırayla hazırlanacağını kasabınızla konuşun."], table: { caption: "Mangal paketi seçerken karşılaştırılacak hazırlıklar", columns: ["Seçenek", "Sorulacak hazırlık bilgisi"], rows: [["Dana ızgaralık", "Parça adı ve dilim kalınlığı"], ["Kuzu pirzola", "Kemik, kalemleme ve porsiyon"], ["Tavuk şiş", "Parça, marinasyon ve şişe dizim"], ["Kasap köfte", "İçerik, şekil ve parça büyüklüğü"], ["Sucuk", "İçerik ve pişirmeye uygun kesim"]] } },
      { id: "butce", title: "Toplam fiyatın hangi miktarı kapsadığını kontrol edin", paragraphs: ["Paket fiyatını değerlendirirken içerik ve miktarın sabit olup olmadığını sorun. Farklı oranlarda dana ve tavuk içeren iki paket aynı toplam ağırlıkta olsa bile doğrudan eşdeğer değildir. Fiyat karşılaştırmasını aynı ürünler ve benzer hazırlık üzerinden yapın.", "Özel paketleme, ayrılmış porsiyonlar veya farklı bir teslim isteği varsa bunları baştan belirtin. Toplam tutarda hangi hizmetlerin yer aldığını öğrenin. Güncel kampanya koşulları ve stok, işletmeyle görüşme sırasında doğrulanır."] },
      { id: "siparis-plani", title: "Mangal gününden önce listenizi netleştirin", paragraphs: ["Akdeniz Kasabı’nın ürünlerini ve kampanya seçkilerini sitede inceleyebilirsiniz. Kişi sayısı, tercih ettiğiniz ürünler ve planlanan saatle birlikte mesaj gönderin. Paket adı, içeriğinin sizin isteğinize göre otomatik değişeceği anlamına gelmez; değişiklikleri ayrıca görüşün.", "Mağazamız Toroslar’da her gün 24 saat açıktır. Mangal alanının güncel kullanım kurallarını, alışveriş sonrası taşıma koşullarını ve servis ekipmanlarını önceden planlayın. Uygun ürün hazırlığı ile sofra organizasyonu birlikte düşünüldüğünde gününüz daha rahat ilerler."] },
    ],
    productCategory: "izgaralik",
    relatedSlugs: ["mezitli-mangallik-et-secimi", "mersin-kasap-kofte-siparisi", "mersin-kuzu-eti-pirzola-secimi"],
  },
  {
    slug: "mersin-kuzu-eti-pirzola-secimi",
    title: "Mersin’de kuzu eti alışverişi: pirzola mı, kuşbaşı mı?",
    description: "Mersin’de kuzu eti alırken pirzola ve kuşbaşını pişirme yöntemine göre karşılaştırın. Kemik, yağ, doğrama ve miktar için sipariş rehberi.",
    category: "Kuzu eti",
    image: "/images/custom/kuzu-pirzola.jpg",
    imageAlt: "Kuzu pirzola için temsili ürün sunumu",
    publishedAt: "2026-10-15T21:50:00+03:00",
    updatedAt: "2026-10-19T00:00:00+03:00",
    intro: "Kuzu eti alışverişinde pirzola ile kuşbaşı arasında seçim yaparken önce yemeğinizi belirleyin. Izgara, tava ve güveç farklı hazırlıklar ister. Mersin’de kasaptan teklif alırken hangi kesimi, ne kadar miktarı ve nasıl bir doğramayı istediğinizi anlatmak, ürünleri daha doğru karşılaştırmanıza yardımcı olur.",
    sections: [
      { id: "toroslar-kuzu-alisverisi", title: "Toroslar’da kuzu pirzola siparişini somutlaştırın", paragraphs: ["Toroslar’da kuzu pirzola arıyorsanız yalnızca kilogram miktarıyla başlamayın. Kaç porsiyon düşündüğünüzü, hangi ekipmanda pişireceğinizi ve dilim tercihlerinizi yazın. Paketlerin hangi miktarlara ayrılacağını da belirtin; aynı toplam ağırlık farklı kemik ve kesim hazırlıklarında aynı porsiyon sayısını vermeyebilir.", "Kuşbaşıyla karşılaştırırken önce yemeği seçin: pirzola için düşündüğünüz sunum, güveç veya şiş için uygun olmayabilir. Dana ve kuzu kuşbaşı arasında kararsızsanız seçilen parça, doğrama ve fiyat ayrıntılarını birlikte görüşün. Güncel stok ve özel kesim uygunluğu mağazayla teyit edilmelidir."], links: [{ href: "/urunler/kuzu-eti", label: "Toroslar mağazasındaki kuzu eti seçenekleri" }, { href: "/blog/mersin-dana-kusbasi-kuzu-kusbasi-secimi", label: "Dana ve kuzu kuşbaşını yemeğe göre karşılaştırın" }] },
      { id: "pirzola", title: "Pirzolada dilim ve kemik hazırlığı önemlidir", paragraphs: ["Pirzola siparişinde dilim kalınlığı ve hazırlama tercihinizi belirtin. Aynı pakette birbirine yakın kalınlıkta parçalar bulunması, pişirme takibini kolaylaştırır. Kalemleme veya farklı bir hazırlık istiyorsanız standart kesimin dışında hangi seçeneklerin mümkün olduğunu sorun.", "Pirzolanın tartı miktarı kemik içerir. Kişi sayısını yalnızca toplam kilogramla eşleştirmek yerine sofradaki diğer yemekleri de düşünün. Misafirlere başka et ürünleri sunacaksanız bunları miktar görüşmesine ekleyin."] },
      { id: "kusbasi", title: "Kuşbaşını yemeğin yöntemine göre hazırlatın", paragraphs: ["Kuzu kuşbaşı alırken şiş, sote veya tencere yemeği yapacağınızı söyleyin. Ürünün hangi bölümden hazırlanacağını ve doğrama boyutunu görüşün. Şişe uygun eşit parçalar ile uzun pişen güveç için tercih edilen hazırlık aynı olmayabilir.", "Yağ tercihlerinizi ve temizleme beklentinizi anlatın. Kuşbaşı ifadesi kesimin boyutunu anlatır; paketin içindeki etin bölümünü tek başına açıklamaz. Bu ayrıntıyı öğrenmek fiyat ve pişirme yöntemi arasında bağlantı kurmanızı sağlar."] },
      { id: "fiyat", title: "Kuzu eti fiyatlarını hazırlama koşuluyla karşılaştırın", paragraphs: ["Pirzola ve kuşbaşının kilogram fiyatını birbirinin alternatifi gibi okumak yerine, planladığınız öğünün toplamına bakın. Kemik, temizleme ve porsiyon farklılıklarını sorun. Aynı isimle sunulan iki ürünün hazırlanış biçimi değişebilir.", "Kesin kişi başı miktar vermek yerine kaç kişinin yiyeceğini, yan yemekleri ve başka ana yemek bulunup bulunmadığını paylaşın. İki öğün planlıyorsanız paketleri buna göre ayırın. Güncel fiyatı, istediğiniz hazırlık ve miktar üzerinden teyit edin."] },
      { id: "urun-bilgisi", title: "Akdeniz Kasabı’nda kuzu seçeneklerini görüşün", paragraphs: ["Ürünler sayfasındaki kuzu eti kategorisinde kuzu pirzola ve kuzu kuşbaşı seçeneklerini inceleyebilirsiniz. Pişirme yönteminizi ve miktarı sipariş mesajına ekleyerek güncel stok, fiyat ve hazırlama uygunluğu hakkında bilgi alın.", "Toroslar, Mithat Toroğlu Mahallesi’ndeki mağazamız 7/24 açıktır. Özel kesim veya çok sayıda porsiyon düşünüyorsanız gelmeden önce 0553 776 61 62 üzerinden görüşün. Yola çıkmadan netleşen hazırlık bilgisi, mağazadan teslim alma planınızı kolaylaştırır."], tips: ["Pirzola: dilim, kemik ve porsiyon tercihi", "Kuşbaşı: kullanılacak yemek ve doğrama boyutu", "Yağ ve temizleme beklentisi", "Miktar, ayrı paket ve teslim alma zamanı"] },
    ],
    productCategory: "kuzu",
    relatedSlugs: ["gulnar-guveclik-et-secimi", "mersin-mangal-paketi-hazirlama", "mersin-kasap-fiyatlari-ucretleri"],
  },
];

export const productGuidePosts: BlogPost[] = [
  {
    "slug": "mersin-dana-kiyma-secimi",
    "title": "Mersin’de dana kıyma seçimi: köftelik mi, yemeklik mi?",
    "description": "Dana kıyma alırken yağ tercihi, çekim, yemek türü ve paketleme nasıl belirlenir? Mersin’de kıyma siparişi için karşılaştırma tablosu ve örnek liste.",
    "category": "Kıyma rehberi",
    "image": "/images/custom/dana-kiyma.jpg",
    "imageAlt": "Dana kıymanın temsili ürün sunumu",
    "publishedAt": "2026-10-17T20:30:00+03:00",
    "intro": "Mersin’de dana kıyma alırken ilk sorunuz kaç kilogram olacağı değil, hangi yemekte kullanacağınız olabilir. Köfte, dolma ve makarna sosu aynı hazırlık isteğini anlatmaz. Yağ tercihi, çekim ve paket sayısını yemek planınızla birlikte söylemek, kasabınıza daha açık bir sipariş vermenizi sağlar. Bu rehberle hazır köfte ile sade kıyma arasındaki farkı da dikkate alan bir alışveriş listesi hazırlayabilirsiniz.",
    "sections": [
      {
        "id": "yemek-tercihi",
        "title": "Köftelik ve yemeklik kıyma isterken ne söylemeli?",
        "paragraphs": [
          "Köftelik kıyma ifadesi, önceden baharatlanmış ve şekillendirilmiş kasap köfteyle aynı ürün değildir. Köftenizi evde hazırlayacaksanız sade kıyma istediğinizi belirtin. Hazır köfte alacaksanız et karışımı ve eklenen malzemeleri ayrıca sorun; iki ürünün fiyatını yalnızca kilogram üzerinden eşdeğer kabul etmeyin.",
          "Yemeklik kıyma da tek bir tarif anlamına gelmez. Dolmanın iç harcı, sebze yemeği ve sos için planladığınız miktar ve doku farklı olabilir. Tarifinizi kısaca anlatın; dana tercihinizi, istediğiniz yağ yapısını ve çekim beklentinizi birlikte görüşün."
        ],
        "table": {
          "caption": "Kıyma siparişinde yemeğe göre aktarılacak bilgiler",
          "columns": [
            "Yapılacak yemek",
            "Kasaba iletilecek tercih"
          ],
          "rows": [
            [
              "Evde köfte",
              "Sade kıyma, et türü, yağ ve çekim tercihi"
            ],
            [
              "Dolma veya sarma",
              "Harçta kullanılacak miktar ve diğer malzemeler"
            ],
            [
              "Sebze yemeği",
              "Yemek adı ve tek öğünlük paket isteği"
            ],
            [
              "Makarna sosu",
              "Tarifte istenen doku ve kullanılacak miktar"
            ]
          ]
        },
        "links": [
          {
            "href": "/blog/mersin-kasap-kofte-siparisi",
            "label": "Hazır kasap köfte alırken içerik ve porsiyon seçimi"
          }
        ]
      },
      {
        "id": "yag-ve-cekim",
        "title": "Yağ tercihini ve çekimi ayrı ayrı konuşun",
        "paragraphs": [
          "Az yağlı veya orta yağlı gibi ifadelerin sizin için ne anlama geldiğini açıklayın. Kesin bir oran istiyorsanız bunun nasıl sağlandığını ve mevcut hazırlık seçeneklerini sorun. Her yemek için tek bir ideal oran vermek yerine tarifinizi esas alın.",
          "Çekim sayısı ile yağ tercihi aynı bilgi değildir. Tarifte belirli bir çekim veya doku isteniyorsa bunu ayrıca yazın. Fotoğraftaki görünüşe bakarak kıymanın hangi parçadan veya hangi oranda hazırlandığına karar vermeyin; bu bilgileri satın almadan önce öğrenin."
        ]
      },
      {
        "id": "ayri-paket",
        "title": "Birden fazla yemek için ayrı paket isteyin",
        "paragraphs": [
          "Bir köfte öğünü ve bir sebze yemeği planlıyorsanız toplam miktarın yanında iki ayrı kullanımınızı belirtin. Paket başına istediğiniz miktarı yazmanız, eve geldiğinizde her şeyi yeniden bölme ihtiyacını azaltır. Paketleri ürün adı ve hazırlama tarihiyle ayırt edebilmek için etiketleme bilgisini sorun.",
          "Birkaç öğünlük alışveriş yapmak, tüm paketlerin aynı süre ve koşulda saklanabileceği anlamına gelmez. Kullanacağınız günü ve yolculuk planınızı dikkate alın; ürünle birlikte verilen muhafaza bilgisini izleyin."
        ]
      },
      {
        "id": "kiyma-siparisi",
        "title": "Dana kıyma için açık bir sipariş mesajı hazırlayın",
        "paragraphs": [
          "Mesajınıza ürün adı, toplam miktar, yemekler ve paket sayısıyla başlayın. Örneğin: Dana kıyma istiyorum; bir bölümünü evde köfte, diğerini sebze yemeği için kullanacağım. İki ayrı paket, uygun yağ seçenekleri, kilogram fiyatı ve hazırlanma zamanı hakkında bilgi alabilir miyim? Miktarları kendi listenize göre ekleyin.",
          "Akdeniz Kasabı’nın dana ürünlerini sitede inceleyebilir, güncel fiyat ve hazırlama uygunluğunu 0553 776 61 62 üzerinden sorabilirsiniz. Mağazamız Mithat Toroğlu, Kuvayi Milliye Caddesi, Toroslar/Mersin’dedir ve 7/24 açıktır."
        ],
        "links": [
          {
            "href": "/urunler?kategori=dana",
            "label": "Dana kıyma ve diğer dana ürünlerini inceleyin"
          },
          {
            "href": "/blog/mersin-kasap-fiyatlari-ucretleri",
            "label": "Kıyma ve diğer ürünler için fiyat teklifini karşılaştırın"
          }
        ]
      }
    ],
    "productCategory": "dana",
    "relatedSlugs": [
      "mersin-kasap-kofte-siparisi",
      "mersin-whatsapp-et-siparisi",
      "yenisehir-haftalik-et-alisverisi"
    ]
  },
  {
    "slug": "mersin-antrikot-bonfile-farki",
    "title": "Mersin’de antrikot mu bonfile mi? Kesim ve sipariş rehberi",
    "description": "Antrikot ve bonfile alırken yağ yapısı, dilim kalınlığı, porsiyon ve bütçeyi karşılaştırın. Mersin’de tava ve ızgara için et seçimine pratik rehber.",
    "category": "Dana eti seçimi",
    "image": "/images/custom/dana-antrikot.jpg",
    "imageAlt": "Dilimlenmiş dana antrikot için temsili ürün görseli",
    "publishedAt": "2026-10-17T20:30:00+03:00",
    "intro": "Antrikot ve bonfile arasında seçim yaparken yalnızca ürün adına veya fiyatına bakmak yeterli olmaz. Kullanacağınız tava ya da ızgara, dilim kalınlığı, yağ tercihi ve sofradaki diğer yemekler birlikte değerlendirilmelidir. Mersin’de kasaptan bu iki ürünü sorarken kullanabileceğiniz karşılaştırma, hangi hazırlığı istediğinizi netleştirmenize yardımcı olur.",
    "sections": [
      {
        "id": "urunleri-karsilastirin",
        "title": "Antrikot ve bonfilenin temel farkı nedir?",
        "paragraphs": [
          "Antrikot, etin içindeki yağ dağılımıyla; bonfile ise daha yağsız yapısı ve yumuşak dokusuyla öne çıkan farklı kesimlerdir. Beef Checkoff’un kesim rehberlerinde de ribeye için mermerleşme, tenderloin için yumuşaklık vurgulanır. Bunlar genel kesim özellikleridir; alacağınız parçanın hazırlığı ve görünümü ayrıca değerlendirilmelidir.",
          "Akdeniz Kasabı’nın ürün seçkisinde dana antrikot ızgaralık ürünler, dana bonfile ise dana eti kategorisi altında yer alır. Antrikot için yağ dağılımını ve dilimleme isteğinizi; bonfile için porsiyon ve temizleme tercihinizi konuşabilirsiniz. Kategori adı tek başına bütün pişirme seçeneklerini sınırlamaz.",
          "Bir kesimin sizin sofranıza uygunluğu, başka bir kesimden her durumda daha iyi olduğu anlamına gelmez. Tarifinizi, yağ konusundaki beklentinizi ve etin dilim mi bütün parça mı kullanılacağını anlatın. Ürün fotoğrafındaki kalınlığın size hazırlanacak kesimle aynı olacağını varsaymayın."
        ],
        "table": {
          "caption": "Antrikot ve bonfile için sipariş öncesi karşılaştırma",
          "columns": [
            "Karar",
            "Görüşülecek ayrıntı"
          ],
          "rows": [
            ["Antrikot", "Yağ dağılımı belirgin kesim; dilim ve yağ tercihini görüşün"],
            ["Bonfile", "Daha yağsız ve yumuşak kesim; porsiyon ve kalınlığı belirtin"],
            [
              "Ürün",
              "Antrikot veya bonfile; farklı kesimleri tek teklif gibi kıyaslamayın"
            ],
            [
              "Hazırlık",
              "Bütün parça mı, eşit kalınlıkta dilimler mi?"
            ],
            [
              "Miktar",
              "Toplam ağırlık, porsiyon sayısı ve temizleme tercihi"
            ],
            [
              "Ekipman",
              "Tava, ızgara veya tarifte belirtilen yöntem"
            ],
            [
              "Fiyat",
              "Aynı hazırlık için kilogram fiyatı ve toplam tutar"
            ]
          ]
        }
      },
      {
        "id": "dilim-kalinligi",
        "title": "Dilim kalınlığı ile tava kapasitesini birlikte düşünün",
        "paragraphs": [
          "Kaç dilim istediğiniz ile toplam ağırlık ayrı bilgilerdir. Aynı sayıda dilim, farklı büyüklükte porsiyonlar anlamına gelebilir. Birbirine yakın kalınlıkta hazırlama isteği, pişirme takibinizi kolaylaştırır; kalınlık tercihini ekipmanınız ve tarifinizle birlikte anlatın.",
          "Küçük bir tavada kalabalık bir sofranın tüm etini aynı anda hazırlamak zor olabilir. Kaç partide pişireceğinizi ve servis sırasını önceden planlayın. Sabit bir dakika önerisini her et kalınlığına uygulamayın; tarifin ve ürüne ilişkin pişirme bilgisinin koşullarını dikkate alın."
        ]
      },
      {
        "id": "porsiyon-ve-butce",
        "title": "Bütçeyi yalnızca kilogram fiyatıyla belirlemeyin",
        "paragraphs": [
          "Kaç kişi için hazırlık yaptığınız, sofrada başka ana yemek bulunup bulunmadığı ve istediğiniz kesim toplam alışverişi değiştirir. Teklif alırken ürünün temizleme ve porsiyonlama biçimini, toplam miktarını ve toplam tutarını birlikte sorun.",
          "Karışık bir ızgara planlıyorsanız herkes için her üründen ayrı tam porsiyon almak yerine tercihleri öğrenin. Antrikot veya bonfileyi hangi diğer ürünlerle sunacağınızı belirtin. Değişen ürün oranları ve özel hazırlık istekleri toplam fiyatı etkileyebileceği için son listeyi yeniden teyit edin."
        ],
        "links": [
          {
            "href": "/blog/mersin-mangal-paketi-hazirlama",
            "label": "Karışık mangal paketi için içerik ve miktar planı"
          }
        ]
      },
      {
        "id": "magaza",
        "title": "İstediğiniz kesimi gelmeden önce görüşün",
        "paragraphs": [
          "Toroslar’daki Akdeniz Kasabı’na antrikot veya bonfile, miktar, dilim tercihi ve teslim alma saatinizi içeren bir mesaj gönderebilirsiniz. Mağazamız her gün 24 saat açıktır; özel kesimin hazır olup olmadığı ve hazırlık süresi ayrıca netleştirilir.",
          "Sitedeki ürün kartlarından bilgi isteyebilir veya birden fazla ürünü sipariş listenize ekleyebilirsiniz. Güncel stok ve fiyat görüşmesi tamamlanmadan fotoğrafı ya da listeyi kesin rezervasyon olarak değerlendirmeyin."
        ],
        "links": [
          {
            "href": "/urunler?kategori=izgaralik",
            "label": "Antrikot ve ızgaralık ürünler"
          },
          {
            "href": "/urunler?kategori=dana",
            "label": "Bonfile ve dana eti seçenekleri"
          }
        ]
      }
    ],
    "sources": [
      { "label": "Beef Checkoff: Izgaralık kesimlerin özellikleri", "url": "https://www.beefitswhatsfordinner.com/cuts/collection/33338/best-beef-cuts-for-grilling" },
      { "label": "Beef Checkoff: Tenderloin / bonfile", "url": "https://www.beefitswhatsfordinner.com/cuts/cut/2470/tenderloin-steak-filet-mignon" }
    ],
    "productCategory": "izgaralik",
    "relatedSlugs": [
      "mersin-mangal-paketi-hazirlama",
      "mersin-kuzu-eti-pirzola-secimi",
      "mersin-kasap-fiyatlari-ucretleri"
    ]
  },
  {
    "slug": "mersin-kasap-sucugu-secimi",
    "title": "Mersin’de kasap sucuğu seçimi: içerik, dilim ve miktar",
    "description": "Mersin’de kasap sucuğu alırken et içeriği, baharat, paketleme ve kullanım miktarını nasıl değerlendirmeli? Kahvaltı ve mangal için alışveriş rehberi.",
    "category": "Sucuk ve şarküteri",
    "image": "/images/custom/ev-yapimi-sucuk.jpg",
    "imageAlt": "Kasap sucuğunu temsil eden şarküteri ürün sunumu",
    "publishedAt": "2026-10-17T20:30:00+03:00",
    "intro": "Mersin’de kasap sucuğu ararken ürünün yalnızca adına bakarak karar vermeyin. Kahvaltı, tost veya mangal için ne kadar kullanacağınızı, içerik beklentinizi ve nasıl paketlenmesini istediğinizi düşünün. Akdeniz Kasabı’nın sucuk ve şarküteri seçkisi hakkında bilgi alırken sorabileceğiniz bu sorular, farklı ürünleri daha anlamlı karşılaştırmanıza yardımcı olur.",
    "sections": [
      {
        "id": "icerik",
        "title": "Ev yapımı veya kasap sucuğu adı, içerik listesinin yerini tutmaz",
        "paragraphs": [
          "Ürünün hangi etten hazırlandığını, baharatlarını ve varsa diğer bileşenlerini sorun. Acılık ya da sarımsak yoğunluğu gibi damak tercihlerinizi açıkça belirtin. Bir ürünün adında ev yapımı geçmesi, belirli bir tarife veya katkı maddesi bulunmadığına ilişkin tek başına kanıt değildir.",
          "Alerjen, tuz veya belirli bir malzemeyle ilgili ihtiyacınız varsa bunu işletmeyle paylaşın; ürün etiketini ve mevcut içerik bilgisini inceleyin. Görsele veya yalnızca koku ve renge bakarak içerik, güvenlik ya da beslenme uygunluğu sonucu çıkarmayın."
        ]
      },
      {
        "id": "kullanim",
        "title": "Kahvaltı, tost ve mangal için hazırlığı netleştirin",
        "paragraphs": [
          "Sucuklu yumurta, tost ve karışık ızgara farklı dilim ve miktar planları gerektirebilir. Bütün ürün mü, dilimlenmiş hazırlık mı istediğinizi sorun. Önceden dilimleme tercih ediyorsanız bunun mümkün olup olmadığını ve kullanılacak miktarı belirtin.",
          "Tost içinde kullanacağınız miktarı, ayrı bir ana ürün olarak servis edeceğiniz miktarla aynı düşünmeyin. Kalabalık sofrada peynir, yumurta veya diğer et ürünleri de varsa bunları hesaba katın. Tek bir kişi başı rakam yerine menünün tamamını anlatmak daha açık bir sipariş oluşturur."
        ],
        "tips": [
          "Kullanım: kahvaltı, tost veya mangal",
          "İçerik ve baharat beklentisi",
          "Bütün veya dilimlenmiş hazırlık tercihi",
          "Tek öğünlük ya da ayrı paket isteği"
        ]
      },
      {
        "id": "etiket-ve-paket",
        "title": "Paketleme ve muhafaza bilgisini ürünle birlikte alın",
        "paragraphs": [
          "Açılmamış ve açılmış ürün için aynı saklama koşullarını varsaymayın. Etiketteki muhafaza ve kullanım bilgisini takip edin; ambalajın ne zaman açıldığını kaydedin. Dilimlenmiş ürün alıyorsanız bunun paketleme ve kullanım planınıza etkisini ayrıca sorun.",
          "Birkaç farklı öğün için alışveriş yapıyorsanız ayrı paket talebinizi baştan iletin. Ürün adı, miktar ve hazırlık bilgisinin pakette ayırt edilebilir olması eve geldiğinizde düzen kurmanızı kolaylaştırır. Özel ambalajın uygunluğunu mağazadan teyit edin."
        ]
      },
      {
        "id": "fiyat-ve-siparis",
        "title": "Sucuk fiyatını aynı içerik ve miktarla karşılaştırın",
        "paragraphs": [
          "Fiyat sorarken ürünün adı, net miktarı ve hazırlama tercihiniz birlikte yer alsın. Farklı içeriklere sahip ürünleri veya farklı büyüklükte paketleri tek bir fiyat gibi değerlendirmeyin. Kampanya varsa hangi ürünü ve miktarı kapsadığını öğrenin.",
          "Akdeniz Kasabı’nın ürün listesinde Ev Yapımı Sucuk, sucuk ve şarküteri kategorisinde bulunur. Güncel ürün bilgisi için 0553 776 61 62 üzerinden ulaşabilirsiniz. Toroslar, Mithat Toroğlu Mahallesi’ndeki mağazamız 7/24 açıktır; stok ve hazırlama seçenekleri görüşmede teyit edilir."
        ],
        "links": [
          {
            "href": "/urunler?kategori=sarkuteri",
            "label": "Sucuk ve şarküteri ürünlerini inceleyin"
          },
          {
            "href": "/blog/mersin-whatsapp-et-siparisi",
            "label": "Ürün listenizi WhatsApp üzerinden nasıl iletebilirsiniz?"
          }
        ]
      }
    ],
    "productCategory": "sarkuteri",
    "relatedSlugs": [
      "mersin-mangal-paketi-hazirlama",
      "mersin-kasap-fiyatlari-ucretleri",
      "mersin-whatsapp-et-siparisi"
    ]
  },
  {
    "slug": "mersin-whatsapp-et-siparisi",
    "title": "Mersin’de WhatsApp et siparişi: ürün listesi nasıl hazırlanır?",
    "description": "Akdeniz Kasabı’nda ürünleri listeye ekleme, miktar ve kesim yazma, WhatsApp’a aktarma adımları. Mersin’de fiyat ve teslim alma için sipariş rehberi.",
    "category": "Sipariş rehberi",
    "image": "/images/custom/category-dana.jpg",
    "imageAlt": "Birden fazla ürünle hazırlanabilecek alışveriş listesini temsil eden dana eti sunumu",
    "publishedAt": "2026-10-17T20:30:00+03:00",
    "intro": "Mersin’de et siparişinizi WhatsApp üzerinden görüşmek istiyorsanız bütün ürünleri tek mesajda toplamak işinizi kolaylaştırır. Akdeniz Kasabı’nın sitesindeki Sipariş Listem alanı bunun için hazırlanmıştır. Bu rehber ürün seçimi, miktar girişi ve mesajın gönderilmesine kadar sitedeki adımları açıklar. Liste oluşturmak ödeme yapmak veya siparişi otomatik onaylamak değildir.",
    "sections": [
      {
        "id": "urunleri-ekle",
        "title": "1. Ürünler sayfasında listenizi oluşturun",
        "paragraphs": [
          "Ürünler sayfasını açın. Dana, kuzu, tavuk, köfte, şarküteri veya ızgaralık kategorisini seçebilir; arama alanına ürün adını yazabilirsiniz. İstediğiniz ürün kartında Listeye Ekle düğmesine basın. Kart üzerindeki Sipariş Listesinde ifadesi, ürünün listenize alındığını gösterir.",
          "Birden fazla ürün ekleyip Sipariş Listem düğmesiyle listeyi açın. Yalnızca tek ürün hakkında soru soracaksanız ürün kartındaki Tek Ürünü Sor bağlantısını da kullanabilirsiniz. Kategori değiştirmek diğer ürünleri listenizden çıkarmaz."
        ],
        "links": [
          {
            "href": "/urunler",
            "label": "Ürünler sayfasını açıp sipariş listesi hazırlayın"
          }
        ]
      },
      {
        "id": "miktar-ve-hazirlik",
        "title": "2. Her ürün için miktar ve hazırlama tercihi yazın",
        "paragraphs": [
          "Listedeki her ürünün Miktar ve hazırlama tercihi alanını doldurun. Yalnızca 1 yazmak yerine 1 kg, 500 g veya görüşmek istediğiniz açık bir miktar belirtin. Kuşbaşı için yemek ve doğrama, kıyma için yağ tercihi, tavuk için marinasyon gibi ayrıntıları aynı satıra ekleyebilirsiniz.",
          "Miktar alanlarından biri boşsa WhatsApp’a aktarma düğmesi etkinleşmez; Önce Tüm Miktarları Yazın uyarısını görürsünüz. Sipariş notu alanı ise isteğe bağlıdır. Ayrı paket sayısını veya mağazadan almayı düşündüğünüz zamanı burada paylaşabilirsiniz."
        ],
        "table": {
          "caption": "Sipariş listesinde kullanılabilecek örnek alanlar",
          "columns": [
            "Alan",
            "Örnek ifade"
          ],
          "rows": [
            [
              "Dana kıyma",
              "500 g; yemeklik, yağ seçeneklerini görüşmek istiyorum"
            ],
            [
              "Dana kuşbaşı",
              "1 kg; sote için, iki ayrı paket"
            ],
            [
              "Tavuk şiş",
              "Miktarı kişi sayısına göre görüşmek istiyorum; marinasyon içeriğini paylaşır mısınız?"
            ],
            [
              "Sipariş notu",
              "Akşam mağazadan almak istiyorum; uygun saati teyit edebilir miyiz?"
            ]
          ]
        }
      },
      {
        "id": "mesaji-gonder",
        "title": "3. WhatsApp’ta mesajı kontrol edip kendiniz gönderin",
        "paragraphs": [
          "WhatsApp’ta Gönder bağlantısı ürün adları, miktarlar ve notunuzla hazırlanmış mesajı WhatsApp’a taşır. Mesajı orada okuyun, gerekirse düzenleyin ve gönderme işlemini tamamlayın. Sitedeki düğmeye basılması tek başına işletmeye mesaj gönderildiği anlamına gelmez.",
          "WhatsApp kullanamıyorsanız 0553 776 61 62 numarasını arayarak aynı bilgileri aktarabilirsiniz. Bu sitedeki liste oluşturma işlemi kart bilgisi veya ödeme gerektirmez; ürün, hazırlama ve teslim alma tercihiniz görüşmeyi başlatmak için yeterlidir."
        ]
      },
      {
        "id": "teyit",
        "title": "4. Stok, toplam fiyat ve teslim alma zamanını teyit edin",
        "paragraphs": [
          "İşletmeden gelen yanıtta ürünlerin uygunluğu, miktar, güncel fiyat ve hazırlanma zamanı netleşsin. Özel kesim veya ayrı paketleme talebinin karşılanıp karşılanmadığını sorun. Listenizi sonradan değiştirirseniz yeni toplamı yeniden teyit edin.",
          "Mağazamız Mithat Toroğlu, Kuvayi Milliye Cd., Toroslar/Mersin’dedir ve her gün 24 saat açıktır. Mağazadan teslim alma planınızı paylaşabilirsiniz. Farklı bir teslimat ihtiyacınız varsa adresinize uygunluğunu önceden sorun; WhatsApp listesi Mersin’in bütün ilçelerine teslimat taahhüdü değildir."
        ],
        "links": [
          {
            "href": "/blog/mersin-kasap-fiyatlari-ucretleri",
            "label": "Güncel et fiyatı için teklifte neleri kontrol etmeli?"
          },
          {
            "href": "/iletisim",
            "label": "Toroslar mağazasının adresi, telefonu ve yol tarifi"
          }
        ]
      }
    ],
    "productCategory": "dana",
    "relatedSlugs": [
      "mersin-dana-kiyma-secimi",
      "mersin-tavuk-kasabi-urunleri",
      "akdeniz-kasabi-mersin-adres-iletisim"
    ]
  }
];

export const localGuidePosts: BlogPost[] = [
  {
    slug: "mersin-7-24-acik-kasap",
    title: "Mersin’de 7/24 açık kasap: gece ve pazar alışverişi",
    description: "Mersin’de gece, pazar günü veya tatilde kasap alışverişi: Toroslar’daki Akdeniz Kasabı’nın 24 saat açık mağazası, ürün teyidi ve yol tarifi.",
    category: "7/24 alışveriş",
    image: "/images/custom/category-dana.jpg",
    imageAlt: "Gece alışverişinde de tercih edilebilecek dana eti çeşitlerinin temsili sunumu",
    publishedAt: "2026-10-19T00:00:00+03:00",
    intro: "Mersin’de 7/24 açık kasap arıyorsanız Akdeniz Kasabı’nın Toroslar’daki mağazası haftanın her günü, gece ve gündüz açıktır. Pazar günleri ve tatillerde de çalışma düzenimiz değişmez. Geç saatte yemek hazırlamak, ertesi günün alışverişini tamamlamak veya vardiya sonrası uğramak için yola çıkmadan ürün ve hazırlama isteğinizi netleştirebilirsiniz.",
    sections: [
      {
        id: "calisma-saatleri", title: "Gece, pazar ve tatil günlerinde çalışma saatleri",
        paragraphs: [
          "Mağazamızın çalışma düzeni 24 saattir; haftalık kapanış veya tatil günü yoktur. Mersin gece açık kasap ve Toroslar 7/24 kasap aramalarında adresimizi bu bilgiyle değerlendirebilirsiniz. İşletmenin açık olması, belirli bir kesimin her an hazır veya stokta olduğu anlamına gelmez.",
          "Özellikle çok miktarda et, eşit kalınlıkta biftek veya karışık mangal hazırlığı istiyorsanız önce 0553 776 61 62 numarasını arayın. Talebin karşılanıp karşılanamayacağını ve hazır olacağı saati görüşün. WhatsApp’a mesaj bırakmak tek başına siparişin kabul edildiği ya da hemen yanıtlanacağı anlamına gelmez."
        ],
        table: { caption: "Mağazaya gelişinizi planlarken", columns: ["Zaman", "Çalışma düzeni", "Önceden teyit edilecek"], rows: [["Hafta içi ve cumartesi", "24 saat açık", "Ürün ve özel hazırlık"], ["Pazar günü", "24 saat açık", "Miktar ve teslim alma saati"], ["Tatil günleri", "24 saat açık", "Toplu veya özel kesim talebi"]] }
      },
      {
        id: "gece-alisveris-listesi", title: "Geç saatte alışverişi kolaylaştıran kısa liste",
        paragraphs: [
          "Yemeğiniz hazır bir tarifse önce et türünü, gereken miktarı ve hazırlama biçimini not alın. Örneğin tava yemeği için doğranmış dana eti ile ertesi gün mangalda kullanacağınız kalın dilim aynı hazırlığı istemez. Yemeğe ne kadar zaman ayırabileceğinizi söylemeniz, mevcut seçenekler arasında karar vermeyi kolaylaştırır.",
          "İstediğiniz ürün bulunmazsa onayınız olmadan başka bir ürünle değiştirilmesini istemediğinizi belirtin. Alternatif önerildiğinde kesim, miktar ve yeni toplam fiyatı yeniden sorun. İki farklı yemek için alışveriş yapıyorsanız paketlerin ayrı olmasını ve hangisinin hangi yemek için hazırlandığının belirtilmesini isteyin."
        ],
        tips: ["Ürün, miktar ve pişireceğiniz yemek", "Doğrama, kıyma çekimi veya marinasyon tercihi", "Güncel toplam tutar ve varsa hazırlama ücreti", "Mağazadan almak istediğiniz saat"],
        links: [{ href: "/blog/mersin-istege-gore-et-dograma-kiyma-cekimi", label: "Özel doğrama ve kıyma çekimi için hazırlık notları" }]
      },
      {
        id: "toroslar-magazasi", title: "Toroslar’daki mağazaya nasıl gelinir?",
        paragraphs: [
          "Akdeniz Kasabı’nın adresi Mithat Toroğlu, Kuvayi Milliye Cd., 33080 Toroslar/Mersin’dir. Marka adındaki Akdeniz, mağazanın Akdeniz ilçesinde olduğu anlamına gelmez. Harita sonucunda ilçe, mahalle ve 0553 776 61 62 telefon bilgisini birlikte kontrol edin.",
          "İletişim sayfamızdaki Yol Tarifi bağlantısı bu mağazayı hedef olarak açar. Harita uygulamasında başlangıç noktasını mevcut konumunuz olarak doğrulayın; konum izni vermiyorsanız adresinizi elle girin. Yol süresi ulaşım biçiminize ve trafiğe göre değişir. Gece açık olmak, bütün Mersin’e teslimat veya belirli bir varış süresi taahhüdü değildir."
        ],
        links: [{ href: "/iletisim", label: "Mağazanın konumunu açın ve yol tarifi alın" }]
      },
      {
        id: "siparisi-netlestirme", title: "Gitmeden önce gönderilebilecek örnek mesaj",
        paragraphs: [
          "Merhaba, bu gece mağazadan almak üzere sote için dana kuşbaşı düşünüyorum. İstediğim miktar 500 g; ürünün uygunluğunu, doğrama seçeneğini, toplam fiyatı ve ne zaman hazır olabileceğini paylaşır mısınız? Bu örnekteki miktarı kendi yemek planınıza göre değiştirin.",
          "Mağazada ürünü teslim alırken miktarı, paket sayısını ve konuşulan hazırlığı kontrol edin. Sonrasında başka işlere uğrayacaksanız ürünün muhafaza ve taşıma ihtiyacını önceden görüşün. Gece alışverişinin kolaylığı, ürüne uygun taşıma ve saklama planının yerine geçmez."
        ],
        links: [{ href: "/blog/mersin-whatsapp-et-siparisi", label: "WhatsApp’ta ürün listesi hazırlama ve sipariş teyidi" }, { href: "/urunler", label: "Et, tavuk ve köfte ürünlerini inceleyin" }]
      }
    ],
    productCategory: "dana",
    relatedSlugs: ["akdeniz-kasabi-mersin-adres-iletisim", "mersin-en-yakin-kasap-yol-tarifi", "mersin-whatsapp-et-siparisi"]
  },
  {
    slug: "mersin-et-market-taze-et-alisverisi",
    title: "Mersin et market rehberi: taze et alırken ne sorulmalı?",
    description: "Mersin ve Toroslar’da et market alışverişi için ürün bilgisi, tazelik, ambalaj ve hazırlama soruları. Dana, kuzu ve tavuk seçimini yemeğinize göre yapın.",
    category: "Et seçimi",
    image: "/images/custom/category-kuzu.jpg",
    imageAlt: "Et market alışverişi rehberi için temsili kuzu eti sunumu",
    publishedAt: "2026-10-19T00:00:00+03:00",
    intro: "Mersin’de et market veya taze et ararken yalnızca ürün fotoğrafına ve kilogram fiyatına bakmak yeterli değildir. Etin türü, hangi yemekte kullanılacağı, hazırlama bilgisi ve ambalaj koşulları birlikte değerlendirilmelidir. Toroslar’daki Akdeniz Kasabı’na gelmeden önce aşağıdaki sorularla alışverişinizi planlayabilirsiniz.",
    sections: [
      {
        id: "yemekten-baslayin", title: "Dana, kuzu ve tavuk arasında yemeğinize göre seçim yapın",
        paragraphs: [
          "İlk adım ürün adı değil yemek planıdır. Köfte, sote, fırın yemeği ve mangal için farklı hazırlıklar gerekir. Kaç öğün pişireceğinizi, hangi ekipmanı kullanacağınızı ve yanına başka ana yemek koyup koymayacağınızı belirtin. Böylece ihtiyacınızdan fazla almak veya yanlış kesim seçmek yerine seçenekleri birlikte değerlendirebilirsiniz.",
          "Dana kıyma için yağ ve çekim tercihini, kuzu pirzola için dilim ve kemik durumunu, tavuk için kullanılan parça ve marinasyonu sorun. Hazır köfte veya sucukta ürün adı, içerik listesinin yerini tutmaz. Bir malzemeyi tüketemiyorsanız bunu alışverişten önce açıkça belirtin; uygunluğunu yalnızca görselden çıkarmayın."
        ],
        links: [{ href: "/urunler/dana-eti", label: "Dana eti ürünleri ve hazırlama seçenekleri" }, { href: "/urunler/kuzu-eti", label: "Kuzu pirzola ve kuşbaşı seçenekleri" }, { href: "/urunler/tavuk-urunleri", label: "Tavuk şiş ve pirzola ürünleri" }]
      },
      {
        id: "tazelik-bilgisi", title: "Taze eti yalnızca renginden anlayabilir misiniz?",
        paragraphs: [
          "Etin rengi tek başına tazelik veya güvenlik kararı vermek için yeterli değildir. USDA’nın et ve kanatlı rengi rehberi, oksijen ve ambalaj gibi etkenlerin görünümü değiştirebildiğini açıklar. Fotoğraftaki parlak renkten hareketle ürünün hazırlama tarihi veya güvenliği hakkında kesin sonuç çıkarmayın.",
          "Satın alacağınız ürünün hazırlama veya ambalaj bilgilerini, varsa etiketini ve ürüne uygun muhafaza talimatını sorun. Ürünün soğutulmuş mu, donmuş mu sunulduğunu ve kullanım planınıza uygunluğunu öğrenin. İnternetteki temsili bir görsel, tezgâhtaki ürünün durumunu göstermez; belirsiz kalan bilgiyi satıcıyla netleştirin."
        ]
      },
      {
        id: "tezgah-kontrol-listesi", title: "Et markette sorulabilecek beş somut soru",
        paragraphs: [
          "Aynı soruları farklı ürünler için sormak karşılaştırmayı kolaylaştırır. Örneğin iki kuşbaşı teklifinde hayvan türü aynı olsa bile seçilen bölüm, temizleme ve doğrama farklı olabilir. Paket üzerindeki toplam ağırlık ile ihtiyacınız olan kemiksiz et miktarını birbirine karıştırmayın.",
          "Ürünün kaynağı ve izlenebilirlik bilgisi hakkında açıklama isteyebilirsiniz. Web sitesindeki kalite ifadelerini belge veya ürün bilgisi yerine kabul etmeyin. Satın alacağınız ürünle ilgili açık yanıtlar, yalnızca en düşük fiyatı seçmekten daha fazla bilgi verir."
        ],
        tips: ["Bu ürün hangi tür ve hangi parçadan hazırlanıyor?", "Hazırlama, ambalaj ve etiket bilgilerini görebilir miyim?", "Kemik, yağ ve temizleme tartıya nasıl yansıyor?", "İstediğim miktar için toplam fiyat ve hazırlık süresi nedir?", "Eve taşıma ve saklama için hangi ürün talimatını izlemeliyim?"]
      },
      {
        id: "paket-ve-alisveris-plani", title: "Haftalık alışverişi öğünlere göre paketleyin",
        paragraphs: [
          "Birden fazla öğün için alışveriş yapıyorsanız her pakette ne kadar ürün istediğinizi önceden yazın. Kıyma, kuşbaşı ve marineli tavuk gibi farklı hazırlıkları ayrı kalemler halinde belirtin. Paketlerin içeriğini ve miktarını teslim alırken kontrol etmek evdeki hazırlığı kolaylaştırır.",
          "Alışveriş sonrası güzergâhınızı, yol süresini ve ürünlerin gerektirdiği muhafazayı planlayın. Uzak bir ilçeden geliyorsanız taşıma ihtiyacınızı ayrıca görüşün. Bu yazıdaki genel kontrol listesi ürünün etiketi ve kendisine özgü saklama talimatının yerine geçmez."
        ],
        links: [{ href: "/blog/mersin-kasap-fiyatlari-ucretleri", label: "Aynı ürün ve hazırlık üzerinden fiyat karşılaştırma" }]
      },
      {
        id: "toroslar-et-alisverisi", title: "Toroslar’da Akdeniz Kasabı’ndan bilgi alın",
        paragraphs: [
          "Mağazamız Mithat Toroğlu, Kuvayi Milliye Cd., 33080 Toroslar/Mersin adresinde her gün 24 saat açıktır. Toroslar et market alışverişiniz için ürün listesini sitede inceleyip 0553 776 61 62 üzerinden güncel stok, fiyat ve hazırlık bilgisi isteyebilirsiniz.",
          "Bir ürünün katalogda bulunması o anda hazır olduğu anlamına gelmez. Listenizi gönderirken teslim almak istediğiniz zamanı da yazın. İletişim sayfasındaki konum, mağazamızın gerçek adresine gider; diğer ilçeler için hazırladığımız bloglar o ilçelerde şubemiz bulunduğunu göstermez."
        ],
        links: [{ href: "/blog/toroslar-kasap-alisverisi-rehberi", label: "Toroslar’da yemeğe göre kasap alışverişi rehberi" }, { href: "/iletisim", label: "Akdeniz Kasabı adres, telefon ve yol tarifi" }]
      }
    ],
    productCategory: "dana",
    relatedSlugs: ["mersin-kasap-secimi-rehberi", "mersin-dana-kusbasi-kuzu-kusbasi-secimi", "mersin-kasap-fiyatlari-ucretleri"],
    sources: [{ label: "USDA: Et ve kanatlı ürünlerinde renk değişimleri", url: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/color-meat-and-poultry" }]
  },
  {
    slug: "mersin-dana-kusbasi-kuzu-kusbasi-secimi",
    title: "Mersin’de dana kuşbaşı mı kuzu kuşbaşı mı? Yemek rehberi",
    description: "Dana ve kuzu kuşbaşını sote, güveç ve şiş için nasıl seçmeli? Mersin’de kasap alışverişi için parça, doğrama, yağ ve fiyat karşılaştırma rehberi.",
    category: "Kuşbaşı seçimi",
    image: "/images/custom/dana-kusbasi.jpg",
    imageAlt: "Yemeklik kuşbaşı doğrama tercihleri için temsili dana eti sunumu",
    publishedAt: "2026-10-19T00:00:00+03:00",
    intro: "Dana kuşbaşı ile kuzu kuşbaşı arasında karar verirken sadece hayvan türünü değiştirmiş olmazsınız; seçilen parça, yağ tercihi ve doğrama da yemeği etkiler. Mersin’de kuşbaşı alışverişinizi sote, güveç veya şiş planına göre yapmak için önce hangi yemeği hazırlayacağınızı anlatın. Kuşbaşı adı, tek başına etin hangi bölümden geldiğini söylemez.",
    sections: [
      {
        id: "tur-ve-parca", title: "Türü seçtikten sonra parçayı da sorun",
        paragraphs: [
          "Dana veya kuzu tercihi damak zevkinize, tarifinize ve bütçenize bağlıdır. Aynı türden iki kuşbaşı ürününün hazırlanış biçimi ve kullanılacağı yemek farklı olabilir. Bu nedenle birini her tarif için daha iyi ya da her koşulda daha çabuk pişen seçenek olarak düşünmeyin.",
          "Kasabınıza etin hangi bölümden hazırlanacağını sorun. Kısa sürede tava yemeği mi yapacağınızı, yoksa tencerede daha uzun pişireceğinizi açıklayın. Kullanılacak parça ile pişirme yöntemi uyumlu değilse sadece daha küçük doğrama istemek sorunu çözmeyebilir. Alternatif önerildiğinde yeni kesimi ve fiyatı birlikte değerlendirin."
        ]
      },
      {
        id: "yemege-gore-dograma", title: "Sote, güveç ve şiş için aynı hazırlığı istemeyin",
        paragraphs: [
          "Doğrama boyutunu küçük veya büyük gibi tek bir kelimeyle bırakmak yerine kullanımını tarif edin. Tava boyutu, pişirme için ayırdığınız zaman ve şiş ekipmanı hazırlığı etkiler. Aynı pakette yakın boyutlu parçalar istemek pişirmeyi takip etmeyi kolaylaştırır.",
          "Tarifiniz belirli bir ölçü veriyorsa bu ölçüyü paylaşabilirsiniz. Ölçü yoksa kasabınızla örnek bir parça üzerinden anlaşın. Marine edilmiş bir ürün isteyip istemediğinizi de söyleyin; sade kuşbaşı ile marineli şişlik ürünün içerik ve fiyat koşullarını aynı varsaymayın."
        ],
        table: { caption: "Kuşbaşı siparişini yemeğe göre tarif etme", columns: ["Yemek", "Belirtilecek bilgi", "Sorulacak soru"], rows: [["Sote", "Tava kullanımı ve pişirmeye ayırdığınız zaman", "Bu yönteme uygun parça ve doğrama hangisi?"], ["Güveç", "Uzun pişirme planı ve tarifteki diğer malzemeler", "Hangi parça ve yağ tercihi uygun olur?"], ["Şiş", "Şiş boyutu, sade veya marineli tercih", "Eşit parçalar ve şişe dizim mümkün mü?"]] },
        links: [{ href: "/blog/mersin-istege-gore-et-dograma-kiyma-cekimi", label: "İsteğe göre doğrama talebini nasıl yazmalı?" }]
      },
      {
        id: "yag-ve-tarti", title: "Yağ, temizleme ve tartı tercihini netleştirin",
        paragraphs: [
          "Görünür yağın ne kadarının bırakılmasını istediğinizi belirtin ve mümkün olan hazırlığı öğrenin. Yağ tercihini ifade etmek, ürünün kendiliğinden belirli bir orana sahip olduğunu garanti etmez. Özel bir ölçü veya oran istiyorsanız bunun uygulanıp uygulanamayacağını açıkça sorun.",
          "Fiyat karşılaştırmasında dana kuşbaşı ve kuzu kuşbaşını ayrı değerlendirin. Her biri için seçilen bölümü, temizlenmiş miktarı ve kilogram fiyatını öğrenin. Kemikli bir yemeklik etin fiyatını kemiksiz kuşbaşıyla doğrudan eşitlemeyin; teklifin hangi ağırlığı kapsadığını kontrol edin."
        ],
        links: [{ href: "/blog/mersin-kasap-fiyatlari-ucretleri", label: "Kuşbaşı ve diğer et ürünleri için güncel fiyat isteme" }]
      },
      {
        id: "ornek-siparis", title: "İki farklı yemek için örnek sipariş notu",
        paragraphs: [
          "Merhaba, sote için 500 g dana kuşbaşı ve güveç için ayrı pakette 500 g kuzu kuşbaşı düşünüyorum. Kullanılacak parçaları, doğrama seçeneklerini, temizlenmiş miktarı ve ayrı ayrı fiyatlarını paylaşır mısınız? Bu miktarlar sipariş dilini göstermek içindir; kişi başına tüketim önerisi değildir.",
          "Birden fazla öğün düşünüyorsanız her paketin miktarını ayrı yazın. Ürünleri alırken dana ve kuzu paketlerinin ayrıldığını, istediğiniz doğrama ve toplam miktarın doğru olduğunu kontrol edin. Beklediğinizden farklı bir hazırlık varsa mağazadan ayrılmadan görüşün."
        ]
      },
      {
        id: "urunleri-inceleyin", title: "Mersin’de kuşbaşı ürünlerini ve hazırlık durumunu öğrenin",
        paragraphs: [
          "Akdeniz Kasabı’nın dana eti ve kuzu eti kategorilerinde kuşbaşı ürünlerini inceleyebilirsiniz. Fotoğraflar temsili sunumlardır; alacağınız ürünün parça büyüklüğü ve miktarı görüşmede belirlenir. Stok ve özel hazırlık için 0553 776 61 62 üzerinden ulaşın.",
          "Mağazamız Toroslar, Mithat Toroğlu Mahallesi, Kuvayi Milliye Caddesi’nde 7/24 açıktır. Gelmek istediğiniz saati paylaşarak ürünün hazır olma durumunu teyit edin. Sipariş listesini WhatsApp’a aktarmak görüşmeyi başlatır; işletme teyidi olmadan kesinleşmiş sipariş sayılmaz."
        ],
        links: [{ href: "/urunler/dana-eti", label: "Dana kuşbaşı ve diğer dana eti ürünleri" }, { href: "/urunler/kuzu-eti", label: "Kuzu kuşbaşı ve pirzola ürünleri" }]
      }
    ],
    productCategory: "dana",
    relatedSlugs: ["mersin-kuzu-eti-pirzola-secimi", "mersin-istege-gore-et-dograma-kiyma-cekimi", "mersin-kasap-fiyatlari-ucretleri"]
  },
  {
    slug: "mersin-istege-gore-et-dograma-kiyma-cekimi",
    title: "Mersin’de et doğrama ve kıyma çekimi: sipariş rehberi",
    description: "Mersin’de isteğe göre et doğrama ve kasapta kıyma çekimi için yemek, kesim, yağ ve paket tercihinizi netleştirin. Toroslar’dan örnek sipariş notları.",
    category: "Özel hazırlık",
    image: "/images/custom/dana-kiyma.jpg",
    imageAlt: "Kıyma hazırlama ve paket tercihleri rehberi için temsili dana kıyma sunumu",
    publishedAt: "2026-10-19T00:00:00+03:00",
    intro: "Mersin’de isteğe göre et doğrama veya kasapta kıyma çekimi ararken yemeğinizi ve istediğiniz sonucu tarif etmek, yalnızca ürün adını söylemekten daha açıklayıcıdır. Akdeniz Kasabı’nın dana kıyma ve kuşbaşı ürünleri için yağ, çekim, doğrama ve paketleme tercihlerinizi paylaşabilirsiniz. Özel taleplerin uygunluğu ve hazırlanma zamanı görüşmede teyit edilir.",
    sections: [
      {
        id: "yemek-ve-kesim", title: "Önce yemek, ardından kesim ve miktar",
        paragraphs: [
          "Sote, kavurma, güveç, şiş ve köfte aynı hazırlama talebi değildir. Etin türünü ve yemeğin adını belirttikten sonra kullanacağınız tava, tencere veya ızgarayı söyleyin. Özellikle kısa sürede pişirme planınız varsa sadece küçük doğranmış et istemek yerine seçilen parçanın da uygunluğunu sorun.",
          "Kuşbaşı için yaklaşık parça boyutunu, biftek için dilim kalınlığını, şişlik et için eşit parçalar isteğinizi yazın. Yağ ve temizleme beklentinizi baştan konuşun. Kasabınızın önerisiyle kesim değişirse miktarı ve toplam fiyatı da yeniden teyit edin."
        ],
        table: { caption: "Hazırlama isteğini somutlaştıran örnekler", columns: ["Ürün", "Belirtilecek hazırlık"], rows: [["Dana kuşbaşı", "Sote için uygun parça, doğrama boyutu ve ayrı paket"], ["Kuzu kuşbaşı", "Güveç veya şiş kullanımı, yağ tercihi ve miktar"], ["Dana kıyma", "Köftelik veya yemeklik kullanım, yağ ve çekim tercihi"], ["Antrikot / bonfile", "Pişirme ekipmanı, dilim kalınlığı ve porsiyon sayısı"]] }
      },
      {
        id: "kiyma-cekimi", title: "Kıyma çekiminde hangi ayrıntıları konuşmalı?",
        paragraphs: [
          "Köftelik ve yemeklik dana kıymada et türü, yağ tercihi ve çekim dokusu birlikte değerlendirilir. Önce kullanacağınız tarifi anlatın; ardından hangi parçadan hazırlanacağını ve istediğiniz çekimin mümkün olup olmadığını sorun. Bir çekim biçimini bütün tarifler için tek doğru seçenek olarak düşünmeyin.",
          "Aynı alışverişte hem köfte hem sebze yemeği için kıyma alacaksanız talepleri ayrı kalemler halinde yazın. Her kalemin miktarı ve paket sayısı belli olsun. Tercih ettiğiniz yağ oranı veya doku uygulanamıyorsa alternatifin sizin onayınızla belirlenmesini isteyin; toplam tutarı bu hazırlığa göre öğrenin."
        ],
        links: [{ href: "/blog/mersin-dana-kiyma-secimi", label: "Köftelik ve yemeklik dana kıyma seçimi ayrıntıları" }]
      },
      {
        id: "paketleme", title: "Paket sayısını toplam kilogramdan ayrı belirtin",
        paragraphs: [
          "Toplam 1 kg ürün istemek, bunun tek paket veya iki ayrı paket olması konusunda bilgi vermez. İki öğünde kullanacaksanız her paketin miktarını açıkça yazın. Hazır köfte, sade kıyma ve marineli ürünleri aynı hazırlık gibi tanımlamayın; ürünlerin içerikleri ve kullanım planları farklıdır.",
          "Ürünü teslim alırken paket sayısını, miktarı ve konuşulan kesimi kontrol edin. Etiket veya ürünle birlikte verilen hazırlama ve muhafaza bilgilerini isteyin. Yolculuğunuz uzunsa taşıma ihtiyacınızı baştan paylaşın; ayrı paketleme tek başına uygun taşıma koşulu sağlandığı anlamına gelmez."
        ]
      },
      {
        id: "ozel-talep-teyidi", title: "Dışarıdan et, ek ücret ve hazırlık süresi için önce sorun",
        paragraphs: [
          "Katalogdaki et ürününü tercih ettiğiniz biçimde hazırlatma isteği ile dışarıdan getirilen eti doğratma veya çektirme talebi aynı hizmet değildir. Bu rehber, dışarıdan et kabul edildiği anlamına gelmez. Böyle bir ihtiyacınız varsa yola çıkmadan kabul koşullarını doğrudan işletmeye sorun.",
          "Özel kesimin uygunluğunu, varsa ek hazırlama ücretini ve ne zaman tamamlanacağını önceden netleştirin. Mağazanın 7/24 açık olması her özel hazırlığın anında yapılabileceği anlamına gelmez. Çok sayıda porsiyon veya farklı kesimler içeren listelerde onaylanan hazırlığı mesajda özetlemek yanlış anlaşılmayı azaltır."
        ]
      },
      {
        id: "whatsapp-notu", title: "Toroslar’dan örnek WhatsApp hazırlık mesajı",
        paragraphs: [
          "Merhaba, köfte yapmak için toplam 1 kg dana kıyma istiyorum; iki adet 500 g paket olabilir mi? Yağ ve çekim seçeneklerini görüşmek istiyorum. Ayrıca sote için 500 g dana kuşbaşı düşünüyorum. Ürünlerin uygunluğunu, hazırlama dahil toplam tutarı ve mağazadan alabileceğim saati paylaşır mısınız? Örnek miktarları kendi ihtiyacınıza göre değiştirin.",
          "Toroslar’daki Akdeniz Kasabı’na 0553 776 61 62 telefon ve WhatsApp numarasından ulaşabilirsiniz. Adresimiz Mithat Toroğlu, Kuvayi Milliye Cd., 33080 Toroslar/Mersin’dir. Sitede oluşturduğunuz listeyi WhatsApp’ta kendiniz gönderin; fiyat, hazırlama ve teslim alma için işletmenin teyidini bekleyin."
        ],
        links: [{ href: "/blog/mersin-whatsapp-et-siparisi", label: "Ürün listesinden WhatsApp sipariş görüşmesine geçiş" }, { href: "/urunler/dana-eti", label: "Kıyma, kuşbaşı ve dana eti seçeneklerini inceleyin" }]
      }
    ],
    productCategory: "dana",
    relatedSlugs: ["mersin-dana-kiyma-secimi", "mersin-dana-kusbasi-kuzu-kusbasi-secimi", "mersin-whatsapp-et-siparisi"]
  }
];

export const kitchenGuidePosts: BlogPost[] = [
  {
    "slug": "mersin-hamburger-koftesi-icin-kiyma",
    "title": "Mersin’de ev yapımı hamburger için kıyma nasıl seçilir?",
    "description": "Evde hamburger hazırlarken kıyma, yağ tercihi, köfte gramajı ve ekmek boyutunu birlikte planlayın. Mersin’de kasaba iletilecek örnek hazırlık listesi.",
    "category": "Hamburger hazırlığı",
    "image": "/images/custom/dana-kiyma.jpg",
    "imageAlt": "Hamburger hazırlığında kullanılabilecek dana kıymanın temsili sunumu",
    "productCategory": "dana",
    "intro": "Evde hamburger yaparken ilk karar yalnızca kaç kilogram kıyma alınacağı değildir. Ekmek çapı, tek veya çift köfte tercihi ve pişirme ekipmanı alışverişi değiştirir. Mersin’de hamburger için kıyma arayanlar, hazır bir burger ürünü varsaymak yerine kasaba kendi hazırlık planını anlatabilir.",
    "sections": [
      {
        "id": "hamburger-ve-kasap-kofte",
        "title": "Hamburger köftesi ile hazır kasap köftesi aynı şey mi?",
        "paragraphs": [
          "Her hazır köftenin içeriği ve baharatı farklı olabilir. Sade et tadı istediğiniz bir hamburgerde önceden baharatlanmış kasap köfte beklentinizi karşılamayabilir. Önce kıymayı kendiniz mi şekillendireceğinize, yoksa hazır ürün mü kullanacağınıza karar verin.",
          "Dana eti tercihinizi, yağ beklentinizi ve çekim dokusunu birlikte görüşün. Bütün hamburgerler için geçerli tek bir yağ oranı yoktur; ince bastırılan köfte ile daha kalın bir köftede aradığınız doku farklı olabilir. Tarifiniz belirli bir oran istiyorsa aynen iletin ve uygulanabilirliğini sorun."
        ]
      },
      {
        "id": "gramaj-hesabi",
        "title": "Miktarı köfte adedi üzerinden hesaplayın",
        "paragraphs": [
          "Alışveriş hesabını kişi sayısından önce hazırlanacak köfte sayısıyla kurun: köfte adedi × çiğ köfte gramajı = toplam kıyma. Örneğin dört adet 150 g köfte planı 600 g kıyma eder. Bu yalnızca hesap örneğidir; beslenme veya kişi başı tüketim önerisi değildir.",
          "Çift köfteli servis, farklı ekmek boyları ve başka ana yemekler toplamı değiştirir. Çiğ gramajın pişmiş ağırlıkla aynı kalmasını beklemeyin. Köfteleri tartarak eşitlemek, birinin çok ince diğerinin çok kalın olmasını önler."
        ],
        "tips": [
          "Ekmek sayısı ve yaklaşık çapı",
          "Her ekmekte tek veya çift köfte",
          "Her köftenin çiğ gramajı",
          "Baharatlı hazır ürün mü, sade kıyma mı?"
        ]
      },
      {
        "id": "sekillendirme",
        "title": "Ekmek, tava ve köfteyi aynı servis planına alın",
        "paragraphs": [
          "Köfteleri ekmeğe uygun çapta, birbirine yakın kalınlıkta hazırlayın. Tavaya aynı anda kaç adet sığdığını önceden kontrol edin; sığmayan bir listeyi tek seferde yetiştirmeye çalışmak servis sırasını bozar. Ekmek ve garnitür hazırlığını et pişmeye başlamadan tamamlayın.",
          "USDA, dana kıyma ürünlerinde en az 71,1 °C iç sıcaklık önerir. Yalnızca dış rengin değişmesine güvenmeyin; uygun gıda termometresiyle ölçün. İnce köftede ölçüm için cihazın kullanım talimatını izleyin."
        ]
      },
      {
        "id": "mersin-siparis-notu",
        "title": "Toroslar’daki kasaba nasıl anlatabilirsiniz?",
        "paragraphs": [
          "Örnek talep: Evde dört hamburger hazırlayacağım; toplam 600 g dana kıymayı kendim şekillendireceğim. Yağ ve çekim seçenekleriyle güncel toplam fiyatı öğrenebilir miyim? Ekmek veya gramaj planınız farklıysa örneği değiştirin.",
          "Akdeniz Kasabı’nın kataloğunda dana kıyma ve kasap köfte ayrı ürünlerdir. Bu rehber özel hamburger köftesinin hazır stokta bulunduğu anlamına gelmez; şekillendirme talebinin uygunluğunu ayrıca sorun. Toroslar mağazasına almayı düşündüğünüz saati de bildirin."
        ],
        "links": [
          {
            "href": "/urunler/dana-eti",
            "label": "Dana kıyma ve diğer dana eti seçenekleri"
          },
          {
            "href": "/blog/evde-kofte-neden-dagilir",
            "label": "Evde köfte dağılmasını değerlendirme rehberi"
          }
        ]
      }
    ],
    "relatedSlugs": [
      "mersin-dana-kiyma-secimi",
      "mersin-kasap-kofte-siparisi",
      "kiyma-buzdolabi-dondurucu-saklama"
    ],
    "sources": [
      {
        "label": "USDA: Güvenli asgari iç sıcaklıklar",
        "url": "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart"
      }
    ],
    "publishedAt": "2026-10-19T11:00:00+03:00"
  },
  {
    "slug": "lahmacun-ici-icin-kiyma-secimi",
    "title": "Lahmacun içi için kıyma seçimi ve harç miktarı hesabı",
    "description": "Evde lahmacun hazırlığı için kıyma seçimi, sebze nemi, harç miktarı ve sipariş notları. Adet hesabını et miktarıyla karıştırmadan alışveriş planlayın.",
    "category": "Lahmacun hazırlığı",
    "image": "/images/custom/dana-kiyma.jpg",
    "imageAlt": "Lahmacun içi hazırlığı için temsili dana kıyma görseli",
    "productCategory": "dana",
    "intro": "Lahmacun içi hazırlarken toplam harç miktarı ile alınacak kıyma miktarını birbirinden ayırmak gerekir. Sebze, baharat ve et oranı kullandığınız tarife göre değişir. Bu rehber, evde hazırlık veya bir fırınla görüşme öncesinde alışveriş hesabını ve kıyma talebini netleştirmek içindir.",
    "sections": [
      {
        "id": "kiyma-tercihi",
        "title": "Kıymayı tarifinizdeki et ve yağ tercihine göre isteyin",
        "paragraphs": [
          "Dana, kuzu veya karışım kullanımı tariften tarife değişir; tek bir seçeneği bütün lahmacunlar için zorunlu kabul etmeyin. Kasaba lahmacun içi hazırlayacağınızı, kullanacağınız et türünü ve tarifteki yağ tercihini söyleyin. Karışım istiyorsanız oranı, uygunluğu ve fiyatı ayrıca görüşün.",
          "Harç hamurun üzerine ince yayılacağı için çekim dokusu önemlidir. Kıymayı çok iri veya çok ince istemeden önce tarifinize ve fırınınızın beklentisine bakın. Sebzelerin doğrama biçimiyle etin dokusu birbirini tamamlamalı; iri parçalar ince bir yüzeyde eşit yayılmayı zorlaştırabilir."
        ]
      },
      {
        "id": "harc-hesabi",
        "title": "Lahmacun adedini doğrudan kıyma gramajı saymayın",
        "paragraphs": [
          "Hesabı iki aşamada yapın: adet × her lahmacunda kullanacağınız toplam harç miktarı; ardından bu karışımdaki kıyma payı. Örneğin 20 adet için 40’ar g harç planı 800 g toplam karışım eder. Kendi tarifinizde bu karışımın yarısı kıymaysa et miktarı 400 g olur.",
          "Bu sayılar tarif veya porsiyon standardı değil, hesap yöntemini gösteren örnektir. Hamur çapı, yayma kalınlığı ve tarif oranlarını değiştirince hesabı yeniden yapın. İlk lahmacunda harcı tartmak, kalan malzemeyi eşit bölüştürmek için daha kullanışlıdır."
        ],
        "table": {
          "caption": "Lahmacun alışveriş hesabında üç ayrı bilgi",
          "columns": [
            "Bilgi",
            "Neyi belirler?"
          ],
          "rows": [
            [
              "Adet ve hamur çapı",
              "Hazırlanacak toplam yüzey"
            ],
            [
              "Bir adet için harç miktarı",
              "Toplam karışım ihtiyacı"
            ],
            [
              "Tarifteki et payı",
              "Alınacak kıyma miktarı"
            ]
          ]
        }
      },
      {
        "id": "sebze-ve-is-sirasi",
        "title": "Sebze nemi ve hazırlık sırası neden önemli?",
        "paragraphs": [
          "Yıkanmış sebzelerde kalan su ile tarifte istenen nem aynı şey değildir. Sebzeleri tarifin öngördüğü biçimde süzüp doğrayın; fazla sıvı oluşursa gelişigüzel un veya başka malzeme ekleyerek oranları değiştirmeyin. Et ve sebzeyi tartmak bir sonraki hazırlıkta aynı sonucu hedeflemeyi kolaylaştırır.",
          "Önce hamur ve fırın planını, sonra sebze hazırlığını düzenleyin. Çiğ harcı hazır yiyeceklerden ayrı tutun ve hazırlık aralarında buzdolabında saklayın. Bir fırına götürecekseniz kabul koşullarını ve harç miktarını önceden sorun; mağazamızın fırın veya pişirme hizmeti verdiğini varsaymayın."
        ]
      },
      {
        "id": "alisveris-notu",
        "title": "Mersin’de lahmacunluk kıyma için örnek talep",
        "paragraphs": [
          "Mesajınızda lahmacun adedi yerine hesapladığınız kıyma miktarını, et türünü ve çekim tercihini belirtin. Sebzeleri evde ekleyeceğinizi söylemek, sadece kıyma mı yoksa hazırlanmış harç mı istediğinizin karışmasını önler.",
          "Akdeniz Kasabı’ndan kıyma için güncel fiyat ve uygunluk öğrenebilirsiniz. Hazır lahmacun içi veya sebzeli harç özel bir taleptir; katalogda listelendiği varsayılmamalıdır. Benzer biçimde içli köfte hazırlayacaksanız çiğ lahmacun harcıyla pişmiş iç harcı aynı çalışma planına koymayın."
        ],
        "links": [
          {
            "href": "/urunler/dana-eti",
            "label": "Dana kıyma için ürün ve iletişim bilgileri"
          },
          {
            "href": "/blog/icli-kofte-ic-harci-kiyma",
            "label": "İçli köfte iç harcı için kıyma ve hazırlık planı"
          }
        ]
      }
    ],
    "relatedSlugs": [
      "mersin-dana-kiyma-secimi",
      "mersin-hamburger-koftesi-icin-kiyma",
      "kiyma-buzdolabi-dondurucu-saklama"
    ],
    "publishedAt": "2026-10-19T11:00:00+03:00"
  },
  {
    "slug": "icli-kofte-ic-harci-kiyma",
    "title": "İçli köfte iç harcı için kıyma ve hazırlık planı",
    "description": "İçli köfte harcında kıyma miktarı, soğan, yağ ve soğutma sırasını planlayın. Ev hazırlığı için gramaj hesabı ve kasaba iletilecek sipariş ayrıntıları.",
    "category": "İçli köfte hazırlığı",
    "image": "/images/custom/dana-kiyma.jpg",
    "imageAlt": "İçli köfte iç harcı için kullanılabilecek kıymanın temsili sunumu",
    "productCategory": "dana",
    "intro": "İçli köfte hazırlığı, dış hamur ile iç harcın aynı anda hazır olmasını gerektirir. Kıyma alışverişini yalnızca köfte adedine göre yapmak yerine iç harçtaki et payını, soğanı ve ekleyeceğiniz diğer malzemeleri ayrı hesaplayın. Böylece harcın artması veya hamura yetmemesi gibi sorunları baştan azaltabilirsiniz.",
    "sections": [
      {
        "id": "ic-ve-dis-ayrimi",
        "title": "İç harç için alınan kıymayı ayrı tarif edin",
        "paragraphs": [
          "Bazı tariflerde yalnızca içte, bazılarında dış karışımda da et kullanılır. İki farklı kullanım varsa kıyma miktarlarını tek kalemde söylemeyin. Et türü, yağ ve çekim tercihlerini her karışımın tarifine göre ayrı belirtin; aynı hazırlığın ikisine de uygun olacağını varsaymayın.",
          "İç harçta kıyma, soğan ve ek yağ birlikte sonucu belirler. Tarifinizi değiştirmeden önce kıymaya ne kadar yağ istendiğini netleştirin. Ceviz veya farklı baharat kullanımı da evden eve değişir; bunlar hazır kıymanın içinde bulunduğu varsayılan malzemeler değildir."
        ]
      },
      {
        "id": "adet-ve-harc",
        "title": "Bir deneme köftesiyle toplam harcı hesaplayın",
        "paragraphs": [
          "İlk köftenin içine koyduğunuz pişmiş harcı tartıp kaç adet hazırlayacağınızla çarpabilirsiniz. Bu sonuç pişmiş karışım ihtiyacıdır, çiğ kıyma miktarı değil. Soğanın, yağın ve diğer malzemelerin katkısı ile pişirme sırasındaki ağırlık değişimini ayrıca düşünün.",
          "Daha önce kullandığınız tarif varsa başlangıç kıyması ve çıkan köfte adedini not edin. Bir sonraki alışverişi bu kayıt üzerinden ölçeklemek, gelişigüzel kişi başı miktar seçmekten daha tutarlıdır. Köfte boyutunu değiştirdiğinizde eski adet hesabının geçerli olmayacağını unutmayın."
        ]
      },
      {
        "id": "harci-hazirlama",
        "title": "İç harcı dış hamurdan önce planlayın",
        "paragraphs": [
          "Soğanı ve kıymayı tarifinizin sırasıyla hazırlayın; istenmeyen fazla sıvıyı yönetmeden harcı hamura doldurmayın. Sulu harç, kapatma aşamasını zorlaştırabilir. Buna karşılık bütün tariflerde harcı tamamen kurutmak gerektiği de söylenemez; hedef, kullandığınız tarifteki kıvamdır.",
          "Sıcak harcı bekletirken bütün tencereyi uzun süre tezgâhta bırakmayın. Hızlı soğutma ve buzdolabına kaldırma adımlarını pişmiş et saklama rehberindeki kaynaklı bilgilerle planlayın. İçin pişmiş olması, doldurulmuş köftenin sonraki hazırlık aşamalarının önemsiz olduğu anlamına gelmez."
        ],
        "links": [
          {
            "href": "/blog/pismis-et-yemekleri-saklama-isitma",
            "label": "Pişmiş harcı ve et yemeklerini soğutma rehberi"
          }
        ]
      },
      {
        "id": "siparis-ve-kontrol",
        "title": "Toroslar’dan alışverişte kullanabileceğiniz kontrol listesi",
        "paragraphs": [
          "Kasaba içli köfte iç harcı hazırladığınızı, kıymayı evde pişireceğinizi ve istediğiniz net miktarı söyleyin. Dış karışım için de kıyma gerekiyorsa ayrı paket isteyin. Alışveriş listesinde kıyma ile diğer harç malzemelerini ayrı tutmak, teklifin kapsamını netleştirir.",
          "Akdeniz Kasabı’nda hazır içli köfte veya hazır iç harcı bulunduğu bu yazıdan çıkarılmamalıdır. Ürün kataloğu ve özel hazırlık uygunluğu farklı konulardır. Kıyma seçimi ve paketleme için 0553 776 61 62 üzerinden bilgi alabilirsiniz."
        ],
        "tips": [
          "İç ve dış karışım için ayrı miktarlar",
          "Tarife uygun et türü ve yağ tercihi",
          "Hazırlanacak adet ve köfte boyutu",
          "Ayrı paket ve mağazadan alma saati"
        ],
        "links": [
          {
            "href": "/blog/mersin-istege-gore-et-dograma-kiyma-cekimi",
            "label": "Kıyma çekimi ve ayrı paket talebi hazırlama"
          }
        ]
      }
    ],
    "relatedSlugs": [
      "lahmacun-ici-icin-kiyma-secimi",
      "mersin-dana-kiyma-secimi",
      "pismis-et-yemekleri-saklama-isitma"
    ],
    "publishedAt": "2026-10-19T11:00:00+03:00"
  },
  {
    "slug": "patlican-kebabi-icin-et-ve-kofte-secimi",
    "title": "Patlıcan kebabı için et seçimi ve tepsi hazırlığı",
    "description": "Patlıcan kebabı için kıyma mı kuşbaşı mı seçmeli? Tepsi ölçüsü, parça boyutu, malzeme dengesi ve Mersin’de alışveriş için hazırlık notları.",
    "category": "Tepsi yemekleri",
    "image": "/images/custom/kasap-kofte.jpg",
    "imageAlt": "Patlıcanlı tepsi yemeği hazırlığı için temsili köfte görseli",
    "productCategory": "hazir",
    "intro": "Patlıcan kebabı adıyla hem kıymalı hem parça etli farklı ev tarifleri hazırlanır. Doğru alışveriş için önce hangi versiyonu yapacağınızı belirleyin. Tepsi boyutu, patlıcan dilimleri ve et hazırlığı aynı plana girdiğinde hem miktarı hem de mutfaktaki iş sırasını daha kolay yönetebilirsiniz.",
    "sections": [
      {
        "id": "tarifi-belirleyin",
        "title": "Kıymalı mı, kuşbaşı etli mi hazırlayacaksınız?",
        "paragraphs": [
          "Kıymalı bir tarifte köftenin et karışımı, yağ ve baharat tercihi önem kazanır. Parça etli bir tarifte ise kuşbaşının geldiği bölüm ve pişirme yöntemine uygunluğu öne çıkar. İki hazırlığı aynı kilogram ve aynı pişirme süresiyle birbirinin yerine koymayın.",
          "Hazır kasap köfte kullanmak isterseniz içeriğini öğrenin; tarifinizin baharatını ayrıca eklemek tadı beklediğinizden farklılaştırabilir. Kıymayı kendiniz hazırlamakla hazır ürün almak arasında seçim yaparken mutfakta ayırabileceğiniz zamanı da düşünün."
        ]
      },
      {
        "id": "tepsi-olcusu",
        "title": "Tepsi ölçüsü alışveriş miktarını nasıl etkiler?",
        "paragraphs": [
          "Dizme usulü hazırlıkta bir patlıcan dilimi ile bir köftenin birlikte ne kadar yer kapladığını düşünün. Elinizdeki tepsiye birkaç örnek parça yerleştirerek yaklaşık sıra ve adet planı yapabilirsiniz. Sadece tepsinin çapına bakıp her tarif için aynı miktarı almak yanıltıcıdır.",
          "Patlıcanların çapı ve dilim kalınlığı farklıysa eşleşen köftelerin boyutu da değişir. Benzer boyutlu malzemeler hazırlamak, son sırada büyük boşluklar veya aşırı sıkışıklık oluşmasını azaltır. Sebze ve et miktarlarını ayrı not edin; toplam tepsi ağırlığını yalnızca et saymayın."
        ],
        "table": {
          "caption": "Patlıcanlı tepsi yemeğinde alışveriş öncesi kararlar",
          "columns": [
            "Karar",
            "Listeye etkisi"
          ],
          "rows": [
            [
              "Kıymalı veya parça etli tarif",
              "Kıyma ya da kuşbaşı seçimi"
            ],
            [
              "Tepsinin kullanılabilir alanı",
              "Yaklaşık dizim ve parça sayısı"
            ],
            [
              "Sebze ve köfte boyutu",
              "Birbirine uygun porsiyonlar"
            ]
          ]
        }
      },
      {
        "id": "pisirme-plani",
        "title": "Sos ve etin pişmesini ayrı değerlendirin",
        "paragraphs": [
          "Fırında sebzelerin yumuşaması veya sosun kaynaması tek başına etin piştiğini göstermez. Kıymalı versiyonda USDA’nın asgari iç sıcaklık önerisi 71,1 °C’dir; uygun gıda termometresiyle köftenin içini kontrol edin. Bu değer fırın ayarı değildir.",
          "Sos miktarını kullandığınız tarife ve kap ölçüsüne göre belirleyin. Çok derin kap ile yayvan tepsi aynı davranmaz. İlk denemede tepsi ölçüsünü ve kullandığınız malzeme miktarlarını not etmek, başarılı bulduğunuz düzeni daha sonra tekrar etmenizi sağlar."
        ]
      },
      {
        "id": "mersin-alisveris",
        "title": "Mersin’de patlıcan kebabı için et isterken",
        "paragraphs": [
          "Talebinizi patlıcan kebabı yapacağım cümlesiyle sınırlamayın; kıymalı mı parça etli mi olduğunu da ekleyin. Kıyma ise kendiniz şekillendireceğinizi, hazır köfte ise mevcut baharat ve gramajı öğrenmek istediğinizi belirtin.",
          "Akdeniz Kasabı’ndan güncel fiyatı seçtiğiniz hazırlık üzerinden isteyin. Özel şekillendirme veya tepsi hazırlığı ayrı taleplerdir; bu rehber bunların sunulduğu anlamına gelmez. Katalogdaki kıyma ve köfte seçeneklerini kendi tarifinizle eşleştirebilirsiniz."
        ],
        "links": [
          {
            "href": "/urunler/kasap-kofte",
            "label": "Kasap köfte içeriği ve hazırlama seçenekleri"
          },
          {
            "href": "/blog/mersin-dana-kusbasi-kuzu-kusbasi-secimi",
            "label": "Parça etli yemekler için kuşbaşı karşılaştırması"
          }
        ]
      }
    ],
    "relatedSlugs": [
      "mersin-kasap-kofte-siparisi",
      "evde-kofte-neden-dagilir",
      "firinda-kuzu-pirzola-hazirligi"
    ],
    "sources": [
      {
        "label": "USDA: Güvenli asgari iç sıcaklıklar",
        "url": "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart"
      }
    ],
    "publishedAt": "2026-10-19T11:00:00+03:00"
  },
  {
    "slug": "kuru-fasulye-nohut-icin-et-secimi",
    "title": "Etli kuru fasulye ve nohut için hangi et seçilir?",
    "description": "Etli bakliyat yemeklerinde dana veya kuzu, kemikli veya kemiksiz parça ve doğrama boyutunu karşılaştırın. Günlük yemek için alışveriş planı hazırlayın.",
    "category": "Tencere yemekleri",
    "image": "/images/custom/dana-kusbasi.jpg",
    "imageAlt": "Bakliyat yemeklerinde kullanılabilecek dana kuşbaşının temsili sunumu",
    "productCategory": "dana",
    "intro": "Etli kuru fasulye veya nohut için alışverişte bakliyatın hazır durumu kadar etin hazırlığı da önemlidir. Önceden haşlanmış nohutla kuru bakliyat aynı iş sırasını istemez. Kasaba kullandığınız tarifi ve tencereyi anlatmanız, et seçimindeki seçenekleri anlamlı biçimde daraltır.",
    "sections": [
      {
        "id": "dana-kuzu-kemik",
        "title": "Dana, kuzu ve kemikli seçenekleri nasıl karşılaştırmalı?",
        "paragraphs": [
          "Dana veya kuzu tercihini sevdiğiniz lezzet ve tarif üzerinden yapabilirsiniz. Etin hayvan türü tek başına pişirme süresini belirlemez; hangi bölümden alındığı, büyüklüğü ve pişirme yöntemi de önemlidir. Tencerelik kullanım için önerilen parçayı sorun.",
          "Kemikli et tercih ederseniz tartıdaki ağırlığın tamamını yenebilir et gibi hesaplamayın. Kemiksiz kuşbaşı daha kolay paylaştırılabilir; kemikli hazırlık ise servis sırasında farklı işlem gerektirir. Seçimi yalnızca kilogram fiyatına değil, sofradaki kullanımına göre değerlendirin."
        ]
      },
      {
        "id": "bakliyat-hazirligi",
        "title": "Bakliyatın hazırlığı ile etin sırasını eşleştirin",
        "paragraphs": [
          "Kuru, önceden ıslatılmış veya önceden pişmiş bakliyat kullanmanız iş planını değiştirir. Etle bakliyatın aynı anda tencereye girmesi her tarifte uygun değildir. Seçtiğiniz tarifte ayrı ön hazırlık varsa alışveriş ve zaman hesabına bunu dahil edin.",
          "Düdüklü tencerede bakliyatla çalışıyorsanız cihazın bakliyata özel dolum ve sıvı sınırlarını izleyin. Genel bir et pişirme kuralını bakliyata doğrudan taşımayın. Bu rehber belirli bir cihaz için basınç veya dakika ayarı vermez."
        ],
        "links": [
          {
            "href": "/blog/duduklude-dana-eti-hazirligi",
            "label": "Düdüklü tencerede dana eti için hazırlık soruları"
          }
        ]
      },
      {
        "id": "miktar-ve-ogun",
        "title": "Tenceredeki etin rolünü ve öğün sayısını belirleyin",
        "paragraphs": [
          "Yemeğin ana unsurunun bakliyat mı, bol etli bir tabak mı olacağını düşünün. Et miktarını yalnızca kişi sayısına göre değil yanında sunulacak yemekler ve planlanan öğün sayısıyla birlikte belirleyin. Küçük doğranmış parçalar ile iri parçaların tabaklara dağılımı da farklıdır.",
          "İki ayrı gün pişirecekseniz çiğ eti iki paket halinde almak işinizi kolaylaştırabilir. Tek seferde çok yemek yapacaksanız pişmiş yemeğin soğutma ve saklama planı ayrıca gerekir. Büyük tencere kullanmak, bütün yemeğin kısa sürede tüketileceği anlamına gelmez."
        ],
        "tips": [
          "Bakliyat kuru mu, önceden pişmiş mi?",
          "Tencere mi, düdüklü mü kullanılacak?",
          "Et kemikli mi, kemiksiz mi olacak?",
          "Tek öğün mü, birkaç öğün mü planlanıyor?"
        ]
      },
      {
        "id": "siparis-ornek",
        "title": "Kasaba iletilebilecek örnek açıklama",
        "paragraphs": [
          "Etli nohut yapacağım; nohut önceden haşlanmış olacak. Tencerede kullanmaya uygun dana eti ve eşit kuşbaşı doğrama istiyorum. Hangi parçayı önerirsiniz, istediğim miktarın toplam fiyatı nedir? Bu açıklama, yalnızca kuşbaşı istemekten daha fazla bilgi verir.",
          "Toroslar’daki Akdeniz Kasabı’na dana veya kuzu tercihinizi ve paket sayısını bildirebilirsiniz. Kemikli ya da katalog dışı bir kesim istiyorsanız mevcut stok ve özel hazırlık uygunluğunu önceden sorun."
        ],
        "links": [
          {
            "href": "/urunler/dana-eti",
            "label": "Dana kuşbaşı ve yemeklik et seçenekleri"
          },
          {
            "href": "/blog/pismis-et-yemekleri-saklama-isitma",
            "label": "Pişmiş etli yemekleri saklama ve yeniden ısıtma"
          }
        ]
      }
    ],
    "relatedSlugs": [
      "mersin-dana-kusbasi-kuzu-kusbasi-secimi",
      "duduklude-dana-eti-hazirligi",
      "pismis-et-yemekleri-saklama-isitma"
    ],
    "publishedAt": "2026-10-19T11:00:00+03:00"
  },
  {
    "slug": "julyen-et-nasil-hazirlatilir",
    "title": "Jülyen et nasıl hazırlatılır? Tava ve fajita için seçim",
    "description": "Jülyen dana eti için kesim, şerit kalınlığı ve tava kapasitesini planlayın. Mersin’de kasaba iletilecek hazırlık notu ve pişirme öncesi kontrol listesi.",
    "category": "Tava ve kesim",
    "image": "/images/custom/dana-bonfile.jpg",
    "imageAlt": "Jülyen doğrama talebi için değerlendirilebilecek dana bonfilenin temsili sunumu",
    "productCategory": "dana",
    "intro": "Jülyen et, tek bir hayvan bölümü değil uzun şeritler halinde bir doğrama biçimidir. Fajita veya sebzeli tava hazırlarken yalnızca jülyen demek, seçilecek parçayı açıklamaz. Etin bölümü, şerit kalınlığı ve tavada kullanılacak miktar birlikte konuşulmalıdır.",
    "sections": [
      {
        "id": "kesim-adi",
        "title": "Jülyen doğrama ile etin parçasını ayırın",
        "paragraphs": [
          "Bonfile, antrikot veya önerilen başka bir parça farklı özellik ve fiyatlarla sunulabilir. Kısa sürede tava yemeği düşündüğünüzü söyleyerek uygun seçenekleri öğrenin. Her kuşbaşı ürününü şerit kesmek, aynı sonucu vereceği anlamına gelmez.",
          "Kasabınızdan etin lif yönünü dikkate alarak hazırlama önerisi isteyin. Şeritlerin yaklaşık uzunluğu ve kalınlığında anlaşın; çok ince ve kalın parçaları aynı pakette karıştırmak pişirme takibini zorlaştırır. Yağ ve temizleme tercihini de bu aşamada belirtin."
        ],
        "links": [
          {
            "href": "/blog/mersin-antrikot-bonfile-farki",
            "label": "Antrikot ve bonfile seçimini karşılaştırın"
          }
        ]
      },
      {
        "id": "tava-kapasitesi",
        "title": "Tavayı doldurmak yerine partileri planlayın",
        "paragraphs": [
          "Et ve sebzelerin tamamını küçük bir tavaya birden koymak, yüzeyin sıkışmasına ve malzemelerin suyunda pişmesine yol açabilir. Daha belirgin yüzey rengi istiyorsanız tavanızın kapasitesine göre partiler planlayın. Miktarı sırf tavaya sığsın diye düzensiz inceltmeyin.",
          "Soğan, biber veya mantarı nasıl pişireceğinizi ayrıca belirleyin. Bütün sebzelerin aynı sürede hazırlanmasını beklemeyin; etle ne zaman birleşecekleri seçtiğiniz tarife bağlıdır. Malzemeleri önceden doğrayıp ayrı kaplarda düzenlemek, et ocaktayken hazırlıkla uğraşmanızı önler."
        ]
      },
      {
        "id": "sos-ve-paket",
        "title": "Sade veya soslu hazırlık tercihini baştan söyleyin",
        "paragraphs": [
          "Fajita, soya soslu tava veya sade et için aynı marinasyonu istemeyebilirsiniz. Evde sos kullanacaksanız ürünü sade istediğinizi belirtin. Hazır marineli seçenek soruyorsanız içeriği ve bunun özel hazırlık kapsamında mümkün olup olmadığını öğrenin.",
          "Çiğ etle temas edecek kap ve ekipmanı servis için kullanacaklarınızdan ayırın. İki farklı öğün için alışverişte şerit eti ayrı paketletmek, yalnızca gerekli miktarı hazırlamayı kolaylaştırır. Hazırlama notunu et miktarıyla aynı mesajda iletin."
        ],
        "table": {
          "caption": "Jülyen et hazırlık notunda bulunacak bilgiler",
          "columns": [
            "Başlık",
            "Örnek açıklama"
          ],
          "rows": [
            [
              "Kullanım",
              "Sebzeli tava veya fajita"
            ],
            [
              "Parça",
              "Uygun dana kesimini görüşmek istiyorum"
            ],
            [
              "Doğrama",
              "Birbirine yakın kalınlıkta şeritler"
            ],
            [
              "Paket",
              "İki ayrı öğün için iki paket"
            ]
          ]
        }
      },
      {
        "id": "mersin-julyen-talebi",
        "title": "Mersin’de jülyen et için fiyatı nasıl istemeli?",
        "paragraphs": [
          "Teklifte kullanılan parça, temizlenmiş ağırlık ve özel doğrama koşullarını birlikte öğrenin. Sadece jülyen et fiyatı sormak farklı kesimlerden gelen teklifleri eşdeğer gibi gösterebilir. Hazırlama için ek ücret varsa toplam tutarın içinde görünsün.",
          "Akdeniz Kasabı’nın dana eti ürünlerinden hangisinin bu kullanıma uygun olduğunu görüşebilirsiniz. Jülyen doğrama talebi için stok ve hazırlık teyidi gerekir; ayrı bir hazır paket ürününün sürekli bulunduğunu varsaymayın."
        ],
        "links": [
          {
            "href": "/urunler/dana-eti",
            "label": "Dana eti kesimleri ve güncel bilgi alma"
          },
          {
            "href": "/blog/mersin-istege-gore-et-dograma-kiyma-cekimi",
            "label": "Özel et doğrama talebini netleştirme rehberi"
          }
        ]
      }
    ],
    "relatedSlugs": [
      "mersin-antrikot-bonfile-farki",
      "mersin-istege-gore-et-dograma-kiyma-cekimi",
      "kuru-fasulye-nohut-icin-et-secimi"
    ],
    "publishedAt": "2026-10-19T11:00:00+03:00"
  },
  {
    "slug": "firinda-kuzu-pirzola-hazirligi",
    "title": "Fırında kuzu pirzola: kesim, tepsi ve pişirme kontrolü",
    "description": "Fırında kuzu pirzola için dilim kalınlığı, kemik, tepsi yerleşimi ve iç sıcaklık kontrolünü planlayın. Toroslar’da sipariş öncesi sorulacak ayrıntılar.",
    "category": "Fırın hazırlığı",
    "image": "/images/custom/kuzu-pirzola.jpg",
    "imageAlt": "Fırın yemeği için kuzu pirzolanın temsili ürün sunumu",
    "productCategory": "kuzu",
    "intro": "Kuzu pirzolayı fırında hazırlarken yalnızca fırın derecesine odaklanmak yeterli değildir. Dilimlerin kalınlığı, kemik yapısı ve tepsideki yerleşim pişirme takibini değiştirir. Alışverişte benzer boyutlu parçalar istemek ve servis planını önceden kurmak işi kolaylaştırır.",
    "sections": [
      {
        "id": "dilim-ve-kemik",
        "title": "Benzer kalınlıkta parçalar isteyin",
        "paragraphs": [
          "Pirzolayı fırında pişireceğinizi ve kaç parça düşündüğünüzü belirtin. Bir pakette çok ince ve kalın dilimler bulunursa aynı anda hazır olmalarını beklemeyin. Kesim ve yağ temizliği tercihini mağazaya gelmeden önce görüşmek, hazırlık için zaman bırakır.",
          "Kemik tartıya dahildir; toplam kilogramı doğrudan tabaktaki et miktarı gibi değerlendirmeyin. Parça sayısı ve yaklaşık ağırlık ayrı bilgilerdir. Tek başına ana yemek mi yoksa başka etlerin yanında mı sunacağınızı söyleyerek miktarı planlayın."
        ]
      },
      {
        "id": "tepsi-duzeni",
        "title": "Et ve sebzelerin yerleşimini ayrı düşünün",
        "paragraphs": [
          "Pirzolaları üst üste yığmak yerine kullandığınız tarife uygun düzende yerleştirin. Çok sıkışık veya çok derin bir kap, açık ve yayvan tepsiyle aynı sonucu vermez. Yanına patates veya başka sebze koyacaksanız bunların boyutu ve ön hazırlığı da iş sırasına dahil olsun.",
          "Sebzelerin yumuşaması etin içinin hazır olduğunun kanıtı değildir. Bir malzeme daha erken hazır olursa onu gereksiz yere bekletmemek için servis kaplarını önceden planlayın. Bu rehber bütün fırınlar için tek bir derece ve dakika sözü vermez; cihaz ve tarif farklılıkları önemlidir."
        ],
        "tips": [
          "Dilimlerin birbirine yakın kalınlıkta olması",
          "Tepside üst üste gelmeyen yerleşim",
          "Sebzeler için ayrı boyut ve hazırlık planı",
          "Servis öncesi ölçüm ve dinlendirme"
        ]
      },
      {
        "id": "ic-sicaklik",
        "title": "Fırın ayarı ile etin iç sıcaklığı farklıdır",
        "paragraphs": [
          "USDA, bütün kas yapısındaki kuzu pirzola için en az 63 °C iç sıcaklık ve ardından en az 3 dakika dinlendirme önerir. Ölçümü uygun gıda termometresiyle, kemiğe değdirmeden yapın. Bu öneri kıymalı ürünler için kullanılan sıcaklıkla karıştırılmamalıdır.",
          "Yüzeyin kızarması yalnızca dış görünüm hakkında bilgi verir. Termometrenizin kullanım ve temizleme talimatını izleyin; çok farklı kalınlıkta parçalar varsa tek parçayı ölçüp bütün tepsinin aynı durumda olduğunu varsaymayın. Damak tercihinize göre daha ileri pişirme isteyebilirsiniz."
        ]
      },
      {
        "id": "toroslar-pirzola-notu",
        "title": "Pirzola alışverişi için kısa sipariş notu",
        "paragraphs": [
          "Fırında hazırlayacağım kuzu pirzolalar için yakın kalınlıkta dilimler istiyorum. Düşündüğüm parça sayısı şu kadar; yaklaşık ağırlık, kilogram fiyatı ve toplam tutar hakkında bilgi verebilir misiniz? Böyle bir not, yalnızca pirzola istemekten daha açıklayıcıdır.",
          "Akdeniz Kasabı’nın kuzu ürünleri sayfasından seçenekleri inceleyebilir, Toroslar mağazasına özel kesim uygunluğunu sorabilirsiniz. Ürün görseli kesin dilim, parça sayısı veya paket ağırlığı taahhüdü değildir."
        ],
        "links": [
          {
            "href": "/urunler/kuzu-eti",
            "label": "Kuzu pirzola ve kuşbaşı ürünlerini inceleyin"
          },
          {
            "href": "/blog/patlican-kebabi-icin-et-ve-kofte-secimi",
            "label": "Kıymalı tepsi yemeği için farklı bir hazırlık planı"
          }
        ]
      }
    ],
    "relatedSlugs": [
      "mersin-kuzu-eti-pirzola-secimi",
      "mersin-mangal-paketi-hazirlama",
      "pismis-et-yemekleri-saklama-isitma"
    ],
    "sources": [
      {
        "label": "USDA: Güvenli asgari iç sıcaklıklar",
        "url": "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart"
      }
    ],
    "publishedAt": "2026-10-19T11:00:00+03:00"
  },
  {
    "slug": "evde-kofte-neden-dagilir",
    "title": "Evde köfte neden dağılır? Harç ve pişirme kontrol listesi",
    "description": "Köftenin dağılmasına yol açabilen harç nemi, malzeme oranı, şekillendirme ve çevirme sorunlarını ayırın. Kıymayı değiştirmeden önce kontrol edilecekler.",
    "category": "Mutfakta sorun çözme",
    "image": "/images/custom/kasap-kofte.jpg",
    "imageAlt": "Şekillendirilmiş kasap köftelerinin temsili sunumu",
    "productCategory": "hazir",
    "intro": "Köftenin tavada dağılması her zaman kıymanın kötü olduğu anlamına gelmez. Harca eklenen sıvı, soğan hazırlığı, malzeme oranı ve çevirme biçimi de sonucu etkileyebilir. Aynı anda bütün malzemeleri değiştirmek yerine sorunun hangi aşamada ortaya çıktığını gözlemleyin.",
    "sections": [
      {
        "id": "sorunu-ayirin",
        "title": "Şekil verirken mi, tavada mı dağılıyor?",
        "paragraphs": [
          "Harç elinizde şekil almıyorsa önce nemini ve tarifteki malzeme oranlarını kontrol edin. Soğanın hazırlığı veya eklenen sıvı miktarı tarifte beklenenden farklı olabilir. Gelişigüzel daha çok ekmek, un veya yumurta eklemek tadı ve dokuyu değiştirir; ayrıca tarifin içeriğine yeni bileşenler sokar.",
          "Şekil verilebilen köfte yalnızca tavada kırılıyorsa kullanılan spatula, yüzey ve çevirme aşamasına bakın. Birbirinden farklı kalınlıkta köfteleri aynı anda çevirmeye çalışmak da takibi zorlaştırabilir. Tek bir soruna tek bir değişiklikle yaklaşmak hangi adımın işe yaradığını görmenizi sağlar."
        ]
      },
      {
        "id": "tarifi-kaydedin",
        "title": "Harç oranını göz kararıyla sürekli değiştirmeyin",
        "paragraphs": [
          "Kıyma miktarını ve eklediğiniz malzemeleri ölçerek not alın. Soğanın rendelenmiş, ince doğranmış veya süzülmüş olması aynı tarifte farklı sonuç doğurabilir. Kıymanın yağ ve çekim tercihini de kaydederseniz bir sonraki alışverişte neyi koruyacağınızı bilirsiniz.",
          "Tarifinizde bağlayıcı varsa verilen miktarla başlayın; yoksa mutlaka eklemek gerektiğini varsaymayın. Baharat, sos veya malzeme değişikliği yaptıysanız bunu not edin. Hazır kasap köfteye tekrar harç malzemesi eklemek, ürünün başlangıç oranlarını değiştirecektir."
        ],
        "table": {
          "caption": "Köfte sorununu aşamasına göre değerlendirin",
          "columns": [
            "Gözlem",
            "Önce kontrol edilecek"
          ],
          "rows": [
            [
              "Harç şekil almıyor",
              "Eklenen sıvı ve malzeme oranları"
            ],
            [
              "Tavaya koyarken parçalanıyor",
              "Kalınlık, şekillendirme ve taşıma"
            ],
            [
              "Çevirirken kırılıyor",
              "Spatula, tava yüzeyi ve çevirme zamanı"
            ]
          ]
        }
      },
      {
        "id": "deneme-koftesi",
        "title": "Bütün harcı şekillendirmeden küçük bir deneme yapın",
        "paragraphs": [
          "Aynı boyutta bir deneme köftesi hazırlayıp kullandığınız ekipmandaki davranışına bakabilirsiniz. Amaç harcı çiğ tatmak değil, pişmiş örneğin doku ve baharatını değerlendirmektir. Deneme sırasında kalan çiğ harcı buzdolabında tutun.",
          "Dana veya kuzu kıymalı köftede güvenli pişirme kontrolü için USDA’nın en az 71,1 °C iç sıcaklık önerisini kullanın. Dış yüzeyin renk alması tek başına yeterli değildir. Uygun termometreyle ölçüm, köftenin biçimini korumasından ayrı bir kontroldür."
        ]
      },
      {
        "id": "kiyma-ve-hazir-kofte",
        "title": "Sonraki alışverişte kasaba hangi bilgiyi vermeli?",
        "paragraphs": [
          "Evde kullandığınız tarifi, yağ ve çekim tercihini anlatın; sorunu yalnızca daha yağsız veya daha ince kıyma istemekle çözmeye çalışmayın. Hamburger köftesi ile baharatlı ev köftesinin hazırlanışı farklı olabilir. Kıymayı hangi amaçla kullanacağınızı belirtin.",
          "Hazır kasap köfte seçerseniz içerik, şekil ve mevcut hazırlama bilgisini öğrenin. Akdeniz Kasabı’na özel bir içerik talebi iletebilirsiniz; bunun karşılanması görüşmede teyit edilir. Ürün adı alerjen bulunmadığına dair güvence değildir."
        ],
        "links": [
          {
            "href": "/blog/mersin-dana-kiyma-secimi",
            "label": "Köftelik kıymada yağ ve çekim tercihi"
          },
          {
            "href": "/blog/mersin-hamburger-koftesi-icin-kiyma",
            "label": "Hamburger için kıyma ve gramaj planı"
          },
          {
            "href": "/urunler/kasap-kofte",
            "label": "Hazır kasap köfte seçeneğini inceleyin"
          }
        ]
      }
    ],
    "relatedSlugs": [
      "mersin-kasap-kofte-siparisi",
      "mersin-hamburger-koftesi-icin-kiyma",
      "patlican-kebabi-icin-et-ve-kofte-secimi"
    ],
    "sources": [
      {
        "label": "USDA: Güvenli asgari iç sıcaklıklar",
        "url": "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart"
      }
    ],
    "publishedAt": "2026-10-19T11:00:00+03:00"
  },
  {
    "slug": "tavuk-sis-marinasyon-rehberi",
    "title": "Tavuk şiş marinasyonu: sos, parça ve güvenli hazırlık",
    "description": "Evde tavuk şiş için sade veya marineli ürün seçimi, sos içeriği, eşit doğrama ve güvenli hazırlama adımları. Mersin’de sipariş öncesi kontrol listesi.",
    "category": "Tavuk hazırlığı",
    "image": "/images/custom/tavuk-sis.jpg",
    "imageAlt": "Marineli tavuk şiş için temsili ürün görseli",
    "productCategory": "tavuk",
    "intro": "Tavuk şiş hazırlığında marinasyon yalnızca baharat seçmekten ibaret değildir. Hangi parça kullanılacağı, doğrama boyutu, sosun içeriği ve bekletme koşulları birlikte düşünülmelidir. Sade tavuk alıp evde soslamakla hazır marineli ürün seçmek farklı hazırlık planlarıdır.",
    "sections": [
      {
        "id": "sade-mi-hazir-mi",
        "title": "Sosu kendiniz hazırlayacaksanız sade ürün isteyin",
        "paragraphs": [
          "Kendi yoğurtlu, yağlı veya baharatlı karışımınızı kullanacaksanız bunu alışverişte belirtin. Hazır marineli ürüne ikinci bir sos eklemek tuz, baharat ve toplam sıvı miktarını değiştirir. Kullandığınız tarifin başlangıç ürününün sade mi marineli mi olduğunu kontrol edin.",
          "Hazır marineli tavukta kullanılan parçayı ve bileşenleri sorun. Süt ürünü, hardal veya başka bir malzemeye ilişkin hassasiyet varsa bunu açıkça bildirin. Marinasyonun rengi bütün içeriği göstermez; sade görünmesi de belirli bir bileşenin bulunmadığını kanıtlamaz."
        ]
      },
      {
        "id": "parca-ve-sis",
        "title": "Şişe eşit parçalar ve uygun aralıklarla hazırlık yapın",
        "paragraphs": [
          "Göğüs veya but tercihinizi netleştirin; farklı kalınlıkta parçaları rastgele aynı şişe dizmek takibi zorlaştırır. Etin şişe takılı mı yoksa yalnızca doğranmış mı alınacağını belirtin. Evde kullanacağınız şiş ve pişirme ekipmanı, istediğiniz parça boyutunu etkiler.",
          "Soğan ve biber ekleyecekseniz boyutlarını etle birlikte planlayın. Sebzelerin pişme süresi farklıysa ayrı şişler kullanmak daha kolay yönetilebilir. Önceden hazırlanan şişlerin cihaz veya tavaya gerçekten sığacağını kontrol edin; özellikle küçük airfryer sepetlerinde uzun şişler sorun olabilir."
        ],
        "links": [
          {
            "href": "/blog/airfryer-tavuk-pirzola-pisirme",
            "label": "Airfryer’da tavuk hazırlığı ve sepet kapasitesi"
          }
        ]
      },
      {
        "id": "guvenli-marinasyon",
        "title": "Marinasyon güvenli pişirmenin yerine geçmez",
        "paragraphs": [
          "USDA’ya göre tavuk buzdolabında marine edilmeli; tezgahta bekletilmemelidir. Çiğ tavukla temas etmiş sosu doğrudan servis sosu olarak kullanmayın. Servis için ayıracağınız sosu çiğ ete değmeden ayrı bir kaba almak karışıklığı önler.",
          "Limon, sirke veya baharat eklemek tavuğu güvenle yenebilir hale getirmez. Tavuk için hedef en az 74 °C iç sıcaklıktır; uygun termometreyle kontrol edin. Bekletme planında ürünün satın alınma, çözündürülme ve etiket bilgilerini birlikte dikkate alın; soslamak saklama süresini sıfırlamaz."
        ]
      },
      {
        "id": "siparis-listesi",
        "title": "Mersin’de tavuk şiş siparişine hangi notlar eklenir?",
        "paragraphs": [
          "Ürün adının yanına istediğiniz miktarı, sade veya marineli tercihi ve şişe dizim isteğini yazın. Hazır ürünün içeriğini değiştirmek istiyorsanız uygunluğunu önceden sorun. Aynı isimli iki ürünü fiyat açısından karşılaştırırken bu hazırlık ayrıntılarının eşleştiğinden emin olun.",
          "Toroslar’daki Akdeniz Kasabı’na mağazadan alma saatinizi bildirerek stok ve hazırlık teyidi alabilirsiniz. Sitedeki tavuk şiş fotoğrafı temsili sunumdur; kesin gramaj, şiş adedi veya marinasyon içeriği yalnızca görselden çıkarılmamalıdır."
        ],
        "links": [
          {
            "href": "/urunler/tavuk-urunleri",
            "label": "Tavuk şiş ve pirzola ürünleri"
          },
          {
            "href": "/blog/donmus-et-guvenli-cozundurme",
            "label": "Donmuş ürünler için güvenli çözündürme planı"
          }
        ]
      }
    ],
    "relatedSlugs": [
      "mersin-tavuk-kasabi-urunleri",
      "airfryer-tavuk-pirzola-pisirme",
      "mersin-mangal-paketi-hazirlama"
    ],
    "sources": [
      {
        "label": "USDA: Kanatlı ürünlerinde marinasyon ve hazırlık",
        "url": "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/poultry/poultry-basting-brining-and-marinating"
      }
    ],
    "publishedAt": "2026-10-19T11:00:00+03:00"
  },
  {
    "slug": "airfryer-tavuk-pirzola-pisirme",
    "title": "Airfryer’da tavuk pirzola: sepet düzeni ve pişirme kontrolü",
    "description": "Airfryer tavuk pirzolada kemik, deri, parça kalınlığı ve sepet kapasitesini planlayın. Sabit dakikaya güvenmeden güvenli pişirmeyi kontrol edin.",
    "category": "Airfryer hazırlığı",
    "image": "/images/custom/tavuk-pirzola.jpg",
    "imageAlt": "Airfryer hazırlığında tercih edilebilecek tavuk pirzolanın temsili sunumu",
    "productCategory": "tavuk",
    "intro": "Airfryer’da tavuk pirzola hazırlarken internette gördüğünüz tek bir süreyi bütün ürünlere uygulamayın. Cihazın kapasitesi, parçanın kalınlığı, kemik durumu ve başlangıç koşulu sonucu değiştirir. Alışverişte ve pişirme öncesinde aynı bilgileri kontrol etmek daha tutarlı bir hazırlık sağlar.",
    "sections": [
      {
        "id": "urun-tanimi",
        "title": "Tavuk pirzolanın kemik ve deri durumunu öğrenin",
        "paragraphs": [
          "Tavuk pirzola adı farklı hazırlıklarla kullanılabilir. Hangi bölümden hazırlandığını, kemikli mi kemiksiz mi olduğunu ve derisinin bırakılıp bırakılmadığını sorun. Kalınlıkları çok farklı parçaları aynı sürede pişireceğinizi varsaymayın.",
          "Sade veya marineli ürün seçimini kullandığınız tarife göre yapın. Hazır marinasyonun içeriğini öğrenmeden ilave sos ve tuz eklemeyin. Cihazınızda soslu ürünler için özel öneriler varsa bunları okuyun; tarif ve ürün etiketi birlikte değerlendirilmelidir."
        ]
      },
      {
        "id": "sepet-kapasitesi",
        "title": "Sepete kaç parça sığdığını önceden planlayın",
        "paragraphs": [
          "Cihazın izin verdiği yerleşime uyarak parçaları sıkıştırmadan hazırlayın. Bir kilogram ürünün tek seferde sığacağını yalnızca sepetin litre değerinden çıkarmayın. Parçanın yüzey alanı, şekli ve yerleşim biçimi de kapasiteyi etkiler.",
          "Birden fazla parti gerekiyorsa servis sırasını buna göre düzenleyin. Pişecek bütün çiğ ürünleri mutfakta bekletmek yerine sıradaki miktarı hazırlayın. Sepet aksesuarlarını ve varsa pişirme kâğıdını üreticinin hava dolaşımı ve kullanım kurallarına uygun seçin."
        ],
        "tips": [
          "Parçaların benzer kalınlıkta olması",
          "Cihaz kılavuzuna uygun sepet yerleşimi",
          "Gerekirse birden fazla pişirme partisi",
          "Çiğ ve pişmiş ürünler için ayrı kaplar"
        ]
      },
      {
        "id": "sicaklik-kontrolu",
        "title": "Süreyi başlangıç rehberi, iç sıcaklığı kontrol ölçütü yapın",
        "paragraphs": [
          "USDA’nın airfryer rehberi tavuğun en az 74 °C iç sıcaklığa ulaşmasını önerir. Uygun termometreyle en kalın kısımdan, kemiğe değdirmeden ölçün. Cihaz ekranındaki sıcaklık tavuğun iç sıcaklığı değildir.",
          "Renk, çıtırlık veya akan sıvının görünümü tek başına yeterli kontrol sağlamaz. Çiğ ve pişmiş ürün için aynı tabağı kullanmayın. Termometre ve aksesuarları üretici talimatlarına göre temizleyin; parçalar farklı büyüklükteyse yalnızca birini ölçmekle yetinmeyin."
        ]
      },
      {
        "id": "alisveris-plani",
        "title": "Toroslar’dan alışverişte cihazınızı da tarif edin",
        "paragraphs": [
          "Küçük sepetli bir airfryer kullanıyorum; tavuk pirzolaların kemik, deri ve yaklaşık parça büyüklüğü hakkında bilgi verebilir misiniz? Böyle bir soru, sadece kilogram miktarı vermekten daha kullanışlıdır. Miktarı hazırlayacağınız öğün sayısına göre belirleyin.",
          "Akdeniz Kasabı’nda tavuk pirzola veya şiş seçeneklerini inceleyip stok ve hazırlık uygunluğunu öğrenebilirsiniz. Airfryer’a özel paket bulunduğu varsayılmamalıdır. Donmuş ürün kullanacaksanız çözündürme planını ayrıca yapın; bu yazı belirli bir cihaz için hazır program değildir."
        ],
        "links": [
          {
            "href": "/urunler/tavuk-urunleri",
            "label": "Tavuk pirzola ve şiş seçenekleri"
          },
          {
            "href": "/blog/donmus-et-guvenli-cozundurme",
            "label": "Donmuş et ve tavuk için çözündürme rehberi"
          }
        ]
      }
    ],
    "relatedSlugs": [
      "tavuk-sis-marinasyon-rehberi",
      "mersin-tavuk-kasabi-urunleri",
      "pismis-et-yemekleri-saklama-isitma"
    ],
    "sources": [
      {
        "label": "USDA: Airfryer kullanımı ve gıda güvenliği",
        "url": "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/air-fryers-and-food-safety"
      }
    ],
    "publishedAt": "2026-10-19T11:00:00+03:00"
  },
  {
    "slug": "duduklude-dana-eti-hazirligi",
    "title": "Düdüklüde dana eti için kesim ve hazırlık rehberi",
    "description": "Düdüklü tencerede dana eti için parça, doğrama ve yemek sırasını planlayın. Cihaz talimatlarına göre dolum, sıvı ve güvenli açma kontrollerini ayırın.",
    "category": "Düdüklü yemekler",
    "image": "/images/custom/dana-kusbasi.jpg",
    "imageAlt": "Düdüklü tencere yemeği için temsili dana kuşbaşı sunumu",
    "productCategory": "dana",
    "intro": "Düdüklü tencerede dana eti hazırlamak, farklı et parçalarını tek bir dakika değeriyle pişirmek değildir. Seçilen bölüm, parça büyüklüğü, toplam miktar ve cihazın çalışma biçimi birlikte değerlendirilir. Bu rehber alışveriş ve hazırlık içindir; tencerenizin kullanım kılavuzunun yerine geçmez.",
    "sections": [
      {
        "id": "kesim-ve-dograma",
        "title": "Tencerelik parça ile doğrama boyutunu birlikte seçin",
        "paragraphs": [
          "Kasaba düdüklüde sulu yemek mi, sebzeli et mi hazırlayacağınızı söyleyin. Kısa süreli tava yemeğine göre seçilmiş bir parçayı sırf adı kuşbaşı olduğu için her tencere tarifine eşdeğer saymayın. Yağ, temizleme ve parça tercihlerini tarifinizle birlikte görüşün.",
          "Yakın boyutta doğranmış parçalar hazırlığı izlemeyi kolaylaştırır. Çok küçük parçalarla büyük parçaları aynı pakette istemek, bazılarını beklerken diğerlerinin fazla pişmesine yol açabilir. Özel doğrama istiyorsanız yaklaşık boyutta anlaşın; tartının hangi hazırlığı kapsadığını da sorun."
        ]
      },
      {
        "id": "cihaz-farki",
        "title": "Dakika, basınç ve sıvı için cihazınızın kılavuzunu izleyin",
        "paragraphs": [
          "Ocak üstü ve elektrikli düdüklüler aynı ayar mantığıyla çalışmayabilir. Asgari sıvı, azami dolum ve basınç boşaltma yöntemini kendi cihazınızın talimatından öğrenin. Başka bir modelin tarifindeki düğme veya süreyi doğrudan kopyalamayın.",
          "Kapağı basınç varken zorlamayın; açma işlemini yalnızca kılavuzdaki güvenli yöntemle yapın. Valf, conta ve kilitle ilgili kontrol adımlarını atlamayın. Bu sayfa basınç mekanizmasına müdahale, güvenlik kilidini devre dışı bırakma veya belirli cihaz için teknik talimat içermez."
        ]
      },
      {
        "id": "yemek-sirasi",
        "title": "Et, sebze ve bakliyat aynı hazırlık süresine sahip değildir",
        "paragraphs": [
          "Patates, havuç, nohut veya kuru fasulyenin yemeğe hangi aşamada katılacağı seçtiğiniz tarife bağlıdır. Önceden pişmiş bakliyatla kuru bakliyatı aynı başlangıç koşulunda düşünmeyin. Her malzemenin hazırlanmış durumunu alışveriş listenizde belirtin.",
          "Yemeğin sonunda sos kıvamını ayarlamak istiyorsanız bunu da güvenli açma işleminden sonraki tarif adımı olarak planlayın. Daha yoğun sos elde etmek amacıyla cihazın gerekli sıvısını azaltmayın. Bir sonraki deneme için kullandığınız parça, miktar ve cihaz modelini not etmek faydalıdır."
        ],
        "links": [
          {
            "href": "/blog/kuru-fasulye-nohut-icin-et-secimi",
            "label": "Etli bakliyat yemekleri için alışveriş ve hazırlık"
          }
        ]
      },
      {
        "id": "siparis-notu",
        "title": "Düdüklü yemeği için nasıl sipariş verilir?",
        "paragraphs": [
          "Örnek açıklama: Düdüklüde sebzeli dana eti hazırlayacağım. Birbirine yakın boyutta kuşbaşı ve tarifime uygun tencerelik parça istiyorum. Seçenekleri, miktarı ve toplam fiyatı görüşebilir miyiz? Hazırlayacağınız yemek farklıysa bu notu ona göre değiştirin.",
          "Mersin Toroslar’daki Akdeniz Kasabı’ndan uygun dana ürününü ve doğrama talebinin karşılanma durumunu öğrenebilirsiniz. Mağazanın 7/24 açık olması bütün özel hazırlıkların hemen hazır olduğu anlamına gelmez; almak istediğiniz saati de bildirin."
        ],
        "links": [
          {
            "href": "/urunler/dana-eti",
            "label": "Dana kuşbaşı ve diğer dana eti ürünleri"
          },
          {
            "href": "/blog/mersin-dana-kusbasi-kuzu-kusbasi-secimi",
            "label": "Dana ve kuzu kuşbaşını yemeğe göre seçme"
          }
        ]
      }
    ],
    "relatedSlugs": [
      "kuru-fasulye-nohut-icin-et-secimi",
      "mersin-istege-gore-et-dograma-kiyma-cekimi",
      "pismis-et-yemekleri-saklama-isitma"
    ],
    "publishedAt": "2026-10-19T11:00:00+03:00"
  },
  {
    "slug": "pismis-et-yemekleri-saklama-isitma",
    "title": "Pişmiş et yemekleri nasıl saklanır ve yeniden ısıtılır?",
    "description": "Artan et, tavuk ve kıymalı yemekleri hızlı soğutma, porsiyonlama, tarih notu ve yeniden ısıtma adımları. Resmi kaynaklarla mutfak planı oluşturun.",
    "category": "Saklama ve güvenlik",
    "image": "/images/custom/category-hazir.jpg",
    "imageAlt": "Pişmiş yemek planlamasını temsil eden, gerçek yemek fotoğrafı olmayan temsili et ürünleri sunumu",
    "productCategory": "hazir",
    "intro": "Etli bir yemek arttığında sonraki öğünün planı servis bittiği anda başlar. Yalnızca kapağını kapatıp tezgâhta bekletmek güvenli bir saklama yöntemi değildir. Soğutma, miktara göre kap seçimi ve yeniden ısıtma ayrı adımlar olarak düşünülmelidir.",
    "sections": [
      {
        "id": "hizli-sogutma",
        "title": "Büyük tencereyi tamamen soğuyana kadar dışarıda bırakmayın",
        "paragraphs": [
          "USDA, artan yemeğin pişirme veya sıcak tutma sonrasında en geç iki saat içinde buzdolabına alınmasını; ortam 32 °C’den sıcaksa bu sürenin bir saat olmasını önerir. Bu sınırları aşmış bozulabilir yiyecekleri tekrar ısıtarak güvenli hale getirmeye çalışmayın.",
          "Büyük miktarı sığ ve küçük kaplara ayırmak daha hızlı soğutmayı sağlar. Yemeğin oda sıcaklığında tamamen soğumasını beklemek gerekmez. Kullanacağınız kapların gıdaya ve sıcak yemeğe uygunluğunu kontrol edin; buzdolabındaki çiğ ürünlerle pişmiş yemeği ayrı tutun."
        ]
      },
      {
        "id": "tarih-ve-kap",
        "title": "Her kaba içerik ve pişirme tarihini yazın",
        "paragraphs": [
          "Pişmiş et yemekleri için USDA’nın 4 °C veya altındaki buzdolabı için genel önerisi 3–4 gündür; bu, yemeğin başlangıçta güvenle pişirilip doğru şekilde soğutulduğu varsayımına dayanır. Ürün veya tarif için daha kısa bir talimat varsa ona uyun. Saklama geçmişinden emin olmadığınız yemeği yalnızca kokusuna bakarak değerlendirmeyin.",
          "Etiket üzerinde yemek adı, pişirme tarihi ve kaç porsiyon ayırdığınızı belirtmek sonraki öğünü planlamayı kolaylaştırır. Örneğin etli nohut ve sade kavurma benzer kaplarda duruyorsa içerik notu yanlış paketi çıkarmanızı önler. Yeni pişmiş yemekle önceki günden kalanı tek tarihle birleştirmeyin."
        ]
      },
      {
        "id": "yeniden-isitma",
        "title": "Yalnızca tüketeceğiniz miktarı planlayın ve içini ölçün",
        "paragraphs": [
          "Artan yemek yeniden ısıtılırken en az 74 °C iç sıcaklığa ulaşmalıdır. Mikrodalgada farklı bölgelerin eşit ısınmadığını dikkate alın; karıştırma ve bekletme için cihaz talimatını izleyip birkaç noktadan ölçüm yapın. Bir bölgenin sıcak olması bütün kabın aynı durumda olduğunu göstermez.",
          "Birkaç öğün için hazırlıkta küçük kaplar kullanmak, her seferinde büyük bir tencereyle uğraşmayı azaltır. O gün yiyeceğiniz miktarı, yan yemeklerle birlikte belirleyin. Servis için ayırdığınız temiz kaşığı çiğ et hazırlığında kullandığınız gereçlerden ayrı tutun."
        ]
      },
      {
        "id": "sonraki-alisveris",
        "title": "Artan yemek notlarını sonraki alışverişte kullanın",
        "paragraphs": [
          "Her yemek sonunda ne kadar kaldığını not etmek, bir sonraki et alışverişini ihtiyacınıza yaklaştırır. Çok miktarda yemek artıyorsa otomatik olarak aynı gramajı tekrar almak yerine kişi sayısı ve yan yemekleri yeniden düşünün. Dondurucuya kaldırmayı planlıyorsanız uygun kap ve etiket hazırlığını önceden yapın.",
          "Bu rehber ev mutfağı için genel bilgidir; ticari üretim veya toplu yemek için özel süreç talimatı değildir. Soğuk zinciri bozulmuş ürün hakkında belirsizlik varsa güvenli olduğu sonucuna varmayın. Çiğ kıyma ve donmuş ürünlerdeki kurallar için ilgili ayrı rehberleri inceleyin."
        ],
        "links": [
          {
            "href": "/blog/kiyma-buzdolabi-dondurucu-saklama",
            "label": "Çiğ kıyma için ayrı saklama ve paketleme rehberi"
          },
          {
            "href": "/blog/donmus-et-guvenli-cozundurme",
            "label": "Donmuş etin güvenli çözündürülmesi"
          }
        ]
      }
    ],
    "relatedSlugs": [
      "kuru-fasulye-nohut-icin-et-secimi",
      "icli-kofte-ic-harci-kiyma",
      "kiyma-buzdolabi-dondurucu-saklama"
    ],
    "sources": [
      {
        "label": "USDA: Artan yemeklerin güvenli saklanması ve ısıtılması",
        "url": "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety"
      }
    ],
    "publishedAt": "2026-10-19T11:00:00+03:00"
  },
  {
    "slug": "donmus-et-guvenli-cozundurme",
    "title": "Donmuş et nasıl çözündürülür? Üç güvenli yöntem",
    "description": "Donmuş dana eti, kıyma ve tavuk için buzdolabı, soğuk su ve mikrodalgada çözündürme yöntemleri. Zaman planı ve tekrar dondurma ayrımlarını öğrenin.",
    "category": "Çözündürme rehberi",
    "image": "/images/custom/dana-kusbasi.jpg",
    "imageAlt": "Çözündürme planında kullanılabilecek porsiyonu temsil eden temsili dana kuşbaşı sunumu",
    "productCategory": "dana",
    "intro": "Akşam yemeğinde kullanacağınız et hâlâ donmuşsa onu tezgâha veya sıcak suya bırakmak güvenli bir kestirme değildir. Çözündürme yöntemi, ayırabildiğiniz zamana ve ardından hemen pişirip pişiremeyeceğinize göre seçilmelidir. Paketin ortasının donmuş kalması dış kısmının güvenli sıcaklıkta olduğunu göstermez.",
    "sections": [
      {
        "id": "buzdolabi",
        "title": "Önceden planlayabiliyorsanız buzdolabını kullanın",
        "paragraphs": [
          "USDA’nın önerdiği yöntemlerden biri, ürünü soğukluğu kontrol edilen buzdolabında çözündürmektir. Buzdolabını 4 °C veya altında tutun; sızdırmayacak bir kap kullanın. Çözünme süresi paket kalınlığı ve miktarla değişir; akşamdan çıkarmanın her ürün için yeterli olacağını varsaymayın.",
          "Yemek takviminize bir çözündürme adımı ekleyin. Hangi paketi kullanacağınız ve ne zaman pişireceğiniz belli olursa bütün stok yerine yalnızca gerekli miktarı ayırabilirsiniz. Paket etiketinde ürün adı ve ağırlık bulunması bu seçimi kolaylaştırır."
        ]
      },
      {
        "id": "soguk-su-mikrodalga",
        "title": "Daha hızlı yöntemlerde pişirmeyi ertelemeyin",
        "paragraphs": [
          "Soğuk su yönteminde et sızdırmaz ambalajda olmalı; soğuk su her 30 dakikada yenilenmelidir. Çözünen ürün hemen pişirilir. Mikrodalganın çözündürme programı kullanıldığında da pişirmeye hemen geçilir; cihazın ambalaj ve çalışma talimatını izleyin.",
          "Bu yöntemleri seçmeden önce tarifi, temiz ekipmanı ve pişirme alanını hazır edin. Zamanınız yalnızca ürünü çözdürmeye yetiyor, pişirmeye yetmiyorsa hızlı yönteme başlamayın. Sıcak su, tezgâh veya araç içinde çözündürme güvenli seçenekler değildir."
        ],
        "table": {
          "caption": "Yöntemi hazırlık planına göre seçin",
          "columns": [
            "Yöntem",
            "Planlama farkı"
          ],
          "rows": [
            [
              "Buzdolabı",
              "Önceden zaman ayırmayı gerektirir"
            ],
            [
              "Soğuk su",
              "Sızdırmaz paket, su takibi ve hemen pişirme"
            ],
            [
              "Mikrodalga",
              "Cihaz talimatı ve hemen pişirme"
            ]
          ]
        }
      },
      {
        "id": "tekrar-dondurma",
        "title": "Tekrar dondurma kararı yönteme bağlıdır",
        "paragraphs": [
          "USDA, buzdolabında güvenli koşullarda çözünmüş etin pişirilmeden yeniden dondurulabileceğini; kalitede değişim olabileceğini belirtir. Soğuk su veya mikrodalgayla çözündürülen ürün ise yeniden dondurulmadan önce pişirilmelidir. Güvenli saklama süresi ve ürün etiketi bu değerlendirmeden bağımsız değildir.",
          "Bir paketin hangi yöntemle çözüldüğünü bilmiyorsanız sadece görünümünden karar vermeyin. Evinizde birden fazla kişi yemek hazırlıyorsa paket üzerine hazırlık notu koyun. Çözündürülmüş ürünü yeniden dondurmak, geçmişteki uygunsuz saklamayı düzeltmez."
        ]
      },
      {
        "id": "paketleme-plani",
        "title": "Bir sonraki alışverişte çözündürmeyi kolaylaştırın",
        "paragraphs": [
          "Haftalık alışverişte kullanacağınız öğünleri önceden belirleyip eti buna göre ayrı paketler halinde isteyebilirsiniz. Büyük bir paketin içinden donmuş miktar ayırmaya çalışmak yerine, ihtiyaç duyduğunuz porsiyonu baştan tanımlayın. Miktarlar kişisel yemek planına göre değişir.",
          "Mersin’de Akdeniz Kasabı’ndan alışveriş yaparken paket sayısını ve evde kullanma planınızı paylaşın. Ürünün soğutulmuş veya donmuş sunulma durumunu ayrıca öğrenin; her katalog ürününün aynı muhafaza biçiminde verildiğini varsaymayın."
        ],
        "links": [
          {
            "href": "/blog/mersin-istege-gore-et-dograma-kiyma-cekimi",
            "label": "Öğünlere göre kesim ve ayrı paketleme talebi"
          },
          {
            "href": "/blog/kiyma-buzdolabi-dondurucu-saklama",
            "label": "Kıymayı saklama ve etiketleme rehberi"
          }
        ]
      }
    ],
    "relatedSlugs": [
      "kiyma-buzdolabi-dondurucu-saklama",
      "airfryer-tavuk-pirzola-pisirme",
      "pismis-et-yemekleri-saklama-isitma"
    ],
    "sources": [
      {
        "label": "USDA: Donmuş ürünler için güvenli çözündürme yöntemleri",
        "url": "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/big-thaw-safe-defrosting-methods"
      }
    ],
    "publishedAt": "2026-10-19T11:00:00+03:00"
  },
  {
    "slug": "kiyma-buzdolabi-dondurucu-saklama",
    "title": "Kıyma buzdolabında ve dondurucuda nasıl saklanır?",
    "description": "Çiğ kıyma için buzdolabı süresi, dondurucu sıcaklığı, öğünlük paket ve tarih etiketi. Güvenlik süresiyle dondurucudaki kalite süresini ayırın.",
    "category": "Kıyma saklama",
    "image": "/images/custom/dana-kiyma.jpg",
    "imageAlt": "Öğünlere ayrılacak dana kıyma için temsili ürün sunumu",
    "productCategory": "dana",
    "intro": "Kıyma alışverişinde yalnızca miktarı değil, ne zaman pişireceğinizi de planlayın. Buzdolabında kısa süreli bekletme ile dondurucuda saklama aynı koşullara sahip değildir. Etiket, uygun sıcaklık ve ayrı öğünlük paketler, evde hangi ürünün önce kullanılacağını takip etmenizi kolaylaştırır.",
    "sections": [
      {
        "id": "buzdolabi-suresi",
        "title": "Çiğ kıyma için kısa bir kullanım planı yapın",
        "paragraphs": [
          "USDA’nın genel önerisi, doğru soğuk koşullarda tutulan çiğ kıymanın 1–2 gün içinde pişirilmesi veya dondurulmasıdır. Buzdolabını 4 °C veya altında tutun. Ürün etiketi daha kısa süre veriyorsa onu izleyin; bu genel süre soğuk zinciri bozulmuş ürün için güvence değildir.",
          "Alışveriş gününü yemek planınıza yazın. İki gün içinde kullanmayacağınız miktarı son ana kadar buzdolabında bekletip sonra karar vermek yerine baştan planlayın. Aynı alışverişte köftelik ve yemeklik kıyma alıyorsanız paketleri kullanım amacıyla etiketleyin."
        ]
      },
      {
        "id": "dondurucu-ve-kalite",
        "title": "Dondurucu süresiyle güvenlik ve kaliteyi karıştırmayın",
        "paragraphs": [
          "Dondurucuda yaklaşık -18 °C veya daha düşük sıcaklık hedeflenir. USDA çiğ kıyma için 3–4 aylık süreyi kalite açısından rehber olarak verir; bu ifade yanlış saklanmış ürünü bu süre boyunca güvenli kılmaz. Donma, ürünün önceki saklama geçmişini sıfırlamaz.",
          "Paketlerin üzerine ürün adını, miktarı ve dondurma tarihini yazın. Örneğin köftelik dana kıyma, 400 g, tarih biçiminde bir not kullanabilirsiniz. Dondurucudaki en eski uygun paketi önce kullanmak için basit bir liste tutun; farklı öğünleri aynı belirsiz paket adı altında toplamayın."
        ]
      },
      {
        "id": "ogunluk-paket",
        "title": "Miktarı yemeğe göre ayırın",
        "paragraphs": [
          "Köfte, sebze yemeği ve lahmacun içi için gereken miktarlar aynı olmayabilir. Her tarifin et miktarını ayrı hesaplayın. Tek büyük paket almışsanız, uygun hijyen koşullarında gereksiz bekletmeden öğünlere ayırmak sonraki hazırlığı kolaylaştırır.",
          "Gıdaya ve dondurucuya uygun, sağlam ve sızdırmaz ambalaj seçin. Paket şekillerini benzer tutmak dolap düzenini yönetmenize yardımcı olur. Çiğ et paketlerini hazır yiyeceklerle temas ettirmeyin; sızıntı ihtimalini dikkate alın."
        ],
        "tips": [
          "Ürün adı ve kullanım amacı",
          "Her paketin net miktarı",
          "Alışveriş ve dondurma tarihi",
          "Planlanan yemek ve kullanım sırası"
        ]
      },
      {
        "id": "cozundurma-ve-alisveris",
        "title": "Kullanacağınız paketin çözündürmesini önceden planlayın",
        "paragraphs": [
          "Çözündürme için buzdolabı, soğuk su veya mikrodalga yöntemlerinin farklı takip ve pişirme gereksinimleri vardır. Ayrıntılı adımlar için ilgili rehberi açın; tezgâhta bekletmeyi planın bir parçası yapmayın. Pişmiş köfte veya kıymalı yemek için çiğ kıymanın sürelerini kullanmayın.",
          "Akdeniz Kasabı’na sipariş verirken toplam miktarın yanında paket sayısını yazabilirsiniz. Örneğin bir büyük paket yerine yemeklerinize uygun ayrı miktarlar isteyin. Kıymanın çekim ve yağ tercihi ile ambalaj planını aynı görüşmede netleştirmek, evdeki iş yükünü azaltır."
        ],
        "links": [
          {
            "href": "/blog/donmus-et-guvenli-cozundurme",
            "label": "Donmuş kıyma ve et için güvenli çözündürme adımları"
          },
          {
            "href": "/blog/pismis-et-yemekleri-saklama-isitma",
            "label": "Pişmiş kıymalı yemekler için saklama rehberi"
          },
          {
            "href": "/blog/mersin-dana-kiyma-secimi",
            "label": "Dana kıymada yemek, yağ ve çekim tercihi"
          }
        ]
      }
    ],
    "relatedSlugs": [
      "donmus-et-guvenli-cozundurme",
      "mersin-dana-kiyma-secimi",
      "lahmacun-ici-icin-kiyma-secimi"
    ],
    "sources": [
      {
        "label": "USDA: Temel gıda güvenliği ve soğuk saklama tablosu",
        "url": "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/steps-keep-food-safe"
      }
    ],
    "publishedAt": "2026-10-19T11:00:00+03:00"
  },
  {
    "slug": "sucuklu-kahvalti-planlama",
    "title": "Sucuklu kahvaltı planı: tava, tost ve misafir sofrası",
    "description": "Sucuklu yumurta, tost veya kalabalık kahvaltı için miktar, dilim, içerik ve hazırlık sırasını planlayın. Mersin’de sucuk alışverişine pratik rehber.",
    "category": "Kahvaltı hazırlığı",
    "image": "/images/custom/ev-yapimi-sucuk.jpg",
    "imageAlt": "Kahvaltı hazırlığı için temsili sucuk ürün sunumu",
    "productCategory": "sarkuteri",
    "intro": "Sucuklu kahvaltıda alışveriş miktarı, sucuğun ana sıcak yemek mi yoksa tostun içindeki bir bileşen mi olacağına göre değişir. Aynı masaya çok sayıda sıcak seçenek koymak da servis zamanını zorlaştırabilir. Önce menüyü, sonra dilim ve miktarı planlayın.",
    "sections": [
      {
        "id": "menu-ve-miktar",
        "title": "Sucuğun sofradaki rolünü belirleyin",
        "paragraphs": [
          "Sucuklu yumurta tek sıcak yemek olacaksa miktar görüşmesiyle birkaç tostun içine eklenecek sucuk için yapılan hesap aynı değildir. Kaç kişinin yiyeceğini, başka sıcak yemek bulunup bulunmadığını ve sofranın paylaşmalı mı tek tabaklı mı olacağını düşünün.",
          "Birden fazla sucuklu yemek hazırlamak istiyorsanız her birinin miktarını ayrı yazın. Yalnızca misafir sayısını söyleyip sabit bir kişi başı gramaj beklemeyin. Önceki kahvaltıda ne kadar arttığına ilişkin notlar, sonraki alışverişinizde daha kullanışlı bir başlangıç olabilir."
        ]
      },
      {
        "id": "dilim-ve-etiket",
        "title": "Dilim tercihini kullanımınıza göre görüşün",
        "paragraphs": [
          "Tava, tost veya ekmek üstü sunum için kesim tercihi değişebilir. Birbirine yakın kalınlıkta dilimler hazırlamak pişirmeyi izlemeyi kolaylaştırır; çok ince ve çok kalın parçaları gelişigüzel aynı tavaya koymayın. Önceden dilimleme talebi varsa bunun uygunluğunu mağazaya sorun.",
          "Sucuğun türü, etiketi ve üretici talimatı önemlidir. Her sucuğu pişirmeden tüketilebilir kabul etmeyin; ürüne özgü hazırlama ve muhafaza bilgisini izleyin. Ev yapımı ifadesi tek başına içerik, katkı, sertifika veya üretim yöntemi kanıtı değildir."
        ],
        "table": {
          "caption": "Kahvaltı menüsüne göre hazırlık soruları",
          "columns": [
            "Kullanım",
            "Önceden planlanacak"
          ],
          "rows": [
            [
              "Sucuklu yumurta",
              "Tava kapasitesi ve birlikte servis zamanı"
            ],
            [
              "Tost",
              "Ekmek sayısı, dilim ve diğer iç malzemeler"
            ],
            [
              "Paylaşımlı sıcak tabak",
              "Servis sırası ve yeniden hazırlama ihtiyacı"
            ]
          ]
        }
      },
      {
        "id": "servis-sirasi",
        "title": "Sıcak yemeği en sona bırakacak bir iş sırası kurun",
        "paragraphs": [
          "Önce soğuk kahvaltılıkları ve sofrayı düzenlemek, sucuklu yemeği hazır olduktan sonra bekletmeyi azaltır. Tost yapıyorsanız makineye kaç adet sığdığını, tava kullanıyorsanız aynı anda kaç porsiyon hazırlanabileceğini hesaba katın.",
          "Sucuk kendi tuz ve baharatını içerir; ekleyeceğiniz peynir, sos ve diğer malzemelerin tadını da düşünün. İçeriğe ilişkin özel bir gereksinim varsa yalnızca menü adından uygunluk çıkarmayın. Hazırlık ve servis ekipmanını temiz tutun, ürünün kendi pişirme talimatını izleyin."
        ]
      },
      {
        "id": "mersin-sucuk",
        "title": "Mersin’de sucuk alışverişi için ne sormalı?",
        "paragraphs": [
          "Akdeniz Kasabı’nın sucuk kategorisinde listelenen ürünü inceleyip içerik, uygun miktar, güncel fiyat ve varsa dilimleme seçeneğini öğrenebilirsiniz. Katalogdaki ürün adı, bütün özel hazırlıkların veya farklı sucuk çeşitlerinin stokta bulunduğu anlamına gelmez.",
          "Mesajınızda kahvaltı menünüzü ve almayı düşündüğünüz miktarı belirtin. Paket büyüklüğü ile ihtiyacınız farklıysa seçenekleri sorun. Artan pişmiş yemeği sonraki öğüne ayıracaksanız saklama ve yeniden ısıtmayı ayrıca planlayın."
        ],
        "links": [
          {
            "href": "/urunler/sucuk",
            "label": "Sucuk ürünü, içerik ve sipariş bilgileri"
          },
          {
            "href": "/blog/mersin-kasap-sucugu-secimi",
            "label": "Kasap sucuğunda içerik ve etiket seçimi"
          },
          {
            "href": "/blog/pismis-et-yemekleri-saklama-isitma",
            "label": "Artan pişmiş yemekleri saklama ve ısıtma"
          }
        ]
      }
    ],
    "relatedSlugs": [
      "mersin-kasap-sucugu-secimi",
      "mersin-kasap-fiyatlari-ucretleri",
      "pismis-et-yemekleri-saklama-isitma"
    ],
    "publishedAt": "2026-10-19T11:00:00+03:00"
  }
];

export const blogTopics = [
  { title: "7/24 alışveriş ve ulaşım", description: "Gece, pazar günü ve mağazaya ilk gelişiniz için.", slugs: ["mersin-7-24-acik-kasap", "toroslar-kasap-alisverisi-rehberi", "mersin-en-yakin-kasap-yol-tarifi"] },
  { title: "Et seçimi ve özel hazırlık", description: "Taze et alışverişinde doğru sorular, doğru kesim.", slugs: ["mersin-et-market-taze-et-alisverisi", "mersin-istege-gore-et-dograma-kiyma-cekimi", "mersin-dana-kusbasi-kuzu-kusbasi-secimi"] },
  { title: "Tavuk, köfte ve mangal", description: "Günlük yemek ve kalabalık sofralar için plan yapın.", slugs: ["mersin-tavuk-kasabi-urunleri", "mersin-kasap-kofte-siparisi", "mersin-mangal-paketi-hazirlama"] },
  { title: "Fiyat ve sipariş", description: "Listenizi hazırlayın, fiyat ve teslim alma bilgisini teyit edin.", slugs: ["mersin-kasap-fiyatlari-ucretleri", "mersin-whatsapp-et-siparisi", "akdeniz-kasabi-mersin-adres-iletisim"] },
  { title: "Evde yemek hazırlığı", description: "Hamburgerden tencere yemeğine, alışverişi tarifinize göre yapın.", slugs: ["mersin-hamburger-koftesi-icin-kiyma", "lahmacun-ici-icin-kiyma-secimi", "kuru-fasulye-nohut-icin-et-secimi"] },
  { title: "Saklama ve çözündürme", description: "Paketleme, çözündürme ve artan yemekler için kaynaklı bilgiler.", slugs: ["kiyma-buzdolabi-dondurucu-saklama", "donmus-et-guvenli-cozundurme", "pismis-et-yemekleri-saklama-isitma"] }
];

export const featuredGuideSlugs = ["mersin-7-24-acik-kasap", "mersin-hamburger-koftesi-icin-kiyma", "mersin-kasap-fiyatlari-ucretleri"];

export const guidePosts: BlogPost[] = [...kitchenGuidePosts, ...localGuidePosts, ...productGuidePosts, ...shoppingGuidePosts];
export const blogPosts: BlogPost[] = [...guidePosts, ...districtPosts];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getReadingMinutes(post: BlogPost): number {
  const text = [post.intro, ...post.sections.flatMap((section) => [...section.paragraphs, ...(section.tips ?? []), ...(section.table?.rows.flat() ?? [])])].join(" ");
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 180));
}

export function formatBlogDate(date: string): string {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Istanbul",
  }).format(new Date(date));
}
