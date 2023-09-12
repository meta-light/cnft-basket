import Button from './button'
export const Section = (props) => {
  const { assetInfoList, getTPS, searchAssets } = props
  return ( 
<>
    <section className="terminal-input-section">
    <Button className="btn btn-default" onClick={() => getTPS()} text="Get TPS" />
    <Button className="btn btn-default" text={"Search Assets"} onClick={() => searchAssets()} />
    <Button className="btn btn-default" text={"Connect Wallet"}/>
    <h>Assets Found: {assetInfoList.length > 0 ? `(${assetInfoList.length} items)` : ''}</h>
    </section>
  </>
    )
}
export default Section