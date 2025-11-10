# fpskit

웹 애플리케이션의 FPS 모니터링과 성능 최적화를 위한 경량 라이브러리

## 설치

```bash
npm install fpskit
```

## 주요 기능

### 📊 FPS 모니터링 (rafMeter)

실시간으로 FPS를 측정하고 모니터링할 수 있습니다.

```javascript
import { startFpsMeter, stopFpsMeter } from "fpskit";

// FPS 측정 시작
startFpsMeter((fps) => {
  console.log(`현재 FPS: ${fps}`);
});

// FPS 측정 중지
stopFpsMeter();
```

### ⚡ RAF 패치 (rafPatch)

`requestAnimationFrame`을 패치하여 특정 FPS로 제한할 수 있습니다.

```javascript
import { enableRafPatch, disableRafPatch } from "fpskit";

// 30fps로 제한
enableRafPatch(30);

// 패치 해제 (네이티브로 복원)
disableRafPatch();
```

## 사용 예제

### 기본 FPS 모니터링

```javascript
import { startFpsMeter, stopFpsMeter } from "fpskit";

// FPS 표시용 엘리먼트
const fpsDisplay = document.getElementById("fps-counter");

startFpsMeter((fps) => {
  fpsDisplay.textContent = `FPS: ${fps}`;
});

// 10초 후 모니터링 중지
setTimeout(() => {
  stopFpsMeter();
}, 10000);
```

### TypeScript 지원

완전한 타입 지원으로 안전한 개발이 가능합니다.

```typescript
import { startFpsMeter, enableRafPatch } from "fpskit";

interface PerformanceConfig {
  targetFps: number;
  monitoring: boolean;
}

const config: PerformanceConfig = {
  targetFps: 60,
  monitoring: true,
};

if (config.monitoring) {
  startFpsMeter((fps: number) => {
    if (fps < config.targetFps * 0.8) {
      console.warn(`성능 저하 감지: ${fps}fps`);
    }
  });
}
```

## API 레퍼런스

### FPS 모니터링

#### `startFpsMeter(listener?: (fps: number) => void)`

- FPS 측정을 시작합니다
- `listener`: FPS 값이 업데이트될 때 호출되는 콜백 (선택사항)

#### `stopFpsMeter()`

- FPS 측정을 중지합니다

### RAF 패치

#### `enableRafPatch(fps: number)`

- 지정된 FPS로 `requestAnimationFrame`을 제한합니다
- `fps`: 목표 FPS 값

#### `disableRafPatch()`

- RAF 패치를 비활성화하고 네이티브 동작으로 복원합니다

## 주의사항

⚠️ **RAF 패치 사용 시 주의점**

- `enableRafPatch()`는 전역 `requestAnimationFrame` 동작을 변경합니다
- 애플리케이션 전체의 애니메이션 타이밍이 영향을 받습니다
- 개발/테스트 환경에서만 사용하거나, 사용자가 직접 제어할 수 있도록 구현하세요

## 브라우저 지원

- Chrome 24+
- Firefox 23+
- Safari 6.1+
- Edge 12+

## 라이선스

MIT

---

만든이: **oyc0401**
