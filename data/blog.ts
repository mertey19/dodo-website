export type BlogSection = {
  id: string;
  title: string;
  paragraphs: string[];
  tips?: string[];
};

export type BlogPost = {
  slug: string;
  district: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  publishedAt: string;
  intro: string;
  sections: BlogSection[];
  productCategory: string;
  relatedSlugs: string[];
  sources?: { label: string; url: string }[];
};

const publishedAt = "2026-10-15T12:00:00+03:00";
const coldStorageSource = {
  label: "USDA: Soğutma ve gıda güvenliği",
  url: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/refrigeration",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "toroslar-kasap-alisverisi-rehberi",
    district: "Toroslar",
    title: "Toroslar’da kasap alışverişi: yemeğe göre et seçimi",
    description: "Toroslar’da et alışverişi için kıyma, kuşbaşı ve ızgaralık seçim rehberi. Akdeniz Kasabı’nın 7/24 açık mağazası, hazırlama ve iletişim bilgileri.",
    category: "Kasap alışverişi",
    image: "/images/custom/category-dana.jpg",
    imageAlt: "Dana eti çeşitlerinden temsili ürün sunumu",
    publishedAt,
    intro: "Toroslar’da kasap alışverişine çıkarken ilk karar etin adı değil, yapacağınız yemek olmalı. Aynı miktardaki kıyma, kuşbaşı ve biftek farklı hazırlık ister. Mithat Toroğlu Mahallesi, Kuvayi Milliye Caddesi’ndeki Akdeniz Kasabı’nda isteğinizi anlatırken kullanabileceğiniz bu kısa rehber, alışveriş listesini netleştirmenize yardımcı olur.",
    sections: [
      { id: "yemege-gore", title: "Tencere, tava ve ızgara için aynı kesimi istemeyin", paragraphs: ["Sote hazırlayacaksanız kısa sürede pişirmeyi düşündüğünüzü, güveç yapacaksanız uzun pişirme planınızı söyleyin. Kasabınızdan pişirme yöntemine uygun parçayı ve doğrama boyutunu önermesini isteyin. Küçük doğranmış her et aynı sürede yumuşamaz; parçanın geldiği bölüm de sonucu etkiler.", "Köfte için kıymanın yağ oranını ve çekimini, biftek için porsiyon kalınlığını görüşün. Kemikli et ile kemiksiz etin tartı miktarı aynı olsa da sofraya çıkan yenebilir miktar değişir. Bu yüzden kişi sayısı kadar, yanında servis edeceğiniz yemekleri de belirtin."] },
      { id: "hazirlama", title: "Sipariş mesajına hangi bilgileri yazmalı?", paragraphs: ["Ürün adı tek başına hazırlama talebini anlatmayabilir. Kaç kişi için alışveriş yaptığınızı, yemeği ne zaman pişireceğinizi ve eti nasıl kullanacağınızı kısa bir mesajda birleştirin. Fiyat ve stok bilgisi görüşme sırasında netleşir; web sitesindeki ürün listesi anlık stok garantisi değildir."], tips: ["Yemek adı ve kişi sayısı", "İstenen miktar ve kemikli/kemiksiz tercih", "Kuşbaşı boyutu, kıyma veya dilim tercihi", "Mağazadan almayı düşündüğünüz saat"] },
      { id: "magaza", title: "Toroslar’daki mağazaya gelmeden önce", paragraphs: ["Akdeniz Kasabı haftanın her günü 24 saat açıktır; tatil günü yoktur. Özellikle belirli bir kesim veya toplu hazırlık istiyorsanız yola çıkmadan 0553 776 61 62 üzerinden ulaşın. Açık olmak, her özel ürünün o anda hazır bulunduğu anlamına gelmez.", "Adresimiz Mithat Toroğlu, Kuvayi Milliye Cd., 33080 Toroslar/Mersin’dir. İletişim sayfasındaki yol tarifi mevcut konumunuzdan bu mağazaya rota açar. Ürünü alırken hazırlama isteğinizi ve paket sayısını birlikte kontrol etmek, eve döndüğünüzde işinizi kolaylaştırır."] },
    ],
    productCategory: "dana",
    relatedSlugs: ["akdeniz-gunluk-yemeklik-et-secimi", "yenisehir-haftalik-et-alisverisi"],
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
    relatedSlugs: ["toroslar-kasap-alisverisi-rehberi", "gulnar-guveclik-et-secimi"],
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
    relatedSlugs: ["erdemli-yazlikta-et-alisverisi", "bozyazi-tavuk-parcalari-secimi"],
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
    relatedSlugs: ["silifke-kalabalik-sofralar-et-plani", "camliyayla-yayla-mangal-hazirligi"],
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
    relatedSlugs: ["aydincik-kisa-konaklama-yemek-plani", "yenisehir-haftalik-et-alisverisi"],
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

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getReadingMinutes(post: BlogPost): number {
  const text = [post.intro, ...post.sections.flatMap((section) => [...section.paragraphs, ...(section.tips ?? [])])].join(" ");
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 180));
}

export function formatBlogDate(date: string): string {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Istanbul",
  }).format(new Date(date));
}
