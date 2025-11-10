"use strict";
// -----------------------------------------------------------------------------
// FpsMeter (startFpsMeter / stopFpsMeter / getCurrentFps 전용)
// -----------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.startFpsMeter = startFpsMeter;
exports.stopFpsMeter = stopFpsMeter;
class FpsMeter {
    constructor() {
        this.frames = 0;
        this.lastFpsUpdateTime = 0;
        this._fps = 0;
        this.rafId = null;
        this.handleFrame = () => {
            this.frames++;
            const now = performance.now();
            if (now - this.lastFpsUpdateTime >= 1000) {
                this._fps = Math.round((this.frames * 1000) / (now - this.lastFpsUpdateTime));
                this.frames = 0;
                this.lastFpsUpdateTime = now;
                if (this.listener) {
                    this.listener(this._fps);
                }
            }
            this.rafId = requestAnimationFrame(this.handleFrame);
        };
    }
    start(listener) {
        // 리스너 갱신 (옵션)
        if (listener) {
            this.listener = listener;
        }
        // 이미 동작 중이면 재시작하지 않음
        if (this.rafId !== null)
            return;
        this.frames = 0;
        this._fps = 0;
        this.lastFpsUpdateTime = performance.now();
        this.rafId = requestAnimationFrame(this.handleFrame);
    }
    stop() {
        if (this.rafId === null)
            return;
        cancelAnimationFrame(this.rafId);
        this.rafId = null;
    }
}
// FpsMeter 싱글톤
let _fpsMeterSingleton = null;
function getFpsMeterSingleton() {
    if (!_fpsMeterSingleton) {
        _fpsMeterSingleton = new FpsMeter();
    }
    return _fpsMeterSingleton;
}
// 외부용 함수형 API
function startFpsMeter(listener) {
    getFpsMeterSingleton().start(listener);
}
function stopFpsMeter() {
    getFpsMeterSingleton().stop();
}
