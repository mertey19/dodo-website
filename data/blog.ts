export type BlogSection = {
  id: string;
  title: string;
  paragraphs: string[];
  tips?: string[];
  table?: { caption: string; columns: string[]; rows: string[][] };
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
    intro: "Toroslar’da kasap alışverişine çıkarken ilk karar etin adı değil, yapacağınız yemek olmalı. Aynı miktardaki kıyma, kuşbaşı ve biftek farklı hazırlık ister. Mithat Toroğlu Mahallesi, Kuvayi Milliye Caddesi’ndeki Akdeniz Kasabı’nda isteğinizi anlatırken kullanabileceğiniz bu kısa rehber, alışveriş listesini netleştirmenize yardımcı olur.",
    sections: [
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

export const guidePosts: BlogPost[] = [
  {
    slug: "mersin-kasap-secimi-rehberi",
    title: "Mersin’de kasap seçimi: alışverişten önce sorulacak 7 soru",
    description: "Mersin’de kasap ararken ürün, kesim, fiyat ve hazırlama bilgilerini nasıl değerlendirmeli? Alışveriş öncesi sorulacak 7 soruyla kararınızı netleştirin.",
    category: "Kasap seçimi",
    image: "/images/custom/category-dana.jpg",
    imageAlt: "Kasap alışverişinde karşılaştırılabilecek dana eti çeşitlerinin temsili sunumu",
    publishedAt: "2026-10-15T21:50:00+03:00",
    intro: "Mersin’de kasap ararken arama sonuçlarındaki isimleri karşılaştırmak başlangıçtır; doğru alışveriş için tezgâhta hangi bilgileri soracağınızı da bilmeniz gerekir. Yapacağınız yemek, istediğiniz hazırlık ve toplam bütçe belli olduğunda seçenekler daha anlaşılır hale gelir. Aşağıdaki yedi soruyu aynı ürün için sormak, farklı teklifleri değerlendirmeyi kolaylaştırır.",
    sections: [
      { id: "urun-ve-kesim", title: "1–3. Et hangi parçadan, nasıl hazırlanacak ve tartı neyi içeriyor?", paragraphs: ["Kuşbaşı ve kıyma ifadeleri tek başına hayvanın hangi bölümünün kullanılacağını anlatmaz. Önce dana veya kuzu tercihinizi, ardından yemek adını söyleyin. Sote için kısa sürede pişirmeye uygun bir hazırlık, güveç için farklı bir parça gerekebilir. İstediğiniz kesimin o anda bulunup bulunmadığını öğrenin.", "İkinci soru doğrama ve porsiyonlamadır: etin küçük kuşbaşı, eşit dilim veya ayrı öğünlük paketler halinde hazırlanmasını mı istiyorsunuz? Üçüncü soru ise tartıdır. Kemikli, kemiksiz ve temizlenmiş seçeneklerin miktarı aynı şekilde karşılaştırılmaz. Alacağınız ağırlığın hangi hazırlığı kapsadığını sorun."] },
      { id: "icerik-fiyat", title: "4–5. Hazır ürünün içeriği ve toplam fiyatı nedir?", paragraphs: ["Kasap köfte, sucuk veya marineli tavuk alırken ürünün içeriğini öğrenin. Et türü, baharat ve varsa diğer bileşenler tercihlerinizi etkiler. Belirli bir malzemeyi tüketemiyorsanız sadece görünüşe veya ürün adına güvenmek yerine bunu açıkça belirtin.", "Kilogram fiyatının yanında istediğiniz miktarın toplam tutarını da sorun. Kesim, hazırlama veya paketleme için ayrıca bir ücret söz konusuysa önceden öğrenin. Farklı kasaplardan alınan teklifleri aynı gün, aynı ürün ve aynı hazırlama koşulları üzerinden karşılaştırın."] },
      { id: "teslim-ve-muhafaza", title: "6–7. Ne zaman hazır olur ve eve nasıl götürmeliyim?", paragraphs: ["Mağazanın açık olması ile belirli bir ürünün hazırlanmış olması farklıdır. Özellikle özel kesim veya çok kalemli alışverişte teslim alma zamanını teyit edin. Ambalaj, etiket ve ürüne uygun muhafaza bilgilerini alırken yolculuk yapacağınızı da söyleyin.", "Kasaplar arasında seçim yaparken ulaşımınıza uygun gerçek adresi, iletişim kurabilmenizi ve sorularınıza verilen açık cevapları birlikte değerlendirin. Her müşteri için tek bir en iyi seçenek yoktur; günlük yemek, özel kesim ve toplu sofra ihtiyaçları değişir."] },
      { id: "akdeniz-kasabi", title: "Akdeniz Kasabı’na alışveriş listenizi nasıl iletebilirsiniz?", paragraphs: ["Akdeniz Kasabı Mersin’in Toroslar ilçesinde, Mithat Toroğlu Mahallesi, Kuvayi Milliye Caddesi’ndedir. Mağazamız haftanın her günü 24 saat açıktır. Ürünler sayfasından listenizi oluşturup miktar ve hazırlama tercihini WhatsApp mesajına ekleyebilirsiniz.", "Mesajınızı göndermek otomatik ödeme veya kesin sipariş oluşturmaz. Güncel fiyat, stok, hazırlama ve teslim alma bilgileri görüşmede netleşir. Kısa bir listeyle başlamak, hem ihtiyacınızı anlatmanızı hem de teklifleri karşılaştırmanızı kolaylaştırır."], tips: ["Ürün ve yemek adı", "Miktar, kesim ve paket sayısı", "Hazır ürünlerde içerik soruları", "Toplam fiyat ve hazırlanma saati"] },
    ],
    productCategory: "dana",
    relatedSlugs: ["mersin-kasap-fiyatlari-ucretleri", "akdeniz-kasabi-mersin-adres-iletisim", "toroslar-kasap-alisverisi-rehberi"],
  },
  {
    slug: "mersin-kasap-fiyatlari-ucretleri",
    title: "Mersin kasap fiyatları ve ücretleri: doğru teklif alma rehberi",
    description: "Mersin kasap ücretleri ve et fiyatlarını karşılaştırırken kesim, yağ oranı, kemik ve miktarı birlikte değerlendirin. Güncel fiyat istemek için örnek liste.",
    category: "Fiyat ve bütçe",
    image: "/images/custom/dana-kusbasi.jpg",
    imageAlt: "Fiyat teklifi istenirken kesimi belirtilen dana kuşbaşının temsili görseli",
    publishedAt: "2026-10-15T21:50:00+03:00",
    intro: "Mersin kasap fiyatları veya kasap ücretleri aramasında tek bir kilogram rakamı görmek, alışverişin tamamını anlatmaz. Etin türü, bölümü, kemik durumu ve hazırlama tercihi karşılaştırmayı değiştirir. Akdeniz Kasabı’nda güncel fiyat bilgisi ürün ve miktarınıza göre iletişim sırasında paylaşılır; bu rehberde fiyat teklifi isterken hangi ayrıntıları belirtmeniz gerektiğini bulabilirsiniz.",
    sections: [
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
    intro: "Tavuk kasabı ararken ihtiyacınız bazen akşam yemeği için tavuk şiş, bazen de fırına uygun tavuk pirzola olabilir. Mersin’de alışverişinizi kolaylaştırmak için ürünün hangi parçadan hazırlandığını, kemik ve deri durumunu, sade mi marineli mi olduğunu birlikte değerlendirin. Akdeniz Kasabı’nın ürünler sayfasında tavuk şiş ve tavuk pirzola seçenekleri bulunur; güncel stok görüşmede teyit edilir.",
    sections: [
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
    intro: "Akdeniz Kasabı Mersin’i arıyorsanız mağazamız Toroslar ilçesinde, Mithat Toroğlu Mahallesi, Kuvayi Milliye Caddesi’ndedir. Telefon ve WhatsApp numaramız 0553 776 61 62’dir. Haftanın her günü 24 saat açığız; tatil günü yoktur. İlk kez gelecekler ve sipariş öncesinde bilgi almak isteyenler için temel bilgileri burada bir araya getirdik.",
    sections: [
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
    intro: "Kasap köfte, günlük akşam yemeğinden kalabalık mangal sofrasına kadar farklı planlara uyarlanabilir. Mersin’de köfte siparişi verirken yalnızca kaç kilogram istediğinizi söylemek yerine içeriğini, porsiyon biçimini ve pişirme yöntemini de konuşun. Böylece eve götürdüğünüz ürünün beklentinize uygun olup olmadığını önceden netleştirebilirsiniz.",
    sections: [
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
    intro: "Mersin’de mangal paketi ararken paketin adından çok hangi ürünleri ve ne kadar miktarı içerdiğine bakın. Bir paketin aile boyu veya karışık olarak adlandırılması, sizin sofranıza yeteceğini tek başına göstermez. Kişi sayısı, yemek tercihleri ve ızgara kapasitesi üzerinden plan yapmak alışverişi daha anlaşılır hale getirir.",
    sections: [
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
    intro: "Kuzu eti alışverişinde pirzola ile kuşbaşı arasında seçim yaparken önce yemeğinizi belirleyin. Izgara, tava ve güveç farklı hazırlıklar ister. Mersin’de kasaptan teklif alırken hangi kesimi, ne kadar miktarı ve nasıl bir doğramayı istediğinizi anlatmak, ürünleri daha doğru karşılaştırmanıza yardımcı olur.",
    sections: [
      { id: "pirzola", title: "Pirzolada dilim ve kemik hazırlığı önemlidir", paragraphs: ["Pirzola siparişinde dilim kalınlığı ve hazırlama tercihinizi belirtin. Aynı pakette birbirine yakın kalınlıkta parçalar bulunması, pişirme takibini kolaylaştırır. Kalemleme veya farklı bir hazırlık istiyorsanız standart kesimin dışında hangi seçeneklerin mümkün olduğunu sorun.", "Pirzolanın tartı miktarı kemik içerir. Kişi sayısını yalnızca toplam kilogramla eşleştirmek yerine sofradaki diğer yemekleri de düşünün. Misafirlere başka et ürünleri sunacaksanız bunları miktar görüşmesine ekleyin."] },
      { id: "kusbasi", title: "Kuşbaşını yemeğin yöntemine göre hazırlatın", paragraphs: ["Kuzu kuşbaşı alırken şiş, sote veya tencere yemeği yapacağınızı söyleyin. Ürünün hangi bölümden hazırlanacağını ve doğrama boyutunu görüşün. Şişe uygun eşit parçalar ile uzun pişen güveç için tercih edilen hazırlık aynı olmayabilir.", "Yağ tercihlerinizi ve temizleme beklentinizi anlatın. Kuşbaşı ifadesi kesimin boyutunu anlatır; paketin içindeki etin bölümünü tek başına açıklamaz. Bu ayrıntıyı öğrenmek fiyat ve pişirme yöntemi arasında bağlantı kurmanızı sağlar."] },
      { id: "fiyat", title: "Kuzu eti fiyatlarını hazırlama koşuluyla karşılaştırın", paragraphs: ["Pirzola ve kuşbaşının kilogram fiyatını birbirinin alternatifi gibi okumak yerine, planladığınız öğünün toplamına bakın. Kemik, temizleme ve porsiyon farklılıklarını sorun. Aynı isimle sunulan iki ürünün hazırlanış biçimi değişebilir.", "Kesin kişi başı miktar vermek yerine kaç kişinin yiyeceğini, yan yemekleri ve başka ana yemek bulunup bulunmadığını paylaşın. İki öğün planlıyorsanız paketleri buna göre ayırın. Güncel fiyatı, istediğiniz hazırlık ve miktar üzerinden teyit edin."] },
      { id: "urun-bilgisi", title: "Akdeniz Kasabı’nda kuzu seçeneklerini görüşün", paragraphs: ["Ürünler sayfasındaki kuzu eti kategorisinde kuzu pirzola ve kuzu kuşbaşı seçeneklerini inceleyebilirsiniz. Pişirme yönteminizi ve miktarı sipariş mesajına ekleyerek güncel stok, fiyat ve hazırlama uygunluğu hakkında bilgi alın.", "Toroslar, Mithat Toroğlu Mahallesi’ndeki mağazamız 7/24 açıktır. Özel kesim veya çok sayıda porsiyon düşünüyorsanız gelmeden önce 0553 776 61 62 üzerinden görüşün. Yola çıkmadan netleşen hazırlık bilgisi, mağazadan teslim alma planınızı kolaylaştırır."], tips: ["Pirzola: dilim, kemik ve porsiyon tercihi", "Kuşbaşı: kullanılacak yemek ve doğrama boyutu", "Yağ ve temizleme beklentisi", "Miktar, ayrı paket ve teslim alma zamanı"] },
    ],
    productCategory: "kuzu",
    relatedSlugs: ["gulnar-guveclik-et-secimi", "mersin-mangal-paketi-hazirlama", "mersin-kasap-fiyatlari-ucretleri"],
  },
];

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
