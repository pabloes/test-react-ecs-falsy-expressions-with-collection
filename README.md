expression evaluation from `0/false` to `true` performs error

```
 uncaught error: TypeError: instance._child is not iterable
    at removeChildEntity (file://${modulename}/:36106:34)
    at removeChild (file://${modulename}/:36138:5)
    at commitDeletionEffectsOnFiber (file://${modulename}/:14869:21)
    at commitDeletionEffects (file://${modulename}/:14834:13)
    at recursivelyTraverseMutationEffects (file://${modulename}/:15041:17)
    at commitMutationEffectsOnFiber (file://${modulename}/:15104:15)
    at recursivelyTraverseMutationEffects (file://${modulename}/:15052:15)
    at commitMutationEffectsOnFiber (file://${modulename}/:15066:15)
    at recursivelyTraverseMutationEffects (file://${modulename}/:15052:15)
    at commitMutationEffectsOnFiber (file://${modulename}/:15104:15)

Stack backtrace:
   0: std::backtrace::Backtrace::create
   1: anyhow::error::<impl core::convert::From<E> for anyhow::Error>::from
   2: deno_core::error::exception_to_err_result
   3: deno_core::runtime::jsruntime::JsRuntime::resolve_promise_inner::{{closure}}
   4: <extern "C" fn(A0) .> R as v8::support::CFnFrom<F>>::mapping::c_fn
```

```
let section:true|false|0 = true; // true, false or 0

const uiComponent = () => (
  <UiEntity
    uiTransform={{
      width: 400,
      height: 230,
      margin: '16px 0 8px 470px',
      padding: 4,
      flexDirection:"column"
    }}
    uiBackground={{ color: Color4.create(0.5, 0.8, 0.1, 0.6) }}
  >
      <UiEntity uiTransform={{
          width:"100%",
          flexDirection:"row",
          height:100
      }}>
          <UiEntity uiTransform={{width:"30%"}} uiBackground={{color:Color4.Red()}} uiText={{value:"true", color:Color4.Black()}} onMouseDown={()=>section=true}/>
          <UiEntity uiTransform={{width:"30%"}} uiBackground={{color:Color4.Green()}}  uiText={{value:"false", color:Color4.Black()}} onMouseDown={()=>section=false}/>
          <UiEntity uiTransform={{width:"30%"}}  uiBackground={{color:Color4.Blue()}} uiText={{value:"0", color:Color4.Black()}} onMouseDown={()=>section=0}/>
      </UiEntity>
      <UiEntity uiBackground={{color:Color4.create(1,1,1,0.1)}}>
          {section && <UiEntity  uiText={{value:"foo"}} />}
      </UiEntity>

  </UiEntity>
)
```
