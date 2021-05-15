import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img
          src="/vercel-and-notion.png"
          height="85"
          width="250"
          alt="Vercel + Notion"
        />
        <h1>宮田 大督 / Daisuke Miyata </h1>
        <h2>
          アプリやWEBサービスのプロダクトマネージャー（企画職）をやっています。 
        </h2>

        <div className="explanation">
          <p>
大手プロバイダのマーケター時代には、新規事業開発部門,２つ社内ビジネスコンテストで賞をとる。1つは１年の準備期間を経て、βリリース。通常業務としては、新規企画のＵＸデザイン・調査からＡＰＩの設計、デザインのラフ案まで自分ひとりで行う業務もやり、ＷＥＢ関連の業務を企画から開発、デザインまでひととおり経験する。
 </p><p>
その後、実際に広く世の中に影響を与えるサービスに関わるため楽天に転職。ＷＥＢディレクターとして、市場、トラベルなど大きいサービスから、車検、レシピ、SNSといった多種多様な新規案件のディレクションまで手掛ける。特徴としては、必ずＵＸ調査をビジネス側に提案し、実施。モックの段階でブラッシュアップするなどＨＣＤプロセスにこだわったディレクションを行う。
 </p><p>
メルカリでは、US事業の立ち上げ時期にアプリUI改善業務を２年弱行う。購入CVRに注力したある3ヶ月間では、実際にサンフランシスコに訪問調査を行いつつ現地のスタッフと協力して+50%の改善を行なった。その後一年で日本でもアプリ改善を行っており、こちらでもユーザー調査から、改善案を発案し素早くリリース。検索周り改善や値下げ要請オファー機能をマイクロサービスとしてメルカリ内で初開発を行いリリースまでした。
 </p><p>
その後また、ゼロからの立ち上げ参画の為メルペイに異動希望。まずユーザビリティテストの組織を立ち上げ毎週実施し、全体のUX磨き込みに貢献。すべてリクルートからモデレータ、UI改善案まで行い、ほぼ全ての現在のメルペイ 機能に関与。自分がPMとしての企画としては、あと払い機能の開発を短期間で行う。その後、現場のプロジェクトを離れ、メルカリ・メルペイの全体・上流をみる、HDのCXO室にてUXリサーチャー兼PMという形メルカリ全体のUXリサーチに関する取り組みをサポートする業務や、メルカリメルペイにまたがるUXリサーチから企画立案を行うところまでをやっている。
 </p><p>
そして2020年1月、エクサウィザーズに入社。現在はUXデザイナー/プロダクトマネージャーとして、デザイングループ・技術統括部・プロダクト開発部などの複数部署にまたがり、社会課題を解決するプロダクト開発と再現性の高いチーム作りを目指して奔走中。
  </p>        

     
        </div>
      </div>
    </>
  )
}
