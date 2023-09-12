export const Section = () => {
  return (
<>
    <section className="terminal-input-section">
    <button className="btn btn-default" onClick={() => getTPS()}>Get TPS</button>
    <button className="btn btn-default" onClick={() => searchAssets()}>Search Assets</button>
    <button id="connect_button" className="btn btn-default" onClick={() => connectWallet()}>Connect</button>
    <h>Assets Found: {assetInfoList.length > 0 ? `(${assetInfoList.length} items)` : ''}</h>
    </section>
  </>
    )
}