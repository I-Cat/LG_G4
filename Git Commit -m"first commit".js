aSkip to content
Search or jump to…

/Pulls
Issues
Marketplace
Explore
 


/
android_device_lge_g4-common
forked from LineageOS/android_device_lge_g4-common
8
5
32
Code
Pull requests
Actions
Security
Insights
Merge 'aoleary/pie' into eos-pie_custom
Conflicts:
	configs/manifest.xml
	g4.mk
	libril/sap_service.h
	libshims/libcne_shim.cpp
	overlay/common/frameworks/base/core/res/res/values/dimens.xml
	overlay/frameworks/base/core/res/res/values/config.xml
	rootdir/etc/init.qcom.rc
	system_prop.mk

Change-Id: Iebe9f4d5551b90286b3a26fea8a05f8ba9b9b18b
 lineage-16.0
@steadfasterX
steadfasterX committed on 15 Apr 
2 parents 6819b1f + 68ba6ba commit 57245588ec993fde5c81e112ee9a00954cbc43cc
Showing  with 10,860 additions and 81 deletions.
 13  BoardConfigCommon.mk 
@@ -1,23 +1,23 @@
#	#
# Copyright (C) 2015 The CyanogenMod Project	# Copyright (C) 2015 The CyanogenMod Project
#	#
# Licensed under the Apache License, Version 2.0 (the "License");	# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.	# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at	# You may obtain a copy of the License at
#	#
#      http://www.apache.org/licenses/LICENSE-2.0	#      http://www.apache.org/licenses/LICENSE-2.0
#	#
# Unless required by applicable law or agreed to in writing, software	# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,	# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.	# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and	# See the License for the specific language governing permissions and
# limitations under the License.	# limitations under the License.
BOARD_VENDOR := lge	BOARD_VENDOR := lge


COMMON_PATH := device/lge/g4-common	COMMON_PATH := device/lge/g4-common


TARGET_SPECIFIC_HEADER_PATH := $(COMMON_PATH)/include	TARGET_SPECIFIC_HEADER_PATH := $(COMMON_PATH)/include $(COMMON_PATH)/softap/sdk


LLVM_ENABLE_THREADS := true	LLVM_ENABLE_THREADS := true


# Arch	# Arch
TARGET_ARCH := arm64	TARGET_ARCH := arm64
TARGET_ARCH_VARIANT := armv8-a	TARGET_ARCH_VARIANT := armv8-a
TARGET_CPU_ABI := arm64-v8a	TARGET_CPU_ABI := arm64-v8a
TARGET_CPU_ABI2 :=	TARGET_CPU_ABI2 :=
TARGET_CPU_VARIANT := cortex-a53	TARGET_CPU_VARIANT := cortex-a53
TARGET_2ND_ARCH := arm	TARGET_2ND_ARCH := arm
TARGET_2ND_ARCH_VARIANT := armv8-a	TARGET_2ND_ARCH_VARIANT := armv8-a
TARGET_2ND_CPU_ABI := armeabi-v7a	TARGET_2ND_CPU_ABI := armeabi-v7a
TARGET_2ND_CPU_ABI2 := armeabi	TARGET_2ND_CPU_ABI2 := armeabi
TARGET_2ND_CPU_VARIANT := cortex-a53.a57	TARGET_2ND_CPU_VARIANT := cortex-a53.a57
# Audio	# Audio
AUDIO_FEATURE_ENABLED_ACDB_LICENSE := true	AUDIO_FEATURE_ENABLED_ACDB_LICENSE := true
AUDIO_FEATURE_ENABLED_ANC_HEADSET := true	AUDIO_FEATURE_ENABLED_ANC_HEADSET := true
AUDIO_FEATURE_ENABLED_COMPRESS_CAPTURE := false	AUDIO_FEATURE_ENABLED_COMPRESS_CAPTURE := false
AUDIO_FEATURE_ENABLED_COMPRESS_VOIP := true	AUDIO_FEATURE_ENABLED_COMPRESS_VOIP := true
AUDIO_FEATURE_ENABLED_CUSTOMSTEREO := true	AUDIO_FEATURE_ENABLED_CUSTOMSTEREO := true
#AUDIO_FEATURE_ENABLED_DEV_ARBI := true	#AUDIO_FEATURE_ENABLED_DEV_ARBI := true
AUDIO_FEATURE_ENABLED_DS2_DOLBY_DAP := true	AUDIO_FEATURE_ENABLED_DS2_DOLBY_DAP := true
AUDIO_FEATURE_ENABLED_DTS_EAGLE := false	AUDIO_FEATURE_ENABLED_DTS_EAGLE := false
AUDIO_FEATURE_ENABLED_EXTN_FLAC_DECODER := true	AUDIO_FEATURE_ENABLED_EXTN_FLAC_DECODER := true
AUDIO_FEATURE_ENABLED_EXTN_FORMATS := true	AUDIO_FEATURE_ENABLED_EXTN_FORMATS := true
AUDIO_FEATURE_ENABLED_EXTN_RESAMPLER := false	AUDIO_FEATURE_ENABLED_EXTN_RESAMPLER := false
AUDIO_FEATURE_ENABLED_FLAC_OFFLOAD := true	AUDIO_FEATURE_ENABLED_FLAC_OFFLOAD := true
AUDIO_FEATURE_ENABLED_FLUENCE := true	AUDIO_FEATURE_ENABLED_FLUENCE := true
AUDIO_FEATURE_ENABLED_FM_POWER_OPT := true	AUDIO_FEATURE_ENABLED_FM_POWER_OPT := true
AUDIO_FEATURE_ENABLED_HDMI_EDID := true	AUDIO_FEATURE_ENABLED_HDMI_EDID := true
AUDIO_FEATURE_ENABLED_HDMI_SPK := true	AUDIO_FEATURE_ENABLED_HDMI_SPK := true
AUDIO_FEATURE_ENABLED_HFP := true	AUDIO_FEATURE_ENABLED_HFP := true
AUDIO_FEATURE_ENABLED_HW_ACCELERATED_EFFECTS := false	AUDIO_FEATURE_ENABLED_HW_ACCELERATED_EFFECTS := false
AUDIO_FEATURE_ENABLED_INCALL_MUSIC := false	AUDIO_FEATURE_ENABLED_INCALL_MUSIC := false
AUDIO_FEATURE_ENABLED_KPI_OPTIMIZE := false	AUDIO_FEATURE_ENABLED_KPI_OPTIMIZE := false
#AUDIO_FEATURE_ENABLED_LISTEN := true	#AUDIO_FEATURE_ENABLED_LISTEN := true
AUDIO_FEATURE_ENABLED_LOW_LATENCY_CAPTURE := true	AUDIO_FEATURE_ENABLED_LOW_LATENCY_CAPTURE := true
AUDIO_FEATURE_ENABLED_MULTIPLE_TUNNEL := true	AUDIO_FEATURE_ENABLED_MULTIPLE_TUNNEL := true
AUDIO_FEATURE_ENABLED_MULTI_VOICE_SESSIONS := true	AUDIO_FEATURE_ENABLED_MULTI_VOICE_SESSIONS := true
AUDIO_FEATURE_ENABLED_NT_PAUSE_TIMEOUT := true	AUDIO_FEATURE_ENABLED_NT_PAUSE_TIMEOUT := true
AUDIO_FEATURE_ENABLED_PCM_OFFLOAD_24 := true	AUDIO_FEATURE_ENABLED_PCM_OFFLOAD_24 := true
AUDIO_FEATURE_ENABLED_PCM_OFFLOAD := true	AUDIO_FEATURE_ENABLED_PCM_OFFLOAD := true
AUDIO_FEATURE_ENABLED_PROXY_DEVICE := true	AUDIO_FEATURE_ENABLED_PROXY_DEVICE := true
AUDIO_FEATURE_ENABLED_SPKR_PROTECTION := true	AUDIO_FEATURE_ENABLED_SPKR_PROTECTION := true
AUDIO_USE_LL_AS_PRIMARY_OUTPUT := true	AUDIO_USE_LL_AS_PRIMARY_OUTPUT := true
BOARD_SUPPORTS_SOUND_TRIGGER := false	BOARD_SUPPORTS_SOUND_TRIGGER := false
BOARD_USES_ALSA_AUDIO := true	BOARD_USES_ALSA_AUDIO := true
BOARD_USES_SRS_TRUEMEDIA := true	BOARD_USES_SRS_TRUEMEDIA := true
#DOLBY_DAP := true	#DOLBY_DAP := true
#DOLBY_DDP := true	#DOLBY_DDP := true
#DOLBY_UDC_MULTICHANNEL := true	#DOLBY_UDC_MULTICHANNEL := true
#DOLBY_UDC_STREAMING_HLS := true	#DOLBY_UDC_STREAMING_HLS := true
#DOLBY_UDC := true	#DOLBY_UDC := true
DTS_CODEC_M_ := true	DTS_CODEC_M_ := true
MM_AUDIO_ENABLED_FTM := true	MM_AUDIO_ENABLED_FTM := true
MM_AUDIO_ENABLED_SAFX := true	MM_AUDIO_ENABLED_SAFX := true
TARGET_USES_QCOM_MM_AUDIO := true	TARGET_USES_QCOM_MM_AUDIO := true
USE_CUSTOM_AUDIO_POLICY := 1	USE_CUSTOM_AUDIO_POLICY := 1
USE_XML_AUDIO_POLICY_CONF := 1	USE_XML_AUDIO_POLICY_CONF := 1
# Bluetooth	# Bluetooth
BOARD_HAVE_BLUETOOTH := true	BOARD_HAVE_BLUETOOTH := true
BOARD_HAVE_BLUETOOTH_BCM := true	BOARD_HAVE_BLUETOOTH_BCM := true
BOARD_CUSTOM_BT_CONFIG := device/lge/g4-common/bluetooth/libbt_vndcfg.txt	BOARD_CUSTOM_BT_CONFIG := device/lge/g4-common/bluetooth/libbt_vndcfg.txt
BOARD_BLUETOOTH_BDROID_BUILDCFG_INCLUDE_DIR := device/lge/g4-common/bluetooth	BOARD_BLUETOOTH_BDROID_BUILDCFG_INCLUDE_DIR := device/lge/g4-common/bluetooth
# Camera	# Camera
USE_DEVICE_SPECIFIC_CAMERA := true	USE_DEVICE_SPECIFIC_CAMERA := true
TARGET_CAMERASERVICE_CLOSES_NATIVE_HANDLES := true	TARGET_CAMERASERVICE_CLOSES_NATIVE_HANDLES := true
TARGET_HAS_LEGACY_CAMERA_HAL1 := true
TARGET_USES_MEDIA_EXTENSIONS := true
TARGET_PROCESS_SDK_VERSION_OVERRIDE := \	TARGET_PROCESS_SDK_VERSION_OVERRIDE := \
    /system/vendor/bin/mm-qcamera-daemon=24	    /system/vendor/bin/mm-qcamera-daemon=24


# Dex - Pre-opt SystemUI
PRODUCT_DEXPREOPT_SPEED_APPS += \
    SystemUI

# Display	# Display
HAVE_ADRENO_SOURCE:= false	HAVE_ADRENO_SOURCE:= false
MAX_EGL_CACHE_KEY_SIZE := 12*1024	MAX_EGL_CACHE_KEY_SIZE := 12*1024
MAX_EGL_CACHE_SIZE := 2048*1024	MAX_EGL_CACHE_SIZE := 2048*1024
NUM_FRAMEBUFFER_SURFACE_BUFFERS := 3	NUM_FRAMEBUFFER_SURFACE_BUFFERS := 3
OVERRIDE_RS_DRIVER:= libRSDriver_adreno.so	OVERRIDE_RS_DRIVER:= libRSDriver_adreno.so
TARGET_FORCE_HWC_FOR_VIRTUAL_DISPLAYS := true	TARGET_FORCE_HWC_FOR_VIRTUAL_DISPLAYS := true
TARGET_MSM8974_1440P_EGL_WORKAROUND := true	TARGET_MSM8974_1440P_EGL_WORKAROUND := true
TARGET_USES_C2D_COMPOSITION := true	TARGET_USES_C2D_COMPOSITION := true
TARGET_USES_HWC2 := true	TARGET_USES_HWC2 := true
TARGET_USES_ION := true	TARGET_USES_ION := true
# Encryption	# Encryption
TARGET_HW_DISK_ENCRYPTION := true	TARGET_HW_DISK_ENCRYPTION := true
# Filesystem	# Filesystem
BOARD_FLASH_BLOCK_SIZE := 262144 # (BOARD_KERNEL_PAGESIZE * 64)	BOARD_FLASH_BLOCK_SIZE := 262144 # (BOARD_KERNEL_PAGESIZE * 64)
BOARD_BOOTIMAGE_PARTITION_SIZE := 41943040	BOARD_BOOTIMAGE_PARTITION_SIZE := 41943040
BOARD_CACHEIMAGE_FILE_SYSTEM_TYPE := ext4	BOARD_CACHEIMAGE_FILE_SYSTEM_TYPE := ext4
BOARD_CACHEIMAGE_PARTITION_SIZE := 1291845632	BOARD_CACHEIMAGE_PARTITION_SIZE := 1291845632
BOARD_PERSISTIMAGE_PARTITION_SIZE := 33554432	BOARD_PERSISTIMAGE_PARTITION_SIZE := 33554432
BOARD_RECOVERYIMAGE_PARTITION_SIZE := 41943040	BOARD_RECOVERYIMAGE_PARTITION_SIZE := 41943040
TARGET_USERIMAGES_USE_EXT4 := true	TARGET_USERIMAGES_USE_EXT4 := true
TARGET_USERIMAGES_USE_F2FS := true	TARGET_USERIMAGES_USE_F2FS := true
TARGET_RECOVERY_FSTAB := $(COMMON_PATH)/rootdir/etc/fstab.qcom	TARGET_RECOVERY_FSTAB := $(COMMON_PATH)/rootdir/etc/fstab.qcom
TARGET_USERIMAGES_USE_F2FS := true	TARGET_USERIMAGES_USE_F2FS := true
TARGET_USERIMAGES_USE_EXT4 := true	TARGET_USERIMAGES_USE_EXT4 := true
TARGET_EXFAT_DRIVER := sdfat	TARGET_EXFAT_DRIVER := sdfat
TARGET_VFAT_DRIVER := sdfat	TARGET_VFAT_DRIVER := sdfat
# Install kernel modules on system	# Install kernel modules on system
NEED_KERNEL_MODULE_SYSTEM := true	NEED_KERNEL_MODULE_SYSTEM := true
# GPS	# GPS
BOARD_VENDOR_QCOM_GPS_LOC_API_HARDWARE := msm8992	BOARD_VENDOR_QCOM_GPS_LOC_API_HARDWARE := msm8992
BOARD_VENDOR_QCOM_LOC_PDK_FEATURE_SET := true	BOARD_VENDOR_QCOM_LOC_PDK_FEATURE_SET := true
USE_DEVICE_SPECIFIC_GPS := true	USE_DEVICE_SPECIFIC_GPS := true
TARGET_NO_RPC := true	TARGET_NO_RPC := true
# Gralloc	# Gralloc
TARGET_USES_GRALLOC1 := true	TARGET_USES_GRALLOC1 := true
TARGET_ADDITIONAL_GRALLOC_10_USAGE_BITS := 0x02000000U	TARGET_ADDITIONAL_GRALLOC_10_USAGE_BITS := 0x02000000U
# HIDL	# HIDL
DEVICE_MANIFEST_FILE := $(COMMON_PATH)/configs/manifest.xml	DEVICE_MANIFEST_FILE := $(COMMON_PATH)/configs/manifest.xml
# Init	# Init
TARGET_PLATFORM_DEVICE_BASE := /devices/soc.0/	TARGET_PLATFORM_DEVICE_BASE := /devices/soc.0/


# Kernel	# Kernel
BOARD_KERNEL_CMDLINE := androidboot.selinux=enforcing	BOARD_KERNEL_CMDLINE := androidboot.selinux=permissive
BOARD_KERNEL_CMDLINE += console=ttyHSL0,115200,n8 androidboot.console=ttyHSL0 androidboot.hardware=qcom	BOARD_KERNEL_CMDLINE += console=ttyHSL0,115200,n8 androidboot.console=ttyHSL0 androidboot.hardware=qcom
BOARD_KERNEL_CMDLINE += user_debug=31 ehci-hcd.park=3 lpm_levels.sleep_disabled=1 msm_rtb.filter=0x37 boot_cpus=0-5 lge_monitor_thermal.enable=1	BOARD_KERNEL_CMDLINE += user_debug=31 ehci-hcd.park=3 lpm_levels.sleep_disabled=1 msm_rtb.filter=0x37 boot_cpus=0-5 lge_monitor_thermal.enable=1 fakebattery=enable
BOARD_KERNEL_BASE := 0x00000000	BOARD_KERNEL_BASE := 0x00000000
BOARD_KERNEL_PAGESIZE := 4096	BOARD_KERNEL_PAGESIZE := 4096
BOARD_KERNEL_SEPARATED_DT := true	BOARD_KERNEL_SEPARATED_DT := true
BOARD_KERNEL_IMAGE_NAME := Image.gz	BOARD_KERNEL_IMAGE_NAME := Image.gz
TARGET_KERNEL_ARCH := arm64	TARGET_KERNEL_ARCH := arm64
TARGET_KERNEL_HEADER_ARCH := arm64	TARGET_KERNEL_HEADER_ARCH := arm64
TARGET_KERNEL_SOURCE := kernel/lge/msm8992	TARGET_KERNEL_SOURCE := kernel/lge/msm8992
TARGET_KERNEL_CROSS_COMPILE_PREFIX := aarch64-linux-android-	TARGET_KERNEL_CROSS_COMPILE_PREFIX := aarch64-linux-android-
TARGET_USES_64_BIT_BINDER := true	TARGET_USES_64_BIT_BINDER := true
# Keymaster	# Keymaster
TARGET_PROVIDES_KEYMASTER := true	TARGET_PROVIDES_KEYMASTER := true
TARGET_KEYMASTER_WAIT_FOR_QSEE := true	TARGET_KEYMASTER_WAIT_FOR_QSEE := true
# Lights	# Lights
TARGET_PROVIDES_LIBLIGHT := true	TARGET_PROVIDES_LIBLIGHT := true
# LineageHW	# LineageHW
BOARD_HARDWARE_CLASS += $(COMMON_PATH)/lineagehw	BOARD_HARDWARE_CLASS += $(COMMON_PATH)/lineagehw
# NFC	# NFC
BOARD_NFC_CHIPSET := pn547	BOARD_NFC_CHIPSET := pn547
BOARD_NFC_HAL_SUFFIX := msm8992	BOARD_NFC_HAL_SUFFIX := msm8992
BOARD_NFC_DEVICE := "/dev/pn547"	BOARD_NFC_DEVICE := "/dev/pn547"
# Platform	# Platform
TARGET_BOARD_PLATFORM := msm8992	TARGET_BOARD_PLATFORM := msm8992
TARGET_BOARD_PLATFORM_GPU := qcom-adreno418	TARGET_BOARD_PLATFORM_GPU := qcom-adreno418
TARGET_BOOTLOADER_BOARD_NAME := MSM8992	TARGET_BOOTLOADER_BOARD_NAME := MSM8992
TARGET_NO_BOOTLOADER := true	TARGET_NO_BOOTLOADER := true
TARGET_USES_QCOM_BSP := true	TARGET_USES_QCOM_BSP := true
# Power	# Power
WITH_LINEAGE_CHARGER := false	WITH_LINEAGE_CHARGER := false
BOARD_CHARGER_DISABLE_INIT_BLANK := true	BOARD_CHARGER_DISABLE_INIT_BLANK := true
BOARD_CHARGER_ENABLE_SUSPEND := false	BOARD_CHARGER_ENABLE_SUSPEND := false
BACKLIGHT_PATH := "/sys/class/leds/lcd-backlight/brightness"	BACKLIGHT_PATH := "/sys/class/leds/lcd-backlight/brightness"
TARGET_TAP_TO_WAKE_NODE := "/sys/devices/virtual/input/lge_touch/tap2wake"	TARGET_TAP_TO_WAKE_NODE := "/sys/devices/virtual/input/lge_touch/tap2wake"
TARGET_HAS_NO_WLAN_STATS := true	TARGET_HAS_NO_WLAN_STATS := true
TARGET_HAS_NO_POWER_STATS := true	TARGET_HAS_NO_POWER_STATS := true
TARGET_BOOTANIMATION_MULTITHREAD_DECODE := true	TARGET_BOOTANIMATION_MULTITHREAD_DECODE := true
TARGET_USES_INTERACTION_BOOST := true


# QCOM	# QCOM
BOARD_USES_QCOM_HARDWARE := true	BOARD_USES_QCOM_HARDWARE := true
BOARD_USES_QC_TIME_SERVICES := true	BOARD_USES_QC_TIME_SERVICES := true
# RIL	# RIL
BOARD_PROVIDES_LIBRIL := true	BOARD_PROVIDES_LIBRIL := true
TARGET_PROCESS_SDK_VERSION_OVERRIDE += \	TARGET_PROCESS_SDK_VERSION_OVERRIDE += \
    /vendor/bin/hw/rild=27	    /vendor/bin/hw/rild=27
# Screen density	# Screen density
PRODUCT_AAPT_CONFIG := normal hdpi xhdpi xxhdpi 560dpi xxxhdpi	PRODUCT_AAPT_CONFIG := normal hdpi xhdpi xxhdpi 560dpi xxxhdpi
PRODUCT_AAPT_PREF_CONFIG := 560dpi	PRODUCT_AAPT_PREF_CONFIG := 560dpi
# Sepolicy	# Sepolicy
include device/qcom/sepolicy/sepolicy.mk	include device/qcom/sepolicy/sepolicy.mk
BOARD_SEPOLICY_DIRS += $(COMMON_PATH)/sepolicy	BOARD_SEPOLICY_DIRS += $(COMMON_PATH)/sepolicy
BOARD_PLAT_PRIVATE_SEPOLICY_DIR += $(COMMON_PATH)/sepolicy/private	BOARD_PLAT_PRIVATE_SEPOLICY_DIR += $(COMMON_PATH)/sepolicy/private
BOARD_SEPOLICY_VERS := $(PLATFORM_SDK_VERSION).0	BOARD_SEPOLICY_VERS := $(PLATFORM_SDK_VERSION).0
SELINUX_IGNORE_NEVERALLOWS := true	SELINUX_IGNORE_NEVERALLOWS := true
# Shims	# Shims
TARGET_LD_SHIM_LIBS := \	TARGET_LD_SHIM_LIBS := \
    /system/vendor/lib/libwvm.so|libshims_wvm.so \	    /system/vendor/lib/libwvm.so|libshims_wvm.so \
    /system/lib64/libmdmcutback.so|libqsap_shim.so \	    /system/lib64/libmdmcutback.so|libqsap_shim.so \
    /system/lib/libshim_camera.so:/system/lib/libcamera_client.so|libshim_cameraclient.so \	    /system/lib/libshim_camera.so:/system/lib/libcamera_client.so|libshim_cameraclient.so \
    /system/vendor/lib/libmmcamera_stillmore_lib.so|/system/lib/libshim_cameraclient.so \	    /system/vendor/lib/libmmcamera_stillmore_lib.so|/system/lib/libshim_cameraclient.so \
    /system/vendor/lib/hw/camera.msm8992.so|/system/vendor/lib/libfence_shim.so \	    /system/vendor/lib/hw/camera.msm8992.so|/system/vendor/lib/libfence_shim.so \
    /system/vendor/lib64/lib-rtpcore.so|/system/vendor/lib64/ims_rtp_shim.so \	    /system/vendor/lib64/lib-rtpcore.so|/system/vendor/lib64/ims_rtp_shim.so \
    /system/vendor/bin/slim_daemon|/system/vendor/lib64/slim_shim.so	    /system/vendor/bin/slim_daemon|/system/vendor/lib64/slim_shim.so
# Thermal	# Thermal
USE_DEVICE_SPECIFIC_THERMAL := true	USE_DEVICE_SPECIFIC_THERMAL := true
# Wifi	# Wifi
BOARD_WLAN_DEVICE := bcmdhd	BOARD_WLAN_DEVICE := bcmdhd
BOARD_HOSTAPD_DRIVER := NL80211	BOARD_HOSTAPD_DRIVER := NL80211
BOARD_HOSTAPD_PRIVATE_LIB := lib_driver_cmd_$(BOARD_WLAN_DEVICE)	BOARD_HOSTAPD_PRIVATE_LIB := lib_driver_cmd_$(BOARD_WLAN_DEVICE)
BOARD_WPA_SUPPLICANT_DRIVER := NL80211	BOARD_WPA_SUPPLICANT_DRIVER := NL80211
BOARD_WPA_SUPPLICANT_PRIVATE_LIB := lib_driver_cmd_$(BOARD_WLAN_DEVICE)	BOARD_WPA_SUPPLICANT_PRIVATE_LIB := lib_driver_cmd_$(BOARD_WLAN_DEVICE)
WIFI_DRIVER_FW_PATH_AP := "/vendor/firmware/fw_bcmdhd_apsta.bin"	WIFI_DRIVER_FW_PATH_AP := "/vendor/firmware/fw_bcmdhd_apsta.bin"
WIFI_DRIVER_FW_PATH_P2P := "/vendor/firmware/fw_bcmdhd.bin"	WIFI_DRIVER_FW_PATH_P2P := "/vendor/firmware/fw_bcmdhd.bin"
WIFI_DRIVER_FW_PATH_PARAM := "/sys/module/bcmdhd/parameters/firmware_path"	WIFI_DRIVER_FW_PATH_PARAM := "/sys/module/bcmdhd/parameters/firmware_path"
WIFI_DRIVER_FW_PATH_STA := "/vendor/firmware/fw_bcmdhd.bin"	WIFI_DRIVER_FW_PATH_STA := "/vendor/firmware/fw_bcmdhd.bin"
WPA_SUPPLICANT_VERSION := VER_0_8_X	WPA_SUPPLICANT_VERSION := VER_0_8_X
# inherit from the proprietary version	# inherit from the proprietary version
-include vendor/lge/g4-common/BoardConfigVendor.mk	-include vendor/lge/g4-common/BoardConfigVendor.mk
 7  audio/audio_policy_configuration.xml 
@@ -1,49 +1,42 @@
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>	<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!-- Copyright (C) 2016 The Android Open Source Project	<!-- Copyright (C) 2016 The Android Open Source Project
     Licensed under the Apache License, Version 2.0 (the "License");	     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.	     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at	     You may obtain a copy of the License at
          http://www.apache.org/licenses/LICENSE-2.0	          http://www.apache.org/licenses/LICENSE-2.0
     Unless required by applicable law or agreed to in writing, software	     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,	     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.	     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and	     See the License for the specific language governing permissions and
     limitations under the License.	     limitations under the License.
-->	-->
<audioPolicyConfiguration version="1.0" xmlns:xi="http://www.w3.org/2001/XInclude">	<audioPolicyConfiguration version="1.0" xmlns:xi="http://www.w3.org/2001/XInclude">
    <globalConfiguration speaker_drc_enabled="true"/>	    <globalConfiguration speaker_drc_enabled="true"/>
    <modules>	    <modules>
        <module name="primary" halVersion="2.0">	        <module name="primary" halVersion="2.0">
            <attachedDevices>	            <attachedDevices>
                <item>Speaker</item>	                <item>Speaker</item>
                <item>Earpiece</item>	                <item>Earpiece</item>
                <item>Telephony Tx</item>	                <item>Telephony Tx</item>
                <item>Built-In Mic</item>	                <item>Built-In Mic</item>
                <item>Built-In Back Mic</item>	                <item>Built-In Back Mic</item>
                <item>Telephony Rx</item>	                <item>Telephony Rx</item>
                <!-- <item>In Call-Voice</item> -->	                <!-- <item>In Call-Voice</item> -->
            </attachedDevices>	            </attachedDevices>
            <defaultOutputDevice>Speaker</defaultOutputDevice>	            <defaultOutputDevice>Speaker</defaultOutputDevice>
            <mixPorts>	            <mixPorts>
                <mixPort name="primary output" role="source"	                <mixPort name="primary output" role="source"
                        flags="AUDIO_OUTPUT_FLAG_PRIMARY">	                        flags="AUDIO_OUTPUT_FLAG_PRIMARY">
                    <profile name=""	                    <profile name=""
                             format="AUDIO_FORMAT_PCM_16_BIT"	                             format="AUDIO_FORMAT_PCM_16_BIT"
                             samplingRates="44100,48000"	                             samplingRates="44100,48000"
                             channelMasks="AUDIO_CHANNEL_OUT_STEREO"/>	                             channelMasks="AUDIO_CHANNEL_OUT_STEREO"/>
                </mixPort>	                </mixPort>
                <mixPort name="raw" role="source"	
                             flags="AUDIO_OUTPUT_FLAG_RAW|AUDIO_OUTPUT_FLAG_FAST">	
                    <profile name=""	
                             format="AUDIO_FORMAT_PCM_16_BIT"	
                             samplingRates="44100,48000"	
                             channelMasks="AUDIO_CHANNEL_OUT_STEREO"/>	
                </mixPort>	
                <mixPort name="deep_buffer" role="source"	                <mixPort name="deep_buffer" role="source"
                        flags="AUDIO_OUTPUT_FLAG_DEEP_BUFFER">	                        flags="AUDIO_OUTPUT_FLAG_DEEP_BUFFER">
                    <profile name=""	                    <profile name=""
                             format="AUDIO_FORMAT_PCM_16_BIT"	                             format="AUDIO_FORMAT_PCM_16_BIT"
                             samplingRates="44100,48000"	                             samplingRates="44100,48000"
                             channelMasks="AUDIO_CHANNEL_OUT_STEREO"/>	                             channelMasks="AUDIO_CHANNEL_OUT_STEREO"/>
                </mixPort>	                </mixPort>
                <mixPort name="low_latency" role="source"	                <mixPort name="low_latency" role="source"
                        flags="AUDIO_OUTPUT_FLAG_FAST">	                        flags="AUDIO_OUTPUT_FLAG_FAST">
                    <profile name=""	                    <profile name=""
                             format="AUDIO_FORMAT_PCM_16_BIT"	                             format="AUDIO_FORMAT_PCM_16_BIT"
                             samplingRates="44100,48000"	                             samplingRates="44100,48000"
                             channelMasks="AUDIO_CHANNEL_OUT_STEREO"/>	                             channelMasks="AUDIO_CHANNEL_OUT_STEREO"/>
                </mixPort>	                </mixPort>
                <mixPort name="direct_pcm" role="source"	                <mixPort name="direct_pcm" role="source"
                        flags="AUDIO_OUTPUT_FLAG_DIRECT">	                        flags="AUDIO_OUTPUT_FLAG_DIRECT">
                    <profile name="" format="AUDIO_FORMAT_PCM_16_BIT"	                    <profile name="" format="AUDIO_FORMAT_PCM_16_BIT"
                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000,128000,176400,192000"	                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000,128000,176400,192000"
                             channelMasks="AUDIO_CHANNEL_OUT_MONO,AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_2POINT1,AUDIO_CHANNEL_OUT_QUAD,AUDIO_CHANNEL_OUT_PENTA,AUDIO_CHANNEL_OUT_5POINT1,AUDIO_CHANNEL_OUT_6POINT1,AUDIO_CHANNEL_OUT_7POINT1"/>	                             channelMasks="AUDIO_CHANNEL_OUT_MONO,AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_2POINT1,AUDIO_CHANNEL_OUT_QUAD,AUDIO_CHANNEL_OUT_PENTA,AUDIO_CHANNEL_OUT_5POINT1,AUDIO_CHANNEL_OUT_6POINT1,AUDIO_CHANNEL_OUT_7POINT1"/>
                    <profile name="" format="AUDIO_FORMAT_PCM_8_24_BIT"	                    <profile name="" format="AUDIO_FORMAT_PCM_8_24_BIT"
                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000,128000,176400,192000"	                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000,128000,176400,192000"
                             channelMasks="AUDIO_CHANNEL_OUT_MONO,AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_2POINT1,AUDIO_CHANNEL_OUT_QUAD,AUDIO_CHANNEL_OUT_PENTA,AUDIO_CHANNEL_OUT_5POINT1,AUDIO_CHANNEL_OUT_6POINT1,AUDIO_CHANNEL_OUT_7POINT1"/>	                             channelMasks="AUDIO_CHANNEL_OUT_MONO,AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_2POINT1,AUDIO_CHANNEL_OUT_QUAD,AUDIO_CHANNEL_OUT_PENTA,AUDIO_CHANNEL_OUT_5POINT1,AUDIO_CHANNEL_OUT_6POINT1,AUDIO_CHANNEL_OUT_7POINT1"/>
                    <profile name="" format="AUDIO_FORMAT_PCM_24_BIT_PACKED"	                    <profile name="" format="AUDIO_FORMAT_PCM_24_BIT_PACKED"
                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000,128000,176400,192000"	                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000,128000,176400,192000"
                             channelMasks="AUDIO_CHANNEL_OUT_MONO,AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_2POINT1,AUDIO_CHANNEL_OUT_QUAD,AUDIO_CHANNEL_OUT_PENTA,AUDIO_CHANNEL_OUT_5POINT1,AUDIO_CHANNEL_OUT_6POINT1,AUDIO_CHANNEL_OUT_7POINT1"/>	                             channelMasks="AUDIO_CHANNEL_OUT_MONO,AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_2POINT1,AUDIO_CHANNEL_OUT_QUAD,AUDIO_CHANNEL_OUT_PENTA,AUDIO_CHANNEL_OUT_5POINT1,AUDIO_CHANNEL_OUT_6POINT1,AUDIO_CHANNEL_OUT_7POINT1"/>
                </mixPort>	                </mixPort>
                <mixPort name="compressed_offload" role="source"	                <mixPort name="compressed_offload" role="source"
                         flags="AUDIO_OUTPUT_FLAG_DIRECT|AUDIO_OUTPUT_FLAG_COMPRESS_OFFLOAD|AUDIO_OUTPUT_FLAG_NON_BLOCKING">	                         flags="AUDIO_OUTPUT_FLAG_DIRECT|AUDIO_OUTPUT_FLAG_COMPRESS_OFFLOAD|AUDIO_OUTPUT_FLAG_NON_BLOCKING">
                    <profile name="" format="AUDIO_FORMAT_MP3"	                    <profile name="" format="AUDIO_FORMAT_MP3"
                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000"	                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000"
                             channelMasks="AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_MONO"/>	                             channelMasks="AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_MONO"/>
                    <profile name="" format="AUDIO_FORMAT_FLAC"	                    <profile name="" format="AUDIO_FORMAT_FLAC"
                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000,128000,176400,192000"	                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000,128000,176400,192000"
                             channelMasks="AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_MONO"/>	                             channelMasks="AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_MONO"/>
                    <profile name="" format="AUDIO_FORMAT_ALAC"	                    <profile name="" format="AUDIO_FORMAT_ALAC"
                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000,128000,176400,192000"	                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000,128000,176400,192000"
                             channelMasks="AUDIO_CHANNEL_OUT_MONO,AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_2POINT1,AUDIO_CHANNEL_OUT_QUAD,AUDIO_CHANNEL_OUT_PENTA,AUDIO_CHANNEL_OUT_5POINT1,AUDIO_CHANNEL_OUT_6POINT1,AUDIO_CHANNEL_OUT_7POINT1"/>	                             channelMasks="AUDIO_CHANNEL_OUT_MONO,AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_2POINT1,AUDIO_CHANNEL_OUT_QUAD,AUDIO_CHANNEL_OUT_PENTA,AUDIO_CHANNEL_OUT_5POINT1,AUDIO_CHANNEL_OUT_6POINT1,AUDIO_CHANNEL_OUT_7POINT1"/>
                    <profile name="" format="AUDIO_FORMAT_APE"	                    <profile name="" format="AUDIO_FORMAT_APE"
                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000,128000,176400,192000"	                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000,128000,176400,192000"
                             channelMasks="AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_MONO"/>	                             channelMasks="AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_MONO"/>
                    <profile name="" format="AUDIO_FORMAT_AAC_LC"	                    <profile name="" format="AUDIO_FORMAT_AAC_LC"
                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000"	                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000"
                             channelMasks="AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_MONO"/>	                             channelMasks="AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_MONO"/>
                    <profile name="" format="AUDIO_FORMAT_AAC_HE_V1"	                    <profile name="" format="AUDIO_FORMAT_AAC_HE_V1"
                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000"	                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000"
                             channelMasks="AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_MONO"/>	                             channelMasks="AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_MONO"/>
                    <profile name="" format="AUDIO_FORMAT_AAC_HE_V2"	                    <profile name="" format="AUDIO_FORMAT_AAC_HE_V2"
                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000"	                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000"
                             channelMasks="AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_MONO"/>	                             channelMasks="AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_MONO"/>
                    <profile name="" format="AUDIO_FORMAT_WMA"	                    <profile name="" format="AUDIO_FORMAT_WMA"
                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000"	                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000"
                             channelMasks="AUDIO_CHANNEL_OUT_MONO,AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_2POINT1,AUDIO_CHANNEL_OUT_QUAD,AUDIO_CHANNEL_OUT_PENTA,AUDIO_CHANNEL_OUT_5POINT1,AUDIO_CHANNEL_OUT_6POINT1,AUDIO_CHANNEL_OUT_7POINT1"/>	                             channelMasks="AUDIO_CHANNEL_OUT_MONO,AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_2POINT1,AUDIO_CHANNEL_OUT_QUAD,AUDIO_CHANNEL_OUT_PENTA,AUDIO_CHANNEL_OUT_5POINT1,AUDIO_CHANNEL_OUT_6POINT1,AUDIO_CHANNEL_OUT_7POINT1"/>
                    <profile name="" format="AUDIO_FORMAT_WMA_PRO"	                    <profile name="" format="AUDIO_FORMAT_WMA_PRO"
                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000"	                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000"
                             channelMasks="AUDIO_CHANNEL_OUT_MONO,AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_2POINT1,AUDIO_CHANNEL_OUT_QUAD,AUDIO_CHANNEL_OUT_PENTA,AUDIO_CHANNEL_OUT_5POINT1,AUDIO_CHANNEL_OUT_6POINT1,AUDIO_CHANNEL_OUT_7POINT1"/>	                             channelMasks="AUDIO_CHANNEL_OUT_MONO,AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_2POINT1,AUDIO_CHANNEL_OUT_QUAD,AUDIO_CHANNEL_OUT_PENTA,AUDIO_CHANNEL_OUT_5POINT1,AUDIO_CHANNEL_OUT_6POINT1,AUDIO_CHANNEL_OUT_7POINT1"/>
                    <profile name="" format="AUDIO_FORMAT_VORBIS"	                    <profile name="" format="AUDIO_FORMAT_VORBIS"
                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000,128000,176400,192000"	                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000,128000,176400,192000"
                             channelMasks="AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_MONO"/>	                             channelMasks="AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_MONO"/>
                    <profile name="" format="AUDIO_FORMAT_AAC_ADTS_LC"	                    <profile name="" format="AUDIO_FORMAT_AAC_ADTS_LC"
                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000"	                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000"
                             channelMasks="AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_MONO"/>	                             channelMasks="AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_MONO"/>
                    <profile name="" format="AUDIO_FORMAT_AAC_ADTS_HE_V1"	                    <profile name="" format="AUDIO_FORMAT_AAC_ADTS_HE_V1"
                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000"	                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000"
                             channelMasks="AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_MONO"/>	                             channelMasks="AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_MONO"/>
                    <profile name="" format="AUDIO_FORMAT_AAC_ADTS_HE_V2"	                    <profile name="" format="AUDIO_FORMAT_AAC_ADTS_HE_V2"
                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000"	                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000,64000,88200,96000"
                             channelMasks="AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_MONO"/>	                             channelMasks="AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_MONO"/>
                </mixPort>	                </mixPort>
                <mixPort name="incall_music" role="source"	                <mixPort name="incall_music" role="source"
                        flags="AUDIO_OUTPUT_FLAG_DIRECT,AUDIO_OUTPUT_FLAG_INCALL_MUSIC">	                        flags="AUDIO_OUTPUT_FLAG_DIRECT,AUDIO_OUTPUT_FLAG_INCALL_MUSIC">
                    <profile name=""	                    <profile name=""
                             format="AUDIO_FORMAT_PCM_16_BIT"	                             format="AUDIO_FORMAT_PCM_16_BIT"
                             samplingRates="8000,16000,48000"	                             samplingRates="8000,16000,48000"
                             channelMasks="AUDIO_CHANNEL_OUT_MONO,AUDIO_CHANNEL_OUT_STEREO"/>	                             channelMasks="AUDIO_CHANNEL_OUT_MONO,AUDIO_CHANNEL_OUT_STEREO"/>
                </mixPort>	                </mixPort>
                <mixPort name="voice_tx" role="source">	                <mixPort name="voice_tx" role="source">
                    <profile name=""	                    <profile name=""
                             format="AUDIO_FORMAT_PCM_16_BIT"	                             format="AUDIO_FORMAT_PCM_16_BIT"
                             samplingRates="8000,16000,48000"	                             samplingRates="8000,16000,48000"
                             channelMasks="AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_MONO"/>	                             channelMasks="AUDIO_CHANNEL_OUT_STEREO,AUDIO_CHANNEL_OUT_MONO"/>
                </mixPort>	                </mixPort>
                <mixPort name="voip_rx" role="source"	                <mixPort name="voip_rx" role="source"
                         flags="AUDIO_OUTPUT_FLAG_DIRECT,AUDIO_OUTPUT_FLAG_VOIP_RX">	                         flags="AUDIO_OUTPUT_FLAG_DIRECT,AUDIO_OUTPUT_FLAG_VOIP_RX">
                    <profile name=""	                    <profile name=""
                             format="AUDIO_FORMAT_PCM_16_BIT"	                             format="AUDIO_FORMAT_PCM_16_BIT"
                             samplingRates="8000,16000"	                             samplingRates="8000,16000"
                             channelMasks="AUDIO_CHANNEL_IN_MONO"/>	                             channelMasks="AUDIO_CHANNEL_IN_MONO"/>
                    <profile name=""	                    <profile name=""
                             format="AUDIO_FORMAT_AMR_NB"	                             format="AUDIO_FORMAT_AMR_NB"
                             samplingRates="8000"	                             samplingRates="8000"
                             channelMasks="AUDIO_CHANNEL_IN_MONO"/>	                             channelMasks="AUDIO_CHANNEL_IN_MONO"/>
                    <profile name=""	                    <profile name=""
                             format="AUDIO_FORMAT_AMR_WB"	                             format="AUDIO_FORMAT_AMR_WB"
                             samplingRates="16000"	                             samplingRates="16000"
                             channelMasks="AUDIO_CHANNEL_IN_MONO"/>	                             channelMasks="AUDIO_CHANNEL_IN_MONO"/>
                    <profile name=""	                    <profile name=""
                             format="AUDIO_FORMAT_QCELP"	                             format="AUDIO_FORMAT_QCELP"
                             samplingRates="8000"	                             samplingRates="8000"
                             channelMasks="AUDIO_CHANNEL_IN_MONO"/>	                             channelMasks="AUDIO_CHANNEL_IN_MONO"/>
                    <profile name=""	                    <profile name=""
                             format="AUDIO_FORMAT_EVRC"	                             format="AUDIO_FORMAT_EVRC"
                             samplingRates="8000"	                             samplingRates="8000"
                             channelMasks="AUDIO_CHANNEL_IN_MONO"/>	                             channelMasks="AUDIO_CHANNEL_IN_MONO"/>
                    <profile name=""	                    <profile name=""
                             format="AUDIO_FORMAT_EVRCB"	                             format="AUDIO_FORMAT_EVRCB"
                             samplingRates="8000"	                             samplingRates="8000"
                             channelMasks="AUDIO_CHANNEL_IN_MONO"/>	                             channelMasks="AUDIO_CHANNEL_IN_MONO"/>
                    <profile name=""	                    <profile name=""
                             format="AUDIO_FORMAT_EVRCWB"	                             format="AUDIO_FORMAT_EVRCWB"
                             samplingRates="16000"	                             samplingRates="16000"
                             channelMasks="AUDIO_CHANNEL_IN_MONO"/>	                             channelMasks="AUDIO_CHANNEL_IN_MONO"/>
                    <profile name=""	                    <profile name=""
                             format="AUDIO_FORMAT_EVRCNW"	                             format="AUDIO_FORMAT_EVRCNW"
                             samplingRates="8000,16000"	                             samplingRates="8000,16000"
                             channelMasks="AUDIO_CHANNEL_IN_MONO"/>	                             channelMasks="AUDIO_CHANNEL_IN_MONO"/>
                </mixPort>	                </mixPort>
                <mixPort name="tts" role="source"	                <mixPort name="tts" role="source"
                             flags="AUDIO_OUTPUT_FLAG_TTS">	                             flags="AUDIO_OUTPUT_FLAG_TTS">
                    <profile name=""	                    <profile name=""
                             format="AUDIO_FORMAT_PCM_16_BIT"	                             format="AUDIO_FORMAT_PCM_16_BIT"
                             samplingRates="48000"	                             samplingRates="48000"
                             channelMasks="AUDIO_CHANNEL_OUT_STEREO"/>	                             channelMasks="AUDIO_CHANNEL_OUT_STEREO"/>
                </mixPort>	                </mixPort>
                <mixPort name="primary input" role="sink">	                <mixPort name="primary input" role="sink">
                    <profile name=""	                    <profile name=""
                             format="AUDIO_FORMAT_PCM_16_BIT"	                             format="AUDIO_FORMAT_PCM_16_BIT"
                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000"	                             samplingRates="8000,11025,12000,16000,22050,24000,32000,44100,48000"
                             channelMasks="AUDIO_CHANNEL_IN_MONO,AUDIO_CHANNEL_IN_STEREO,AUDIO_CHANNEL_IN_FRONT_BACK"/>	                             channelMasks="AUDIO_CHANNEL_IN_MONO,AUDIO_CHANNEL_IN_STEREO,AUDIO_CHANNEL_IN_FRONT_BACK"/>
                    <profile name=""	                    <profile name=""
                             format="AUDIO_FORMAT_AMR_NB"	                             format="AUDIO_FORMAT_AMR_NB"
                             samplingRates="8000"	                             samplingRates="8000"
                             channelMasks="AUDIO_CHANNEL_IN_MONO,AUDIO_CHANNEL_IN_STEREO,AUDIO_CHANNEL_IN_FRONT_BACK"/>	                             channelMasks="AUDIO_CHANNEL_IN_MONO,AUDIO_CHANNEL_IN_STEREO,AUDIO_CHANNEL_IN_FRONT_BACK"/>
                    <profile name=""	                    <profile name=""
                             format="AUDIO_FORMAT_AMR_WB"	                             format="AUDIO_FORMAT_AMR_WB"
                             samplingRates="16000"	                             samplingRates="16000"
                             channelMasks="AUDIO_CHANNEL_IN_MONO,AUDIO_CHANNEL_IN_STEREO,AUDIO_CHANNEL_IN_FRONT_BACK"/>	                             channelMasks="AUDIO_CHANNEL_IN_MONO,AUDIO_CHANNEL_IN_STEREO,AUDIO_CHANNEL_IN_FRONT_BACK"/>
                    <profile name=""	                    <profile name=""
                             format="AUDIO_FORMAT_QCELP"	                             format="AUDIO_FORMAT_QCELP"
                             samplingRates="8000"	                             samplingRates="8000"
                             channelMasks="AUDIO_CHANNEL_IN_MONO,AUDIO_CHANNEL_IN_STEREO,AUDIO_CHANNEL_IN_FRONT_BACK"/>	                             channelMasks="AUDIO_CHANNEL_IN_MONO,AUDIO_CHANNEL_IN_STEREO,AUDIO_CHANNEL_IN_FRONT_BACK"/>
                    <profile name=""	                    <profile name=""
                             format="AUDIO_FORMAT_EVRC"	                             format="AUDIO_FORMAT_EVRC"
                             samplingRates="8000"	                             samplingRates="8000"
                             channelMasks="AUDIO_CHANNEL_IN_MONO,AUDIO_CHANNEL_IN_STEREO,AUDIO_CHANNEL_IN_FRONT_BACK"/>	                             channelMasks="AUDIO_CHANNEL_IN_MONO,AUDIO_CHANNEL_IN_STEREO,AUDIO_CHANNEL_IN_FRONT_BACK"/>
                    <profile name=""	                    <profile name=""
                             format="AUDIO_FORMAT_EVRCB"	                             format="AUDIO_FORMAT_EVRCB"
                             samplingRates="8000"	                             samplingRates="8000"
                             channelMasks="AUDIO_CHANNEL_IN_MONO,AUDIO_CHANNEL_IN_STEREO,AUDIO_CHANNEL_IN_FRONT_BACK"/>	                             channelMasks="AUDIO_CHANNEL_IN_MONO,AUDIO_CHANNEL_IN_STEREO,AUDIO_CHANNEL_IN_FRONT_BACK"/>
                     <profile name=""	                     <profile name=""
                             format="AUDIO_FORMAT_EVRCWB"	                             format="AUDIO_FORMAT_EVRCWB"
                             samplingRates="16000"	                             samplingRates="16000"
                             channelMasks="AUDIO_CHANNEL_IN_MONO,AUDIO_CHANNEL_IN_STEREO,AUDIO_CHANNEL_IN_FRONT_BACK"/>	                             channelMasks="AUDIO_CHANNEL_IN_MONO,AUDIO_CHANNEL_IN_STEREO,AUDIO_CHANNEL_IN_FRONT_BACK"/>
                     <profile name=""	                     <profile name=""
                             format="AUDIO_FORMAT_EVRCNW"	                             format="AUDIO_FORMAT_EVRCNW"
                             samplingRates="8000,16000"	                             samplingRates="8000,16000"
                             channelMasks="AUDIO_CHANNEL_IN_MONO,AUDIO_CHANNEL_IN_STEREO,AUDIO_CHANNEL_IN_FRONT_BACK"/>	                             channelMasks="AUDIO_CHANNEL_IN_MONO,AUDIO_CHANNEL_IN_STEREO,AUDIO_CHANNEL_IN_FRONT_BACK"/>
                </mixPort>	                </mixPort>
                <mixPort name="voice_rx" role="sink">	                <mixPort name="voice_rx" role="sink">
                    <profile name=""	                    <profile name=""
                             format="AUDIO_FORMAT_PCM_16_BIT"	                             format="AUDIO_FORMAT_PCM_16_BIT"
                             samplingRates="8000,16000,48000"	                             samplingRates="8000,16000,48000"
                             channelMasks="AUDIO_CHANNEL_IN_MONO,AUDIO_CHANNEL_IN_STEREO"/>	                             channelMasks="AUDIO_CHANNEL_IN_MONO,AUDIO_CHANNEL_IN_STEREO"/>
                </mixPort>	                </mixPort>
            </mixPorts>	            </mixPorts>
            <devicePorts>	            <devicePorts>
                <devicePort tagName="Earpiece" type="AUDIO_DEVICE_OUT_EARPIECE" role="sink">	                <devicePort tagName="Earpiece" type="AUDIO_DEVICE_OUT_EARPIECE" role="sink">
                </devicePort>	                </devicePort>
                <devicePort tagName="Speaker" type="AUDIO_DEVICE_OUT_SPEAKER" role="sink">	                <devicePort tagName="Speaker" type="AUDIO_DEVICE_OUT_SPEAKER" role="sink">
                </devicePort>	                </devicePort>
                <devicePort tagName="Wired Headset" type="AUDIO_DEVICE_OUT_WIRED_HEADSET" role="sink">	                <devicePort tagName="Wired Headset" type="AUDIO_DEVICE_OUT_WIRED_HEADSET" role="sink">
                </devicePort>	                </devicePort>
                <devicePort tagName="Wired Headphones" type="AUDIO_DEVICE_OUT_WIRED_HEADPHONE" role="sink">	                <devicePort tagName="Wired Headphones" type="AUDIO_DEVICE_OUT_WIRED_HEADPHONE" role="sink">
                </devicePort>	                </devicePort>
                <devicePort tagName="Line Out" type="AUDIO_DEVICE_OUT_LINE" role="sink">	                <devicePort tagName="Line Out" type="AUDIO_DEVICE_OUT_LINE" role="sink">
                </devicePort>	                </devicePort>
                <devicePort tagName="BT SCO" type="AUDIO_DEVICE_OUT_BLUETOOTH_SCO" role="sink">	                <devicePort tagName="BT SCO" type="AUDIO_DEVICE_OUT_BLUETOOTH_SCO" role="sink">
                    <profile name="" format="AUDIO_FORMAT_PCM_16_BIT"	                    <profile name="" format="AUDIO_FORMAT_PCM_16_BIT"
                             samplingRates="8000,16000" channelMasks="AUDIO_CHANNEL_OUT_MONO"/>	                             samplingRates="8000,16000" channelMasks="AUDIO_CHANNEL_OUT_MONO"/>
                </devicePort>	                </devicePort>
                <devicePort tagName="BT SCO Headset" type="AUDIO_DEVICE_OUT_BLUETOOTH_SCO_HEADSET" role="sink">	                <devicePort tagName="BT SCO Headset" type="AUDIO_DEVICE_OUT_BLUETOOTH_SCO_HEADSET" role="sink">
                    <profile name="" format="AUDIO_FORMAT_PCM_16_BIT"	                    <profile name="" format="AUDIO_FORMAT_PCM_16_BIT"
                             samplingRates="8000,16000" channelMasks="AUDIO_CHANNEL_OUT_MONO"/>	                             samplingRates="8000,16000" channelMasks="AUDIO_CHANNEL_OUT_MONO"/>
                </devicePort>	                </devicePort>
                <devicePort tagName="BT SCO Car Kit" type="AUDIO_DEVICE_OUT_BLUETOOTH_SCO_CARKIT" role="sink">	                <devicePort tagName="BT SCO Car Kit" type="AUDIO_DEVICE_OUT_BLUETOOTH_SCO_CARKIT" role="sink">
                </devicePort>	                </devicePort>
                <devicePort tagName="Telephony Tx" type="AUDIO_DEVICE_OUT_TELEPHONY_TX" role="sink">	                <devicePort tagName="Telephony Tx" type="AUDIO_DEVICE_OUT_TELEPHONY_TX" role="sink">
                </devicePort>	                </devicePort>
                <devicePort tagName="Built-In Mic" type="AUDIO_DEVICE_IN_BUILTIN_MIC" role="source">	                <devicePort tagName="Built-In Mic" type="AUDIO_DEVICE_IN_BUILTIN_MIC" role="source">
                </devicePort>	                </devicePort>
                <devicePort tagName="Built-In Back Mic" type="AUDIO_DEVICE_IN_BACK_MIC" role="source">	                <devicePort tagName="Built-In Back Mic" type="AUDIO_DEVICE_IN_BACK_MIC" role="source">
                </devicePort>	                </devicePort>
                <devicePort tagName="Wired Headset Mic" type="AUDIO_DEVICE_IN_WIRED_HEADSET" role="source">	                <devicePort tagName="Wired Headset Mic" type="AUDIO_DEVICE_IN_WIRED_HEADSET" role="source">
                </devicePort>	                </devicePort>
                <devicePort tagName="BT SCO Headset Mic" type="AUDIO_DEVICE_IN_BLUETOOTH_SCO_HEADSET" role="source">	                <devicePort tagName="BT SCO Headset Mic" type="AUDIO_DEVICE_IN_BLUETOOTH_SCO_HEADSET" role="source">
                    <profile name="" format="AUDIO_FORMAT_PCM_16_BIT"	                    <profile name="" format="AUDIO_FORMAT_PCM_16_BIT"
                             samplingRates="8000,16000" channelMasks="AUDIO_CHANNEL_IN_MONO"/>	                             samplingRates="8000,16000" channelMasks="AUDIO_CHANNEL_IN_MONO"/>
                </devicePort>	                </devicePort>
                <devicePort tagName="Telephony Rx" type="AUDIO_DEVICE_IN_TELEPHONY_RX" role="source">	                <devicePort tagName="Telephony Rx" type="AUDIO_DEVICE_IN_TELEPHONY_RX" role="source">
                   <profile name="" format="AUDIO_FORMAT_PCM_16_BIT"	                   <profile name="" format="AUDIO_FORMAT_PCM_16_BIT"
                             samplingRates="8000,16000,48000" channelMasks="AUDIO_CHANNEL_IN_MONO"/>	                             samplingRates="8000,16000,48000" channelMasks="AUDIO_CHANNEL_IN_MONO"/>
                </devicePort>	                </devicePort>
                <!-- <devicePort tagName="In Call-Voice" type="AUDIO_DEVICE_IN_VOICE_CALL" role="source">	                <!-- <devicePort tagName="In Call-Voice" type="AUDIO_DEVICE_IN_VOICE_CALL" role="source">
                </devicePort> -->	                </devicePort> -->
            </devicePorts>	            </devicePorts>
            <routes>	            <routes>
                <route type="mix" sink="Earpiece"	                <route type="mix" sink="Earpiece"
                       sources="primary output,low_latency,deep_buffer"/>	                       sources="primary output,low_latency,deep_buffer"/>
                <route type="mix" sink="Speaker"	                <route type="mix" sink="Speaker"
                       sources="primary output,low_latency,deep_buffer"/>	                       sources="primary output,low_latency,deep_buffer"/>
                <route type="mix" sink="Wired Headset"	                <route type="mix" sink="Wired Headset"
                       sources="primary output,low_latency,deep_buffer"/>	                       sources="primary output,low_latency,deep_buffer"/>
                <route type="mix" sink="Wired Headphones"	                <route type="mix" sink="Wired Headphones"
                       sources="primary output,low_latency,deep_buffer"/>	                       sources="primary output,low_latency,deep_buffer"/>
                <route type="mix" sink="Line Out"	                <route type="mix" sink="Line Out"
                       sources="primary output,low_latency,deep_buffer"/>	                       sources="primary output,low_latency,deep_buffer"/>
                <route type="mix" sink="BT SCO"	                <route type="mix" sink="BT SCO"
                       sources="primary output,deep_buffer,voip_rx"/>	                       sources="primary output,deep_buffer,voip_rx"/>
                <route type="mix" sink="BT SCO Headset"	                <route type="mix" sink="BT SCO Headset"
                       sources="primary output,deep_buffer,voip_rx"/>	                       sources="primary output,deep_buffer,voip_rx"/>
                <route type="mix" sink="BT SCO Car Kit"	                <route type="mix" sink="BT SCO Car Kit"
                       sources="primary output,low_latency,deep_buffer"/>	                       sources="primary output,low_latency,deep_buffer"/>
                <route type="mix" sink="Telephony Tx"	                <route type="mix" sink="Telephony Tx"
                       sources="voice_tx"/>	                       sources="voice_tx"/>
                <route type="mix" sink="primary input"	                <route type="mix" sink="primary input"
                       sources="Built-In Mic,Wired Headset Mic,BT SCO Headset Mic"/> <!-- ,In Call-Voice"/> -->	                       sources="Built-In Mic,Wired Headset Mic,BT SCO Headset Mic"/> <!-- ,In Call-Voice"/> -->
                <route type="mix" sink="voice_rx"	                <route type="mix" sink="voice_rx"
                       sources="Telephony Rx"/>	                       sources="Telephony Rx"/>
            </routes>	            </routes>
        </module>	        </module>
        <!-- A2dp Audio HAL -->	        <!-- A2dp Audio HAL -->
        <xi:include href="a2dp_audio_policy_configuration.xml"/>	        <xi:include href="a2dp_audio_policy_configuration.xml"/>
        <!-- Usb Audio HAL -->	        <!-- Usb Audio HAL -->
        <xi:include href="usb_audio_policy_configuration.xml"/>	        <xi:include href="usb_audio_policy_configuration.xml"/>
        <!-- Remote Submix Audio HAL -->	        <!-- Remote Submix Audio HAL -->
        <xi:include href="r_submix_audio_policy_configuration.xml"/>	        <xi:include href="r_submix_audio_policy_configuration.xml"/>
    </modules>	    </modules>
    <!-- Volume section -->	    <!-- Volume section -->
    <xi:include href="audio_policy_volumes_drc.xml"/>	    <xi:include href="audio_policy_volumes_drc.xml"/>
    <xi:include href="default_volume_tables.xml"/>	    <xi:include href="default_volume_tables.xml"/>
</audioPolicyConfiguration>	</audioPolicyConfiguration>
  2  configs/manifest.xml 
@@ -1,328 +1,328 @@
<manifest version="1.0" type="device" target-level="legacy">	<manifest version="1.0" type="device" target-level="legacy">
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.audio</name>	        <name>android.hardware.audio</name>
        <transport arch="32+64">passthrough</transport>	        <transport arch="32+64">passthrough</transport>
        <version>2.0</version>	        <version>2.0</version>
        <version>4.0</version>	        <version>4.0</version>
        <interface>	        <interface>
            <name>IDevicesFactory</name>	            <name>IDevicesFactory</name>
            <instance>default</instance>	            <instance>default</instance>
            <instance>msd</instance>	            <instance>msd</instance>
        </interface>	        </interface>
        <fqname>@2.0::IDevicesFactory/default</fqname>	        <fqname>@2.0::IDevicesFactory/default</fqname>
        <fqname>@4.0::IDevicesFactory/default</fqname>	        <fqname>@4.0::IDevicesFactory/default</fqname>
        <fqname>@2.0::IDevicesFactory/msd</fqname>	        <fqname>@2.0::IDevicesFactory/msd</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.audio.effect</name>	        <name>android.hardware.audio.effect</name>
        <transport arch="32+64">passthrough</transport>	        <transport arch="32+64">passthrough</transport>
        <version>2.0</version>	        <version>2.0</version>
        <version>4.0</version>	        <version>4.0</version>
        <interface>	        <interface>
            <name>IEffectsFactory</name>	            <name>IEffectsFactory</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@2.0::IEffectsFactory/default</fqname>	        <fqname>@2.0::IEffectsFactory/default</fqname>
        <fqname>@4.0::IEffectsFactory/default</fqname>	        <fqname>@4.0::IEffectsFactory/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.bluetooth</name>	        <name>android.hardware.bluetooth</name>
        <transport arch="32+64">passthrough</transport>	        <transport arch="32+64">passthrough</transport>
        <version>1.0</version>	        <version>1.0</version>
        <interface>	        <interface>
            <name>IBluetoothHci</name>	            <name>IBluetoothHci</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@1.0::IBluetoothHci/default</fqname>	        <fqname>@1.0::IBluetoothHci/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.camera.provider</name>	        <name>android.hardware.camera.provider</name>
        <transport arch="32+64">passthrough</transport>	        <transport arch="32+64">passthrough</transport>
        <version>2.4</version>	        <version>2.4</version>
        <interface>	        <interface>
            <name>ICameraProvider</name>	            <name>ICameraProvider</name>
            <instance>external/0</instance>	            <instance>external/0</instance>
            <instance>legacy/0</instance>	            <instance>legacy/0</instance>
        </interface>	        </interface>
        <fqname>@2.4::ICameraProvider/external/0</fqname>	        <fqname>@2.4::ICameraProvider/external/0</fqname>
        <fqname>@2.4::ICameraProvider/legacy/0</fqname>	        <fqname>@2.4::ICameraProvider/legacy/0</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.soundtrigger</name>	        <name>android.hardware.soundtrigger</name>
        <transport arch="32+64">passthrough</transport>	        <transport arch="32+64">passthrough</transport>
        <version>2.0</version>	        <version>2.0</version>
        <interface>	        <interface>
            <name>ISoundTriggerHw</name>	            <name>ISoundTriggerHw</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@2.0::ISoundTriggerHw/default</fqname>	        <fqname>@2.0::ISoundTriggerHw/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.authsecret</name>	        <name>android.hardware.authsecret</name>
        <transport arch="32+64">passthrough</transport>	        <transport arch="32+64">passthrough</transport>
        <version>1.0</version>	        <version>1.0</version>
        <interface>	        <interface>
            <name>IAuthSecret</name>	            <name>IAuthSecret</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@1.0::IAuthSecret/default</fqname>	        <fqname>@1.0::IAuthSecret/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.oemlock</name>	        <name>android.hardware.oemlock</name>
        <transport arch="32+64">passthrough</transport>	        <transport arch="32+64">passthrough</transport>
        <version>1.0</version>	        <version>1.0</version>
        <interface>	        <interface>
            <name>IOemLock</name>	            <name>IOemLock</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@1.0::IOemLock/default</fqname>	        <fqname>@1.0::IOemLock/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.weaver</name>	        <name>android.hardware.weaver</name>
        <transport arch="32+64">passthrough</transport>	        <transport arch="32+64">passthrough</transport>
        <version>1.0</version>	        <version>1.0</version>
        <interface>	        <interface>
            <name>IWeaver</name>	            <name>IWeaver</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@1.0::IWeaver/default</fqname>	        <fqname>@1.0::IWeaver/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>vendor.lineage.power</name>	        <name>vendor.lineage.power</name>
        <transport arch="32+64">passthrough</transport>	        <transport arch="32+64">passthrough</transport>
        <version>1.0</version>	        <version>1.0</version>
        <interface>	        <interface>
            <name>ILineagePower</name>	            <name>ILineagePower</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@1.0::ILineagePower/default</fqname>	        <fqname>@1.0::ILineagePower/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>vendor.lineage.touch</name>	        <name>vendor.lineage.touch</name>
        <transport arch="32+64">passthrough</transport>	        <transport arch="32+64">passthrough</transport>
        <version>1.0</version>	        <version>1.0</version>
        <interface>	        <interface>
            <name>IKeyDisabler</name>	            <name>IKeyDisabler</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <interface>	        <interface>
            <name>IStylusMode</name>	            <name>IStylusMode</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <interface>	        <interface>
            <name>IGloveMode</name>	            <name>IGloveMode</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@1.0::IKeyDisabler/default</fqname>	        <fqname>@1.0::IKeyDisabler/default</fqname>
        <fqname>@1.0::IStylusMode/default</fqname>	        <fqname>@1.0::IStylusMode/default</fqname>
        <fqname>@1.0::IGloveMode/default</fqname>	        <fqname>@1.0::IGloveMode/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>vendor.lineage.camera.motor</name>	        <name>vendor.lineage.camera.motor</name>
        <transport arch="32+64">passthrough</transport>	        <transport arch="32+64">passthrough</transport>
        <version>1.0</version>	        <version>1.0</version>
        <interface>	        <interface>
            <name>ICameraMotor</name>	            <name>ICameraMotor</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@1.0::ICameraMotor/default</fqname>	        <fqname>@1.0::ICameraMotor/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.configstore</name>	        <name>android.hardware.configstore</name>
        <transport>hwbinder</transport>	        <transport>hwbinder</transport>
        <version>1.1</version>	        <version>1.1</version>
        <interface>	        <interface>
            <name>ISurfaceFlingerConfigs</name>	            <name>ISurfaceFlingerConfigs</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@1.1::ISurfaceFlingerConfigs/default</fqname>	        <fqname>@1.1::ISurfaceFlingerConfigs/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.drm</name>	        <name>android.hardware.drm</name>
        <transport arch="32+64">passthrough</transport>	        <transport arch="32+64">passthrough</transport>
        <version>1.0</version>	        <version>1.0</version>
        <interface>	        <interface>
            <name>IDrmFactory</name>	            <name>IDrmFactory</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@1.0::IDrmFactory/default</fqname>	        <fqname>@1.0::IDrmFactory/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.gatekeeper</name>	        <name>android.hardware.gatekeeper</name>
        <transport arch="32+64">passthrough</transport>	        <transport arch="32+64">passthrough</transport>
        <version>1.0</version>	        <version>1.0</version>
        <interface>	        <interface>
            <name>IGatekeeper</name>	            <name>IGatekeeper</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@1.0::IGatekeeper/default</fqname>	        <fqname>@1.0::IGatekeeper/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.gnss</name>	        <name>android.hardware.gnss</name>
        <transport arch="64">passthrough</transport>	        <transport arch="64">passthrough</transport>
        <version>1.0</version>	        <version>1.0</version>
        <interface>	        <interface>
            <name>IGnss</name>	            <name>IGnss</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@1.0::IGnss/default</fqname>	        <fqname>@1.0::IGnss/default</fqname>
        <fqname>@1.1::IGnss/default</fqname>	        <fqname>@1.1::IGnss/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.graphics.allocator</name>	        <name>android.hardware.graphics.allocator</name>
        <transport>hwbinder</transport>	        <transport>hwbinder</transport>
        <version>2.0</version>	        <version>2.0</version>
        <interface>	        <interface>
            <name>IAllocator</name>	            <name>IAllocator</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@2.0::IAllocator/default</fqname>	        <fqname>@2.0::IAllocator/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.graphics.composer</name>	        <name>android.hardware.graphics.composer</name>
        <transport arch="32+64">passthrough</transport>	        <transport arch="32+64">passthrough</transport>
        <version>2.1</version>	        <version>2.1</version>
        <interface>	        <interface>
            <name>IComposer</name>	            <name>IComposer</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@2.1::IComposer/default</fqname>	        <fqname>@2.1::IComposer/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.graphics.mapper</name>	        <name>android.hardware.graphics.mapper</name>
        <transport arch="32+64">passthrough</transport>	        <transport arch="32+64">passthrough</transport>
        <version>2.0</version>	        <version>2.0</version>
        <interface>	        <interface>
            <name>IMapper</name>	            <name>IMapper</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@2.0::IMapper/default</fqname>	        <fqname>@2.0::IMapper/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.health</name>	        <name>android.hardware.health</name>
        <transport arch="32+64">passthrough</transport>	        <transport arch="32+64">passthrough</transport>
        <version>1.0</version>	        <version>1.0</version>
        <version>2.0</version>	        <version>2.0</version>
        <interface>	        <interface>
            <name>IHealth</name>	            <name>IHealth</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@1.0::IHealth/default</fqname>	        <fqname>@1.0::IHealth/default</fqname>
        <fqname>@2.0::IHealth/default</fqname>	        <fqname>@2.0::IHealth/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.ir</name>	        <name>android.hardware.ir</name>
        <transport arch="32+64">passthrough</transport>	        <transport arch="32+64">passthrough</transport>
        <version>1.0</version>	        <version>1.0</version>
        <interface>	        <interface>
            <name>IConsumerIr</name>	            <name>IConsumerIr</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@1.0::IConsumerIr/default</fqname>	        <fqname>@1.0::IConsumerIr/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.keymaster</name>	        <name>android.hardware.keymaster</name>
        <transport arch="32+64">passthrough</transport>	        <transport arch="32+64">passthrough</transport>
        <version>3.0</version>	        <version>3.0</version>
        <version>4.0</version>	        <version>4.0</version>
        <interface>	        <interface>
            <name>IKeymasterDevice</name>	            <name>IKeymasterDevice</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@3.0::IKeymasterDevice/default</fqname>	        <fqname>@3.0::IKeymasterDevice/default</fqname>
        <fqname>@4.0::IKeymasterDevice/default</fqname>	        <fqname>@4.0::IKeymasterDevice/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.light</name>	        <name>android.hardware.light</name>
        <transport>hwbinder</transport>	        <transport>hwbinder</transport>
        <version>2.0</version>	        <version>2.0</version>
        <interface>	        <interface>
            <name>ILight</name>	            <name>ILight</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@2.0::ILight/default</fqname>	        <fqname>@2.0::ILight/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.media.omx</name>	        <name>android.hardware.media.omx</name>
        <transport>hwbinder</transport>	        <transport>hwbinder</transport>
        <version>1.0</version>	        <version>1.0</version>
        <interface>	        <interface>
            <name>IOmx</name>	            <name>IOmx</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <interface>	        <interface>
            <name>IOmxStore</name>	            <name>IOmxStore</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.memtrack</name>	        <name>android.hardware.memtrack</name>
        <transport arch="32+64">passthrough</transport>	        <transport arch="32+64">passthrough</transport>
        <version>1.0</version>	        <version>1.0</version>
        <interface>	        <interface>
            <name>IMemtrack</name>	            <name>IMemtrack</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@1.0::IMemtrack/default</fqname>	        <fqname>@1.0::IMemtrack/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.nfc</name>	        <name>android.hardware.nfc</name>
        <transport arch="32+64">passthrough</transport>	        <transport arch="32+64">passthrough</transport>
        <version>1.1</version>	        <version>1.1</version>
        <interface>	        <interface>
            <name>INfc</name>	            <name>INfc</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.power</name>	        <name>android.hardware.power</name>
        <transport>hwbinder</transport>	        <transport>hwbinder</transport>
        <version>1.1</version>	        <version>1.1</version>
        <interface>	        <interface>
            <name>IPower</name>	            <name>IPower</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.radio</name>	        <name>android.hardware.radio</name>
        <transport>hwbinder</transport>	        <transport>hwbinder</transport>
        <version>1.0</version>	        <version>1.0</version>
        <interface>	        <interface>
            <name>IRadio</name>	            <name>IRadio</name>
            <instance>slot1</instance>	            <instance>slot1</instance>
        </interface>	        </interface>
        <interface>	        <interface>
            <name>ISap</name>	            <name>ISap</name>
            <instance>slot1</instance>	            <instance>slot1</instance>
        </interface>	        </interface>
        <fqname>@1.0::IRadio/slot1</fqname>	        <fqname>@1.0::IRadio/slot1</fqname>
        <fqname>@1.0::ISap/slot1</fqname>	        <fqname>@1.0::ISap/slot1</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.secure_element</name>	        <name>android.hardware.secure_element</name>
	<transport arch="32+64">passthrough</transport>		<transport arch="32+64">passthrough</transport>
        <version>1.0</version>	        <version>1.0</version>
        <interface>	        <interface>
            <name>ISecureElement</name>	            <name>ISecureElement</name>
            <instance>eSE1</instance>	            <instance>eSE1</instance>
            <instance>SIM1</instance>	            <instance>SIM1</instance>
        </interface>	        </interface>
        <fqname>@1.0::ISecureElement/eSE1</fqname>	        <fqname>@1.0::ISecureElement/eSE1</fqname>
        <fqname>@1.0::ISecureElement/SIM1</fqname>	        <fqname>@1.0::ISecureElement/SIM1</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.radio.deprecated</name>	        <name>android.hardware.radio.deprecated</name>
        <transport>hwbinder</transport>	        <transport>hwbinder</transport>
        <version>1.0</version>	        <version>1.0</version>
        <interface>	        <interface>
            <name>IOemHook</name>	            <name>IOemHook</name>
            <instance>slot1</instance>	            <instance>slot1</instance>
        </interface>	        </interface>
        <fqname>@1.0::IOemHook/slot1</fqname>	        <fqname>@1.0::IOemHook/slot1</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.sensors</name>	        <name>android.hardware.sensors</name>
        <transport arch="32+64">passthrough</transport>	        <transport>hwbinder</transport>
        <version>1.0</version>	        <version>1.0</version>
        <interface>	        <interface>
            <name>ISensors</name>	            <name>ISensors</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@1.0::ISensors/default</fqname>	        <fqname>@1.0::ISensors/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.thermal</name>	        <name>android.hardware.thermal</name>
        <transport>hwbinder</transport>	        <transport>hwbinder</transport>
        <version>1.0</version>	        <version>1.0</version>
        <interface>	        <interface>
            <name>IThermal</name>	            <name>IThermal</name>
            <instance>default</instance>	            <instance>default</instance>
        </interface>	        </interface>
        <fqname>@1.0::IThermal/default</fqname>	        <fqname>@1.0::IThermal/default</fqname>
    </hal>	    </hal>
    <hal format="hidl">	    <hal format="hidl">
        <name>android.hardware.usb</name>	        <name>android.hardware.usb</name>
        <transport>hwbinder</transport>	        <transport>hwbinder</transport>
        <version>1.0</version>	        <version>1.0</version>
        <interface>	        <interface>
            <name>IUsb</name>	            <name>IUsb</name>
  19  configs/media_codecs.xml 
@@ -2,13 +2,10 @@
<!-- Copyright (C) 2012 The Android Open Source Project	<!-- Copyright (C) 2012 The Android Open Source Project
     Copyright (C) 2014 The Linux Foundation. All rights reserved.	     Copyright (C) 2014 The Linux Foundation. All rights reserved.
     Not a contribution.	     Not a contribution.
     Licensed under the Apache License, Version 2.0 (the "License");	     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.	     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at	     You may obtain a copy of the License at
          http://www.apache.org/licenses/LICENSE-2.0	          http://www.apache.org/licenses/LICENSE-2.0
     Unless required by applicable law or agreed to in writing, software	     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,	     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.	     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@@ -31,18 +28,13 @@
<!ELEMENT Quirk EMPTY>	<!ELEMENT Quirk EMPTY>
<!ATTLIST Quirk name CDATA #REQUIRED>	<!ATTLIST Quirk name CDATA #REQUIRED>
]>	]>
There's a simple and a complex syntax to declare the availability of a	There's a simple and a complex syntax to declare the availability of a
media codec:	media codec:
A codec that properly follows the OpenMax spec and therefore doesn't have any	A codec that properly follows the OpenMax spec and therefore doesn't have any
quirks and that only supports a single content type can be declared like so:	quirks and that only supports a single content type can be declared like so:
    <MediaCodec name="OMX.foo.bar" type="something/interesting" />	    <MediaCodec name="OMX.foo.bar" type="something/interesting" />
If a codec has quirks OR supports multiple content types, the following syntax	If a codec has quirks OR supports multiple content types, the following syntax
can be used:	can be used:
    <MediaCodec name="OMX.foo.bar" >	    <MediaCodec name="OMX.foo.bar" >
        <Type name="something/interesting" />	        <Type name="something/interesting" />
        <Type name="something/else" />	        <Type name="something/else" />
@@ -51,19 +43,15 @@ can be used:
        <Quirk name="requires-allocate-on-output-ports" />	        <Quirk name="requires-allocate-on-output-ports" />
        <Quirk name="output-buffers-are-unreadable" />	        <Quirk name="output-buffers-are-unreadable" />
    </MediaCodec>	    </MediaCodec>
Only the three quirks included above are recognized at this point:	Only the three quirks included above are recognized at this point:
"requires-allocate-on-input-ports"	"requires-allocate-on-input-ports"
    must be advertised if the component does not properly support specification	    must be advertised if the component does not properly support specification
    of input buffers using the OMX_UseBuffer(...) API but instead requires	    of input buffers using the OMX_UseBuffer(...) API but instead requires
    OMX_AllocateBuffer to be used.	    OMX_AllocateBuffer to be used.
"requires-allocate-on-output-ports"	"requires-allocate-on-output-ports"
    must be advertised if the component does not properly support specification	    must be advertised if the component does not properly support specification
    of output buffers using the OMX_UseBuffer(...) API but instead requires	    of output buffers using the OMX_UseBuffer(...) API but instead requires
    OMX_AllocateBuffer to be used.	    OMX_AllocateBuffer to be used.
"output-buffers-are-unreadable"	"output-buffers-are-unreadable"
    must be advertised if the emitted output buffers of a decoder component	    must be advertised if the emitted output buffers of a decoder component
    are not readable, i.e. use a custom format even though abusing one of	    are not readable, i.e. use a custom format even though abusing one of
@@ -76,8 +64,6 @@ Only the three quirks included above are recognized at this point:
    corresponding color space converter for thumbnail extraction,	    corresponding color space converter for thumbnail extraction,
    matching surfaceflinger support that can render the custom format to	    matching surfaceflinger support that can render the custom format to
    a texture and possibly other code, so just DON'T USE THIS QUIRK.	    a texture and possibly other code, so just DON'T USE THIS QUIRK.
-->	-->


<!--	<!--
@@ -249,6 +235,10 @@ Only the three quirks included above are recognized at this point:
            <Feature name="secure-playback" required="true" />	            <Feature name="secure-playback" required="true" />
            <Limit name="concurrent-instances" max="13" />	            <Limit name="concurrent-instances" max="13" />
        </MediaCodec>	        </MediaCodec>
        <MediaCodec name="OMX.ffmpeg.h264.decoder" type="video/avc">
            <Limit name="size" min="64x64" max="3840x2160" />
            <Limit name="alignment" value="2x2" />
        </MediaCodec>
        <MediaCodec name="OMX.qcom.video.decoder.divx" type="video/divx" >	        <MediaCodec name="OMX.qcom.video.decoder.divx" type="video/divx" >
            <Quirk name="requires-allocate-on-input-ports" />	            <Quirk name="requires-allocate-on-input-ports" />
            <Quirk name="requires-allocate-on-output-ports" />	            <Quirk name="requires-allocate-on-output-ports" />
@@ -318,5 +308,6 @@ Only the three quirks included above are recognized at this point:
        </MediaCodec>	        </MediaCodec>
    </Decoders>	    </Decoders>
    <Include href="media_codecs_google_video.xml" />	    <Include href="media_codecs_google_video.xml" />
    <Include href="media_codecs_ffmpeg.xml" />
</MediaCodecs>	</MediaCodecs>


  13  g4.mk 
@@ -16,9 +16,6 @@


$(call inherit-product-if-exists, vendor/lge/g4-common/g4-common-vendor.mk)	$(call inherit-product-if-exists, vendor/lge/g4-common/g4-common-vendor.mk)


# Build with specific settings for Galaxys2-common	
$(call inherit-product, $(LOCAL_PATH)/configs/go_for_g4.mk)	

# APEX	# APEX
PRODUCT_COPY_FILES += \	PRODUCT_COPY_FILES += \
    $(LOCAL_PATH)/configs/ld.config.txt:$(TARGET_COPY_OUT_SYSTEM)/etc/swcodec/ld.config.txt	    $(LOCAL_PATH)/configs/ld.config.txt:$(TARGET_COPY_OUT_SYSTEM)/etc/swcodec/ld.config.txt
@@ -76,6 +73,13 @@ PRODUCT_PACKAGES += \
    libqomx_core \	    libqomx_core \
    Camera2	    Camera2


# Enable camera EIS
# eis.enable: enables electronic image stabilization
# is_type: sets image stabilization type
PRODUCT_PROPERTY_OVERRIDES += \
    persist.camera.eis.enable=1 \
    persist.camera.is_type=4

# rootless torch tile workaround	# rootless torch tile workaround
PRODUCT_PACKAGES += \	PRODUCT_PACKAGES += \
    Flashlight	    Flashlight
@@ -343,7 +347,8 @@ PRODUCT_COPY_FILES += \


# Sensors	# Sensors
PRODUCT_PACKAGES += \	PRODUCT_PACKAGES += \
    android.hardware.sensors@1.0-impl	    android.hardware.sensors@1.0-impl \
    android.hardware.sensors@1.0-service


PRODUCT_COPY_FILES += \	PRODUCT_COPY_FILES += \
    $(LOCAL_PATH)/sensors/sensor_def_common.conf:system/etc/sensors/sensor_def_common.conf \	    $(LOCAL_PATH)/sensors/sensor_def_common.conf:system/etc/sensors/sensor_def_common.conf \
 71  libbt/Android.mk 
@@ -0,0 +1,71 @@
LOCAL_PATH := $(call my-dir)

ifneq ($(BOARD_HAVE_BLUETOOTH_BCM),)

include $(CLEAR_VARS)

ifneq ($(BOARD_BLUETOOTH_BDROID_BUILDCFG_INCLUDE_DIR),)
  bdroid_C_INCLUDES := $(BOARD_BLUETOOTH_BDROID_BUILDCFG_INCLUDE_DIR)
  bdroid_CFLAGS += -DHAS_BDROID_BUILDCFG
else
  bdroid_C_INCLUDES :=
  bdroid_CFLAGS += -DHAS_NO_BDROID_BUILDCFG
endif

BDROID_DIR := $(TOP_DIR)system/bt

ifeq ($(strip $(USE_BLUETOOTH_BCM4343)),true)
LOCAL_CFLAGS += -DUSE_BLUETOOTH_BCM4343
endif

LOCAL_CFLAGS += \
        -Wall \
        -Werror \
        -Wno-switch \
        -Wno-unused-function \
        -Wno-unused-parameter \
        -Wno-unused-variable \

LOCAL_SRC_FILES := \
        src/bt_vendor_brcm.c \
        src/hardware.c \
        src/userial_vendor.c \
        src/upio.c \
        src/conf.c

LOCAL_C_INCLUDES += \
        $(LOCAL_PATH)/include \
        $(BDROID_DIR)/hci/include \
        $(BDROID_DIR)/include \
        $(BDROID_DIR)/device/include \
        $(BDROID_DIR)

LOCAL_C_INCLUDES += $(bdroid_C_INCLUDES)
LOCAL_CFLAGS += $(bdroid_CFLAGS)

LOCAL_HEADER_LIBRARIES := libutils_headers

ifneq ($(BOARD_HAVE_BLUETOOTH_BCM_A2DP_OFFLOAD),)
  LOCAL_STATIC_LIBRARIES := libbt-brcm_a2dp
endif

LOCAL_SHARED_LIBRARIES := \
        libcutils \
        liblog

LOCAL_MODULE := libbt-vendor
LOCAL_MODULE_TAGS := optional
LOCAL_MODULE_CLASS := SHARED_LIBRARIES
LOCAL_MODULE_OWNER := broadcom
LOCAL_PROPRIETARY_MODULE := true

ifeq ($(BOARD_HAVE_SAMSUNG_BLUETOOTH),true)
    LOCAL_CFLAGS += -DSAMSUNG_BLUETOOTH
    LOCAL_C_INCLUDES += hardware/samsung/macloader/include
endif

include $(LOCAL_PATH)/vnd_buildcfg.mk

include $(BUILD_SHARED_LIBRARY)

endif # BOARD_HAVE_BLUETOOTH_BCM
 4  libbt/OWNERS 
@@ -0,0 +1,4 @@
eisenbach@google.com
mylesgw@google.com
pavlin@google.com
siyuanh@google.com
 25  libbt/gen-buildcfg.sh 
@@ -0,0 +1,25 @@
#!/usr/bin/env bash

if [[ "" == "$2" ]]
then
    echo "Usage: $0 <in-file> <out-file>"
    exit 1
fi

if [ ! -f "$1" ]
then
    echo "Error: Can't find input file $1..."
    exit 2
fi

DATE=`/usr/bin/env date`
BASE=`basename $2`
BASE=`echo ${BASE} | tr "[:lower:]" "[:upper:]"`
BASE=`echo ${BASE} | sed -e "s/\\./_/"`
PROTECT="_${BASE}"

echo "/* Auto-generated from $1 on ${DATE} */" > $2
echo "#ifndef ${PROTECT}" >> $2
echo "#define ${PROTECT}" >> $2
sed -e '/^#/d' -e '/^$$/d' -e '/# Makefile only$$/d' -e 's/^/#define /' -e 's/=/ /' $1 >> $2
echo "#endif" >> $2
 443  libbt/include/bt_vendor_brcm.h 
Large diffs are not rendered by default.

 798  libbt/include/uipc_msg.h 
Large diffs are not rendered by default.

 107  libbt/include/upio.h 
@@ -0,0 +1,107 @@
/******************************************************************************
 *
 *  Copyright (C) 2009-2012 Broadcom Corporation
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at:
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 ******************************************************************************/

/******************************************************************************
 *
 *  Filename:      upio.h
 *
 *  Description:   Contains definitions used for I/O controls
 *
 ******************************************************************************/

#ifndef UPIO_H
#define UPIO_H

/******************************************************************************
**  Constants & Macros
******************************************************************************/

#define UPIO_BT_POWER_OFF 0
#define UPIO_BT_POWER_ON  1

/* UPIO signals */
enum {
    UPIO_BT_WAKE = 0,
    UPIO_HOST_WAKE,
    UPIO_LPM_MODE,
    UPIO_MAX_COUNT
};

/* UPIO assertion/deassertion */
enum {
    UPIO_UNKNOWN = 0,
    UPIO_DEASSERT,
    UPIO_ASSERT
};

/******************************************************************************
**  Extern variables and functions
******************************************************************************/

/******************************************************************************
**  Functions
******************************************************************************/

/*******************************************************************************
**
** Function        upio_init
**
** Description     Initialization
**
** Returns         None
**
*******************************************************************************/
void upio_init(void);

/*******************************************************************************
**
** Function        upio_cleanup
**
** Description     Clean up
**
** Returns         None
**
*******************************************************************************/
void upio_cleanup(void);

/*******************************************************************************
**
** Function        upio_set_bluetooth_power
**
** Description     Interact with low layer driver to set Bluetooth power
**                 on/off.
**
** Returns         0  : SUCCESS or Not-Applicable
**                 <0 : ERROR
**
*******************************************************************************/
int upio_set_bluetooth_power(int on);

/*******************************************************************************
**
** Function        upio_set
**
** Description     Set i/o based on polarity
**
** Returns         None
**
*******************************************************************************/
void upio_set(uint8_t pio, uint8_t action, uint8_t polarity);

#endif /* UPIO_H */

 175  libbt/include/userial_vendor.h 
@@ -0,0 +1,175 @@
/******************************************************************************
 *
 *  Copyright (C) 2009-2012 Broadcom Corporation
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at:
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 ******************************************************************************/

/******************************************************************************
 *
 *  Filename:      userial_vendor.h
 *
 *  Description:   Contains vendor-specific definitions used in serial port
 *                 controls
 *
 ******************************************************************************/

#ifndef USERIAL_VENDOR_H
#define USERIAL_VENDOR_H

#include "bt_vendor_brcm.h"
#include "userial.h"

/******************************************************************************
**  Constants & Macros
******************************************************************************/

/**** baud rates ****/
#define USERIAL_BAUD_300        0
#define USERIAL_BAUD_600        1
#define USERIAL_BAUD_1200       2
#define USERIAL_BAUD_2400       3
#define USERIAL_BAUD_9600       4
#define USERIAL_BAUD_19200      5
#define USERIAL_BAUD_57600      6
#define USERIAL_BAUD_115200     7
#define USERIAL_BAUD_230400     8
#define USERIAL_BAUD_460800     9
#define USERIAL_BAUD_921600     10
#define USERIAL_BAUD_1M         11
#define USERIAL_BAUD_1_5M       12
#define USERIAL_BAUD_2M         13
#define USERIAL_BAUD_3M         14
#define USERIAL_BAUD_4M         15
#define USERIAL_BAUD_AUTO       16

/**** Data Format ****/
/* Stop Bits */
#define USERIAL_STOPBITS_1      1
#define USERIAL_STOPBITS_1_5    (1<<1)
#define USERIAL_STOPBITS_2      (1<<2)

/* Parity Bits */
#define USERIAL_PARITY_NONE     (1<<3)
#define USERIAL_PARITY_EVEN     (1<<4)
#define USERIAL_PARITY_ODD      (1<<5)

/* Data Bits */
#define USERIAL_DATABITS_5      (1<<6)
#define USERIAL_DATABITS_6      (1<<7)
#define USERIAL_DATABITS_7      (1<<8)
#define USERIAL_DATABITS_8      (1<<9)


#if (BT_WAKE_VIA_USERIAL_IOCTL==TRUE)
/* These are the ioctl values used for bt_wake ioctl via UART driver. you may
 * need to redefine them on you platform!
 * Logically they need to be unique and not colide with existing uart ioctl's.
 */
#ifndef USERIAL_IOCTL_BT_WAKE_ASSERT
#define USERIAL_IOCTL_BT_WAKE_ASSERT   0x8003
#endif
#ifndef USERIAL_IOCTL_BT_WAKE_DEASSERT
#define USERIAL_IOCTL_BT_WAKE_DEASSERT 0x8004
#endif
#ifndef USERIAL_IOCTL_BT_WAKE_GET_ST
#define USERIAL_IOCTL_BT_WAKE_GET_ST   0x8005
#endif
#endif // (BT_WAKE_VIA_USERIAL_IOCTL==TRUE)

/******************************************************************************
**  Type definitions
******************************************************************************/

/* Structure used to configure serial port during open */
typedef struct
{
    uint16_t fmt;       /* Data format */
    uint8_t  baud;      /* Baud rate */
} tUSERIAL_CFG;

typedef enum {
#if (BT_WAKE_VIA_USERIAL_IOCTL==TRUE)
    USERIAL_OP_ASSERT_BT_WAKE,
    USERIAL_OP_DEASSERT_BT_WAKE,
    USERIAL_OP_GET_BT_WAKE_STATE,
#endif
    USERIAL_OP_NOP,
} userial_vendor_ioctl_op_t;

/******************************************************************************
**  Extern variables and functions
******************************************************************************/

/******************************************************************************
**  Functions
******************************************************************************/

/*******************************************************************************
**
** Function        userial_vendor_init
**
** Description     Initialize userial vendor-specific control block
**
** Returns         None
**
*******************************************************************************/
void userial_vendor_init(void);

/*******************************************************************************
**
** Function        userial_vendor_open
**
** Description     Open the serial port with the given configuration
**
** Returns         device fd
**
*******************************************************************************/
int userial_vendor_open(tUSERIAL_CFG *p_cfg);

/*******************************************************************************
**
** Function        userial_vendor_close
**
** Description     Conduct vendor-specific close work
**
** Returns         None
**
*******************************************************************************/
void userial_vendor_close(void);

/*******************************************************************************
**
** Function        userial_vendor_set_baud
**
** Description     Set new baud rate
**
** Returns         None
**
*******************************************************************************/
void userial_vendor_set_baud(uint8_t userial_baud);

/*******************************************************************************
**
** Function        userial_vendor_ioctl
**
** Description     ioctl inteface
**
** Returns         None
**
*******************************************************************************/
void userial_vendor_ioctl(userial_vendor_ioctl_op_t op, void *p_data);

#endif /* USERIAL_VENDOR_H */

 12  libbt/include/vnd_anthias.txt 
@@ -0,0 +1,12 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyHS0"
FW_PATCHFILE_LOCATION = "/system/etc/firmware/bt"
UART_TARGET_BAUD_RATE = 3000000
LPM_IDLE_TIMEOUT_MULTIPLE = 5
LPM_BT_WAKE_POLARITY = 1
LPM_HOST_WAKE_POLARITY = 1
BTVND_DBG = FALSE
BTHW_DBG = FALSE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
BT_WAKE_VIA_PROC = FALSE
PROC_BTWRITE_TIMER_TIMEOUT_MS = 0
 14  libbt/include/vnd_anthracite.txt 
@@ -0,0 +1,14 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyMFD0"
FW_PATCHFILE_LOCATION = "/vendor/firmware/"
FW_PATCH_SETTLEMENT_DELAY_MS = 200
LPM_IDLE_TIMEOUT_MULTIPLE = 5
SCO_USE_I2S_INTERFACE = FALSE
BTVND_DBG = FALSE
BTHW_DBG = TRUE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
BRCM_A2DP_OFFLOAD = TRUE
BRCM_A2DP_OFFLOAD_SRC = AUDIO_ROUTE_SRC_I2S
BRCM_A2DP_OFFLOAD_SRC_SF = AUDIO_ROUTE_SF_48K
BRCM_A2DP_OFFLOAD_PCM_PIN_FCN = PCM_PIN_FCN_I2S_SLAVE
BRCM_A2DP_OFFLOAD_MAX_BITPOOL = 51
 12  libbt/include/vnd_ayu.txt 
@@ -0,0 +1,12 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttySAC0"
FW_PATCHFILE_LOCATION = "/vendor/firmware/"
BT_WAKE_VIA_PROC = FALSE
BT_WAKE_VIA_USERIAL_IOCTL = FALSE
UART_TARGET_BAUD_RATE = 3000000
SCO_USE_I2S_INTERFACE = FALSE
LPM_IDLE_TIMEOUT_MULTIPLE = 1
BTVND_DBG = FALSE
BTHW_DBG = TRUE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
FW_PATCH_SETTLEMENT_DELAY_MS = 200
 16  libbt/include/vnd_bass.txt 
@@ -0,0 +1,16 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyHS99"
FW_PATCHFILE_LOCATION = "/vendor/firmware/"
BT_WAKE_VIA_PROC = FALSE
UART_TARGET_BAUD_RATE = 3000000
LPM_IDLE_TIMEOUT_MULTIPLE = 5
LPM_BT_WAKE_POLARITY = 0
LPM_HOST_WAKE_POLARITY = 0
LPM_IDLE_THRESHOLD = 10
LPM_HC_IDLE_THRESHOLD = 10
PROC_BTWRITE_TIMER_TIMEOUT_MS = 0
SCO_USE_I2S_INTERFACE = FALSE
SCO_I2SPCM_IF_ROLE = 0
BTVND_DBG = FALSE
BTHW_DBG = TRUE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
 19  libbt/include/vnd_carp.txt 
@@ -0,0 +1,19 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyHS6"
FW_PATCHFILE_LOCATION = "/vendor/firmware/"
BT_WAKE_VIA_PROC = FALSE
UART_TARGET_BAUD_RATE = 3000000
LPM_IDLE_TIMEOUT_MULTIPLE = 2
LPM_BT_WAKE_POLARITY = 0
LPM_HOST_WAKE_POLARITY = 0
PROC_BTWRITE_TIMER_TIMEOUT_MS = 0
SCO_USE_I2S_INTERFACE = FALSE
SCO_I2SPCM_IF_ROLE = 0
BTVND_DBG = FALSE
BTHW_DBG = TRUE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
BRCM_A2DP_OFFLOAD = TRUE
BRCM_A2DP_OFFLOAD_SRC = AUDIO_ROUTE_SRC_I2S
BRCM_A2DP_OFFLOAD_SRC_SF = AUDIO_ROUTE_SF_48K
BRCM_A2DP_OFFLOAD_PCM_PIN_FCN = PCM_PIN_FCN_I2S_SLAVE
BTA2DP_DEBUG = FALSE
 15  libbt/include/vnd_catfish.txt 
@@ -0,0 +1,15 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyHS0"
FW_PATCHFILE_LOCATION = "/vendor/firmware/"
UART_TARGET_BAUD_RATE = 3000000
SCO_USE_I2S_INTERFACE = TRUE
SCO_I2SPCM_IF_ROLE = 0
BT_WAKE_VIA_PROC = FALSE
LPM_IDLE_TIMEOUT_MULTIPLE = 5
LPM_IDLE_THRESHOLD = 24
LPM_HC_IDLE_THRESHOLD = 24
LPM_BT_WAKE_POLARITY = 0
LPM_HOST_WAKE_POLARITY = 0
BTVND_DBG = FALSE
BTHW_DBG = FALSE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
 15  libbt/include/vnd_catshark.txt 
@@ -0,0 +1,15 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyHS0"
FW_PATCHFILE_LOCATION = "/vendor/firmware/"
UART_TARGET_BAUD_RATE = 3000000
SCO_USE_I2S_INTERFACE = TRUE
SCO_I2SPCM_IF_ROLE = 0
BT_WAKE_VIA_PROC = FALSE
LPM_IDLE_TIMEOUT_MULTIPLE = 5
LPM_IDLE_THRESHOLD = 24
LPM_HC_IDLE_THRESHOLD = 24
LPM_BT_WAKE_POLARITY = 0
LPM_HOST_WAKE_POLARITY = 0
BTVND_DBG = FALSE
BTHW_DBG = FALSE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
 14  libbt/include/vnd_dory.txt 
@@ -0,0 +1,14 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyHS99"
FW_PATCHFILE_LOCATION = "/vendor/firmware/"
BT_WAKE_VIA_PROC = FALSE
UART_TARGET_BAUD_RATE = 3000000
LPM_IDLE_TIMEOUT_MULTIPLE = 5
LPM_BT_WAKE_POLARITY = 0
LPM_HOST_WAKE_POLARITY = 0
PROC_BTWRITE_TIMER_TIMEOUT_MS = 0
SCO_USE_I2S_INTERFACE = FALSE
SCO_I2SPCM_IF_ROLE = 0
BTVND_DBG = FALSE
BTHW_DBG = TRUE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
 8  libbt/include/vnd_generic.txt 
@@ -0,0 +1,8 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyO1"
FW_PATCHFILE_LOCATION = "/vendor/firmware/"
LPM_IDLE_TIMEOUT_MULTIPLE = 5
SCO_USE_I2S_INTERFACE = TRUE
BTVND_DBG = FALSE
BTHW_DBG = TRUE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
 8  libbt/include/vnd_generic_x86.txt 
@@ -0,0 +1,8 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyO1"
FW_PATCHFILE_LOCATION = "/vendor/firmware/"
LPM_IDLE_TIMEOUT_MULTIPLE = 5
SCO_USE_I2S_INTERFACE = TRUE
BTVND_DBG = FALSE
BTHW_DBG = TRUE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
 9  libbt/include/vnd_glacier.txt 
@@ -0,0 +1,9 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyMFD0"
FW_PATCHFILE_LOCATION = "/vendor/firmware/"
FW_PATCH_SETTLEMENT_DELAY_MS = 200
LPM_IDLE_TIMEOUT_MULTIPLE = 5
SCO_USE_I2S_INTERFACE = FALSE
BTVND_DBG = FALSE
BTHW_DBG = TRUE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
 9  libbt/include/vnd_grant.txt 
@@ -0,0 +1,9 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyMFD0"
FW_PATCHFILE_LOCATION = "/vendor/firmware/"
FW_PATCH_SETTLEMENT_DELAY_MS = 200
LPM_IDLE_TIMEOUT_MULTIPLE = 5
SCO_USE_I2S_INTERFACE = FALSE
BTVND_DBG = FALSE
BTHW_DBG = TRUE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
 15  libbt/include/vnd_kingyo.txt 
@@ -0,0 +1,15 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttySAC4"
BTHW_DBG = TRUE
BTVND_DBG = TRUE
FW_PATCHFILE_LOCATION = "/system/vendor/firmware/"
FW_PATCH_SETTLEMENT_DELAY_MS = 200
LPM_IDLE_TIMEOUT_MULTIPLE = 1
#SCO_I2SPCM_IF_CLOCK_RATE = 1
#SCO_I2SPCM_IF_ROLE = 1
#SCO_PCM_IF_CLOCK_MODE = 1
#SCO_PCM_IF_CLOCK_RATE = 1
#SCO_PCM_IF_SYNC_MODE = 1
SCO_USE_I2S_INTERFACE = FALSE
UART_TARGET_BAUD_RATE = 3000000
UPIO_DBG = TRUE
VNDUSERIAL_DBG = TRUE
 12  libbt/include/vnd_koi.txt 
@@ -0,0 +1,12 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttySAC0"
FW_PATCHFILE_LOCATION = "/vendor/firmware/"
BT_WAKE_VIA_PROC = FALSE
BT_WAKE_VIA_USERIAL_IOCTL = FALSE
UART_TARGET_BAUD_RATE = 3000000
SCO_USE_I2S_INTERFACE = FALSE
LPM_IDLE_TIMEOUT_MULTIPLE = 1 
BTVND_DBG = FALSE
BTHW_DBG = TRUE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
FW_PATCH_SETTLEMENT_DELAY_MS = 200
 16  libbt/include/vnd_lenok.txt 
@@ -0,0 +1,16 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyHS99"
FW_PATCHFILE_LOCATION = "/vendor/firmware/"
BT_WAKE_VIA_PROC = FALSE
UART_TARGET_BAUD_RATE = 3000000
LPM_IDLE_TIMEOUT_MULTIPLE = 5
LPM_BT_WAKE_POLARITY = 0
LPM_HOST_WAKE_POLARITY = 0
LPM_IDLE_THRESHOLD = 10
LPM_HC_IDLE_THRESHOLD = 10
PROC_BTWRITE_TIMER_TIMEOUT_MS = 0
SCO_USE_I2S_INTERFACE = FALSE
SCO_I2SPCM_IF_ROLE = 0
BTVND_DBG = FALSE
BTHW_DBG = TRUE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
 17  libbt/include/vnd_nemo.txt 
@@ -0,0 +1,17 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyHS99"
FW_PATCHFILE_LOCATION = "/vendor/firmware/"
BT_WAKE_VIA_PROC = FALSE
UART_TARGET_BAUD_RATE = 3000000
LPM_IDLE_TIMEOUT_MULTIPLE = 5
LPM_BT_WAKE_POLARITY = 0
LPM_HOST_WAKE_POLARITY = 0
LPM_IDLE_THRESHOLD = 10
LPM_HC_IDLE_THRESHOLD = 10
PROC_BTWRITE_TIMER_TIMEOUT_MS = 0
SCO_USE_I2S_INTERFACE = FALSE
SCO_I2SPCM_IF_ROLE = 0
BTVND_DBG = FALSE
BTHW_DBG = TRUE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
FW_PATCH_SETTLEMENT_DELAY_MS = 200
 14  libbt/include/vnd_nerka.txt 
@@ -0,0 +1,14 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttySAC4"
BTHW_DBG = TRUE
BTVND_DBG = TRUE
FW_PATCHFILE_LOCATION = "/system/vendor/firmware/"
FW_PATCH_SETTLEMENT_DELAY_MS = 150
LPM_IDLE_TIMEOUT_MULTIPLE = 5
SCO_I2SPCM_IF_CLOCK_RATE = 1
SCO_I2SPCM_IF_ROLE = 1
SCO_PCM_IF_CLOCK_MODE = 1
SCO_PCM_IF_CLOCK_RATE = 1
SCO_PCM_IF_SYNC_MODE = 1
UART_TARGET_BAUD_RATE = 2000000
UPIO_DBG = TRUE
VNDUSERIAL_DBG = TRUE
 8  libbt/include/vnd_phantasm.txt 
@@ -0,0 +1,8 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyO1"
FW_PATCHFILE_LOCATION = "/vendor/firmware/"
LPM_IDLE_TIMEOUT_MULTIPLE = 5
SCO_USE_I2S_INTERFACE = TRUE
BTVND_DBG = FALSE
BTHW_DBG = TRUE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
 15  libbt/include/vnd_puffer.txt 
@@ -0,0 +1,15 @@
BT_WAKE_VIA_USERIAL_IOCTL = TRUE
BT_WAKE_USERIAL_LDISC = TRUE
LPM_BT_WAKE_POLARITY = 0
LPM_HOST_WAKE_POLARITY = 0
LPM_IDLE_TIMEOUT_MULTIPLE = 5
LPM_IDLE_THRESHOLD = 2
LPM_HC_IDLE_THRESHOLD = 2
SCO_I2SPCM_IF_ROLE = 0
SCO_I2SPCM_IF_CLOCK_RATE = 0
SCO_PCM_IF_CLOCK_RATE = 0
SCO_I2SPCM_IF_CLOCK_RATE4WBS = 1
BTVND_DBG = FALSE
BTHW_DBG = FALSE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
 15  libbt/include/vnd_sawfish.txt 
@@ -0,0 +1,15 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyHS0"
FW_PATCHFILE_LOCATION = "/data/firmware/"
BT_WAKE_VIA_PROC = FALSE
UART_TARGET_BAUD_RATE = 3000000
LPM_IDLE_TIMEOUT_MULTIPLE = 5
LPM_HC_IDLE_THRESHOLD = 24
LPM_IDLE_THRESHOLD = 24
LPM_BT_WAKE_POLARITY = 0
LPM_HOST_WAKE_POLARITY = 0
SCO_USE_I2S_INTERFACE = TRUE
SCO_I2SPCM_IF_ROLE = 0
BTVND_DBG = FALSE
BTHW_DBG = FALSE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
 15  libbt/include/vnd_sawshark.txt 
@@ -0,0 +1,15 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyHS0"
FW_PATCHFILE_LOCATION = "/data/firmware/"
BT_WAKE_VIA_PROC = FALSE
UART_TARGET_BAUD_RATE = 3000000
LPM_IDLE_TIMEOUT_MULTIPLE = 5
LPM_HC_IDLE_THRESHOLD = 24
LPM_IDLE_THRESHOLD = 24
LPM_BT_WAKE_POLARITY = 0
LPM_HOST_WAKE_POLARITY = 0
SCO_USE_I2S_INTERFACE = TRUE
SCO_I2SPCM_IF_ROLE = 0
BTVND_DBG = FALSE
BTHW_DBG = FALSE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
 14  libbt/include/vnd_shasta.txt 
@@ -0,0 +1,14 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyMFD0"
FW_PATCHFILE_LOCATION = "/vendor/firmware/"
FW_PATCH_SETTLEMENT_DELAY_MS = 200
LPM_IDLE_TIMEOUT_MULTIPLE = 5
SCO_USE_I2S_INTERFACE = FALSE
BTVND_DBG = FALSE
BTHW_DBG = TRUE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
BRCM_A2DP_OFFLOAD = TRUE
BRCM_A2DP_OFFLOAD_SRC = AUDIO_ROUTE_SRC_I2S
BRCM_A2DP_OFFLOAD_SRC_SF = AUDIO_ROUTE_SF_48K
BRCM_A2DP_OFFLOAD_PCM_PIN_FCN = PCM_PIN_FCN_I2S_SLAVE
BRCM_A2DP_OFFLOAD_MAX_BITPOOL = 51
 19  libbt/include/vnd_smelt.txt 
@@ -0,0 +1,19 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyHS6"
FW_PATCHFILE_LOCATION = "/vendor/firmware/"
BT_WAKE_VIA_PROC = FALSE
UART_TARGET_BAUD_RATE = 3000000
LPM_IDLE_TIMEOUT_MULTIPLE = 2
LPM_BT_WAKE_POLARITY = 0
LPM_HOST_WAKE_POLARITY = 0
PROC_BTWRITE_TIMER_TIMEOUT_MS = 0
SCO_USE_I2S_INTERFACE = FALSE
SCO_I2SPCM_IF_ROLE = 0
BTVND_DBG = FALSE
BTHW_DBG = TRUE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
BRCM_A2DP_OFFLOAD = TRUE
BRCM_A2DP_OFFLOAD_SRC = AUDIO_ROUTE_SRC_I2S
BRCM_A2DP_OFFLOAD_SRC_SF = AUDIO_ROUTE_SF_48K
BRCM_A2DP_OFFLOAD_PCM_PIN_FCN = PCM_PIN_FCN_I2S_SLAVE
BTA2DP_DEBUG = FALSE
 13  libbt/include/vnd_sparrow.txt 
@@ -0,0 +1,13 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyHS0"
FW_PATCHFILE_LOCATION = "/system/etc/firmware/bt"
UART_TARGET_BAUD_RATE = 3000000
LPM_IDLE_TIMEOUT_MULTIPLE = 5
LPM_BT_WAKE_POLARITY = 1
LPM_HOST_WAKE_POLARITY = 1
BTVND_DBG = FALSE
BTHW_DBG = TRUE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
BT_WAKE_VIA_PROC = FALSE
PROC_BTWRITE_TIMER_TIMEOUT_MS = 0
FW_PATCH_SETTLEMENT_DELAY_MS = 200
 14  libbt/include/vnd_spectralite.txt 
@@ -0,0 +1,14 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyMFD0"
FW_PATCHFILE_LOCATION = "/vendor/firmware/"
FW_PATCH_SETTLEMENT_DELAY_MS = 200
LPM_IDLE_TIMEOUT_MULTIPLE = 5
SCO_USE_I2S_INTERFACE = FALSE
BTVND_DBG = FALSE
BTHW_DBG = TRUE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
BRCM_A2DP_OFFLOAD = TRUE
BRCM_A2DP_OFFLOAD_SRC = AUDIO_ROUTE_SRC_I2S
BRCM_A2DP_OFFLOAD_SRC_SF = AUDIO_ROUTE_SF_48K
BRCM_A2DP_OFFLOAD_PCM_PIN_FCN = PCM_PIN_FCN_I2S_SLAVE
BRCM_A2DP_OFFLOAD_MAX_BITPOOL = 51
 21  libbt/include/vnd_sprat.txt 
@@ -0,0 +1,21 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyHS0"
FW_PATCHFILE_LOCATION = "/vendor/firmware/"
UART_TARGET_BAUD_RATE = 3000000
LPM_IDLE_TIMEOUT_MULTIPLE = 5
SCO_USE_I2S_INTERFACE = FALSE
SCO_I2SPCM_IF_MODE = 0
SCO_I2SPCM_IF_ROLE = 0
SCO_I2SPCM_IF_SAMPLE_RATE = 0
SCO_I2SPCM_IF_CLOCK_RATE = 4
SCO_I2SPCM_IF_CLOCK_RATE4WBS = 4
SCO_PCM_ROUTING = 0
SCO_PCM_IF_CLOCK_RATE = 4
SCO_PCM_IF_FRAME_TYPE = 0
SCO_PCM_IF_SYNC_MODE = 0
SCO_PCM_IF_CLOCK_MODE = 0
BTVND_DBG = FALSE
BTHW_DBG = FALSE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
BT_WAKE_VIA_PROC = TRUE
PROC_BTWRITE_TIMER_TIMEOUT_MS = 700
 16  libbt/include/vnd_sturgeon.txt 
@@ -0,0 +1,16 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyHS0"
FW_PATCHFILE_LOCATION = "/vendor/firmware/"
BT_WAKE_VIA_PROC = FALSE
UART_TARGET_BAUD_RATE = 3000000
LPM_IDLE_TIMEOUT_MULTIPLE = 5
LPM_BT_WAKE_POLARITY = 0
LPM_HOST_WAKE_POLARITY = 0
SCO_USE_I2S_INTERFACE = TRUE
SCO_I2SPCM_IF_ROLE = 0
LPM_IDLE_THRESHOLD = 24
LPM_HC_IDLE_THRESHOLD = 24
BTVND_DBG = FALSE
BTHW_DBG = FALSE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
PROC_BTWRITE_TIMER_TIMEOUT_MS = 800
 15  libbt/include/vnd_tetra.txt 
@@ -0,0 +1,15 @@
BT_WAKE_VIA_USERIAL_IOCTL = TRUE
BT_WAKE_USERIAL_LDISC = TRUE
LPM_BT_WAKE_POLARITY = 0
LPM_HOST_WAKE_POLARITY = 0
LPM_IDLE_TIMEOUT_MULTIPLE = 5
LPM_IDLE_THRESHOLD = 1
LPM_HC_IDLE_THRESHOLD = 1
SCO_I2SPCM_IF_ROLE = 0
SCO_I2SPCM_IF_CLOCK_RATE = 0
SCO_PCM_IF_CLOCK_RATE = 0
SCO_I2SPCM_IF_CLOCK_RATE4WBS = 1
BTVND_DBG = FALSE
BTHW_DBG = FALSE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
 13  libbt/include/vnd_wren.txt 
@@ -0,0 +1,13 @@
BLUETOOTH_UART_DEVICE_PORT = "/dev/ttyHS0"
FW_PATCHFILE_LOCATION = "/system/etc/firmware/bt"
UART_TARGET_BAUD_RATE = 3000000
LPM_IDLE_TIMEOUT_MULTIPLE = 5
LPM_BT_WAKE_POLARITY = 1
LPM_HOST_WAKE_POLARITY = 1
BTVND_DBG = FALSE
BTHW_DBG = TRUE
VNDUSERIAL_DBG = FALSE
UPIO_DBG = FALSE
BT_WAKE_VIA_PROC = FALSE
PROC_BTWRITE_TIMER_TIMEOUT_MS = 0
FW_PATCH_SETTLEMENT_DELAY_MS = 200
 276  libbt/src/bt_vendor_brcm.c 
@@ -0,0 +1,276 @@
/******************************************************************************
 *
 *  Copyright (C) 2009-2012 Broadcom Corporation
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at:
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 ******************************************************************************/

/******************************************************************************
 *
 *  Filename:      bt_vendor_brcm.c
 *
 *  Description:   Broadcom vendor specific library implementation
 *
 ******************************************************************************/

#define LOG_TAG "bt_vendor"

#include <utils/Log.h>
#include <string.h>
#include "bt_vendor_brcm.h"
#include "upio.h"
#include "userial_vendor.h"

#ifndef BTVND_DBG
#define BTVND_DBG FALSE
#endif

#if (BTVND_DBG == TRUE)
#define BTVNDDBG(param, ...) {ALOGD(param, ## __VA_ARGS__);}
#else
#define BTVNDDBG(param, ...) {}
#endif

/******************************************************************************
**  Externs
******************************************************************************/

void hw_config_start(void);
uint8_t hw_lpm_enable(uint8_t turn_on);
uint32_t hw_lpm_get_idle_timeout(void);
void hw_lpm_set_wake_state(uint8_t wake_assert);
#if (SCO_CFG_INCLUDED == TRUE)
void hw_sco_config(void);
#endif
void vnd_load_conf(const char *p_path);
#if (HW_END_WITH_HCI_RESET == TRUE)
void hw_epilog_process(void);
#endif
#if (USE_AXI_BRIDGE_LOCK == TRUE)
void axi_bridge_lock(int locked);
#endif

#if (BRCM_A2DP_OFFLOAD == TRUE)
void brcm_vnd_a2dp_init(bt_vendor_callbacks_t *callback);
int brcm_vnd_a2dp_execute(bt_vendor_opcode_t, void *ev_data);
#endif

/******************************************************************************
**  Variables
******************************************************************************/

bt_vendor_callbacks_t *bt_vendor_cbacks = NULL;
uint8_t vnd_local_bd_addr[6]={0x00, 0x00, 0x00, 0x00, 0x00, 0x00};

/******************************************************************************
**  Local type definitions
******************************************************************************/

/******************************************************************************
**  Static Variables
******************************************************************************/

static const tUSERIAL_CFG userial_init_cfg =
{
    (USERIAL_DATABITS_8 | USERIAL_PARITY_NONE | USERIAL_STOPBITS_1),
    USERIAL_BAUD_115200
};

/******************************************************************************
**  Functions
******************************************************************************/

/*****************************************************************************
**
**   BLUETOOTH VENDOR INTERFACE LIBRARY FUNCTIONS
**
*****************************************************************************/

static int init(const bt_vendor_callbacks_t* p_cb, unsigned char *local_bdaddr)
{
    ALOGI("init");

    if (p_cb == NULL)
    {
        ALOGE("init failed with no user callbacks!");
        return -1;
    }

#if (VENDOR_LIB_RUNTIME_TUNING_ENABLED == TRUE)
    ALOGW("*****************************************************************");
    ALOGW("*****************************************************************");
    ALOGW("** Warning - BT Vendor Lib is loaded in debug tuning mode!");
    ALOGW("**");
    ALOGW("** If this is not intentional, rebuild libbt-vendor.so ");
    ALOGW("** with VENDOR_LIB_RUNTIME_TUNING_ENABLED=FALSE and ");
    ALOGW("** check if any run-time tuning parameters needed to be");
    ALOGW("** carried to the build-time configuration accordingly.");
    ALOGW("*****************************************************************");
    ALOGW("*****************************************************************");
#endif

    userial_vendor_init();
    upio_init();

    vnd_load_conf(VENDOR_LIB_CONF_FILE);

    /* store reference to user callbacks */
    bt_vendor_cbacks = (bt_vendor_callbacks_t *) p_cb;

    /* This is handed over from the stack */
    memcpy(vnd_local_bd_addr, local_bdaddr, 6);

#if (BRCM_A2DP_OFFLOAD == TRUE)
    brcm_vnd_a2dp_init(bt_vendor_cbacks);
#endif

    return 0;
}


/** Requested operations */
static int op(bt_vendor_opcode_t opcode, void *param)
{
    int retval = 0;

    BTVNDDBG("op for %d", opcode);

    switch(opcode)
    {
        case BT_VND_OP_POWER_CTRL:
            {
                int *state = (int *) param;
                upio_set_bluetooth_power(UPIO_BT_POWER_OFF);
                if (*state == BT_VND_PWR_ON)
                {
#if (USE_AXI_BRIDGE_LOCK == TRUE)
                    axi_bridge_lock(1);
#endif
                    ALOGW("NOTE: BT_VND_PWR_ON now forces power-off first");
                    upio_set_bluetooth_power(UPIO_BT_POWER_ON);
                } else {
                    /* Make sure wakelock is released */
                    hw_lpm_set_wake_state(false);
                }
            }
            break;

        case BT_VND_OP_FW_CFG:
            {
                hw_config_start();
            }
            break;

        case BT_VND_OP_SCO_CFG:
            {
#if (SCO_CFG_INCLUDED == TRUE)
                hw_sco_config();
#else
                retval = -1;
#endif
            }
            break;

        case BT_VND_OP_USERIAL_OPEN:
            {
                int (*fd_array)[] = (int (*)[]) param;
                int fd, idx;
                fd = userial_vendor_open((tUSERIAL_CFG *) &userial_init_cfg);
                if (fd != -1)
                {
                    for (idx=0; idx < CH_MAX; idx++)
                        (*fd_array)[idx] = fd;

                    retval = 1;
                }
                /* retval contains numbers of open fd of HCI channels */
            }
            break;

        case BT_VND_OP_USERIAL_CLOSE:
            {
                userial_vendor_close();
            }
            break;

        case BT_VND_OP_GET_LPM_IDLE_TIMEOUT:
            {
                uint32_t *timeout_ms = (uint32_t *) param;
                *timeout_ms = hw_lpm_get_idle_timeout();
            }
            break;

        case BT_VND_OP_LPM_SET_MODE:
            {
                uint8_t *mode = (uint8_t *) param;
                retval = hw_lpm_enable(*mode);
            }
            break;

        case BT_VND_OP_LPM_WAKE_SET_STATE:
            {
                uint8_t *state = (uint8_t *) param;
                uint8_t wake_assert = (*state == BT_VND_LPM_WAKE_ASSERT) ? \
                                        TRUE : FALSE;

                hw_lpm_set_wake_state(wake_assert);
            }
            break;

         case BT_VND_OP_SET_AUDIO_STATE:
            {
                retval = hw_set_audio_state((bt_vendor_op_audio_state_t *)param);
            }
            break;

        case BT_VND_OP_EPILOG:
            {
#if (HW_END_WITH_HCI_RESET == FALSE)
                if (bt_vendor_cbacks)
                {
                    bt_vendor_cbacks->epilog_cb(BT_VND_OP_RESULT_SUCCESS);
                }
#else
                hw_epilog_process();
#endif
            }
            break;
#if (BRCM_A2DP_OFFLOAD == TRUE)
        case BT_VND_OP_A2DP_OFFLOAD_START:
        case BT_VND_OP_A2DP_OFFLOAD_STOP:
            retval = brcm_vnd_a2dp_execute(opcode, param);
            break;
#endif
    }

    return retval;
}

/** Closes the interface */
static void cleanup( void )
{
    BTVNDDBG("cleanup");

    upio_cleanup();

    bt_vendor_cbacks = NULL;
}

// Entry point of DLib
const bt_vendor_interface_t BLUETOOTH_VENDOR_LIB_INTERFACE = {
    sizeof(bt_vendor_interface_t),
    init,
    op,
    cleanup
};
 153  libbt/src/conf.c 
@@ -0,0 +1,153 @@
/******************************************************************************
 *
 *  Copyright (C) 2009-2012 Broadcom Corporation
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at:
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 ******************************************************************************/

/******************************************************************************
 *
 *  Filename:      conf.c
 *
 *  Description:   Contains functions to conduct run-time module configuration
 *                 based on entries present in the .conf file
 *
 ******************************************************************************/

#define LOG_TAG "bt_vnd_conf"

#include <utils/Log.h>
#include <string.h>
#include "bt_vendor_brcm.h"
#include <stdio.h>

/******************************************************************************
**  Externs
******************************************************************************/
int userial_set_port(char *p_conf_name, char *p_conf_value, int param);
int hw_set_patch_file_path(char *p_conf_name, char *p_conf_value, int param);
int hw_set_patch_file_name(char *p_conf_name, char *p_conf_value, int param);
int hw_set_pre_patch_file_name(char *p_conf_name, char *p_conf_value, int param);
int userial_set_force_use_2_stop_bits(char *p_conf_name, char *p_conf_value, int param);
#if (VENDOR_LIB_RUNTIME_TUNING_ENABLED == TRUE)
int hw_set_patch_settlement_delay(char *p_conf_name, char *p_conf_value, int param);
#endif


/******************************************************************************
**  Local type definitions
******************************************************************************/

#define CONF_COMMENT '#'
#define CONF_DELIMITERS " =\n\r\t"
#define CONF_VALUES_DELIMITERS "=\n\r\t"
#define CONF_MAX_LINE_LEN 255

typedef int (conf_action_t)(char *p_conf_name, char *p_conf_value, int param);

typedef struct {
    const char *conf_entry;
    conf_action_t *p_action;
    int param;
} conf_entry_t;

/******************************************************************************
**  Static variables
******************************************************************************/

/*
 * Current supported entries and corresponding action functions
 */
static const conf_entry_t conf_table[] = {
    {"UartPort", userial_set_port, 0},
    {"FwPatchFilePath", hw_set_patch_file_path, 0},
    {"FwPatchFileName", hw_set_patch_file_name, 0},
    {"FwPrePatchFileName", hw_set_pre_patch_file_name, 0},
    {"UartForceUse2StopBits", userial_set_force_use_2_stop_bits, 0},

#if (VENDOR_LIB_RUNTIME_TUNING_ENABLED == TRUE)
    {"FwPatchSettlementDelay", hw_set_patch_settlement_delay, 0},
#endif
    {(const char *) NULL, NULL, 0}
};

/*****************************************************************************
**   CONF INTERFACE FUNCTIONS
*****************************************************************************/

/*******************************************************************************
**
** Function        vnd_load_conf
**
** Description     Read conf entry from p_path file one by one and call
**                 the corresponding config function
**
** Returns         None
**
*******************************************************************************/
void vnd_load_conf(const char *p_path)
{
    FILE    *p_file;
    char    *p_name;
    char    *p_value;
    conf_entry_t    *p_entry;
    char    line[CONF_MAX_LINE_LEN+1]; /* add 1 for \0 char */

    ALOGI("Attempt to load conf from %s", p_path);

    if ((p_file = fopen(p_path, "r")) != NULL)
    {
        /* read line by line */
        while (fgets(line, CONF_MAX_LINE_LEN+1, p_file) != NULL)
        {
            if (line[0] == CONF_COMMENT)
                continue;

            p_name = strtok(line, CONF_DELIMITERS);

            if (NULL == p_name)
            {
                continue;
            }

            p_value = strtok(NULL, CONF_DELIMITERS);

            if (NULL == p_value)
            {
                ALOGW("vnd_load_conf: missing value for name: %s", p_name);
                continue;
            }

            p_entry = (conf_entry_t *)conf_table;

            while (p_entry->conf_entry != NULL)
            {
                if (strcmp(p_entry->conf_entry, (const char *)p_name) == 0)
                {
                    p_entry->p_action(p_name, p_value, p_entry->param);
                    break;
                }

                p_entry++;
            }
        }

        fclose(p_file);
    }
    else
    {
        ALOGI( "vnd_load_conf file >%s< not found", p_path);
    }
}

 1,897  libbt/src/hardware.c 
Large diffs are not rendered by default.

 532  libbt/src/upio.c 
Large diffs are not rendered by default.

 397  libbt/src/userial_vendor.c 
@@ -0,0 +1,397 @@
/******************************************************************************
 *
 *  Copyright (C) 2009-2012 Broadcom Corporation
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at:
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 ******************************************************************************/

/******************************************************************************
 *
 *  Filename:      userial_vendor.c
 *
 *  Description:   Contains vendor-specific userial functions
 *
 ******************************************************************************/

#define LOG_TAG "bt_userial_vendor"

#include <utils/Log.h>
#include <termios.h>
#include <fcntl.h>
#include <errno.h>
#include <stdio.h>
#include <string.h>
#include "bt_vendor_brcm.h"
#include "userial.h"
#include "userial_vendor.h"
#include <unistd.h>

/******************************************************************************
**  Constants & Macros
******************************************************************************/

#ifndef VNDUSERIAL_DBG
#define VNDUSERIAL_DBG FALSE
#endif

#if (VNDUSERIAL_DBG == TRUE)
#define VNDUSERIALDBG(param, ...) {ALOGD(param, ## __VA_ARGS__);}
#else
#define VNDUSERIALDBG(param, ...) {}
#endif

#define VND_PORT_NAME_MAXLEN    256

/******************************************************************************
**  Local type definitions
******************************************************************************/

/* vendor serial control block */
typedef struct
{
    int fd;                     /* fd to Bluetooth device */
    struct termios termios;     /* serial terminal of BT port */
    char port_name[VND_PORT_NAME_MAXLEN];
} vnd_userial_cb_t;

/******************************************************************************
**  Static variables
******************************************************************************/

static vnd_userial_cb_t vnd_userial;
static int vnd_userial_force_2stopbits = UART_FORCE_TWO_STOPBITS;

/*****************************************************************************
**   Helper Functions
*****************************************************************************/

/*******************************************************************************
**
** Function        userial_to_tcio_baud
**
** Description     helper function converts USERIAL baud rates into TCIO
**                  conforming baud rates
**
** Returns         TRUE/FALSE
**
*******************************************************************************/
uint8_t userial_to_tcio_baud(uint8_t cfg_baud, uint32_t *baud)
{
    if (cfg_baud == USERIAL_BAUD_115200)
        *baud = B115200;
    else if (cfg_baud == USERIAL_BAUD_4M)
        *baud = B4000000;
    else if (cfg_baud == USERIAL_BAUD_3M)
        *baud = B3000000;
    else if (cfg_baud == USERIAL_BAUD_2M)
        *baud = B2000000;
    else if (cfg_baud == USERIAL_BAUD_1M)
        *baud = B1000000;
    else if (cfg_baud == USERIAL_BAUD_921600)
        *baud = B921600;
    else if (cfg_baud == USERIAL_BAUD_460800)
        *baud = B460800;
    else if (cfg_baud == USERIAL_BAUD_230400)
        *baud = B230400;
    else if (cfg_baud == USERIAL_BAUD_57600)
        *baud = B57600;
    else if (cfg_baud == USERIAL_BAUD_19200)
        *baud = B19200;
    else if (cfg_baud == USERIAL_BAUD_9600)
        *baud = B9600;
    else if (cfg_baud == USERIAL_BAUD_1200)
        *baud = B1200;
    else if (cfg_baud == USERIAL_BAUD_600)
        *baud = B600;
    else
    {
        ALOGE( "userial vendor open: unsupported baud idx %i", cfg_baud);
        *baud = B115200;
        return FALSE;
    }

    return TRUE;
}

#if (BT_WAKE_VIA_USERIAL_IOCTL==TRUE)
/*******************************************************************************
**
** Function        userial_ioctl_init_bt_wake
**
** Description     helper function to set the open state of the bt_wake if ioctl
**                  is used. it should not hurt in the rfkill case but it might
**                  be better to compile it out.
**
** Returns         none
**
*******************************************************************************/
void userial_ioctl_init_bt_wake(int fd)
{
    uint32_t bt_wake_state;

#if (BT_WAKE_USERIAL_LDISC==TRUE)
    int ldisc = N_BRCM_HCI; /* brcm sleep mode support line discipline */

    /* attempt to load enable discipline driver */
    if (ioctl(vnd_userial.fd, TIOCSETD, &ldisc) < 0)
    {
        VNDUSERIALDBG("USERIAL_Open():fd %d, TIOCSETD failed: error %d for ldisc: %d",
                      fd, errno, ldisc);
    }
#endif



    /* assert BT_WAKE through ioctl */
    ioctl(fd, USERIAL_IOCTL_BT_WAKE_ASSERT, NULL);
    ioctl(fd, USERIAL_IOCTL_BT_WAKE_GET_ST, &bt_wake_state);
    VNDUSERIALDBG("userial_ioctl_init_bt_wake read back BT_WAKE state=%i", \
               bt_wake_state);
}
#endif // (BT_WAKE_VIA_USERIAL_IOCTL==TRUE)


/*****************************************************************************
**   Userial Vendor API Functions
*****************************************************************************/

/*******************************************************************************
**
** Function        userial_vendor_init
**
** Description     Initialize userial vendor-specific control block
**
** Returns         None
**
*******************************************************************************/
void userial_vendor_init(void)
{
    vnd_userial.fd = -1;
    snprintf(vnd_userial.port_name, VND_PORT_NAME_MAXLEN, "%s", \
            BLUETOOTH_UART_DEVICE_PORT);
}

/*******************************************************************************
**
** Function        userial_vendor_open
**
** Description     Open the serial port with the given configuration
**
** Returns         device fd
**
*******************************************************************************/
int userial_vendor_open(tUSERIAL_CFG *p_cfg)
{
    uint32_t baud;
    uint8_t data_bits;
    uint16_t parity;
    uint8_t stop_bits;

    vnd_userial.fd = -1;

    if (!userial_to_tcio_baud(p_cfg->baud, &baud))
    {
        return -1;
    }

    if(p_cfg->fmt & USERIAL_DATABITS_8)
        data_bits = CS8;
    else if(p_cfg->fmt & USERIAL_DATABITS_7)
        data_bits = CS7;
    else if(p_cfg->fmt & USERIAL_DATABITS_6)
        data_bits = CS6;
    else if(p_cfg->fmt & USERIAL_DATABITS_5)
        data_bits = CS5;
    else
    {
        ALOGE("userial vendor open: unsupported data bits");
        return -1;
    }

    if(p_cfg->fmt & USERIAL_PARITY_NONE)
        parity = 0;
    else if(p_cfg->fmt & USERIAL_PARITY_EVEN)
        parity = PARENB;
    else if(p_cfg->fmt & USERIAL_PARITY_ODD)
        parity = (PARENB | PARODD);
    else
    {
        ALOGE("userial vendor open: unsupported parity bit mode");
        return -1;
    }

    if(vnd_userial_force_2stopbits || (p_cfg->fmt & USERIAL_STOPBITS_2))
        stop_bits = CSTOPB;
    else if(p_cfg->fmt & USERIAL_STOPBITS_1)
        stop_bits = 0;
    else
    {
        ALOGE("userial vendor open: unsupported stop bits");
        return -1;
    }

    ALOGI("userial vendor open: opening %s", vnd_userial.port_name);

    if ((vnd_userial.fd = open(vnd_userial.port_name, O_RDWR)) == -1)
    {
        ALOGE("userial vendor open: unable to open %s", vnd_userial.port_name);
        return -1;
    }

    tcflush(vnd_userial.fd, TCIOFLUSH);

    tcgetattr(vnd_userial.fd, &vnd_userial.termios);
    cfmakeraw(&vnd_userial.termios);
    vnd_userial.termios.c_cflag |= (CRTSCTS | stop_bits);
    tcsetattr(vnd_userial.fd, TCSANOW, &vnd_userial.termios);
    tcflush(vnd_userial.fd, TCIOFLUSH);

    tcsetattr(vnd_userial.fd, TCSANOW, &vnd_userial.termios);
    tcflush(vnd_userial.fd, TCIOFLUSH);
    tcflush(vnd_userial.fd, TCIOFLUSH);

    /* set input/output baudrate */
    cfsetospeed(&vnd_userial.termios, baud);
    cfsetispeed(&vnd_userial.termios, baud);
    tcsetattr(vnd_userial.fd, TCSANOW, &vnd_userial.termios);

#if (BT_WAKE_VIA_USERIAL_IOCTL==TRUE)
    userial_ioctl_init_bt_wake(vnd_userial.fd);
#endif

    ALOGI("device fd = %d open", vnd_userial.fd);

    return vnd_userial.fd;
}

/*******************************************************************************
**
** Function        userial_vendor_close
**
** Description     Conduct vendor-specific close work
**
** Returns         None
**
*******************************************************************************/
void userial_vendor_close(void)
{
    int result;

    if (vnd_userial.fd == -1)
        return;

#if (BT_WAKE_VIA_USERIAL_IOCTL==TRUE)
    /* de-assert bt_wake BEFORE closing port */
    ioctl(vnd_userial.fd, USERIAL_IOCTL_BT_WAKE_DEASSERT, NULL);
#endif

    ALOGI("device fd = %d close", vnd_userial.fd);
    // flush Tx before close to make sure no chars in buffer
    tcflush(vnd_userial.fd, TCIOFLUSH);
    if ((result = close(vnd_userial.fd)) < 0)
        ALOGE( "close(fd:%d) FAILED result:%d", vnd_userial.fd, result);

    vnd_userial.fd = -1;
}

/*******************************************************************************
**
** Function        userial_vendor_set_baud
**
** Description     Set new baud rate
**
** Returns         None
**
*******************************************************************************/
void userial_vendor_set_baud(uint8_t userial_baud)
{
    uint32_t tcio_baud;

    userial_to_tcio_baud(userial_baud, &tcio_baud);

    cfsetospeed(&vnd_userial.termios, tcio_baud);
    cfsetispeed(&vnd_userial.termios, tcio_baud);
    tcsetattr(vnd_userial.fd, TCSANOW, &vnd_userial.termios);
}

/*******************************************************************************
**
** Function        userial_vendor_ioctl
**
** Description     ioctl inteface
**
** Returns         None
**
*******************************************************************************/
void userial_vendor_ioctl(userial_vendor_ioctl_op_t op, void *p_data)
{
    switch(op)
    {
#if (BT_WAKE_VIA_USERIAL_IOCTL==TRUE)
        case USERIAL_OP_ASSERT_BT_WAKE:
            VNDUSERIALDBG("## userial_vendor_ioctl: Asserting BT_Wake ##");
            ioctl(vnd_userial.fd, USERIAL_IOCTL_BT_WAKE_ASSERT, NULL);
            break;

        case USERIAL_OP_DEASSERT_BT_WAKE:
            VNDUSERIALDBG("## userial_vendor_ioctl: De-asserting BT_Wake ##");
            ioctl(vnd_userial.fd, USERIAL_IOCTL_BT_WAKE_DEASSERT, NULL);
            break;

        case USERIAL_OP_GET_BT_WAKE_STATE:
            ioctl(vnd_userial.fd, USERIAL_IOCTL_BT_WAKE_GET_ST, p_data);
            break;
#endif  //  (BT_WAKE_VIA_USERIAL_IOCTL==TRUE)

        default:
            break;
    }
}

/*******************************************************************************
**
** Function        userial_set_port
**
** Description     Configure UART port name
**
** Returns         0 : Success
**                 Otherwise : Fail
**
*******************************************************************************/
int userial_set_port(char *p_conf_name, char *p_conf_value, int param)
{
    strcpy(vnd_userial.port_name, p_conf_value);

    return 0;
}

/*******************************************************************************
**
** Function        userial_set_force_use_2_stop_bits
**
** Description     Configure UART port name
**
** Returns         0 : Success
**                 Otherwise : Fail
**
*******************************************************************************/
int userial_set_force_use_2_stop_bits(char *p_conf_name, char *p_conf_value, int param)
{
    if (strcmp(p_conf_value, "true") == 0)
        vnd_userial_force_2stopbits = TRUE;
    else
        vnd_userial_force_2stopbits = FALSE;
    return 0;
}

 21  libbt/vnd_buildcfg.mk 
@@ -0,0 +1,21 @@
generated_sources := $(local-generated-sources-dir)

# Allow external configuration file
ifneq (,$(BOARD_CUSTOM_BT_CONFIG))
SRC := $(BOARD_CUSTOM_BT_CONFIG)
else
SRC := $(call my-dir)/include/$(addprefix vnd_, $(addsuffix .txt,$(basename $(TARGET_DEVICE))))
endif
ifeq (,$(wildcard $(SRC)))
# configuration file does not exist. Use default one
SRC := $(call my-dir)/include/vnd_generic.txt
endif
GEN := $(generated_sources)/vnd_buildcfg.h
TOOL := $(call my-dir)/gen-buildcfg.sh

$(GEN): PRIVATE_PATH := $(call my-dir)
$(GEN): PRIVATE_CUSTOM_TOOL = $(TOOL) $< $@
$(GEN): $(SRC)  $(TOOL)
	$(transform-generated-source)

LOCAL_GENERATED_SOURCES += $(GEN)
  2  libshims/Android.mk 
@@ -18,7 +18,7 @@ LOCAL_PATH := $(call my-dir)
include $(CLEAR_VARS)	include $(CLEAR_VARS)
LOCAL_SRC_FILES := libqsap_shim.c	LOCAL_SRC_FILES := libqsap_shim.c
LOCAL_SHARED_LIBRARIES := libqsap_sdk liblog	LOCAL_SHARED_LIBRARIES := libqsap_sdk liblog
LOCAL_C_INCLUDES := $(TOP)/system/qcom/softap/sdk	LOCAL_C_INCLUDES := $(COMMON_PATH)/softap/sdk
LOCAL_MODULE := libqsap_shim	LOCAL_MODULE := libqsap_shim
LOCAL_MODULE_TAGS := optional	LOCAL_MODULE_TAGS := optional
LOCAL_PROPRIETARY_MODULE := true	LOCAL_PROPRIETARY_MODULE := true
 22  overlay/common/frameworks/base/core/res/res/values/dimens.xml 
@@ -0,0 +1,22 @@
<?xml version="1.0" encoding="utf-8"?>
<!--
 * Copyright (c) 2006, The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/
-->
<resources>
    <dimen name="config_dialogCornerRadius">8.0dip</dimen>
    <dimen name="config_buttonCornerRadius">4.0dip</dimen>
    <dimen name="config_progressBarCornerRadius">1000.0dip</dimen>
</resources>
 20  overlay/common/packages/apps/Settings/res/values/dimens.xml 
@@ -0,0 +1,20 @@
<?xml version="1.0" encoding="utf-8"?>
<!-- Copyright 2018 The Android Open Source Project
     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at
     http://www.apache.org/licenses/LICENSE-2.0
     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
-->

<resources>
    <dimen name="search_bar_corner_radius">24.0dip</dimen>
    <dimen name="suggestion_card_corner_radius">8.0dip</dimen>
</resources>
  40  overlay/frameworks/base/core/res/res/values/config.xml 
@@ -416,6 +416,40 @@
        <item>XTRA_SERVER_4=https://xtra3.gpsonextra.net/xtra3grc.bin</item>	        <item>XTRA_SERVER_4=https://xtra3.gpsonextra.net/xtra3grc.bin</item>
    </string-array>	    </string-array>


<!-- Begin: Doze mode -->

    <!-- ComponentName of a dream to show whenever the system would otherwise have
         gone to sleep.  When the PowerManager is asked to go to sleep, it will instead
         try to start this dream if possible.  The dream should typically call startDozing()
         to put the display into a low power state and allow the application processor
         to be suspended.  When the dream ends, the system will go to sleep as usual.
         Specify the component name or an empty string if none.
          Note that doze dreams are not subject to the same start conditions as ordinary dreams.
         Doze dreams will run whenever the power manager is in a dozing state. -->
    <string name="config_dozeComponent">com.android.systemui/com.android.systemui.doze.DozeService</string>
     <!-- If true, the doze component is not started until after the screen has been
         turned off and the screen off animation has been performed. -->
    <bool name="config_dozeAfterScreenOff">true</bool>
     <!-- Power Management: Specifies whether to decouple the interactive state of the
         device from the display on/off state.
          When false, setInteractive(..., true) will be called before the display is turned on
         and setInteractive(..., false) will be called after the display is turned off.
         This mode provides best compatibility for devices that expect the interactive
         state to be tied to the display state.
          When true, setInteractive(...) will be called independently of whether the display
         is being turned on or off.  This mode enables the power manager to reduce
         clocks and disable the touch controller while the display is on.
          This resource should be set to "true" when a doze component has been specified
         to maximize power savings but not all devices support it.
          Refer to power.h for details.
    -->
    <bool name="config_powerDecoupleInteractiveModeFromDisplay">true</bool>

    <!-- Allow automatic adjusting of the screen brightness while dozing in low power state. -->
    <bool name="config_allowAutoBrightnessWhileDozing">true</bool>

<!-- End: Doze mode -->

    <!-- Device configuration setting the minfree tunable in the lowmemorykiller in the kernel.	    <!-- Device configuration setting the minfree tunable in the lowmemorykiller in the kernel.
         A high value will cause the lowmemorykiller to fire earlier, keeping more memory	         A high value will cause the lowmemorykiller to fire earlier, keeping more memory
         in the file cache and preventing I/O thrashing, but allowing fewer processes to	         in the file cache and preventing I/O thrashing, but allowing fewer processes to
@@ -427,4 +461,10 @@
         153600 = 150 MB	         153600 = 150 MB
     -->	     -->
    <integer name="config_lowMemoryKillerMinFreeKbytesAbsolute">153600</integer>	    <integer name="config_lowMemoryKillerMinFreeKbytesAbsolute">153600</integer>

    <!-- Minimum color temperature, in Kelvin, supported by Night display. -->
    <integer name="config_nightDisplayColorTemperatureMin">1200</integer>

    <!-- Whether the device supports Smart Pixels -->
    <bool name="config_enableSmartPixels">true</bool>
</resources>	</resources>
 30  overlay/frameworks/base/core/res/res/values/dimens.xml 
@@ -0,0 +1,30 @@
<?xml version="1.0" encoding="utf-8"?>
<!--
 * Copyright (c) 2006, The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/
-->
<resources>
    <!-- Radius of the software rounded corners at the top of the display in its natural
        orientation. If zero, the value of rounded_corner_radius is used. -->
    <dimen name="rounded_corner_radius_top">24px</dimen>

    <!-- Radius of the software rounded corners at the bottom of the display in its natural
        orientation. If zero, the value of rounded_corner_radius is used. -->
    <dimen name="rounded_corner_radius_bottom">24px</dimen>

    <!-- Padding  of the software rounded corners at the bottom and top of the display in its natural
        orientation. -->
    <dimen name="rounded_corner_content_padding">12px</dimen>
</resources>
  9  overlay/frameworks/base/packages/SystemUI/res/values/config.xml 
@@ -45,4 +45,13 @@
        wifi,bt,nfc,rotation,location,cell,dnd,airplane,custom(com.abhi.flashlight/.TorchTile)	        wifi,bt,nfc,rotation,location,cell,dnd,airplane,custom(com.abhi.flashlight/.TorchTile)
    </string>	    </string>


<!-- Begin: Doze mode -->
    <!-- Doze: does this device support STATE_DOZE and STATE_DOZE_SUSPEND?  -->
    <bool name="doze_display_state_supported">false</bool>
<!-- End: Doze mode -->

    <!-- Max visible notification icons -->
    <integer name="config_maxVisibleNotificationIcons">7</integer>
    <integer name="config_maxVisibleNotificationIconsWhenDark">8</integer>

</resources>	</resources>
  195  permissions/privapp-permissions-g4.xml 
@@ -46,6 +46,201 @@
    <privapp-permissions package="org.fdroid.fdroid.privileged">	    <privapp-permissions package="org.fdroid.fdroid.privileged">
        <permission name="android.permission.DELETE_PACKAGES"/>	        <permission name="android.permission.DELETE_PACKAGES"/>
        <permission name="android.permission.INSTALL_PACKAGES"/>	        <permission name="android.permission.INSTALL_PACKAGES"/>
        <permission name="android.permission.MANAGE_USERS"/>
        <permission name="android.permission.OBSERVE_GRANT_REVOKE_PERMISSIONS"/>
        <permission name="android.permission.UPDATE_APP_OPS_STATS"/>
        <permission name="android.permission.USE_RESERVED_DISK"/>
    </privapp-permissions>

    <privapp-permissions package="com.google.android.partnersetup">
        <permission name="android.permission.CHANGE_COMPONENT_ENABLED_STATE"/>
        <permission name="android.permission.CHANGE_CONFIGURATION"/>
        <permission name="android.permission.READ_PRIVILEGED_PHONE_STATE"/>
    </privapp-permissions>

    <privapp-permissions package="com.google.android.settings.intelligence">
        <permission name="android.permission.ACCESS_FINE_LOCATION"/>
        <permission name="android.permission.ACCESS_NETWORK_STATE"/>
        <permission name="android.permission.BLUETOOTH"/>
        <permission name="android.permission.BLUETOOTH_ADMIN"/>
        <permission name="android.permission.GET_PACKAGE_SIZE"/>
        <permission name="android.permission.INTERNET"/>
        <permission name="android.permission.MANAGE_FINGERPRINT"/>
        <permission name="android.permission.MODIFY_PHONE_STATE"/>
        <permission name="android.permission.READ_PHONE_STATE"/>
        <permission name="android.permission.READ_SEARCH_INDEXABLES"/>
        <permission name="android.permission.RECEIVE_BOOT_COMPLETED"/>
        <permission name="android.permission.WRITE_SECURE_SETTINGS"/>
        <permission name="com.google.android.gms.permission.ACTIVITY_RECOGNITION"/>
        <permission name="com.google.android.providers.gsf.permission.READ_GSERVICES"/>
    </privapp-permissions>

    <privapp-permissions package="com.google.android.apps.scone">
        <permission name="android.permission.LOCATION_HARDWARE"/>
        <permission name="android.permission.READ_PRIVILEGED_PHONE_STATE"/>
    </privapp-permissions>

    <privapp-permissions package="com.google.android.setupwizard">
        <permission name="android.permission.ACCESS_COARSE_LOCATION"/>
        <permission name="android.permission.ACCESS_NETWORK_STATE"/>
        <permission name="android.permission.ACCESS_WIFI_STATE"/>
        <permission name="android.permission.AUTHENTICATE_ACCOUNTS"/>
        <permission name="android.permission.BACKUP"/>
        <permission name="android.permission.CALL_PHONE"/>
        <permission name="android.permission.CAMERA"/>
        <permission name="android.permission.CHANGE_COMPONENT_ENABLED_STATE"/>
        <permission name="android.permission.CHANGE_CONFIGURATION"/>
        <permission name="android.permission.CHANGE_NETWORK_STATE"/>
        <permission name="android.permission.CHANGE_WIFI_STATE"/>
        <permission name="android.permission.CONNECTIVITY_INTERNAL"/>
        <permission name="android.permission.DISABLE_KEYGUARD"/>
        <permission name="android.permission.DISPATCH_PROVISIONING_MESSAGE"/>
        <permission name="android.permission.FOREGROUND_SERVICE"/>
        <permission name="android.permission.INTERNET"/>
        <permission name="android.permission.INVOKE_CARRIER_SETUP"/>
        <permission name="android.permission.LOCAL_MAC_ADDRESS"/>
        <permission name="android.permission.MANAGE_ACCOUNTS"/>
        <permission name="android.permission.MANAGE_DEVICE_ADMINS"/>
        <permission name="android.permission.MANAGE_FINGERPRINT"/>
        <permission name="android.permission.MANAGE_USB"/>
        <permission name="android.permission.MANAGE_USERS"/>
        <permission name="android.permission.MASTER_CLEAR"/>
        <permission name="android.permission.MODIFY_PHONE_STATE"/>
        <permission name="android.permission.NETWORK_SETUP_WIZARD"/>
        <permission name="android.permission.NOTIFICATION_DURING_SETUP"/>
        <permission name="android.permission.OVERRIDE_WIFI_CONFIG"/>
        <permission name="android.permission.PEERS_MAC_ADDRESS"/>
        <permission name="android.permission.PERFORM_CDMA_PROVISIONING"/>
        <permission name="android.permission.PROCESS_OUTGOING_CALLS"/>
        <permission name="android.permission.READ_CONTACTS"/>
        <permission name="android.permission.READ_EXTERNAL_STORAGE"/>
        <permission name="android.permission.READ_PHONE_STATE"/>
        <permission name="android.permission.READ_PRIVILEGED_PHONE_STATE"/>
        <permission name="android.permission.READ_PROFILE"/>
        <permission name="android.permission.REBOOT"/>
        <permission name="android.permission.RECEIVE_BOOT_COMPLETED"/>
        <permission name="android.permission.REQUEST_NETWORK_SCORES"/>
        <permission name="android.permission.SET_TIME"/>
        <permission name="android.permission.SET_TIME_ZONE"/>
        <permission name="android.permission.SHUTDOWN"/>
        <permission name="android.permission.STATUS_BAR"/>
        <permission name="android.permission.UPDATE_LOCK_TASK_PACKAGES"/>
        <permission name="android.permission.USE_COLORIZED_NOTIFICATIONS"/>
        <permission name="android.permission.USE_CREDENTIALS"/>
        <permission name="android.permission.USE_FINGERPRINT"/>
        <permission name="android.permission.WAKE_LOCK"/>
        <permission name="android.permission.WRITE_APN_SETTINGS"/>
        <permission name="android.permission.WRITE_CONTACTS"/>
        <permission name="android.permission.WRITE_EXTERNAL_STORAGE"/>
        <permission name="android.permission.WRITE_PROFILE"/>
        <permission name="android.permission.WRITE_SECURE_SETTINGS"/>
        <permission name="android.permission.WRITE_SETTINGS"/>
        <permission name="android.permission.WRITE_SYNC_SETTINGS"/>
        <permission name="com.android.vending.setup.PLAY_SETUP_SERVICE"/>
        <permission name="com.android.vending.TOS_ACKED"/>
        <permission name="com.google.android.apps.now.OPT_IN_WIZARD"/>
        <permission name="com.google.android.googleapps.permission.GOOGLE_AUTH"/>
        <permission name="com.google.android.providers.gsf.permission.READ_GSERVICES"/>
        <permission name="com.google.android.providers.settings.permission.READ_GSETTINGS"/>
        <permission name="com.google.android.providers.settings.permission.WRITE_GSETTINGS"/>
        <permission name="com.google.android.setupwizard.READ_DEVICE_ORIGIN_FIRST_PARTY"/>
    </privapp-permissions>

    <privapp-permissions package="com.google.android.storagemanager">
        <permission name="android.permission.DELETE_PACKAGES"/>
        <permission name="android.permission.GET_PACKAGE_SIZE"/>
        <permission name="android.permission.INTERACT_ACROSS_USERS"/>
        <permission name="android.permission.MANAGE_USERS"/>
        <permission name="android.permission.PACKAGE_USAGE_STATS"/>
        <permission name="android.permission.READ_EXTERNAL_STORAGE"/>
        <permission name="android.permission.RECEIVE_BOOT_COMPLETED"/>
        <permission name="android.permission.USE_RESERVED_DISK"/>
        <permission name="android.permission.WRITE_EXTERNAL_STORAGE"/>
        <permission name="android.permission.WRITE_SECURE_SETTINGS"/>
    </privapp-permissions>

    <privapp-permissions package="com.google.android.tag">
        <permission name="android.permission.WRITE_SECURE_SETTINGS"/>
    </privapp-permissions>

    <privapp-permissions package="com.google.android.tetheringentitlement">
        <permission name="android.permission.CONNECTIVITY_INTERNAL"/>
        <permission name="android.permission.MODIFY_PHONE_STATE"/>
        <permission name="android.permission.READ_PRIVILEGED_PHONE_STATE"/>
        <permission name="android.permission.WRITE_APN_SETTINGS"/>
        <permission name="android.permission.WRITE_SECURE_SETTINGS"/>
    </privapp-permissions>

    <privapp-permissions package="com.google.android.tv">
        <permission name="android.permission.CHANGE_HDMI_CEC_ACTIVE_SOURCE"/>
        <permission name="android.permission.DVB_DEVICE"/>
        <permission name="android.permission.GLOBAL_SEARCH"/>
        <permission name="android.permission.HDMI_CEC"/>
        <permission name="android.permission.MODIFY_PARENTAL_CONTROLS"/>
        <permission name="android.permission.READ_CONTENT_RATING_SYSTEMS"/>
    </privapp-permissions>

    <privapp-permissions package="com.google.android.volta">
        <permission name="android.permission.BATTERY_STATS"/>
        <permission name="android.permission.DUMP"/>
        <permission name="android.permission.INTERACT_ACROSS_USERS"/>
        <permission name="android.permission.PACKAGE_USAGE_STATS"/>
        <permission name="android.permission.REAL_GET_TASKS"/>
        <permission name="android.permission.REBOOT"/>
    </privapp-permissions>

    <privapp-permissions package="com.google.android.apps.internal.betterbug">
        <permission name="android.permission.DUMP"/>
        <permission name="android.permission.PACKAGE_USAGE_STATS"/>
        <permission name="android.permission.WRITE_SECURE_SETTINGS"/>
    </privapp-permissions>

    <privapp-permissions package="com.google.android.apps.wallpaper">
        <permission name="android.permission.READ_WALLPAPER_INTERNAL"/>
        <permission name="android.permission.SET_WALLPAPER_COMPONENT"/>
    </privapp-permissions>

    <privapp-permissions package="com.google.android.wfcactivation">
        <permission name="android.permission.CONNECTIVITY_INTERNAL"/>
        <permission name="android.permission.MODIFY_PHONE_STATE"/>
        <permission name="android.permission.READ_LOGS"/>
        <permission name="android.permission.READ_PRIVILEGED_PHONE_STATE"/>
        <permission name="android.permission.WRITE_APN_SETTINGS"/>
        <permission name="android.permission.WRITE_SECURE_SETTINGS"/>
    </privapp-permissions>

    <privapp-permissions package="com.google.intelligence.sense">
        <permission name="android.permission.CAPTURE_AUDIO_HOTWORD"/>
        <permission name="android.permission.INTERACT_ACROSS_USERS"/>
        <permission name="android.permission.LOCATION_HARDWARE"/>
        <permission name="android.permission.MANAGE_SOUND_TRIGGER"/>
        <permission name="android.permission.SUBSTITUTE_NOTIFICATION_APP_NAME"/>
        <permission name="android.permission.WRITE_SECURE_SETTINGS"/>
    </privapp-permissions>

    <privapp-permissions package="com.android.timezone.updater">
        <permission name="android.permission.QUERY_TIME_ZONE_RULES" />
        <permission name="android.permission.UPDATE_TIME_ZONE_RULES" />
    </privapp-permissions>

    <privapp-permissions package="com.google.android.apps.wellbeing">
        <permission name="android.permission.ACCESS_INSTANT_APPS"/>
        <permission name="android.permission.CONTROL_DISPLAY_COLOR_TRANSFORMS"/>
        <permission name="android.permission.CONTROL_DISPLAY_SATURATION"/>
        <permission name="android.permission.INTERACT_ACROSS_PROFILES"/>
        <permission name="android.permission.MODIFY_PHONE_STATE"/>
        <permission name="android.permission.OBSERVE_APP_USAGE"/>
        <permission name="android.permission.PACKAGE_USAGE_STATS"/>
        <permission name="android.permission.START_ACTIVITIES_FROM_BACKGROUND"/>
        <permission name="android.permission.SUBSTITUTE_NOTIFICATION_APP_NAME"/>
        <permission name="android.permission.SUSPEND_APPS"/>
        <permission name="android.permission.WRITE_SECURE_SETTINGS"/>
    </privapp-permissions>

    <privapp-permissions package="com.google.android.hardwareinfo">
        <permission name="android.permission.READ_PHONE_STATE"/>
        <permission name="android.permission.READ_PRIVILEGED_PHONE_STATE"/>
        <permission name="android.permission.RECEIVE_BOOT_COMPLETED"/>
    </privapp-permissions>	    </privapp-permissions>


    <privapp-permissions package="me.twrp.twrpapp">	    <privapp-permissions package="me.twrp.twrpapp">
        <permission name="android.permission.BATTERY_STATS"/>	        <permission name="android.permission.BATTERY_STATS"/>
        <permission name="android.permission.PACKAGE_USAGE_STATS"/>	        <permission name="android.permission.PACKAGE_USAGE_STATS"/>
        <permission name="android.permission.READ_PRECISE_PHONE_STATE"/>	        <permission name="android.permission.READ_PRECISE_PHONE_STATE"/>
    </privapp-permissions>	    </privapp-permissions>
    <privapp-permissions package="com.android.camera2">	    <privapp-permissions package="com.android.camera2">
        <permission name="android.permission.BIND_WALLPAPER"/>	        <permission name="android.permission.BIND_WALLPAPER"/>
        <permission name="android.permission.PREVENT_POWER_KEY"/>	        <permission name="android.permission.PREVENT_POWER_KEY"/>
        <permission name="android.permission.WRITE_MEDIA_STORAGE"/>	        <permission name="android.permission.WRITE_MEDIA_STORAGE"/>
    </privapp-permissions>	    </privapp-permissions>
</permissions>	</permissions>
 3  rootdir/etc/init.qcom.power.rc 
@@ -1,19 +1,22 @@
on boot	on boot
    # Update foreground and background cpusets	    # Update foreground and background cpusets
    write /dev/cpuset/foreground/cpus 0-5	    write /dev/cpuset/foreground/cpus 0-5
    write /dev/cpuset/background/cpus 0-5	    write /dev/cpuset/background/cpus 0-5
    write /dev/cpuset/system-background/cpus 0-5	    write /dev/cpuset/system-background/cpus 0-5
    write /dev/cpuset/top-app/cpus 0-5	    write /dev/cpuset/top-app/cpus 0-5
    # add a cpuset for the camera daemon	    # add a cpuset for the camera daemon
    # we want all cores for camera	    # we want all cores for camera
    mkdir /dev/cpuset/camera-daemon	    mkdir /dev/cpuset/camera-daemon
    write /dev/cpuset/camera-daemon/cpus 0-5	    write /dev/cpuset/camera-daemon/cpus 0-5
    write /dev/cpuset/camera-daemon/mems 0	    write /dev/cpuset/camera-daemon/mems 0
    chown system system /dev/cpuset/camera-daemon	    chown system system /dev/cpuset/camera-daemon
    chown system system /dev/cpuset/camera-daemon/tasks	    chown system system /dev/cpuset/camera-daemon/tasks
    chmod 0664 /dev/cpuset/camera-daemon/tasks	    chmod 0664 /dev/cpuset/camera-daemon/tasks


    # android background processes are set to nice 10. Never schedule these on the a57s.
    write /proc/sys/kernel/sched_upmigrate_min_nice 9

on enable-low-power	on enable-low-power
    # Set idle GPU to 180 Mhz	    # Set idle GPU to 180 Mhz
    write /sys/class/kgsl/kgsl-3d0/default_pwrlevel 5	    write /sys/class/kgsl/kgsl-3d0/default_pwrlevel 5
on charger	on charger
    # disable FPS clk	    # disable FPS clk
    write /sys/bus/spi/drivers/fpc1020/spi1.2/clk_enable 0	    write /sys/bus/spi/drivers/fpc1020/spi1.2/clk_enable 0
    # low power governing	    # low power governing
    write /sys/devices/system/cpu/cpu1/online 0	    write /sys/devices/system/cpu/cpu1/online 0
    write /sys/devices/system/cpu/cpu2/online 0	    write /sys/devices/system/cpu/cpu2/online 0
    write /sys/devices/system/cpu/cpu3/online 0	    write /sys/devices/system/cpu/cpu3/online 0
    write /sys/devices/system/cpu/cpu4/online 0	    write /sys/devices/system/cpu/cpu4/online 0
    write /sys/devices/system/cpu/cpu5/online 0	    write /sys/devices/system/cpu/cpu5/online 0
    write /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor powersave	    write /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor powersave
    # Disable CPU retention	    # Disable CPU retention
    write /sys/module/lpm_levels/system/a53/cpu0/retention/idle_enabled 0	    write /sys/module/lpm_levels/system/a53/cpu0/retention/idle_enabled 0
    write /sys/module/lpm_levels/system/a53/cpu1/retention/idle_enabled 0	    write /sys/module/lpm_levels/system/a53/cpu1/retention/idle_enabled 0
    write /sys/module/lpm_levels/system/a53/cpu2/retention/idle_enabled 0	    write /sys/module/lpm_levels/system/a53/cpu2/retention/idle_enabled 0
    write /sys/module/lpm_levels/system/a53/cpu3/retention/idle_enabled 0	    write /sys/module/lpm_levels/system/a53/cpu3/retention/idle_enabled 0
    write /sys/module/lpm_levels/system/a57/cpu4/retention/idle_enabled 0	    write /sys/module/lpm_levels/system/a57/cpu4/retention/idle_enabled 0
    write /sys/module/lpm_levels/system/a57/cpu5/retention/idle_enabled 0	    write /sys/module/lpm_levels/system/a57/cpu5/retention/idle_enabled 0
    # Disable L2 retention	    # Disable L2 retention
    write /sys/module/lpm_levels/system/a53/a53-l2-retention/idle_enabled 0	    write /sys/module/lpm_levels/system/a53/a53-l2-retention/idle_enabled 0
    write /sys/module/lpm_levels/system/a57/a57-l2-retention/idle_enabled 0	    write /sys/module/lpm_levels/system/a57/a57-l2-retention/idle_enabled 0
service charger /sbin/healthd -c	service charger /sbin/healthd -c
    class charger	    class charger
    critical	    critical
    seclabel u:r:healthd:s0	    seclabel u:r:healthd:s0
  38  rootdir/etc/init.qcom.rc 
@@ -63,32 +63,26 @@
    chown root:root /dev/block/mmcblk0p35	    chown root:root /dev/block/mmcblk0p35
    chmod 666 /dev/block/mmcblk0p35	    chmod 666 /dev/block/mmcblk0p35
    restorecon_recursive /persist	    restorecon_recursive /persist
    restorecon_recursive /carrier	    restorecon_recursive /carrier
    # load kernel modules	    # load kernel modules
    insmod /system/lib/modules/mcDrvModule.ko	    insmod /system/lib/modules/mcDrvModule.ko
    insmod /system/lib/modules/mcKernelApi.ko	    insmod /system/lib/modules/mcKernelApi.ko
    # MobiCore Daemon Paths	    # MobiCore Daemon Paths
    export MC_AUTH_TOKEN_PATH /data/app/mcRegistry	    export MC_AUTH_TOKEN_PATH /data/app/mcRegistry
#SSD_DISP start	#SSD_DISP start
    chown system system /sys/class/leds/wled/brightness	    chown system system /sys/class/leds/wled/brightness
    chown system system /sys/bus/platform/drivers/mdss_fb/qcom,mdss_fb_primary.188/leds/lcd-backlight/brightness	    chown system system /sys/bus/platform/drivers/mdss_fb/qcom,mdss_fb_primary.188/leds/lcd-backlight/brightness
#SSD_DISP end	#SSD_DISP end
on fs	on fs
    wait /dev/block/platform/soc.0/${ro.boot.bootdevice}	    wait /dev/block/platform/soc.0/${ro.boot.bootdevice}
    symlink /dev/block/platform/soc.0/${ro.boot.bootdevice} /dev/block/bootdevice	    symlink /dev/block/platform/soc.0/${ro.boot.bootdevice} /dev/block/bootdevice
    mount_all fstab.qcom	    mount_all fstab.qcom


    # debug boot process	
    rm /cache/debug/boot_lc_crash.txt	
    rm /cache/debug/boot_lc_full.txt	
    rm /cache/debug/boot_lc_kernel.txt	
    mkdir /cache/debug 0770 system root	

on init	on init
    # ZRAM setup	    # ZRAM setup
    write /sys/block/zram0/comp_algorithm lzo	    write /sys/block/zram0/comp_algorithm lzo
    write /proc/sys/vm/page-cluster 0	    write /proc/sys/vm/page-cluster 0
    mkdir /mnt/shell/emulated 0700 shell shell	    mkdir /mnt/shell/emulated 0700 shell shell
    mkdir /storage/emulated 0555 root root	    mkdir /storage/emulated 0555 root root
    mkdir /mnt/media_rw/sdcard1 0775 media_rw media_rw	    mkdir /mnt/media_rw/sdcard1 0775 media_rw media_rw
    mkdir /mnt/media_rw/usbdisk 0775 media_rw media_rw	    mkdir /mnt/media_rw/usbdisk 0775 media_rw media_rw
    mkdir /storage/sdcard1 0775 system system	    mkdir /storage/sdcard1 0775 system system
    mkdir /storage/usbdisk 0775 system system	    mkdir /storage/usbdisk 0775 system system
    chmod 775 /mnt/media_rw	    chmod 775 /mnt/media_rw
    chmod 775 /mnt/media_rw/*	    chmod 775 /mnt/media_rw/*
    chmod 0771 /firmware	    chmod 0771 /firmware
    chmod 0771 /firmware/image 0771	    chmod 0771 /firmware/image 0771
    mkdir /persist/data 0700 system system	    mkdir /persist/data 0700 system system
    mkdir /devlog 0700 root root	    mkdir /devlog 0700 root root
    mkdir /fataldevlog 0700 root root	    mkdir /fataldevlog 0700 root root
    mkdir /cota 0771 root cw_access	    mkdir /cota 0771 root cw_access
    mkdir /preload 0771 system system	    mkdir /preload 0771 system system
    mkdir /cust 0771 system system	    mkdir /cust 0771 system system
    mkdir /carrier 0770 system carrier	    mkdir /carrier 0770 system carrier
    chown system carrier /carrier	    chown system carrier /carrier
    chmod 0770 /carrier	    chmod 0770 /carrier
    chmod 0644 /proc/cmdline	    chmod 0644 /proc/cmdline
    chmod 0660 /dev/soundtrigger_dma_drv	    chmod 0660 /dev/soundtrigger_dma_drv
    chown media media /dev/soundtrigger_dma_drv	    chown media media /dev/soundtrigger_dma_drv
    # Set permissions for persist partition	    # Set permissions for persist partition
    mkdir /persist 0771 system system	    mkdir /persist 0771 system system
    # Set permissions for drm partition	    # Set permissions for drm partition
    mkdir /persist-lg 0771 system system	    mkdir /persist-lg 0771 system system
    symlink /sdcard /storage/sdcard0	    symlink /sdcard /storage/sdcard0
on early-boot	on early-boot
    # unique boot led blinking	    # unique boot led blinking
    start pulseon	    start pulseon
    # set RLIMIT_MEMLOCK to 64MB	    # set RLIMIT_MEMLOCK to 64MB
    setrlimit 8 67108864 67108864	    setrlimit 8 67108864 67108864
    write /sys/kernel/boot_adsp/boot 1	    write /sys/kernel/boot_adsp/boot 1
    chcon -R /data/property u:object_r:system_data_file:s0	    chcon -R /data/property u:object_r:system_data_file:s0
    chcon -R /data/security u:object_r:system_data_file:s0	    chcon -R /data/security u:object_r:system_data_file:s0
    start chcon_keystore	    start chcon_keystore
service chcon_keystore /system/vendor/bin/init.recovery.m1_chcon_keystore.sh	service chcon_keystore /system/vendor/bin/init.recovery.m1_chcon_keystore.sh
    disabled	    disabled
    oneshot	    oneshot
    seclabel u:r:keystore:s0	    seclabel u:r:keystore:s0
on boot	on boot
    # rmt_storage	    # rmt_storage
    start rmt_storage	    start rmt_storage
    # rfs_access	    # rfs_access
    chmod 0664 /sys/power/wake_lock	    chmod 0664 /sys/power/wake_lock
    chmod 0666 /persist/rfs/msm/adsp	    chmod 0666 /persist/rfs/msm/adsp
    start rfs_access	    start rfs_access
    # sensors	    # sensors
    chown root system /sns/cal	    chown root system /sns/cal
    chmod 0755 /sns/cal	    chmod 0755 /sns/cal
    # bring cores online	    # bring cores online
    write /sys/module/msm_thermal/core_control/enabled 0	    write /sys/module/msm_thermal/core_control/enabled 0
    write /sys/devices/system/cpu/cpu0/online 1	    write /sys/devices/system/cpu/cpu0/online 1
    write /sys/devices/system/cpu/cpu1/online 1	    write /sys/devices/system/cpu/cpu1/online 1
    write /sys/module/msm_thermal/core_control/enabled 1	    write /sys/module/msm_thermal/core_control/enabled 1
    # bluetooth	    # bluetooth
    chown bluetooth bluetooth /sys/module/bluetooth_power/parameters/power	    chown bluetooth bluetooth /sys/module/bluetooth_power/parameters/power
    chown bluetooth bluetooth /sys/class/rfkill/rfkill0/type	    chown bluetooth bluetooth /sys/class/rfkill/rfkill0/type
    chown bluetooth bluetooth /sys/class/rfkill/rfkill0/state	    chown bluetooth bluetooth /sys/class/rfkill/rfkill0/state
    chown bluetooth bluetooth /proc/bluetooth/sleep/btwake	    chown bluetooth bluetooth /proc/bluetooth/sleep/btwake
    chown bluetooth bluetooth /proc/bluetooth/sleep/proto	    chown bluetooth bluetooth /proc/bluetooth/sleep/proto
    chown bluetooth bluetooth /proc/bluetooth/sleep/preproto	    chown bluetooth bluetooth /proc/bluetooth/sleep/preproto
    chown bluetooth bluetooth /proc/bluetooth/sleep/lpm	    chown bluetooth bluetooth /proc/bluetooth/sleep/lpm
    chown bluetooth bluetooth /proc/bluetooth/sleep/btwrite	    chown bluetooth bluetooth /proc/bluetooth/sleep/btwrite
    chown system system /sys/module/sco/parameters/disable_esco	    chown system system /sys/module/sco/parameters/disable_esco
    chown bluetooth bluetooth /sys/module/hci_smd/parameters/hcismd_set	    chown bluetooth bluetooth /sys/module/hci_smd/parameters/hcismd_set
    chmod 0660 /sys/module/bluetooth_power/parameters/power	    chmod 0660 /sys/module/bluetooth_power/parameters/power
    chmod 0660 /sys/module/hci_smd/parameters/hcismd_set	    chmod 0660 /sys/module/hci_smd/parameters/hcismd_set
    chmod 0660 /sys/class/rfkill/rfkill0/state	    chmod 0660 /sys/class/rfkill/rfkill0/state
    chmod 0660 /proc/bluetooth/sleep/btwake	    chmod 0660 /proc/bluetooth/sleep/btwake
    chmod 0660 /proc/bluetooth/sleep/proto	    chmod 0660 /proc/bluetooth/sleep/proto
    chmod 0660 /proc/bluetooth/sleep/preproto	    chmod 0660 /proc/bluetooth/sleep/preproto
    chmod 0660 /proc/bluetooth/sleep/lpm	    chmod 0660 /proc/bluetooth/sleep/lpm
    chmod 0660 /proc/bluetooth/sleep/btwrite	    chmod 0660 /proc/bluetooth/sleep/btwrite
    chown bluetooth bluetooth /dev/ttyHSL0	    chown bluetooth bluetooth /dev/ttyHSL0
    chown bluetooth bluetooth /dev/ttyHSL1	    chown bluetooth bluetooth /dev/ttyHSL1
    chown bluetooth bluetooth /dev/ttyHS0	    chown bluetooth bluetooth /dev/ttyHS0
    chmod 0660 /dev/ttyHS99	    chmod 0660 /dev/ttyHS99
    chmod 0660 /dev/ttyHS0	    chmod 0660 /dev/ttyHS0
    chown bluetooth bluetooth /sys/devices/soc.0/f995e000.uart/clock	    chown bluetooth bluetooth /sys/devices/soc.0/f995e000.uart/clock
    chmod 0660 /sys/devices/soc.0/f995e000.uart/clock	    chmod 0660 /sys/devices/soc.0/f995e000.uart/clock
    # Feature chip vendor : brcm	    # Feature chip vendor : brcm
    setprop bluetooth.chip.vendor brcm	    setprop bluetooth.chip.vendor brcm
    # For BCM FM Radio	    # For BCM FM Radio
    setprop ro.fm.module BCM	    setprop ro.fm.module BCM
    # WiFi	    # WiFi
    chown wifi wifi /dev/rfkill	    chown wifi wifi /dev/rfkill
    chmod 0600 /dev/rfkill	    chmod 0600 /dev/rfkill
    #Create QMUX deamon socket area	    #Create QMUX deamon socket area
    mkdir /dev/socket/qmux_radio 0775 radio radio	    mkdir /dev/socket/qmux_radio 0775 radio radio
    mkdir /data/misc/radio/modem_config/mcfg_sw 0770 radio radio	    mkdir /data/misc/radio/modem_config/mcfg_sw 0770 radio radio
    chmod 2770 /data/misc/radio/modem_config/mcfg_sw	    chmod 2770 /data/misc/radio/modem_config/mcfg_sw
    mkdir /dev/socket/qmux_audio 0770 media audio	    mkdir /dev/socket/qmux_audio 0770 media audio
    chmod 2770 /dev/socket/qmux_audio	    chmod 2770 /dev/socket/qmux_audio
    mkdir /dev/socket/qmux_bluetooth 0770 bluetooth bluetooth	    mkdir /dev/socket/qmux_bluetooth 0770 bluetooth bluetooth
    chmod 2770 /dev/socket/qmux_bluetooth	    chmod 2770 /dev/socket/qmux_bluetooth
    mkdir /dev/socket/qmux_gps 0770 gps gps	    mkdir /dev/socket/qmux_gps 0770 gps gps
    chmod 2770 /dev/socket/qmux_gps	    chmod 2770 /dev/socket/qmux_gps
    mkdir /dev/socket/qmux_nfc 0770 nfc nfc	    mkdir /dev/socket/qmux_nfc 0770 nfc nfc
    chmod 2770 /dev/socket/qmux_nfc	    chmod 2770 /dev/socket/qmux_nfc
    setprop wifi.interface wlan0	    setprop wifi.interface wlan0
#   Define TCP buffer sizes for various networks	#   Define TCP buffer sizes for various networks
#   ReadMin, ReadInitial, ReadMax, WriteMin, WriteInitial, WriteMax,	#   ReadMin, ReadInitial, ReadMax, WriteMin, WriteInitial, WriteMax,
    setprop net.tcp.buffersize.wifi    524288,2097152,4194304,262144,524288,1048576	    setprop net.tcp.buffersize.wifi    524288,2097152,4194304,262144,524288,1048576
    setprop ro.telephony.call_ring.multiple false	    setprop ro.telephony.call_ring.multiple false
    # Remove SUID bit for iproute2 ip tool	    # Remove SUID bit for iproute2 ip tool
    chmod 0755 /system/bin/ip	    chmod 0755 /system/bin/ip
#   Define TCP buffer sizes for various networks	#   Define TCP buffer sizes for various networks
#   ReadMin, ReadInitial, ReadMax, WriteMin, WriteInitial, WriteMax,	#   ReadMin, ReadInitial, ReadMax, WriteMin, WriteInitial, WriteMax,
    setprop net.tcp.buffersize.default 4096,87380,524288,4096,16384,110208	    setprop net.tcp.buffersize.default 4096,87380,524288,4096,16384,110208
    setprop net.tcp.buffersize.lte     2097152,4194304,8388608,262144,524288,1048576	    setprop net.tcp.buffersize.lte     2097152,4194304,8388608,262144,524288,1048576
    setprop net.tcp.buffersize.umts    4094,87380,110208,4096,16384,110208	    setprop net.tcp.buffersize.umts    4094,87380,110208,4096,16384,110208
    setprop net.tcp.buffersize.hspa    4094,87380,1220608,4096,16384,1220608	    setprop net.tcp.buffersize.hspa    4094,87380,1220608,4096,16384,1220608
    setprop net.tcp.buffersize.hsupa   4094,87380,1220608,4096,16384,1220608	    setprop net.tcp.buffersize.hsupa   4094,87380,1220608,4096,16384,1220608
    setprop net.tcp.buffersize.hsdpa   4094,87380,1220608,4096,16384,1220608	    setprop net.tcp.buffersize.hsdpa   4094,87380,1220608,4096,16384,1220608
    setprop net.tcp.buffersize.hspap   4094,87380,1220608,4096,16384,1220608	    setprop net.tcp.buffersize.hspap   4094,87380,1220608,4096,16384,1220608
    setprop net.tcp.buffersize.edge    4093,26280,35040,4096,16384,35040	    setprop net.tcp.buffersize.edge    4093,26280,35040,4096,16384,35040
    setprop net.tcp.buffersize.gprs    4092,8760,11680,4096,8760,11680	    setprop net.tcp.buffersize.gprs    4092,8760,11680,4096,8760,11680
    setprop net.tcp.buffersize.evdo    4094,87380,524288,4096,16384,262144	    setprop net.tcp.buffersize.evdo    4094,87380,524288,4096,16384,262144
#   Assign TCP buffer thresholds to be ceiling value of technology maximums	#   Assign TCP buffer thresholds to be ceiling value of technology maximums
#   Increased technology maximums should be reflected here.	#   Increased technology maximums should be reflected here.
    write /proc/sys/net/core/rmem_max  8388608	    write /proc/sys/net/core/rmem_max  8388608
    write /proc/sys/net/core/wmem_max  8388608	    write /proc/sys/net/core/wmem_max  8388608
    # To prevent out of order acknowledgements from making	    # To prevent out of order acknowledgements from making
    # connection tracking to treat them as not belonging to	    # connection tracking to treat them as not belonging to
    # the connection they belong to.	    # the connection they belong to.
    # Otherwise, a weird issue happens in which some long	    # Otherwise, a weird issue happens in which some long
    # connections on high-throughput links get dropped when	    # connections on high-throughput links get dropped when
    # an ack packet comes out of order	    # an ack packet comes out of order
    write /proc/sys/net/netfilter/nf_conntrack_tcp_be_liberal 1	    write /proc/sys/net/netfilter/nf_conntrack_tcp_be_liberal 1
    # Wifi firmware reload path	    # Wifi firmware reload path
    chown wifi wifi /sys/module/bcmdhd/parameters/firmware_path	    chown wifi wifi /sys/module/bcmdhd/parameters/firmware_path
    chown wifi wifi /sys/devices/soc.0/f9824900.sdhci/mmc_host/mmc0/mmc0:0001/fwrev	    chown wifi wifi /sys/devices/soc.0/f9824900.sdhci/mmc_host/mmc0/mmc0:0001/fwrev
    # create symlink for fb1 as HDMI	    # create symlink for fb1 as HDMI
    symlink /dev/graphics/fb1 /dev/graphics/hdmi	    symlink /dev/graphics/fb1 /dev/graphics/hdmi
    # MDP idle notifier	    # MDP idle notifier
    chown system graphics /sys/class/graphics/fb0/idle_time	    chown system graphics /sys/class/graphics/fb0/idle_time
    chmod 0664 /sys/class/graphics/fb0/idle_time	    chmod 0664 /sys/class/graphics/fb0/idle_time
    # setup permissions for fb1 related nodes	    # setup permissions for fb1 related nodes
    chown system graphics /sys/class/graphics/fb0/idle_time	    chown system graphics /sys/class/graphics/fb0/idle_time
    chown system graphics /sys/class/graphics/fb0/dynamic_fps	    chown system graphics /sys/class/graphics/fb0/dynamic_fps
    chown system graphics /sys/class/graphics/fb0/dyn_pu	    chown system graphics /sys/class/graphics/fb0/dyn_pu
    chown system graphics /sys/class/graphics/fb0/modes	    chown system graphics /sys/class/graphics/fb0/modes
    chown system graphics /sys/class/graphics/fb0/mode	    chown system graphics /sys/class/graphics/fb0/mode
    chmod 0664 /sys/devices/virtual/graphics/fb0/idle_time	    chmod 0664 /sys/devices/virtual/graphics/fb0/idle_time
    chmod 0664 /sys/devices/virtual/graphics/fb0/dynamic_fps	    chmod 0664 /sys/devices/virtual/graphics/fb0/dynamic_fps
    chmod 0664 /sys/devices/virtual/graphics/fb0/dyn_pu	    chmod 0664 /sys/devices/virtual/graphics/fb0/dyn_pu
    chmod 0664 /sys/devices/virtual/graphics/fb0/modes	    chmod 0664 /sys/devices/virtual/graphics/fb0/modes
    chmod 0664 /sys/devices/virtual/graphics/fb0/mode	    chmod 0664 /sys/devices/virtual/graphics/fb0/mode
    chown system graphics /sys/class/graphics/fb1/hpd	    chown system graphics /sys/class/graphics/fb1/hpd
    chown system graphics /sys/class/graphics/fb1/res_info	    chown system graphics /sys/class/graphics/fb1/res_info
    chown system graphics /sys/class/graphics/fb1/vendor_name	    chown system graphics /sys/class/graphics/fb1/vendor_name
    chown system graphics /sys/class/graphics/fb1/product_description	    chown system graphics /sys/class/graphics/fb1/product_description
    chown system graphics /sys/class/graphics/fb1/video_mode	    chown system graphics /sys/class/graphics/fb1/video_mode
    chown system graphics /sys/class/graphics/fb1/format_3d	    chown system graphics /sys/class/graphics/fb1/format_3d
    chown system graphics /sys/class/graphics/fb1/s3d_mode	    chown system graphics /sys/class/graphics/fb1/s3d_mode
    chown system graphics /sys/class/graphics/fb1/cec/enable	    chown system graphics /sys/class/graphics/fb1/cec/enable
    chown system graphics /sys/class/graphics/fb1/cec/logical_addr	    chown system graphics /sys/class/graphics/fb1/cec/logical_addr
    chown system graphics /sys/class/graphics/fb1/cec/rd_msg	    chown system graphics /sys/class/graphics/fb1/cec/rd_msg
    chown system graphics /sys/class/graphics/fb1/pa	    chown system graphics /sys/class/graphics/fb1/pa
    chown system graphics /sys/class/graphics/fb1/cec/wr_msg	    chown system graphics /sys/class/graphics/fb1/cec/wr_msg
    chown system graphics /sys/class/graphics/fb1/hdcp/tp	    chown system graphics /sys/class/graphics/fb1/hdcp/tp
    chmod 0664 /sys/devices/virtual/graphics/fb1/hpd	    chmod 0664 /sys/devices/virtual/graphics/fb1/hpd
    chmod 0664 /sys/devices/virtual/graphics/fb1/res_info	    chmod 0664 /sys/devices/virtual/graphics/fb1/res_info
    chmod 0664 /sys/devices/virtual/graphics/fb1/vendor_name	    chmod 0664 /sys/devices/virtual/graphics/fb1/vendor_name
    chmod 0664 /sys/devices/virtual/graphics/fb1/product_description	    chmod 0664 /sys/devices/virtual/graphics/fb1/product_description
    chmod 0664 /sys/devices/virtual/graphics/fb1/video_mode	    chmod 0664 /sys/devices/virtual/graphics/fb1/video_mode
    chmod 0664 /sys/devices/virtual/graphics/fb1/format_3d	    chmod 0664 /sys/devices/virtual/graphics/fb1/format_3d
    chmod 0664 /sys/devices/virtual/graphics/fb1/s3d_mode	    chmod 0664 /sys/devices/virtual/graphics/fb1/s3d_mode
    chmod 0664 /sys/devices/virtual/graphics/fb1/cec/enable	    chmod 0664 /sys/devices/virtual/graphics/fb1/cec/enable
    chmod 0664 /sys/devices/virtual/graphics/fb1/cec/logical_addr	    chmod 0664 /sys/devices/virtual/graphics/fb1/cec/logical_addr
    chmod 0664 /sys/devices/virtual/graphics/fb1/cec/rd_msg	    chmod 0664 /sys/devices/virtual/graphics/fb1/cec/rd_msg
    chmod 0664 /sys/devices/virtual/graphics/fb1/pa	    chmod 0664 /sys/devices/virtual/graphics/fb1/pa
    chmod 0664 /sys/devices/virtual/graphics/fb1/cec/wr_msg	    chmod 0664 /sys/devices/virtual/graphics/fb1/cec/wr_msg
    chmod 0664 /sys/devices/virtual/graphics/fb1/hdcp/tp	    chmod 0664 /sys/devices/virtual/graphics/fb1/hdcp/tp
    # Set the console loglevel to < KERN_INFO	    # Set the console loglevel to < KERN_INFO
    # Set the default message loglevel to KERN_INFO	    # Set the default message loglevel to KERN_INFO
    # write /proc/sys/kernel/printk "6 6 1 7"	    # write /proc/sys/kernel/printk "6 6 1 7"
    # Allow access for CCID command/response timeout configuration	    # Allow access for CCID command/response timeout configuration
    chown system system /sys/module/ccid_bridge/parameters/bulk_msg_timeout	    chown system system /sys/module/ccid_bridge/parameters/bulk_msg_timeout
    # Flashlight	    # Flashlight
    chown system system /sys/class/leds/led:flash_0/brightness	    chown system system /sys/class/leds/led:flash_0/brightness
    chown system system /sys/class/leds/led:flash_1/brightness	    chown system system /sys/class/leds/led:flash_1/brightness
    chown system system /sys/class/leds/flashlight_front/dual_brightness	    chown system system /sys/class/leds/flashlight_front/dual_brightness
    chown system system /sys/class/leds/led:torch_0/brightness	    chown system system /sys/class/leds/led:torch_0/brightness
    chown system system /sys/class/leds/led:torch_1/brightness	    chown system system /sys/class/leds/led:torch_1/brightness
    chown system system /sys/class/leds/red/brightness	    chown system system /sys/class/leds/red/brightness
    chown system system /sys/class/leds/blue/brightness	    chown system system /sys/class/leds/blue/brightness
    chown system system /sys/class/leds/green/brightness	    chown system system /sys/class/leds/green/brightness
    chown system system /sys/class/leds/wled/brightness	    chown system system /sys/class/leds/wled/brightness
    chown system system /sys/bus/platform/drivers/qcom,camera-flash/qcom,camera-flash.85/leds/torch-light0/brightness	    chown system system /sys/bus/platform/drivers/qcom,camera-flash/qcom,camera-flash.85/leds/torch-light0/brightness
    chown system system /sys/bus/platform/drivers/qcom,camera-flash/qcom,camera-flash.85/leds/torch-light1/brightness	    chown system system /sys/bus/platform/drivers/qcom,camera-flash/qcom,camera-flash.85/leds/torch-light1/brightness
    chmod 0666 /sys/class/leds/led:flash_0/brightness	    chmod 0666 /sys/class/leds/led:flash_0/brightness
    chmod 0666 /sys/class/leds/led:flash_1/brightness	    chmod 0666 /sys/class/leds/led:flash_1/brightness
    chmod 0666 /sys/class/leds/flashlight_front/dual_brightness	    chmod 0666 /sys/class/leds/flashlight_front/dual_brightness
    chmod 0666 /sys/class/leds/led:torch_0/brightness	    chmod 0666 /sys/class/leds/led:torch_0/brightness
    chmod 0666 /sys/class/leds/led:torch_1/brightness	    chmod 0666 /sys/class/leds/led:torch_1/brightness
    chmod 0666 /sys/class/leds/red/brightness	    chmod 0666 /sys/class/leds/red/brightness
    chmod 0666 /sys/class/leds/blue/brightness	    chmod 0666 /sys/class/leds/blue/brightness
    chmod 0666 /sys/class/leds/green/brightness	    chmod 0666 /sys/class/leds/green/brightness
    chmod 0666 /sys/class/leds/wled/brightness	    chmod 0666 /sys/class/leds/wled/brightness
    chmod 0666 /sys/bus/platform/drivers/qcom,camera-flash/qcom,camera-flash.85/leds/torch-light0/brightness	    chmod 0666 /sys/bus/platform/drivers/qcom,camera-flash/qcom,camera-flash.85/leds/torch-light0/brightness
    chmod 0666 /sys/bus/platform/drivers/qcom,camera-flash/qcom,camera-flash.85/leds/torch-light1/brightness	    chmod 0666 /sys/bus/platform/drivers/qcom,camera-flash/qcom,camera-flash.85/leds/torch-light1/brightness
    # Define TCP buffer sizes for various networks	    # Define TCP buffer sizes for various networks
    #   ReadMin, ReadInitial, ReadMax, WriteMin, WriteInitial, WriteMax,	    #   ReadMin, ReadInitial, ReadMax, WriteMin, WriteInitial, WriteMax,
    setprop net.tcp.buffersize.default  4096,87380,110208,4096,16384,110208	    setprop net.tcp.buffersize.default  4096,87380,110208,4096,16384,110208
    setprop net.tcp.buffersize.wifi     524288,1048576,2097152,262144,524288,1048576	    setprop net.tcp.buffersize.wifi     524288,1048576,2097152,262144,524288,1048576
    setprop net.tcp.buffersize.ethernet 524288,1048576,3145728,524288,1048576,2097152	    setprop net.tcp.buffersize.ethernet 524288,1048576,3145728,524288,1048576,2097152
    setprop net.tcp.buffersize.lte      524288,1048576,2097152,262144,524288,1048576	    setprop net.tcp.buffersize.lte      524288,1048576,2097152,262144,524288,1048576
    setprop net.tcp.buffersize.umts     58254,349525,1048576,58254,349525,1048576	    setprop net.tcp.buffersize.umts     58254,349525,1048576,58254,349525,1048576
    setprop net.tcp.buffersize.hspa     40778,244668,734003,16777,100663,301990	    setprop net.tcp.buffersize.hspa     40778,244668,734003,16777,100663,301990
    setprop net.tcp.buffersize.hsupa    40778,244668,734003,16777,100663,301990	    setprop net.tcp.buffersize.hsupa    40778,244668,734003,16777,100663,301990
    setprop net.tcp.buffersize.hsdpa    61167,367002,1101005,8738,52429,262114	    setprop net.tcp.buffersize.hsdpa    61167,367002,1101005,8738,52429,262114
    setprop net.tcp.buffersize.hspap    122334,734003,2202010,32040,192239,576717	    setprop net.tcp.buffersize.hspap    122334,734003,2202010,32040,192239,576717
    setprop net.tcp.buffersize.edge     4093,26280,70800,4096,16384,70800	    setprop net.tcp.buffersize.edge     4093,26280,70800,4096,16384,70800
    setprop net.tcp.buffersize.gprs     4092,8760,48000,4096,8760,48000	    setprop net.tcp.buffersize.gprs     4092,8760,48000,4096,8760,48000
    setprop net.tcp.buffersize.evdo     4094,87380,262144,4096,16384,262144	    setprop net.tcp.buffersize.evdo     4094,87380,262144,4096,16384,262144
    # Define default initial receive window size in segments.	    # Define default initial receive window size in segments.
    setprop net.tcp.default_init_rwnd 60	    setprop net.tcp.default_init_rwnd 60
    class_start core	    class_start core
    # permissions for NFC	    # permissions for NFC
    chmod 0600 /dev/pn547	    chmod 0600 /dev/pn547
    chown nfc nfc /dev/pn547	    chown nfc nfc /dev/pn547
    setprop debug.nfc.fw_download "true"	    setprop debug.nfc.fw_download "true"
    setprop debug.nfc.fw_boot_download "false"	    setprop debug.nfc.fw_boot_download "false"
    # HAL looks for pn54x but kernel driver uses pn547	    # HAL looks for pn54x but kernel driver uses pn547
    symlink /dev/pn547 /dev/pn54x	    symlink /dev/pn547 /dev/pn54x
    # Begin hdmi res_info	    # Begin hdmi res_info
    chown system system /sys/devices/virtual/graphics/fb1/res_info	    chown system system /sys/devices/virtual/graphics/fb1/res_info
    chmod 644 /sys/devices/virtual/graphics/fb1/res_info	    chmod 644 /sys/devices/virtual/graphics/fb1/res_info
    # End hdmi res_info	    # End hdmi res_info
# START touch_driver	# START touch_driver
    chown system system /sys/devices/virtual/input/lge_touch/incoming_call	    chown system system /sys/devices/virtual/input/lge_touch/incoming_call
    chmod 664 /sys/devices/virtual/input/lge_touch/incoming_call	    chmod 664 /sys/devices/virtual/input/lge_touch/incoming_call
    chown system system /sys/devices/virtual/input/lge_touch/ime_status	    chown system system /sys/devices/virtual/input/lge_touch/ime_status
    chown system lgkeyguard /sys/devices/virtual/input/lge_touch/keyguard	    chown system lgkeyguard /sys/devices/virtual/input/lge_touch/keyguard
    chmod 664 /sys/devices/virtual/input/lge_touch/keyguard	    chmod 664 /sys/devices/virtual/input/lge_touch/keyguard
    chown system system /sys/devices/virtual/input/lge_touch/ts_noise_log_enable	    chown system system /sys/devices/virtual/input/lge_touch/ts_noise_log_enable
    chmod 664 /sys/devices/virtual/input/lge_touch/ts_noise_log_enable	    chmod 664 /sys/devices/virtual/input/lge_touch/ts_noise_log_enable
    chown system system /sys/devices/virtual/input/lge_touch/ts_noise	    chown system system /sys/devices/virtual/input/lge_touch/ts_noise
    chmod 664 /sys/devices/virtual/input/lge_touch/ts_noise	    chmod 664 /sys/devices/virtual/input/lge_touch/ts_noise
    chown system system /sys/devices/virtual/input/lge_touch/sensing_test	    chown system system /sys/devices/virtual/input/lge_touch/sensing_test
    chmod 664 /sys/devices/virtual/input/lge_touch/sensing_test	    chmod 664 /sys/devices/virtual/input/lge_touch/sensing_test
    chown system system /sys/devices/virtual/input/lge_touch/hidden_normal_cal_state	    chown system system /sys/devices/virtual/input/lge_touch/hidden_normal_cal_state
    chmod 664 /sys/devices/virtual/input/lge_touch/hidden_normal_cal_state	    chmod 664 /sys/devices/virtual/input/lge_touch/hidden_normal_cal_state
    chown system system /sys/devices/virtual/input/lge_touch/hidden_lpwg_cal_state	    chown system system /sys/devices/virtual/input/lge_touch/hidden_lpwg_cal_state
    chmod 664 /sys/devices/virtual/input/lge_touch/hidden_lpwg_cal_state	    chmod 664 /sys/devices/virtual/input/lge_touch/hidden_lpwg_cal_state
# END touch_driver	# END touch_driver
# START touch_knock_on	# START touch_knock_on
    chown system system /sys/devices/virtual/input/lge_touch/lpwg_data	    chown system system /sys/devices/virtual/input/lge_touch/lpwg_data
    chmod 664 /sys/devices/virtual/input/lge_touch/lpwg_data	    chmod 664 /sys/devices/virtual/input/lge_touch/lpwg_data
    chown system radio /sys/devices/virtual/input/lge_touch/lpwg_notify	    chown system radio /sys/devices/virtual/input/lge_touch/lpwg_notify
    chmod 664 /sys/devices/virtual/input/lge_touch/lpwg_notify	    chmod 664 /sys/devices/virtual/input/lge_touch/lpwg_notify
    chown system system /sys/devices/virtual/input/lge_touch/lpwg_test_info	    chown system system /sys/devices/virtual/input/lge_touch/lpwg_test_info
    chmod 644 /sys/devices/virtual/input/lge_touch/lpwg_test_info	    chmod 644 /sys/devices/virtual/input/lge_touch/lpwg_test_info
    chown system system /sys/devices/virtual/input/lge_touch/lpwg_test_ctrl	    chown system system /sys/devices/virtual/input/lge_touch/lpwg_test_ctrl
    chmod 644 /sys/devices/virtual/input/lge_touch/lpwg_test_ctrl	    chmod 644 /sys/devices/virtual/input/lge_touch/lpwg_test_ctrl
    chown system system /sys/devices/virtual/input/lge_touch/touch_wake_up_test	    chown system system /sys/devices/virtual/input/lge_touch/touch_wake_up_test
    chmod 664 /sys/devices/virtual/input/lge_touch/touch_wake_up_test	    chmod 664 /sys/devices/virtual/input/lge_touch/touch_wake_up_test
    chown system system /sys/devices/virtual/input/lge_touch/quick_cover_status	    chown system system /sys/devices/virtual/input/lge_touch/quick_cover_status
    chmod 664 /sys/devices/virtual/input/lge_touch/quick_cover_status	    chmod 664 /sys/devices/virtual/input/lge_touch/quick_cover_status
# END touch_knock_on	# END touch_knock_on
    start chcon_keystore	    start chcon_keystore
# Double tap to wake gesture	# Double tap to wake gesture
    chown system radio /sys/devices/virtual/input/lge_touch/tap2wake	    chown system radio /sys/devices/virtual/input/lge_touch/tap2wake
    chmod 664 /sys/devices/virtual/input/lge_touch/tap2wake	    chmod 664 /sys/devices/virtual/input/lge_touch/tap2wake
    chown media media /sys/devices/soc.0/qcom,msm-pcm-routing.39/cfg_string_rx	    chown media media /sys/devices/soc.0/qcom,msm-pcm-routing.39/cfg_string_rx
    chown media media /sys/devices/soc.0/qcom,msm-pcm-routing.39/cfg_string_tx	    chown media media /sys/devices/soc.0/qcom,msm-pcm-routing.39/cfg_string_tx
    chmod 644 /sys/devices/soc.0/qcom,msm-pcm-routing.39/cfg_string_rx	    chmod 644 /sys/devices/soc.0/qcom,msm-pcm-routing.39/cfg_string_rx
    chmod 644 /sys/devices/soc.0/qcom,msm-pcm-routing.39/cfg_string_tx	    chmod 644 /sys/devices/soc.0/qcom,msm-pcm-routing.39/cfg_string_tx
# Begin LG Volume vibrator	# Begin LG Volume vibrator
    chown system system /sys/class/timed_output/vibrator/amp	    chown system system /sys/class/timed_output/vibrator/amp
    chmod 664 /sys/class/timed_output/vibrator/amp	    chmod 664 /sys/class/timed_output/vibrator/amp
    chown system system /sys/class/timed_output/vibrator/play_mode	    chown system system /sys/class/timed_output/vibrator/play_mode
    chmod 644 /sys/class/timed_output/vibrator/play_mode	    chmod 644 /sys/class/timed_output/vibrator/play_mode
    write /sys/class/timed_output/vibrator/play_mode "buffer"	    write /sys/class/timed_output/vibrator/play_mode "buffer"
# End LG Volume vibrator	# End LG Volume vibrator
# Begin SRE Display New Feature	# Begin SRE Display New Feature
    chown system system /sys/class/sre/sre_func/sre_status	    chown system system /sys/class/sre/sre_func/sre_status
    chmod 644 /sys/class/sre/sre_func/sre_status	    chmod 644 /sys/class/sre/sre_func/sre_status
# End SRE Display New Feature	# End SRE Display New Feature
# Power_BSP, if need, control max_frequencies for peak current issue	# Power_BSP, if need, control max_frequencies for peak current issue
# Power_BSP, LGE raise log level until pr_info for debug	# Power_BSP, LGE raise log level until pr_info for debug
    write /proc/sys/kernel/printk "7 4 1 7"	    write /proc/sys/kernel/printk "7 4 1 7"
# emotional led	# emotional led
    chown system system /sys/devices/virtual/lg_rgb_led/use_patterns/blink_patterns	    chown system system /sys/devices/virtual/lg_rgb_led/use_patterns/blink_patterns
    chmod 0644 /sys/devices/virtual/lg_rgb_led/use_patterns/blink_patterns	    chmod 0644 /sys/devices/virtual/lg_rgb_led/use_patterns/blink_patterns
    chown system system /sys/devices/virtual/lg_rgb_led/use_patterns/input_patterns	    chown system system /sys/devices/virtual/lg_rgb_led/use_patterns/input_patterns
    chmod 0644 /sys/devices/virtual/lg_rgb_led/use_patterns/input_patterns	    chmod 0644 /sys/devices/virtual/lg_rgb_led/use_patterns/input_patterns
    chown system system /sys/devices/virtual/lg_rgb_led/use_patterns/onoff_patterns	    chown system system /sys/devices/virtual/lg_rgb_led/use_patterns/onoff_patterns
    chmod 0644 /sys/devices/virtual/lg_rgb_led/use_patterns/onoff_patterns	    chmod 0644 /sys/devices/virtual/lg_rgb_led/use_patterns/onoff_patterns
    chown system system /sys/devices/virtual/lg_rgb_led/use_patterns/setting	    chown system system /sys/devices/virtual/lg_rgb_led/use_patterns/setting
    chmod 0644 /sys/devices/virtual/lg_rgb_led/use_patterns/setting	    chmod 0644 /sys/devices/virtual/lg_rgb_led/use_patterns/setting
    write /sys/devices/virtual/lg_rgb_led/use_patterns/setting 0	    write /sys/devices/virtual/lg_rgb_led/use_patterns/setting 0
# For QC2.0	# For QC2.0
    chown root system /sys/module/charger_controller/parameters/quick_charging_state	    chown root system /sys/module/charger_controller/parameters/quick_charging_state
    chmod 0664 /sys/module/charger_controller/parameters/quick_charging_state	    chmod 0664 /sys/module/charger_controller/parameters/quick_charging_state
# Power_BSP, add critical temp property for PM8992	# Power_BSP, add critical temp property for PM8992
on property:persist.service.criticaltemp=0	on property:persist.service.criticaltemp=0
    write /sys/kernel/debug/spmi/spmi-0/address 0x00867	    write /sys/kernel/debug/spmi/spmi-0/address 0x00867
    write /sys/kernel/debug/spmi/spmi-0/data 0x80	    write /sys/kernel/debug/spmi/spmi-0/data 0x80
    write /sys/kernel/debug/spmi/spmi-0/address 0x20867	    write /sys/kernel/debug/spmi/spmi-0/address 0x20867
    write /sys/kernel/debug/spmi/spmi-0/data 0x80	    write /sys/kernel/debug/spmi/spmi-0/data 0x80
    write /sys/module/msm_thermal/parameters/reset_temp 0	    write /sys/module/msm_thermal/parameters/reset_temp 0
    write /sys/devices/virtual/thermal/thermal_zone2/ctrl_crit_temp 0	    write /sys/devices/virtual/thermal/thermal_zone2/ctrl_crit_temp 0
    write /sys/devices/virtual/thermal/thermal_zone3/ctrl_crit_temp 0	    write /sys/devices/virtual/thermal/thermal_zone3/ctrl_crit_temp 0
    write /sys/devices/virtual/thermal/thermal_zone4/ctrl_crit_temp 0	    write /sys/devices/virtual/thermal/thermal_zone4/ctrl_crit_temp 0
    write /sys/devices/virtual/thermal/thermal_zone5/ctrl_crit_temp 0	    write /sys/devices/virtual/thermal/thermal_zone5/ctrl_crit_temp 0
    write /sys/devices/virtual/thermal/thermal_zone6/ctrl_crit_temp 0	    write /sys/devices/virtual/thermal/thermal_zone6/ctrl_crit_temp 0
    write /sys/devices/virtual/thermal/thermal_zone7/ctrl_crit_temp 0	    write /sys/devices/virtual/thermal/thermal_zone7/ctrl_crit_temp 0
    write /sys/devices/virtual/thermal/thermal_zone8/ctrl_crit_temp 0	    write /sys/devices/virtual/thermal/thermal_zone8/ctrl_crit_temp 0
    write /sys/devices/virtual/thermal/thermal_zone9/ctrl_crit_temp 0	    write /sys/devices/virtual/thermal/thermal_zone9/ctrl_crit_temp 0
    write /sys/devices/virtual/thermal/thermal_zone10/ctrl_crit_temp 0	    write /sys/devices/virtual/thermal/thermal_zone10/ctrl_crit_temp 0
    write /sys/devices/virtual/thermal/thermal_zone11/ctrl_crit_temp 0	    write /sys/devices/virtual/thermal/thermal_zone11/ctrl_crit_temp 0
    write /sys/devices/virtual/thermal/thermal_zone12/ctrl_crit_temp 0	    write /sys/devices/virtual/thermal/thermal_zone12/ctrl_crit_temp 0
    write /sys/devices/virtual/thermal/thermal_zone13/ctrl_crit_temp 0	    write /sys/devices/virtual/thermal/thermal_zone13/ctrl_crit_temp 0
    write /sys/devices/virtual/thermal/thermal_zone14/ctrl_crit_temp 0	    write /sys/devices/virtual/thermal/thermal_zone14/ctrl_crit_temp 0


on post-fs	on post-fs
    # start boot debugger	
    start boot_lc	
    start boot_lc_kernel	
    start boot_lc_crash	

    # WiFi and BT mac handler	    # WiFi and BT mac handler
    start hwaddrs	    start hwaddrs


    #change permissions on vmallocinfo so we can grab it from bugreports	    #change permissions on vmallocinfo so we can grab it from bugreports
    chown root log /proc/vmallocinfo	    chown root log /proc/vmallocinfo
    chmod 0440 /proc/vmallocinfo	    chmod 0440 /proc/vmallocinfo
    chown root log /proc/slabinfo	    chown root log /proc/slabinfo
    chmod 0440 /proc/slabinfo	    chmod 0440 /proc/slabinfo
    chown system carrier /carrier	    chown system carrier /carrier
    chmod 0771 /carrier	    chmod 0771 /carrier
    # restorecon carrier partition	    # restorecon carrier partition
    restorecon_recursive /carrier	    restorecon_recursive /carrier
    # We restorecon /preload in case preload folder has been reset.	    # We restorecon /preload in case preload folder has been reset.
    restorecon_recursive /preload	    restorecon_recursive /preload
    # required for Google wizard / first logon	    # required for Google wizard / first logon
    chmod 0222 /sys/kernel/debug/tracing/trace_marker	    chmod 0222 /sys/kernel/debug/tracing/trace_marker
# msm specific files that need to be created on /data	# msm specific files that need to be created on /data
on post-fs-data	on post-fs-data
    # stop cameraserver sooner. qcamerasvr service must start first	    # stop cameraserver sooner. qcamerasvr service must start first
    stop cameraserver	    stop cameraserver
    # initial start-up of ril	    # initial start-up of ril
    start qmuxd	    start qmuxd
    start netmgrd	    start netmgrd
    start qseecomd	    start qseecomd
    # busy loop to wait for qseecomd started	    # busy loop to wait for qseecomd started
    exec - root root system -- /system/vendor/bin/init.qcom.qseecomd.sh	    exec - root root system -- /system/vendor/bin/init.qcom.qseecomd.sh
    # Post-boot tuning: set readahead to 2048KB during boot only	    # Post-boot tuning: set readahead to 2048KB during boot only
    write /sys/block/mmcblk0/queue/read_ahead_kb 2048	    write /sys/block/mmcblk0/queue/read_ahead_kb 2048
    write /sys/block/mmcblk1/queue/read_ahead_kb 2048	    write /sys/block/mmcblk1/queue/read_ahead_kb 2048
    # Mark the copy complete flag to not completed	    # Mark the copy complete flag to not completed
    write /data/misc/radio/copy_complete 0	    write /data/misc/radio/copy_complete 0
    chown radio radio /data/misc/radio/copy_complete	    chown radio radio /data/misc/radio/copy_complete
    chmod 0660 /data/misc/radio/copy_complete	    chmod 0660 /data/misc/radio/copy_complete
    # Create directory for TZ Apps	    # Create directory for TZ Apps
    mkdir /data/misc/qsee 0770 system system	    mkdir /data/misc/qsee 0770 system system
    # NFC local data and nfcee xml storage	    # NFC local data and nfcee xml storage
    mkdir /data/nfc 0770 nfc nfc	    mkdir /data/nfc 0770 nfc nfc
    mkdir /data/nfc/param 0770 nfc nfc	    mkdir /data/nfc/param 0770 nfc nfc
    	    
    # NFC libnfc-nxpConfigState.bin	    # NFC libnfc-nxpConfigState.bin
    mkdir /data/vendor/nfc/ 0770 nfc nfc	    mkdir /data/vendor/nfc/ 0770 nfc nfc
    # Create folder for mm-qcamera-daemon	    # Create folder for mm-qcamera-daemon
    mkdir /data/camera 0770 media camera	    mkdir /data/camera 0770 media camera
    chmod 0666 /dev/media0	    chmod 0666 /dev/media0
    # Create folder for camera sockets	    # Create folder for camera sockets
    mkdir /data/misc/camera 0771 camera camera	    mkdir /data/misc/camera 0771 camera camera
    mkdir /data/misc/ipa 0700 net_admin net_admin	    mkdir /data/misc/ipa 0700 net_admin net_admin
    mkdir /data/misc/bluetooth 0771 bluetooth bluetooth	    mkdir /data/misc/bluetooth 0771 bluetooth bluetooth
    # Create the directories used by the Wireless subsystem	    # Create the directories used by the Wireless subsystem
    mkdir /data/vendor/wifi 0770 wifi wifi	    mkdir /data/vendor/wifi 0770 wifi wifi
    mkdir /data/vendor/wifi/sockets 0770 wifi wifi	    mkdir /data/vendor/wifi/sockets 0770 wifi wifi
    mkdir /data/vendor/wifi/wpa 0770 wifi wifi	    mkdir /data/vendor/wifi/wpa 0770 wifi wifi
    mkdir /data/vendor/wifi/wpa/sockets 0770 wifi wifi	    mkdir /data/vendor/wifi/wpa/sockets 0770 wifi wifi
    mkdir /data/vendor/wifi/wpa_supplicant 0770 wifi wifi	    mkdir /data/vendor/wifi/wpa_supplicant 0770 wifi wifi
    mkdir /data/vendor/wifi/wigig_hostapd 0770 wifi wifi	    mkdir /data/vendor/wifi/wigig_hostapd 0770 wifi wifi
    mkdir /data/misc/wifi 0770 wifi wifi	    mkdir /data/misc/wifi 0770 wifi wifi
    mkdir /data/misc/wifi/sockets 0770 wifi wifi	    mkdir /data/misc/wifi/sockets 0770 wifi wifi
    mkdir /data/misc/wifi/wpa_supplicant 0770 wifi wifi	    mkdir /data/misc/wifi/wpa_supplicant 0770 wifi wifi
    mkdir /data/misc/dhcp 0770 dhcp dhcp	    mkdir /data/misc/dhcp 0770 dhcp dhcp
    chown dhcp dhcp /data/misc/dhcp	    chown dhcp dhcp /data/misc/dhcp
    # Create the directories used by CnE subsystem	    # Create the directories used by CnE subsystem
    mkdir /data/connectivity 0771 system system	    mkdir /data/connectivity 0771 system system
    chown system system /data/connectivity	    chown system system /data/connectivity
    # Create the directories used by DPM subsystem	    # Create the directories used by DPM subsystem
    mkdir /data/dpm 0771 system system	    mkdir /data/dpm 0771 system system
    chown system system /data/dpm	    chown system system /data/dpm
    mkdir /data/dpm/fdMgr 0771 system system	    mkdir /data/dpm/fdMgr 0771 system system
    chown system system /data/dpm/fdMgr	    chown system system /data/dpm/fdMgr
    mkdir /data/dpm/nsrm 0771 system system	    mkdir /data/dpm/nsrm 0771 system system
    chown system system /data/dpm/nsrm	    chown system system /data/dpm/nsrm
    # Create directory used by audio subsystem	    # Create directory used by audio subsystem
    mkdir /data/misc/audio 0770 audio audio	    mkdir /data/misc/audio 0770 audio audio
    # Create directory used by the DASH client	    # Create directory used by the DASH client
    mkdir /data/misc/dash 0770 media audio	    mkdir /data/misc/dash 0770 media audio
    # Create directory used by display clients	    # Create directory used by display clients
    mkdir /data/misc/display 0770 system graphics	    mkdir /data/misc/display 0770 system graphics
    mkdir /persist/display 0770 system graphics	    mkdir /persist/display 0770 system graphics
    chmod 774 /data/user_de/0/com.android.dialer/code_cache/com.android.opengl.shaders_cache	    chmod 774 /data/user_de/0/com.android.dialer/code_cache/com.android.opengl.shaders_cache
    # Mounting of persist is moved to 'on emmc-fs' and 'on fs' sections	    # Mounting of persist is moved to 'on emmc-fs' and 'on fs' sections
    # We chown/chmod /persist again so because mount is run as root + defaults	    # We chown/chmod /persist again so because mount is run as root + defaults
    chown system system /persist	    chown system system /persist
    chmod 0771 /persist	    chmod 0771 /persist
    chmod 0664 /sys/devices/platform/msm_sdcc.1/polling	    chmod 0664 /sys/devices/platform/msm_sdcc.1/polling
    chmod 0664 /sys/devices/platform/msm_sdcc.2/polling	    chmod 0664 /sys/devices/platform/msm_sdcc.2/polling
    chmod 0664 /sys/devices/platform/msm_sdcc.3/polling	    chmod 0664 /sys/devices/platform/msm_sdcc.3/polling
    chmod 0664 /sys/devices/platform/msm_sdcc.4/polling	    chmod 0664 /sys/devices/platform/msm_sdcc.4/polling
    # Chown polling nodes as needed from UI running on system server	    # Chown polling nodes as needed from UI running on system server
    chown system system /sys/devices/soc.0/f9824900.sdhci/polling	    chown system system /sys/devices/soc.0/f9824900.sdhci/polling
    # Create /data/system	    # Create /data/system
    mkdir /data/system 0775 system system	    mkdir /data/system 0775 system system
    # Create directories for Location services	    # Create directories for Location services
    mkdir /data/misc/location 0770 gps gps	    mkdir /data/misc/location 0770 gps gps
    mkdir /data/misc/location/mq 0770 gps gps	    mkdir /data/misc/location/mq 0770 gps gps
    mkdir /data/misc/location/xtwifi 0770 gps gps	    mkdir /data/misc/location/xtwifi 0770 gps gps
    mkdir /data/misc/location/gpsone_d 0770 system gps	    mkdir /data/misc/location/gpsone_d 0770 system gps
    mkdir /data/misc/location/quipc 0770 gps system	    mkdir /data/misc/location/quipc 0770 gps system
    mkdir /data/misc/location/gsiff 0770 gps gps	    mkdir /data/misc/location/gsiff 0770 gps gps
    # Create directory from IMS services	    # Create directory from IMS services
    mkdir /data/shared 0755	    mkdir /data/shared 0755
    chown system system /data/shared	    chown system system /data/shared
    # Make sure the default firmware is loaded	    # Make sure the default firmware is loaded
    write /sys/module/bcmdhd/parameters/firmware_path "/vendor/etc/firmware/fw_bcmdhd.bin"	    write /sys/module/bcmdhd/parameters/firmware_path "/vendor/etc/firmware/fw_bcmdhd.bin"
    # Create /data/time folder for time-services	    # Create /data/time folder for time-services
    mkdir /data/time/ 0700 system system	    mkdir /data/time/ 0700 system system
    mkdir /data/audio/ 0770 media audio	    mkdir /data/audio/ 0770 media audio
    # Create a folder for audio delta files	    # Create a folder for audio delta files
    mkdir /data/audio/acdbdata 0770 media audio	    mkdir /data/audio/acdbdata 0770 media audio
    mkdir /data/audio/acdbdata/delta 0770 media audio	    mkdir /data/audio/acdbdata/delta 0770 media audio
    setprop vold.post_fs_data_done 1	    setprop vold.post_fs_data_done 1
    # Create a folder for SRS to be able to create a usercfg file	    # Create a folder for SRS to be able to create a usercfg file
    mkdir /data/data/media 0770 media media	    mkdir /data/data/media 0770 media media
    # Create rild related dirs	    # Create rild related dirs
    chown 13:13 /system/etc/motorola 	    chown 13:13 /system/etc/motorola 
    chown 13:13 /system/etc/motorola/*       	    chown 13:13 /system/etc/motorola/*       
    chown 13:13 /system/etc/motorola/*/*	    chown 13:13 /system/etc/motorola/*/*
    chmod 2777 /system/etc/motorola	    chmod 2777 /system/etc/motorola
    chmod 2777 /system/etc/motorola/*      	    chmod 2777 /system/etc/motorola/*      
    chmod 2777 /system/etc/motorola/*/*	    chmod 2777 /system/etc/motorola/*/*
    chmod 777 /data/user_de/0/com.android.phone/shared_prefs	    chmod 777 /data/user_de/0/com.android.phone/shared_prefs
    chmod 777 /data/user_de/0/com.android.phone/shared_prefs/*	    chmod 777 /data/user_de/0/com.android.phone/shared_prefs/*
    # Create PERFD deamon related dirs	    # Create PERFD deamon related dirs
    mkdir /data/misc/perfd 0755 root system	    mkdir /data/misc/perfd 0755 root system
    chmod 2755 /data/misc/perfd	    chmod 2755 /data/misc/perfd
    mkdir /data/system/perfd 0770 root system	    mkdir /data/system/perfd 0770 root system
    chmod 2770 /data/system/perfd	    chmod 2770 /data/system/perfd
    rm /data/system/perfd/default_values	    rm /data/system/perfd/default_values
    # Create directory used by sensor subsystem	    # Create directory used by sensor subsystem
    mkdir /persist/sensors 0775 system root	    mkdir /persist/sensors 0775 system root
    chmod 0664 /persist/sensors/sensors_settings	    chmod 0664 /persist/sensors/sensors_settings
    chown system root /persist/sensors/sensors_settings	    chown system root /persist/sensors/sensors_settings
    mkdir /data/misc/sensors 0775 system system	    mkdir /data/misc/sensors 0775 system system
    restorecon_recursive /data/misc/sensors	    restorecon_recursive /data/misc/sensors
    mkdir /data/tombstones 0771 system system	    mkdir /data/tombstones 0771 system system
    mkdir /tombstones/modem 0771 system system	    mkdir /tombstones/modem 0771 system system
    mkdir /tombstones/lpass 0771 system system	    mkdir /tombstones/lpass 0771 system system
    mkdir /tombstones/wcnss 0771 system system	    mkdir /tombstones/wcnss 0771 system system
    mkdir /tombstones/dsps 0771 system system	    mkdir /tombstones/dsps 0771 system system
    mkdir /persist/data/sfs 0700 system system	    mkdir /persist/data/sfs 0700 system system
    mkdir /persist/data/tz 0700 system system	    mkdir /persist/data/tz 0700 system system
    mkdir /persist/tee 0700 system system	    mkdir /persist/tee 0700 system system
    mkdir /data/app/mcRegistry 0775 system system	    mkdir /data/app/mcRegistry 0775 system system
    chown root cw_access /cota	    chown root cw_access /cota
    chmod 0771 /cota	    chmod 0771 /cota
    chown system system /preload	    chown system system /preload
    chmod 0771 /preload	    chmod 0771 /preload
    # set device node permissions for TLC apps	    # set device node permissions for TLC apps
    chmod 0600 /dev/mobicore	    chmod 0600 /dev/mobicore
    chown system system /dev/mobicore	    chown system system /dev/mobicore
    chmod 0666 /dev/mobicore-user	    chmod 0666 /dev/mobicore-user
    chown system system /dev/mobicore-user	    chown system system /dev/mobicore-user
    # restorecon cota partition.	    # restorecon cota partition.
    restorecon_recursive /cota	    restorecon_recursive /cota
    mkdir /data/usf 0700 system system	    mkdir /data/usf 0700 system system
    # Z2G4-BSP-TS@lge.com make directory for sns.reg used by sensordaemon	    # Z2G4-BSP-TS@lge.com make directory for sns.reg used by sensordaemon
    mkdir /sns/cal/ 0774 system system	    mkdir /sns/cal/ 0774 system system
    restorecon_recursive /sns	    restorecon_recursive /sns
service imsqmidaemon /system/vendor/bin/imsqmidaemon	service imsqmidaemon /system/vendor/bin/imsqmidaemon
    class main	    class main
    user system	    user system
    socket ims_qmid stream 0660 system radio	    socket ims_qmid stream 0660 system radio
    group radio net_raw log diag	    group radio net_raw log diag
    writepid /dev/cpuset/system-background/tasks	    writepid /dev/cpuset/system-background/tasks
service imsdatadaemon /system/vendor/bin/imsdatadaemon	service imsdatadaemon /system/vendor/bin/imsdatadaemon
    class main	    class main
    user system	    user system
    socket ims_datad stream 0660 system radio	    socket ims_datad stream 0660 system radio
    group system wifi radio inet net_raw log diag net_admin	    group system wifi radio inet net_raw log diag net_admin
    writepid /dev/cpuset/system-background/tasks	    writepid /dev/cpuset/system-background/tasks
    disabled	    disabled
on property:sys.ims.QMI_DAEMON_STATUS=1	on property:sys.ims.QMI_DAEMON_STATUS=1
    start imsdatadaemon	    start imsdatadaemon
service ims_rtp_daemon /system/vendor/bin/ims_rtp_daemon	service ims_rtp_daemon /system/vendor/bin/ims_rtp_daemon
    class main	    class main
    user system	    user system
    socket ims_rtpd stream 0660 system radio	    socket ims_rtpd stream 0660 system radio
    group radio diag inet log	    group radio diag inet log
    writepid /dev/cpuset/system-background/tasks	    writepid /dev/cpuset/system-background/tasks
    disabled	    disabled
on property:sys.ims.DATA_DAEMON_STATUS=1	on property:sys.ims.DATA_DAEMON_STATUS=1
    start ims_rtp_daemon	    start ims_rtp_daemon
service imscmservice /system/vendor/bin/imscmservice	service imscmservice /system/vendor/bin/imscmservice
    class main	    class main
    user system	    user system
    group radio diag log	    group radio diag log
    writepid /dev/cpuset/system-background/tasks	    writepid /dev/cpuset/system-background/tasks
on property:persist.sys.ssr.restart_level=*	on property:persist.sys.ssr.restart_level=*
    start ssr_setup	    start ssr_setup
on property:persist.sys.ssr.enable_ramdumps=1	on property:persist.sys.ssr.enable_ramdumps=1
    write /sys/module/subsystem_restart/parameters/enable_ramdumps 1	    write /sys/module/subsystem_restart/parameters/enable_ramdumps 1
    start ss_ramdump	    start ss_ramdump
on property:persist.sys.ssr.enable_ramdumps=0	on property:persist.sys.ssr.enable_ramdumps=0
    write /sys/module/subsystem_restart/parameters/enable_ramdumps 0	    write /sys/module/subsystem_restart/parameters/enable_ramdumps 0
on property:bluetooth.isEnabled=true	on property:bluetooth.isEnabled=true
    start btwlancoex	    start btwlancoex
    write /sys/class/bluetooth/hci0/idle_timeout 7000	    write /sys/class/bluetooth/hci0/idle_timeout 7000
on property:bluetooth.sap.status=running	on property:bluetooth.sap.status=running
    start bt-sap	    start bt-sap
on property:bluetooth.sap.status=stopped	on property:bluetooth.sap.status=stopped
    stop bt-sap	    stop bt-sap
on property:bluetooth.dun.status=running	on property:bluetooth.dun.status=running
    start bt-dun	    start bt-dun
on property:bluetooth.dun.status=stopped	on property:bluetooth.dun.status=stopped
    stop bt-dun	    stop bt-dun
on property:ro.bluetooth.ftm_enabled=true	on property:ro.bluetooth.ftm_enabled=true
    start ftmd	    start ftmd
on property:bluetooth.startbtsnoop=true	on property:bluetooth.startbtsnoop=true
    start btsnoop	    start btsnoop
on property:bluetooth.startbtsnoop=false	on property:bluetooth.startbtsnoop=false
    stop btsnoop	    stop btsnoop
service ppd /system/vendor/bin/mm-pp-daemon	service ppd /system/vendor/bin/mm-pp-daemon
    class late_start	    class late_start
    user system	    user system
    seclabel u:r:mm-pp-daemon:s0	    seclabel u:r:mm-pp-daemon:s0
    socket pps stream 0660 system system	    socket pps stream 0660 system system
    group system graphics	    group system graphics
    writepid /dev/cpuset/system-background/tasks	    writepid /dev/cpuset/system-background/tasks
    disabled	    disabled
service bdaddr_loader /system/vendor/bin/bdaddr_loader	service bdaddr_loader /system/vendor/bin/bdaddr_loader
    class late_start	    class late_start
    user root	    user root
    group bluetooth net_bt_admin	    group bluetooth net_bt_admin
    oneshot	    oneshot
service config_bluetooth /system/vendor/bin/init.qcom.bt.sh "onboot"	service config_bluetooth /system/vendor/bin/init.qcom.bt.sh "onboot"
    class core	    class core
    user root	    user root
    oneshot	    oneshot
on property:init.svc.surfaceflinger=stopped	on property:init.svc.surfaceflinger=stopped
    stop ppd	    stop ppd
on property:init.svc.surfaceflinger=running	on property:init.svc.surfaceflinger=running
    start ppd	    start ppd
on property:vold.decrypt=trigger_restart_framework	on property:vold.decrypt=trigger_restart_framework
    start config_bluetooth	    start config_bluetooth
on property:vold.decrypt=trigger_reset_main	on property:vold.decrypt=trigger_reset_main
    start pulseon	    start pulseon
on property:persist.env.fastdorm.enabled=true	on property:persist.env.fastdorm.enabled=true
    setprop persist.radio.data_no_toggle 1	    setprop persist.radio.data_no_toggle 1
service irsc_util /system/vendor/bin/irsc_util "/etc/sec_config"	service irsc_util /system/vendor/bin/irsc_util "/etc/sec_config"
    class main	    class main
    user root	    user root
    oneshot	    oneshot
service qcom-c_main-sh /system/vendor/bin/init.class_main.sh	service qcom-c_main-sh /system/vendor/bin/init.class_main.sh
    class main	    class main
    user root	    user root
    oneshot	    oneshot
service baseband-sh /system/vendor/bin/init.baseband.sh	service baseband-sh /system/vendor/bin/init.baseband.sh
    class late_start	    class late_start
    user system	    user system
    seclabel u:r:baseband:s0	    seclabel u:r:baseband:s0
    oneshot	    oneshot
    disabled	    disabled
on property:vold.decrypt=trigger_restart_framework	on property:vold.decrypt=trigger_restart_framework
    start qcom-c_main-sh	    start qcom-c_main-sh
    start config_bluetooth	    start config_bluetooth
on property:persist.env.fastdorm.enabled=true	on property:persist.env.fastdorm.enabled=true
    setprop persist.radio.data_no_toggle 1	    setprop persist.radio.data_no_toggle 1
service rmt_storage /system/vendor/bin/rmt_storage	service rmt_storage /system/vendor/bin/rmt_storage
    class core	    class core
    user root	    user root
    disabled	    disabled
    group root wakelock	    group root wakelock
    shutdown critical	    shutdown critical
    ioprio rt 0	    ioprio rt 0
    writepid /dev/cpuset/system-background/tasks	    writepid /dev/cpuset/system-background/tasks
service rfs_access /system/vendor/bin/rfs_access	service rfs_access /system/vendor/bin/rfs_access
   class core	   class core
   user root	   user root
   group system net_raw wakelock	   group system net_raw wakelock
   writepid /dev/cpuset/system-background/tasks	   writepid /dev/cpuset/system-background/tasks
on property:wc_transport.start_hci=true	on property:wc_transport.start_hci=true
    start start_hci_filter	    start start_hci_filter
on property:wc_transport.start_hci=false	on property:wc_transport.start_hci=false
    stop start_hci_filter	    stop start_hci_filter
service config_bt_addr /system/vendor/bin/sh -c "/system/vendor/bin/btnvtool -O"	service config_bt_addr /system/vendor/bin/sh -c "/system/vendor/bin/btnvtool -O"
    class core	    class core
    user bluetooth	    user bluetooth
    group bluetooth radio	    group bluetooth radio
    oneshot	    oneshot
# QMUX must be in multiple groups to support external process connections	# QMUX must be in multiple groups to support external process connections
service qmuxd /system/vendor/bin/qmuxd	service qmuxd /system/vendor/bin/qmuxd
    class main	    class main
    user root	    user root
    group radio audio bluetooth gps nfc diag	    group radio audio bluetooth gps nfc diag
    writepid /dev/cpuset/system-background/tasks	    writepid /dev/cpuset/system-background/tasks
    disabled	    disabled
service netmgrd /system/vendor/bin/netmgrd	service netmgrd /system/vendor/bin/netmgrd
    class main	    class main
    user root	    user root
    group radio root wifi wakelock inet oem_2950	    group radio root wifi wakelock inet oem_2950
    writepid /dev/cpuset/system-background/tasks	    writepid /dev/cpuset/system-background/tasks
    disabled	    disabled
service ipacm-diag /system/vendor/bin/ipacm-diag	service ipacm-diag /system/vendor/bin/ipacm-diag
    class main	    class main
    user system	    user system
    socket ipacm_log_file dgram 660 system net_admin	    socket ipacm_log_file dgram 660 system net_admin
    group net_admin oem_2950	    group net_admin oem_2950
    writepid /dev/cpuset/system-background/tasks	    writepid /dev/cpuset/system-background/tasks
    disabled	    disabled
service qti /system/vendor/bin/qti	service qti /system/vendor/bin/qti
    class main	    class main
    user radio	    user radio
    group radio oem_2901 diag usb net_admin	    group radio oem_2901 diag usb net_admin
    disabled	    disabled
service sensors /system/vendor/bin/sensors.qcom	service sensors /system/vendor/bin/sensors.qcom
    class core	    class core
    user root	    user root
    group root system wakelock	    group root system wakelock
    writepid /dev/cpuset/system-background/tasks	    writepid /dev/cpuset/system-background/tasks
on property:ro.use_data_netmgrd=false	on property:ro.use_data_netmgrd=false
    # netmgr not supported on specific target	    # netmgr not supported on specific target
    stop netmgrd	    stop netmgrd
# Adjust socket buffer to enlarge TCP receive window for high bandwidth	# Adjust socket buffer to enlarge TCP receive window for high bandwidth
# but only if ro.data.large_tcp_window_size property is set.	# but only if ro.data.large_tcp_window_size property is set.
on property:ro.data.large_tcp_window_size=true	on property:ro.data.large_tcp_window_size=true
    write /proc/sys/net/ipv4/tcp_adv_win_scale  2	    write /proc/sys/net/ipv4/tcp_adv_win_scale  2
service btwlancoex /system/vendor/bin/init.qcom.coex.sh	service btwlancoex /system/vendor/bin/init.qcom.coex.sh
    class late_start	    class late_start
    user bluetooth	    user bluetooth
    group bluetooth net_bt_admin inet net_admin net_raw	    group bluetooth net_bt_admin inet net_admin net_raw
    disabled	    disabled
service fm_dl /system/vendor/bin/init.qcom.fm.sh	service fm_dl /system/vendor/bin/init.qcom.fm.sh
    class late_start	    class late_start
    user root	    user root
    group system	    group system
    disabled	    disabled
    oneshot	    oneshot
on property:crypto.driver.load=1	on property:crypto.driver.load=1
     insmod /system/lib/modules/qce.ko	     insmod /system/lib/modules/qce.ko
     insmod /system/lib/modules/qcedev.ko	     insmod /system/lib/modules/qcedev.ko
service drmdiag /system/bin/drmdiagapp	service drmdiag /system/bin/drmdiagapp
     class late_start	     class late_start
     user root	     user root
     disabled	     disabled
     oneshot	     oneshot
on property:drmdiag.load=1	on property:drmdiag.load=1
    start drmdiag	    start drmdiag
on property:drmdiag.load=0	on property:drmdiag.load=0
    stop drmdiag	    stop drmdiag
service qcom-post-boot /system/vendor/bin/init.qcom.post_boot.sh	service qcom-post-boot /system/vendor/bin/init.qcom.post_boot.sh
    class late_start	    class late_start
    user root	    user root
    disabled	    disabled
    oneshot	    oneshot
service ril-daemon /vendor/bin/hw/rild	service ril-daemon /vendor/bin/hw/rild
    socket qmux_radio/rild_oem0 stream 0777 radio system	    socket qmux_radio/rild_oem0 stream 0777 radio system
    socket qmux_radio/qmux_client_socket stream 0777 radio system	    socket qmux_radio/qmux_client_socket stream 0777 radio system
    socket settingsd stream 660 radio system	    socket settingsd stream 660 radio system
    user root	    user root
    group radio cache inet misc audio log readproc wakelock oem_2901 oem_2950 net_raw wifi diag	    group radio cache inet misc audio log readproc wakelock oem_2901 oem_2950 net_raw wifi diag
    capabilities BLOCK_SUSPEND NET_ADMIN NET_RAW	    capabilities BLOCK_SUSPEND NET_ADMIN NET_RAW
    writepid /dev/cpuset/system-background/tasks	    writepid /dev/cpuset/system-background/tasks
    disabled	    disabled
# the rild watchdog which ensures proper rild handling	# the rild watchdog which ensures proper rild handling
service wd-ril-daemon /system/bin/wrild.sh	service wd-ril-daemon /system/bin/wrild.sh
    class main	    class main
    user root	    user root
    seclabel u:r:wrild:s0	
    writepid /dev/cpuset/system-background/tasks	    writepid /dev/cpuset/system-background/tasks
    disabled	    disabled


on property:init.svc.ril-daemon=stopped && property:init.svc.bootanim=running	on property:init.svc.ril-daemon=stopped && property:init.svc.bootanim=running
    stop netmgrd	    stop netmgrd
    stop qmuxd	    stop qmuxd
    start qmuxd	    start qmuxd
    start netmgrd	    start netmgrd
    start ril-daemon	    start ril-daemon
on property:ro.data.large_tcp_window_size=true	on property:ro.data.large_tcp_window_size=true
    # Adjust socket buffer to enlarge TCP receive window for high bandwidth (e.g. DO-RevB)	    # Adjust socket buffer to enlarge TCP receive window for high bandwidth (e.g. DO-RevB)
    write /proc/sys/net/ipv4/tcp_adv_win_scale  2	    write /proc/sys/net/ipv4/tcp_adv_win_scale  2
service msm_irqbalance /system/vendor/bin/msm_irqbalance -f /system/vendor/etc/msm_irqbalance.conf	service msm_irqbalance /system/vendor/bin/msm_irqbalance -f /system/vendor/etc/msm_irqbalance.conf
    socket msm_irqbalance seqpacket 660 root system	    socket msm_irqbalance seqpacket 660 root system
    class core	    class core
    user root	    user root
    group root	    group root
    writepid /dev/cpuset/system-background/tasks	    writepid /dev/cpuset/system-background/tasks
# init.qcom.usb.sh configure RNDIS to go through HW IPA	# init.qcom.usb.sh configure RNDIS to go through HW IPA
service qcom-usb-sh /system/vendor/bin/init.qcom.usb.sh	service qcom-usb-sh /system/vendor/bin/init.qcom.usb.sh
@@ -1103,40 +1091,17 @@
    seclabel u:r:sensors:s0	    seclabel u:r:sensors:s0
# start sensor daemon as core class [END]	# start sensor daemon as core class [END]


service boot_lc /system/bin/logcat -b all -D -f /cache/debug/boot_lc_full.txt	
    user system	
    group root system	
    disabled	
    oneshot	

service boot_lc_crash /system/bin/logcat -b crash -D -f /cache/debug/boot_lc_crash.txt	
    user system	
    group root system	
    disabled	
    oneshot	

service boot_lc_kernel /system/bin/logcat -b kernel -D -f /cache/debug/boot_lc_kernel.txt	
    user system	
    group root system	
    disabled	
    oneshot	

service pulseon /sbin/pulse.sh	service pulseon /sbin/pulse.sh
    user system	    user system
    seclabel u:r:pulse:s0	
    oneshot	    oneshot


service pulseoff /sbin/pulse.sh stop	service pulseoff /sbin/pulse.sh stop
    user system	    user system
    seclabel u:r:pulse:s0	
    oneshot	    oneshot


on property:sys.boot_completed=1	on property:sys.boot_completed=1
    stop pulseon	    stop pulseon
    start pulseoff	    start pulseoff
    stop boot_lc	
    stop boot_lc_crash	
    stop boot_lc_kernel	


on property:init.svc.bootanim=stopped	on property:init.svc.bootanim=stopped
    stop pulseon	    stop pulseon
    start pulseoff	    start pulseoff
on property:apexd.status=ready	on property:apexd.status=ready
    mount none /system/etc/swcodec/ld.config.txt /apex/com.android.media.swcodec/etc/ld.config.txt bind	    mount none /system/etc/swcodec/ld.config.txt /apex/com.android.media.swcodec/etc/ld.config.txt bind
on property:dev.bootcomplete=1	on property:dev.bootcomplete=1
    stop pulseon	    stop pulseon
    start pulseoff	    start pulseoff
    stop boot_lc	
    stop boot_lc_crash	
    stop boot_lc_kernel	


on property:gsm.version.baseband=""	on property:gsm.version.baseband=""
    start baseband-sh	    start baseband-sh
on property:wlan.write.con_mode=*	on property:wlan.write.con_mode=*
    write /sys/module/wlan/parameters/con_mode ${wlan.write.con_mode}	    write /sys/module/wlan/parameters/con_mode ${wlan.write.con_mode}
 2  sepolicy/sudaemon.te 
@@ -1,2 +0,0 @@
allow sudaemon surfaceflinger_service:service_manager find;	
allow sudaemon power_service:service_manager find;	
 1  sepolicy/wrild.te 
@@ -1,70 +1,69 @@
type wrild, domain;	type wrild, domain;
type wrild_exec, exec_type, file_type;	type wrild_exec, exec_type, file_type;
init_daemon_domain(wrild)	init_daemon_domain(wrild)
# allow wrild to read any /proc/pid	# allow wrild to read any /proc/pid
r_dir_file(wrild, domain)	r_dir_file(wrild, domain)
# rild	# rild
allow wrild ctl_start_prop:property_service set;	allow wrild ctl_start_prop:property_service set;
allow wrild ctl_stop_prop:property_service set;	allow wrild ctl_stop_prop:property_service set;
allow wrild init:unix_stream_socket connectto;	allow wrild init:unix_stream_socket connectto;
allow wrild property_socket:sock_file write;	allow wrild property_socket:sock_file write;
allow wrild self:capability sys_ptrace;	allow wrild self:capability sys_ptrace;
allow wrild shell_exec:file { getattr read };	allow wrild shell_exec:file { getattr read };
allow wrild system_file:file entrypoint;	allow wrild system_file:file entrypoint;
allow wrild system_file:file execute_no_trans;	allow wrild system_file:file execute_no_trans;
allow wrild toolbox_exec:file { execute execute_no_trans getattr open read };	allow wrild toolbox_exec:file { execute execute_no_trans getattr open read };
# watchdog	# watchdog
allow wrild cache_file:dir { add_name write };	allow wrild cache_file:dir { add_name write };
allow wrild cache_file:file { ioctl append create open };	allow wrild cache_file:file { ioctl append create open };
allow wrild init:dir { getattr search };	allow wrild init:dir { getattr search };
allow wrild init:file { open read };	allow wrild init:file { open read };
allow wrild kernel:dir { getattr search };	allow wrild kernel:dir { getattr search };
allow wrild kernel:file { open read };	allow wrild kernel:file { open read };
allow wrild kernel:system { syslog_read syslog_mod};	allow wrild kernel:system { syslog_read syslog_mod};
allow wrild kmsg_device:chr_file { open read };	allow wrild kmsg_device:chr_file { open read };
allow wrild logcat_exec:file { getattr open read execute execute_no_trans };	allow wrild logcat_exec:file { getattr open read execute execute_no_trans };
allow wrild logd:dir { getattr search };	allow wrild logd:dir { getattr search };
allow wrild logd:file { open read };	allow wrild logd:file { open read };
allow wrild logd:unix_stream_socket connectto;	allow wrild logd:unix_stream_socket connectto;
allow wrild logd_socket:sock_file write;	allow wrild logd_socket:sock_file write;
allow wrild logdr_socket:sock_file write;	allow wrild logdr_socket:sock_file write;
allow wrild media_rw_data_file:dir { open read search write add_name create getattr remove_name rmdir };	allow wrild media_rw_data_file:dir { open read search write add_name create getattr remove_name rmdir };
allow wrild media_rw_data_file:file { read open create write append getattr unlink };	allow wrild media_rw_data_file:file { read open create write append getattr unlink };
allow wrild mnt_user_file:dir search;	allow wrild mnt_user_file:dir search;
allow wrild mnt_user_file:lnk_file read;	allow wrild mnt_user_file:lnk_file read;
allow wrild registry_service:service_manager find;	allow wrild registry_service:service_manager find;
allow wrild rild:file read;	allow wrild rild:file read;
allow wrild radio_prop:property_service set;	allow wrild radio_prop:property_service set;
allow wrild sdcardfs:dir { search write add_name create read getattr open read remove_name rmdir };	allow wrild sdcardfs:dir { search write add_name create read getattr open read remove_name rmdir };
allow wrild sdcardfs:file { create append open getattr unlink };	allow wrild sdcardfs:file { create append open getattr unlink };
allow wrild self:capability2 syslog;	allow wrild self:capability2 syslog;
allow wrild servicemanager:binder call;	allow wrild servicemanager:binder call;
allow wrild storage_file:dir search;	allow wrild storage_file:dir search;
allow wrild storage_file:lnk_file read;	allow wrild storage_file:lnk_file read;
allow wrild system_server:binder call;	allow wrild system_server:binder call;
allow wrild window_service:service_manager find;	allow wrild window_service:service_manager find;
allow wrild wrild_prop:property_service set;	allow wrild wrild_prop:property_service set;
allow wrild wrild_prop:file { getattr open read };	allow wrild wrild_prop:file { getattr open read };
# wrild.sh uses ps and so will spam the log for unneeded stuff	# wrild.sh uses ps and so will spam the log for unneeded stuff
# wildcard not possible and as we override neverallows thats the only known way.	# wildcard not possible and as we override neverallows thats the only known way.
# everything with "comm=ps" in an avc denied log should be added here:	# everything with "comm=ps" in an avc denied log should be added here:
define(`wrild_dont_audit', `{	define(`wrild_dont_audit', `{
    adsprpcd	    adsprpcd
    audioserver	    audioserver
    cameraserver	    cameraserver
    drmserver	    drmserver
    energyawareness	    energyawareness
    gatekeeperd	    gatekeeperd
    hal_cas_default	    hal_cas_default
    hal_configstore_default	    hal_configstore_default
    hal_graphics_allocator_default	    hal_graphics_allocator_default
    hal_health_default	    hal_health_default
    hal_light_default	    hal_light_default
    hal_lineage_trust_default	
    hal_power_default	    hal_power_default
    hal_thermal_default	    hal_thermal_default
    hal_usb_default	    hal_usb_default
    hal_wifi_default	    hal_wifi_default
    hal_wifi_offload_default	    hal_wifi_offload_default
    healthd	    healthd
    hwservicemanager	    hwservicemanager
    imscm	    imscm
    ims	    ims
    imswmsproxy	    imswmsproxy
    incidentd	    incidentd
    init	    init
    installd	    installd
    isolated_app	    isolated_app
    kernel	    kernel
    keystore	    keystore
    lmkd	    lmkd
    logd	    logd
    mediacodec	    mediacodec
    mediadrmserver	    mediadrmserver
    mediaextractor	    mediaextractor
    mediaprovider	    mediaprovider
    mediametrics	    mediametrics
    mediaserver	    mediaserver
    mm-pp-daemon	    mm-pp-daemon
    mm-qcamerad	    mm-qcamerad
    netd	    netd
    perfprofd	    perfprofd
    platform_app	    platform_app
    priv_app	    priv_app
    qmuxd	    qmuxd
    rfs_access	    rfs_access
    rmt_storage	    rmt_storage
    secure_element	    secure_element
    sensors	    sensors
    servicemanager	    servicemanager
    shell	    shell
    su	    su
    surfaceflinger	    surfaceflinger
    tee	    tee
    thermal-engine	    thermal-engine
    thermalserviced	    thermalserviced
    time_daemon	    time_daemon
    tombstoned	    tombstoned
    traceur_app	    traceur_app
    ueventd	    ueventd
    untrusted_app	    untrusted_app
    untrusted_app_25	    untrusted_app_25
    untrusted_app_27	    untrusted_app_27
    vendor_init	    vendor_init
    vendor_per_mgr	    vendor_per_mgr
    vndservicemanager	    vndservicemanager
    vold	    vold
    wificond	    wificond
    zygote	    zygote
}')	}')
dontaudit wrild wrild_dont_audit:{ file dir } { read getattr };	dontaudit wrild wrild_dont_audit:{ file dir } { read getattr };
dontaudit wrild wrild_dont_audit:{ dir } { search };	dontaudit wrild wrild_dont_audit:{ dir } { search };
 1  softap/Android.mk 
@@ -0,0 +1 @@
include $(call all-subdir-makefiles)
 90  softap/sdk/Android.mk 
@@ -0,0 +1,90 @@


LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

LOCAL_C_INCLUDES := $(TOP)/hardware/libhardware_legacy/wifi $(TOP)/external/libnl/include $(TOP)/external/wpa_supplicant_8/wpa_supplicant/src/drivers

LOCAL_MODULE:= libqsap_sdk

LOCAL_MODULE_TAGS := optional

ifeq ($(PRODUCT_VENDOR_MOVE_ENABLED), true)
LOCAL_VENDOR_MODULE := true
endif

LOCAL_CFLAGS += -DSDK_VERSION=\"0.0.1.0\"

LOCAL_USE_VNDK := true

LOCAL_EXPORT_C_INCLUDE_DIRS := $(LOCAL_PATH)/qsap_api.h \
                               $(LOCAL_PATH)/qsap.h

ifdef WIFI_DRIVER_MODULE_PATH
LOCAL_CFLAGS += -DWIFI_DRIVER_MODULE_PATH=\"$(WIFI_DRIVER_MODULE_PATH)\"
endif

ifdef WIFI_DRIVER_MODULE_ARG
LOCAL_CFLAGS += -DWIFI_DRIVER_MODULE_ARG=\"$(WIFI_DRIVER_MODULE_ARG)\"
endif

ifdef WIFI_DRIVER_MODULE_NAME
LOCAL_CFLAGS += -DWIFI_DRIVER_MODULE_NAME=\"$(WIFI_DRIVER_MODULE_NAME)\"
endif

ifdef WIFI_SDIO_IF_DRIVER_MODULE_PATH
LOCAL_CFLAGS += -DWIFI_SDIO_IF_DRIVER_MODULE_PATH=\"$(WIFI_SDIO_IF_DRIVER_MODULE_PATH)\"
endif

ifdef WIFI_SDIO_IF_DRIVER_MODULE_NAME
LOCAL_CFLAGS += -DWIFI_SDIO_IF_DRIVER_MODULE_NAME=\"$(WIFI_SDIO_IF_DRIVER_MODULE_NAME)\"
endif

ifdef WIFI_CFG80211_DRIVER_MODULE_PATH
LOCAL_CFLAGS += -DWIFI_CFG80211_DRIVER_MODULE_PATH=\"$(WIFI_CFG80211_DRIVER_MODULE_PATH)\"
endif

ifdef WIFI_CFG80211_DRIVER_MODULE_ARG
LOCAL_CFLAGS += -DWIFI_CFG80211_DRIVER_MODULE_ARG=\"$(WIFI_CFG80211_DRIVER_MODULE_ARG)\"
endif

ifdef WIFI_CFG80211_DRIVER_MODULE_NAME
LOCAL_CFLAGS += -DWIFI_CFG80211_DRIVER_MODULE_NAME=\"$(WIFI_CFG80211_DRIVER_MODULE_NAME)\"
endif

ifdef WIFI_DRIVER_CONF_FILE
LOCAL_CFLAGS += -DWIFI_DRIVER_CONF_FILE=\"$(WIFI_DRIVER_CONF_FILE)\"
endif

ifdef WIFI_DRIVER_DEF_CONF_FILE
LOCAL_CFLAGS += -DWIFI_DRIVER_DEF_CONF_FILE=\"$(WIFI_DRIVER_DEF_CONF_FILE)\"
endif

LOCAL_CFLAGS += \
    -Wall \
    -Werror \
    -Wno-unused-variable \
    -Wno-unused-value \
    -Wno-format \
    -Wno-sometimes-uninitialized \
    -Wno-enum-conversion \
    -Wno-unused-parameter \
    -Wno-implicit-function-declaration

LOCAL_SRC_FILES := qsap_api.c \
                   qsap.c

LOCAL_PRELINK_MODULE := false

LOCAL_SHARED_LIBRARIES := libnetutils libutils libbinder libcutils libhardware_legacy libnl liblog

LOCAL_HEADER_LIBRARIES := libcutils_headers

include $(BUILD_SHARED_LIBRARY)

include $(CLEAR_VARS)
LOCAL_MODULE := libqsap_headers
LOCAL_EXPORT_C_INCLUDE_DIRS := $(LOCAL_PATH)
LOCAL_VENDOR_MODULE := true
include $(BUILD_HEADER_LIBRARY)
 710  softap/sdk/qsap.c 
Large diffs are not rendered by default.

 61  softap/sdk/qsap.h 
@@ -0,0 +1,61 @@
/*
 * Copyright (c) 2010, The Linux Foundation. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *  * Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of The Linux Foundation nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 * THIS SOFTWARE IS PROVIDED "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS
 * BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
 * BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 * OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN
 * IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


#ifndef _QSAP_H
#define _QSAP_H

#if __cplusplus
extern "C" {
#endif

#include "qsap_api.h"

s32 wifi_qsap_load_driver(void);
s32 wifi_qsap_unload_driver(void);
s32 wifi_qsap_stop_bss(void);
s32 commit(void);
s32 is_softap_enabled(void);
s32 wifi_qsap_start_softap(void);
s32 wifi_qsap_stop_softap(void);
s32 wifi_qsap_start_wigig_softap(void);
s32 wifi_qsap_stop_wigig_softap(void);
s32 wifi_qsap_reload_softap(void);
s32 wifi_qsap_unload_wifi_sta_driver(void);

#ifdef QCOM_WLAN_CONCURRENCY
s32 wifi_qsap_start_softap_in_concurrency(void);
s32 wifi_qsap_stop_softap_in_concurrency(void);
#endif

#if __cplusplus
};  // extern "C"
#endif

#endif  // _QSAP_H
 3,652  softap/sdk/qsap_api.c 
@@ -0,0 +1,3652 @@
/*
 * Copyright (c) 2010-2013, The Linux Foundation. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *  * Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of The Linux Foundation, Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 * THIS SOFTWARE IS PROVIDED "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS
 * BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
 * BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 * OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN
 * IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <errno.h>
#include <unistd.h>
#include <ctype.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <linux/wireless.h>
#include <sys/socket.h>
#include <sys/un.h>
#include <sys/select.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <unistd.h>
#include <net/if.h>
#include <net/if_arp.h>
#include <netlink/netlink.h>
#include <netlink/genl/genl.h>
#include <netlink/genl/family.h>
#include <netlink/genl/ctrl.h>
#include "nl80211_copy.h"

#include "qsap_api.h"
#include "qsap.h"

#define QCSAP_IOCTL_GETPARAM          (SIOCIWFIRSTPRIV+1)
#define WLAN_PRIV_SET_THREE_INT_GET_NONE  (SIOCIWFIRSTPRIV + 4)
#define QCSAP_IOCTL_GET_CHANNEL       (SIOCIWFIRSTPRIV+9)
#define QCSAP_IOCTL_ASSOC_STA_MACADDR (SIOCIWFIRSTPRIV+10)
#define QCSAP_IOCTL_DISASSOC_STA      (SIOCIWFIRSTPRIV+11)
#define QCSAP_IOCTL_AP_STATS          (SIOCIWFIRSTPRIV+12)
#define QCSAP_IOCTL_SET_CHANNEL_RANGE (SIOCIWFIRSTPRIV+17)
#define QCSAP_PARAM_GET_AUTO_CHANNEL 9
#define WE_SET_SAP_CHANNELS  3

#define LOG_TAG "QCSDK"

#include <cutils/properties.h>
#include <cutils/log.h>

#define SKIP_BLANK_SPACE(x) {while(*x != '\0') { if((*x == ' ') || (*x == '\t')) x++; else break; }}

/** If this variable is enabled, the soft AP is reloaded, after the commit
  * command is received */
static volatile int gIniUpdated = 0;

/** Supported command requests.
  * WANRING: The enum eCMD_REQ in the file qsap_api.h should be
  * updated if Cmd_req[], us updated
  */
s8 *Cmd_req[eCMD_REQ_LAST] = {
    "get",
    "set"
};

/** Supported config file requests.
  * WANRING: The enum eConf_req in the file qsap_api.h should be
  * updated if Conf_req[], us updated
  */
s8 *Conf_req[CONF_REQ_LAST] = {
    "dual2g",
    "dual5g",
    "owe"
};

/*
 * WARNING: On updating the cmd_list, the enum esap_cmd in file
 * qsap_api.h must be updates to reflect the changes
 */
static struct Command cmd_list[eCMD_LAST] = {
    { "ssid",                  "QualcommSoftAP" },
    { "ignore_broadcast_ssid", "0"              },
    { "channel",               "1"              },
    { "beacon_int",            "100"            },
    { "dtim_period",           "2"              },
    { "hw_mode",               "n"              },
    { "auth_algs",             "3"              },
    { "security_mode",         "0"              },
    { "wep_key0",              NULL             },
    { "wep_key1",              NULL             },
    { "wep_key2",              NULL             },
    { "wep_key3",              NULL             },
    { "wep_default_key",       NULL             },
    { "wpa_passphrase",        NULL             },
    { "wpa_pairwise",          NULL             },
    { "rsn_pairwise",          NULL             },
    { "mac_address",           "00deadbeef04"   },
    { "reset_ap",              NULL             },
    { "macaddr_acl",           "0"              },
    { "add_to_allow_list",     NULL             },
    { "add_to_deny_list",      NULL             },
    { "remove_from_allow_list", NULL            },
    { "remove_from_deny_list", NULL             },
    { "allow_list",            ""               },
    { "deny_list",             ""               },
    { "commit",                NULL             },
    { "enable_softap",         NULL             },
    { "disassoc_sta",          NULL             },
    { "reset_to_default",      NULL             },
    { "protection_flag",       "1"              },
    { "data_rate",             "0"              },
    { "sta_mac_list",          NULL             },
    { "tx_power",              "27"             },
    { "sdk_version",           SDK_VERSION      },
    { "wmm_enabled",           "0"              },

    /** Warning: Do not change the order of the WPS commands */
    { "wps_state",             "0"              },
    { "config_methods",        NULL             },
    { "uuid",                  NULL             },
    { "device_name",           NULL             },
    { "manufacturer",          NULL             },
    { "model_name",            NULL             },
    { "model_number",          NULL             },
    { "serial_number",         NULL             },
    { "device_type",           NULL             },
    { "os_version",            NULL             },
    { "friendly_name",         NULL             },
    { "manufacturer_url",      NULL             },
    { "model_description",     NULL             },
    { "model_url",             NULL             },
    { "upc",                   NULL             },
    /************ WPS commands end *********/

    { "fragm_threshold",       NULL             },
    { "rts_threshold",         NULL             },
    { "wpa_group_rekey",       NULL             },
    { "country_code",          NULL             },
    { "ap_isolate",            NULL             },
    { "ieee80211d",            NULL             },
    { "apstat",                NULL             },
    { "auto_shut_off_time",    NULL             },
    { "energy_detect_threshold", "128"          },
    { "basic_rates",            NULL            },
    { "require_ht",            NULL             },
    { "ieee80211n",            "1"              },
    { "setchannelrange",       NULL             },
    { "autochannel",           NULL             },
    { "ieee80211w",            NULL             },
    { "wpa_key_mgmt",          NULL             },
    { "max_num_sta",           "8"              },
    { "ieee80211ac",           NULL             },
    { "vht_oper_chwidth",      NULL             },
    { "chanlist",              NULL             },
    { "ht_capab",              NULL             },
    { "ieee80211h",            NULL             },
    { "enable_wigig_softap",   NULL             },
    { "interface",             NULL             },
    { "ssid2",                 NULL             },
    { "bridge",                NULL             },
    { "ctrl_interface",        NULL             },
    { "vendor_elements",       NULL             },
    { "assocresp_elements",    NULL             },
    { "acs_exclude_dfs",       NULL             },
    { "wowlan_triggers",       "any"            },
    { "accept_mac_file",       NULL             },
    { "deny_mac_file",         NULL             },
    { "owe_transition_ifname", NULL             },
    { "sae_require_mfp",       NULL             },

};

struct Command qsap_str[eSTR_LAST] = {
    { "wpa",                     NULL           },
    { "accept_mac_file",         NULL           },
    { "deny_mac_file",           NULL           },
    { "gAPMacAddr",              "00deadbeef04" },/** AP MAC address */
    { "gEnableApProt",           "1"            },/** protection flag in ini file */
    { "gFixedRate",              "0"            },/** Fixed rate in ini */
    { "gTxPowerCap",             "27"           },/** Tx power in ini */
    { "gFragmentationThreshold", "2346"         },/** Fragmentation threshold in ini */
    { "RTSThreshold",            "2347"         },/** RTS threshold in ini */
    { "gAPCntryCode",            "USI"          },/** Country code in ini */
    { "gDisableIntraBssFwd",     "0"            },/** Intra-bss forward in ini */
    { "WmmIsEnabled",            "0"            },/** WMM */
    { "g11dSupportEnabled",      "1"            },/** 802.11d support */
    { "ieee80211n",              NULL           },
    { "ctrl_interface",          NULL           },
    { "interface",               NULL           },
    { "eap_server",              NULL           },
    { "gAPAutoShutOff",          "0"            },
    { "gEnablePhyAgcListenMode",  "128"          },
};

/** Supported operating mode */
char *hw_mode[HW_MODE_UNKNOWN] = {
    "b", "g", "n", "g-only", "n-only", "a", "any"
};

/** configuration file path */
char *pconffile = CONFIG_FILE;
char *fIni =  WIFI_DRIVER_CONF_FILE;
s8 ini_file[PROPERTY_VALUE_MAX] = {0};

static int qsap_scnprintf(char *str, size_t size, const char *format, ...)
{
    va_list arg_ptr;
    int ret = 0;

    if (size < 1)
        return 0;
    va_start(arg_ptr, format);
    ret = vsnprintf(str, size, format, arg_ptr);
    va_end(arg_ptr);
    return (ret < (int)size) ? ret : (int)(size - 1);
}

/**
 * @brief
 *        For a give configuration parameter, read the configuration value from the file.
 * @param pfile [IN] configuration file path
 * @param pcmd [IN] pointer to the comand structure
 * @param presp [OUT] buffer to store the configuration value
 * @param plen [IN-OUT] The length of the buffer is provided as input.
 *                      The length of the configuration parameter value, stored
 *                      in the 'presp', is provided as the output
 * @param ignore_comment [IN] if set, read the commented value also
 * @return void
*/
static s32 qsap_read_cfg(s8 *pfile, struct Command * pcmd, s8 *presp, u32 *plen, s8 *var, s32 ignore_comment)
{
    FILE *fcfg;
    s8    buf[MAX_CONF_LINE_LEN];
    u16   len;
    s8   *val;

    /** Open the configuration file */
    fcfg = fopen(pfile, "r");

    if(NULL == fcfg) {
        ALOGE("%s : unable to open file \n", __func__);
        *plen = qsap_scnprintf(presp, *plen, "%s", ERR_RES_UNAVAILABLE);
        return eERR_FILE_OPEN;
    }

    /** Read the line from the configuration file */
    len = strlen(pcmd->name);
    while(NULL != fgets(buf, MAX_CONF_LINE_LEN, fcfg)) {
        s8 *pline = buf;

        if (strlen(buf) == 0)
           continue;

        /** Skip the commented lines */
        if(buf[0] == '#') {
            if (ignore_comment) {
                pline++;
            }
            else continue;
        }

        /** Identify the configuration parameter in the configuration file */
        if(!strncmp(pline, pcmd->name, len) && (pline[len] == '=')) {
            int tmp_indx;

           /* Delate all \r \n combinations infront of the config string */
            tmp_indx = strlen(buf)-1;
            while( (buf[tmp_indx] == '\r') || (buf[tmp_indx] == '\n') ) tmp_indx--;

            buf[tmp_indx+1] = '\0';

            if ( NULL != var ) {
                val = strchr(pline, '=');
                if(NULL == val)
                    break;
                *plen = qsap_scnprintf(presp, *plen, "%s %s%s", SUCCESS, var, val);
            }
            else {
                *plen = qsap_scnprintf(presp, *plen, "%s %s", SUCCESS, pline);
            }
            fclose(fcfg);
            return eSUCCESS;
        }
    }

#if 0
    /** Configuration parameter is absent in the file */
    *plen = qsap_scnprintf(presp, *plen, "%s", ERR_FEATURE_NOT_ENABLED);
#else
    /** Value not found in the configuration file */
    /** Send the default value, if we are reading from ini file */
    if ( pcmd->default_value ) {
        *plen = qsap_scnprintf(presp, *plen, "%s %s=%s", SUCCESS, var?var:pcmd->name, pcmd->default_value);
        fclose(fcfg);
        return eSUCCESS;
    }
    else {
        /** Configuration parameter is absent in the file */
        *plen = qsap_scnprintf(presp, *plen, "%s", ERR_FEATURE_NOT_ENABLED);
    }
#endif

    fclose(fcfg);

    return eERR_CONFIG_PARAM_MISSING;
}

/**
 * @brief
 *        Write the configuration parameter value into the configuration file.
 * @param pfile [IN] configuration file path.
 * @param pcmd [IN] command name
 * @param pVal [IN] configuration parameter to be written to the file.
 * @param presp [OUT] buffer to store the configuration value.
 * @param plen [IN-OUT] The length of the buffer is provided as input.
 *                      The length of the configuration parameter value, stored
 *                      in the 'presp', is provided as the output
 * @return void
*/
static s32 qsap_write_cfg(s8 *pfile, struct Command * pcmd, s8 *pVal, s8 *presp, u32 *plen, s32 inifile)
{
    FILE *fcfg, *ftmp;
    s8 buf[MAX_CONF_LINE_LEN+1];
    s16 len, result = FALSE;

    ALOGD("cmd=%s, Val:%s, INI:%ld \n", pcmd->name, pVal, inifile);

    /** Open the configuration file */
    fcfg = fopen(pfile, "r");
    if(NULL == fcfg) {
        ALOGE("%s : unable to open file \n", __func__);
        *plen = qsap_scnprintf(presp, *plen, "%s", ERR_RES_UNAVAILABLE);
        return eERR_FILE_OPEN;
    }

    qsap_scnprintf(buf, sizeof(buf), "%s~", pfile);

    /** Open a temporary file */
    ftmp = fopen(buf, "w+");
    if(NULL == ftmp) {
        ALOGE("%s : unable to open tmp file \n", __func__);
        *plen = qsap_scnprintf(presp, *plen, "%s", ERR_RES_UNAVAILABLE);
        fclose(fcfg);
        return eERR_FILE_OPEN;
    }

    /** Read the values from the configuration file */
    len = strlen(pcmd->name);
    while(NULL != fgets(buf, MAX_CONF_LINE_LEN, fcfg)) {
        s8 *pline = buf;

        /** commented line */
        if(buf[0] == '#')
            pline++;

        /** Identify the configuration parameter to be updated */
        if((!strncmp(pline, pcmd->name, len)) && (result == FALSE)) {
            if(pline[len] == '=') {
                qsap_scnprintf(buf, sizeof(buf), "%s=%s\n", pcmd->name, pVal);
                result = TRUE;
                ALOGD("Updated:%s\n", buf);
            }
        }

        if(inifile && (!strncmp(pline, "END", 3)))
            break;

        fprintf(ftmp, "%s", buf);
    }

    if (result == FALSE) {
        /* Configuration line not found */
        /* Add the new line at the end of file */
        qsap_scnprintf(buf, sizeof(buf), "%s=%s\n", pcmd->name, pVal);
        fprintf(ftmp, "%s", buf);
        ALOGD("Adding a new line in %s file: [%s] \n", inifile ? "inifile" : "hostapd.conf", buf);
    }

    if(inifile) {
        gIniUpdated = 1;
        fprintf(ftmp, "END\n");
        while(NULL != fgets(buf, MAX_CONF_LINE_LEN, fcfg))
            fprintf(ftmp, "%s", buf);
    }

    fclose(fcfg);
    fclose(ftmp);

    qsap_scnprintf(buf, sizeof(buf), "%s~", pfile);

    /** Restore the updated configuration file */
    result = rename(buf, pfile);

    *plen = qsap_scnprintf(presp, *plen, "%s", (result == eERR_UNKNOWN) ? ERR_FEATURE_NOT_ENABLED : SUCCESS);

    /** Remove the temporary file. Dont care the return value */
    unlink(buf);

    /* chmod is needed because open() didn't set permisions properly */
    if (chmod(pfile, 0660) < 0) {
        ALOGE("Error changing permissions of %s to 0660: %s",
                pfile, strerror(errno));
        unlink(pfile);
        return -1;
    }
    if(result == eERR_UNKNOWN)
        return eERR_FEATURE_NOT_ENABLED;

    return eSUCCESS;
}

/**
 * @brief Read the security mode set in the configuration
 * @param pfile [IN] configuration file path.
 * @param presp [OUT] buffer to store the security mode.
 * @param plen [IN-OUT] The length of the buffer is provided as input.
 *                      The length of the security mode value, stored
 *                      in the 'presp', is provided as the output
 * @return void
*/
static sec_mode_t qsap_read_security_mode(s8 *pfile, s8 *presp, u32 *plen)
{
    sec_mode_t mode;
    u32 temp = *plen;

    /** Read the WEP default key */
    qsap_read_cfg(pfile, &cmd_list[eCMD_DEFAULT_KEY], presp, plen, NULL, GET_ENABLED_ONLY);

    if ( !strcmp(presp, ERR_FEATURE_NOT_ENABLED) ) {
        *plen = temp;

        /* WEP, is not enabled */

        /** Read WPA security status */
        qsap_read_cfg(pfile, &qsap_str[STR_WPA], presp, plen, NULL, GET_ENABLED_ONLY);
        if ( !strcmp(presp, ERR_FEATURE_NOT_ENABLED) ) {
            /** WPA is disabled, No security */
            mode = SEC_MODE_NONE;
        }
        else {
            /** WPA, WPA2 or WPA-WPA2 mixed security */
            s8 * ptmp = presp;
            while((*plen)-- && (*ptmp++ != '=') );
            mode =     *plen ? (
                    *ptmp == '1' ? SEC_MODE_WPA_PSK :
                    *ptmp == '2' ? SEC_MODE_WPA2_PSK :
                    *ptmp == '3' ? SEC_MODE_WPA_WPA2_PSK : SEC_MODE_INVALID ): SEC_MODE_INVALID;
        }
    }
    else {
        /** Verify if, WPA is disabled */
        *plen = temp;
        qsap_read_cfg(pfile, &qsap_str[STR_WPA], presp, plen, NULL, GET_ENABLED_ONLY);
        if ( !strcmp(presp, ERR_FEATURE_NOT_ENABLED) ) {
            /** WPA is disabled, hence WEP is enabled */
            mode = SEC_MODE_WEP;
        }
        else {
            *plen = qsap_scnprintf(presp, temp, "%s", ERR_UNKNOWN);
            return SEC_MODE_INVALID;
        }
    }

    if(mode != SEC_MODE_INVALID) {
        *plen = qsap_scnprintf(presp, temp,"%s %s=%d", SUCCESS, cmd_list[eCMD_SEC_MODE].name, mode);
    }
    else {
        *plen = qsap_scnprintf(presp, temp,"%s", ERR_NOT_SUPPORTED);
    }

    return mode;
}

/**
 * @brief
 *         Enable or disable a configuration parameter in the configuration file.
 * @param pfile [IN] configuration file name
 * @param pcmd [IN] configuration command structure
 * @param status [IN] status to be set. The valid values are 'ENABLE' or 'DISABLE'
 * @return On success, return 0
 *         On failure, return -1
*/
static s32 qsap_change_cfg(s8 *pfile, struct Command * pcmd, u32 status)
{
    FILE *fcfg, *ftmp;
    s8 buf[MAX_CONF_LINE_LEN+1];
    u16 len;

    /** Open the configuartion file */
    fcfg = fopen(pfile, "r");
    if(NULL == fcfg) {
        ALOGE("%s : unable to open file \n", __func__);
        return eERR_UNKNOWN;
    }

    qsap_scnprintf(buf, sizeof(buf), "%s~", pfile);

    /** Open a temporary file */
    ftmp = fopen(buf, "w");
    if(NULL == ftmp) {
        ALOGE("%s : unable to open tmp file \n", __func__);
        fclose(fcfg);
        return eERR_UNKNOWN;
    }

    /** Read the configuration parameters from the configuration file */
    len = strlen(pcmd->name);
    while(NULL != fgets(buf+1, MAX_CONF_LINE_LEN, fcfg)) {
        s8 *p = buf+1;

        /** Commented line */
        if(p[0] == '#')
            p++;

        /** Identify the configuration parameter */
        if(!strncmp(p, pcmd->name, len)) {
            if(p[len] == '=') {
                if(status == DISABLE) {
                    fprintf(ftmp, "#%s", p);
                }
                else {
                    fprintf(ftmp, "%s", p);
                }
                continue;
            }
        }
        fprintf(ftmp, "%s", buf+1);
    }

    fclose(fcfg);
    fclose(ftmp);

    qsap_scnprintf(buf, sizeof(buf), "%s~", pfile);

    /** Restore the new configuration file */
    if(eERR_UNKNOWN == rename(buf, pfile)) {
        ALOGE("unable to rename the file \n");
        return eERR_UNKNOWN;
    }

    /** Delete the temporary file */
    unlink(buf);

    /* chmod is needed because open() didn't set permisions properly */
    if (chmod(pfile, 0660) < 0) {
        ALOGE("Error changing permissions of %s to 0660: %s",
                pfile, strerror(errno));
        unlink(pfile);
        return -1;
    }
    return 0;
}

/**
 * @brief
 *         Set the security mode in the configuration. The security mode
 *         can be :
 *                   1. No security
 *                   2. WEP
 *                   3. WPA
 *                   4. WPA2
 *                   5. WPA and WPA2 mixed mode
 * @param pfile [IN] configuration file name
 * @param sec_mode [IN] security mode to be set
 * @param presp [OUTPUT] presp The command output format :
 *                    On success,
 *                            success <cmd>=<value>
 *                    On failure,
 *                            failure <error message>
 * @param plen [IN-OUT] plen
 *                      [IN] The length of the buffer, presp
 *                      [OUT] The length of the response in the buffer, presp
 * @return void
*/
static void qsap_set_security_mode(s8 *pfile, u32 sec_mode, s8 *presp, u32 *plen)
{
    s16 wep, wpa;
    s8 sec[MAX_INT_STR];
    s32 rsn_status = DISABLE;
    s32 ret = eERR_UNKNOWN;

    /** Is valid security mode ? */
    if(sec_mode >= SEC_MODE_INVALID) {
        *plen = qsap_scnprintf(presp, *plen, "%s", ERR_UNKNOWN);
        return;
    }

    /** No security */
    if(SEC_MODE_NONE == sec_mode) {
        wep = DISABLE;
        wpa = DISABLE;
    }
    /** WEP security */
    else if(SEC_MODE_WEP == sec_mode) {
        wep = ENABLE;
        wpa = DISABLE;
    }
    else {
        /** WPA, WPA2 and mixed-mode security */
        u16 wpa_val;
        u32 tmp = *plen;

        wep = DISABLE;
        wpa = ENABLE;

        if(sec_mode == SEC_MODE_WPA_PSK)
            wpa_val = WPA_IN_CONF_FILE;

        else if(sec_mode == SEC_MODE_WPA2_PSK) {
            wpa_val = WPA2_IN_CONF_FILE;
            rsn_status = ENABLE;
        }

        else if(sec_mode == SEC_MODE_WPA_WPA2_PSK) {
            wpa_val = WPA_WPA2_IN_CONF_FILE;
            rsn_status = ENABLE;
        }

        qsap_scnprintf(sec, sizeof(sec), "%u", wpa_val);
        qsap_write_cfg(pfile, &qsap_str[STR_WPA], sec, presp, plen, HOSTAPD_CONF_QCOM_FILE);
        *plen = tmp;
    }

    /** The configuration parameters for the security to be set are enabled
      * and the configuration parameters for the other security types are
      * disabled in the configuration file
      */
    if(eERR_UNKNOWN == qsap_change_cfg(pfile, &cmd_list[eCMD_DEFAULT_KEY], wep)) {
        ALOGE("%s: wep_default_key error\n", __func__);
        goto end;
    }

    if(eERR_UNKNOWN == qsap_change_cfg(pfile, &cmd_list[eCMD_WEP_KEY0], wep)) {
        ALOGE("%s: CMD_WEP_KEY0 \n", __func__);
        goto end;
    }

    if(eERR_UNKNOWN == qsap_change_cfg(pfile, &cmd_list[eCMD_WEP_KEY1], wep)) {
        ALOGE("%s: CMD_WEP_KEY1 \n", __func__);
        goto end;
    }

    if(eERR_UNKNOWN == qsap_change_cfg(pfile, &cmd_list[eCMD_WEP_KEY2], wep)) {
        ALOGE("%s: CMD_WEP_KEY2 \n", __func__);
        goto end;
    }

    if(eERR_UNKNOWN == qsap_change_cfg(pfile, &cmd_list[eCMD_WEP_KEY3], wep)) {
        ALOGE("%s: CMD_WEP_KEY3 \n", __func__);
        goto end;
    }

    if(eERR_UNKNOWN == qsap_change_cfg(pfile, &cmd_list[eCMD_PASSPHRASE], wpa)) {
        ALOGE("%s: Passphrase error\n", __func__);
        goto end;
    }

    if((sec_mode != SEC_MODE_NONE) && (sec_mode != SEC_MODE_WEP)) {
        u32 state = !rsn_status;

        if(sec_mode == SEC_MODE_WPA_WPA2_PSK) state = ENABLE;

        if(eERR_UNKNOWN == qsap_change_cfg(pfile, &cmd_list[eCMD_WPA_PAIRWISE], state)) {
            ALOGE("%s: WPA Pairwise\n", __func__);
            goto end;
        }
    }

    if(eERR_UNKNOWN == qsap_change_cfg(pfile, &cmd_list[eCMD_RSN_PAIRWISE], rsn_status)) {
        ALOGE("%s: WPA2 Pairwise\n", __func__);
        goto end;
    }

    if(eERR_UNKNOWN == qsap_change_cfg(pfile, &qsap_str[STR_WPA], wpa)) {
        ALOGE("%s: WPA\n", __func__);
        goto end;
    }

    ret = eSUCCESS;

end:
    *plen = qsap_scnprintf(presp, *plen, "%s", (ret == eSUCCESS) ? SUCCESS : ERR_UNKNOWN);

    return;
}

/**
 * @brief
 *         Get the file path having the allow or deny MAC address list
 * @param pcfgfile [IN] configuration file name
 * @param pcmd [IN] pcmd pointer to the command string
 * @param pfile [OUT] buffer to store the return value, containing the file name
 *                   or the error message.
 * @param plen [IN-OUT] size of the buffer 'pfile', is provided as input and
 *                      the length of the file name is returned as output
 * @return
 *           On success, a pointer to the file name in the buffer 'pfile'.
 *           On failure, NULL is returned
*/
static s8 *qsap_get_allow_deny_file_name(s8 *pcfgfile, struct Command * pcmd, s8 *pfile, u32 *plen)
{
    if(eSUCCESS == qsap_read_cfg(pcfgfile, pcmd, pfile, plen, NULL, GET_ENABLED_ONLY)) {
        return strchr(pfile, '=') + 1;
    }

    return NULL;
}

int qsap_hostd_exec(int argc, char ** argv)  {

#define MAX_CMD_SIZE 256
    char qcCmdBuf[MAX_CMD_SIZE], *pCmdBuf;
    u32 len = MAX_CMD_SIZE;
    int i = 2, ret;

    if ( argc < 4 ) {
        ALOGD("failure: invalid arguments");
        return -1;
    }

    argc -= 2;
    pCmdBuf = qcCmdBuf;

    while (argc--) {
        ret = snprintf(pCmdBuf, len, " %s", argv[i]);
        if ((ret < 0) || (ret >= (int)len)) {
            /* Error case */
            /* TODO: Command too long send the error message */
            *pCmdBuf = '\0';
             break;
        }
        ALOGD("argv[%d] (%s)",i, argv[i]);
        pCmdBuf += ret;
        len -= ret;
        i++;
    }

    ALOGD("QCCMD data (%s)", pCmdBuf);
    len = MAX_CMD_SIZE;
    qsap_hostd_exec_cmd(qcCmdBuf, qcCmdBuf, (u32*)&len);
    return 0;
}
/** Function to identify a valid MAC address */
static int isValid_MAC_address(char *pMac)
{
    int i, len;

    len = strlen(pMac);

    if(len < MAC_ADDR_LEN)
        return FALSE;

    for(i=0; i<MAC_ADDR_LEN; i++) {
        switch(i) {
            case 2: case 5: case 8: case 11: case 14:
                if(pMac[i] != ':')
                    return FALSE;
                break;
            default:
                if(isxdigit(pMac[i]) == 0)
                    return FALSE;
        }
    }

    return TRUE;
}

/**
 * @brief
 *        Add a given MAC address to the allow or deny MAC list file.
 *        A maximum of 15 MAC addresses are allowed in the list. If the input
 *        MAC addresses are more than the allowed number, then the allowed number
 *        of MAC addresses are updated to the MAC list file and the remaining
 *        MAC addresses are discarded
 *
 * @param pfile [IN] Path of the allow or deny MAC list file
 * @param pVal [IN] A string containing one or more MAC addresses. Multiple
 *                  MAC addresses are separated by a SPACE separator
 *                  Ex. "11:22:33:44:55:66 77:88:99:00:88:00"
 * @param presp [OUT] buffer to store the response
 * @param plen [IN-OUT] The length of the buffer 'presp' is provided as input.
 *                      The length of the response, stored in buffer 'presp' is
 *                      provided as output.
 * @return void
*/
static void qsap_add_mac_to_file(s8 *pfile, s8 *pVal, s8 *presp, u32 *plen)
{
    s32 len;
    s16 num_macs = 0;
    s8 buf[32];
    s8 macbuf[32];
    FILE *fp;

    /** Create the file if it does not exists and open it for reading */
    fp = fopen(pfile, "a");
    if(NULL != fp) {
        fclose(fp);
        fp = fopen(pfile, "r+");
    }

    if(NULL == fp) {
        ALOGE("%s : unable to open the file \n", __func__);
        *plen = qsap_scnprintf(presp, *plen, "%s", ERR_RES_UNAVAILABLE);
        return;
    }

    /** count the MAC address in the MAC list file */
    while(NULL != (fgets(buf, 32, fp))) {
        num_macs++;
    }

    /** Evaluate the allowed limit */
    if(num_macs >= MAX_ALLOWED_MAC) {
        ALOGE("%s : File is full\n", __func__);
        *plen = qsap_scnprintf(presp, *plen, "%s", ERR_UNKNOWN);
        fclose(fp);
        return;
    }

    /** Update all the input MAC addresses into the MAC list file */
    len = strlen(pVal);
    while(len > 0) {
        int i = 0;

        /** Get a MAC address from the input string */
        while((*pVal != ' ' ) && (*pVal != '\0')) {
            macbuf[i] = *pVal;
            i++;
            pVal++;

            if(i == MAC_ADDR_LEN)
                break;
        }
        macbuf[i] = '\0';
        pVal++;

        /** Is valid MAC address input ? */
        if(TRUE == isValid_MAC_address(macbuf)) {

            /** Append the MAC address to the file */
            fprintf(fp, "%s\n", macbuf);
            num_macs++;

            /** Evaluate with the allowed limit */
            if(num_macs == MAX_ALLOWED_MAC) {
                ALOGE("MAC file is full now.... \n");
                break;
            }

        }
        len -= strlen(macbuf);
        if(*pVal != '\0')
            len--;
    }

    fclose(fp);

    *plen = qsap_scnprintf(presp, *plen, "%s", SUCCESS);

    return;
}

/**
 * @brief
 *         Remove one or more MAC addresses from the allow or deny MAC list file.
 * @param pfile [IN] path of the allow or deny list file.
 * @param pVal [IN] a list of MAC addresses to be removed from the MAC list file.
 * @param presp [OUT] the buffer to store the response
 * @param plen [IN-OUT] The length of the 'presp' buffer is provided as input.
 *                      The lenght of the response, stored in 'presp', is
 *                      provided as output
 * @return void
*/
static void qsap_remove_from_file(s8 *pfile, s8 *pVal, s8 *presp, u32 *plen)
{
    FILE *fp;
    FILE *ftmp;
    s8 buf[MAX_CONF_LINE_LEN];
    int status;

    /** Open the allow or deny MAC list file */
    fp = fopen(pfile, "r+");

    if(NULL == fp) {
        ALOGE("%s : unable to open the file \n", __func__);
        *plen = qsap_scnprintf(presp, *plen, "%s", ERR_RES_UNAVAILABLE);
        return;
    }

    qsap_scnprintf(buf, sizeof(buf), "%s~", pfile);

    /** Open a temporary file */
    ftmp = fopen(buf, "w");

    if(ftmp == NULL) {
        ALOGE("%s : unable to open the file \n", __func__);
        *plen = qsap_scnprintf(presp, *plen, "%s", ERR_RES_UNAVAILABLE);
        fclose(fp);
        return;
    }

    /** Read all the MAC addresses from the file */
    while(NULL != fgets(buf, MAX_CONF_LINE_LEN, fp)) {
        s8 *plist;
        s32 slen;
        int write_back = 1;

        plist = pVal;
        slen = strlen(pVal);

        /** Compare each MAC address in the file with all the
          * input MAC addresses */
        write_back = 1;
        while(slen > 0) {

            if(0 == strncmp(buf, plist, MAC_ADDR_LEN)) {
                write_back = 0;
                break;
            }

            while((*plist != ' ') && (*plist != '\0')) {
                plist++;
                slen--;
            }

            while(((*plist == ' ') || (*plist == '\t')) && (*plist != '\0')) {
                plist++; slen--;
            }
        }

        /** Update the file */
        if(write_back) {
            fprintf(ftmp, "%s", buf);
        }
    }

    fclose(fp);
    fclose(ftmp);

    qsap_scnprintf(buf, sizeof(buf), "%s~", pfile);

    /** Restore the configuration file */
    status = rename(buf, pfile);

    qsap_scnprintf(presp, *plen, "%s", (status == eERR_UNKNOWN) ? ERR_FEATURE_NOT_ENABLED : SUCCESS);

    unlink(buf);

    return;
}

/**
 * @brief
 *         Identify the MAC list file and the type of updation on the file.
 *         The MAC list file can be : Allow file or Deny file.
 *         The type of operation is : Add to file or Delete from file
 *
 * @param file [IN] path of the allow or deny MAC list file.
 * @param cNum [IN] command number to 'type of file' and the 'type of updation'
 *                  to be done.
 * @param pVal [IN] A list of one or more MAC addresses. Multiple MAC addresses
 *                  are separated by a SPACE character
 * @param presp [OUT] Buffer to store the command response
 * @param plen [IN-OUT] The length of the 'presp' buffer is provided as input
 *                      The length of the response, stored in the 'presp' is provided
 *                      as the output
 * @return void
*/
static void qsap_update_mac_list(s8 *pfile, esap_cmd_t cNum, s8 *pVal, s8 *presp, u32 *plen)
{
    ALOGD("%s : Updating file %s \n", __func__, pfile);

    switch(cNum) {
        case eCMD_ADD_TO_ALLOW:
        case eCMD_ADD_TO_DENY:
                qsap_add_mac_to_file(pfile, pVal, presp, plen);
                break;

        case eCMD_REMOVE_FROM_ALLOW:
        case eCMD_REMOVE_FROM_DENY:
                qsap_remove_from_file(pfile, pVal, presp, plen);
                break;

        default:
                *plen = qsap_scnprintf(presp, *plen, "%s", ERR_UNKNOWN);
                return;
    }

    return;
}

/**
 * @brief
 * @param fconfig [INPUT] configuration file name
 * @param cNum [INPUT] command number. The valid command numbers supported by
 *                     this function are :
 *                     eCMD_ALLOW_LIST - Get the MAC address list from the allow list
 *                     eCMD_DENY_LIST - Get the MAC address list from the deny list
 * @param presp [OUTPUT] presp The command output format :
 *                    On success,
 *                            success <cmd>=<value>
 *                    On failure,
 *                            failure <error message>
 * @param plen [IN-OUT] plen
 *                      [IN] The length of the buffer, presp
 *                      [OUT] The length of the response in the buffer, presp
 * @return void
**/
static void qsap_get_mac_list(s8 *fconfile, esap_cmd_t cNum, s8 *presp, u32 *plen)
{
    s8 buf[MAX_CONF_LINE_LEN];
    FILE *fp;
    u32 len_remain;
    s8 *pfile, *pOut;
    esap_cmd_t sNum;
    int cnt = 0;

    /** Identify the allow or deny file */
    if(eCMD_ALLOW_LIST == cNum) {
        sNum = STR_ACCEPT_MAC_FILE;
    }
    else if(eCMD_DENY_LIST == cNum) {
        sNum = STR_DENY_MAC_FILE;
    }
    else {
        *plen = qsap_scnprintf(presp, *plen, "%s", ERR_UNKNOWN);
        return;
    }

    /** Get the MAC allow or MAC deny file path */
    len_remain = MAX_CONF_LINE_LEN;
    if(NULL == (pfile = qsap_get_allow_deny_file_name(fconfile, &qsap_str[sNum], buf, &len_remain))) {
        ALOGE("%s:Unknown error\n", __func__);
        *plen = qsap_scnprintf(presp, *plen, "%s", ERR_RES_UNAVAILABLE);
        return;
    }

    /** Open allow / deny file, and read the MAC addresses */
    fp = fopen(pfile, "r");
    if(NULL == fp) {
        ALOGE("%s: file open error\n",__func__);
        *plen = qsap_scnprintf(presp, *plen, "%s", ERR_RES_UNAVAILABLE);
        return;
    }

    *plen -= qsap_scnprintf(presp, *plen, "%s %s=", SUCCESS, cmd_list[cNum].name);

    pOut = presp + strlen(presp);

    /** Read the MAC address from the MAC allow or deny file */
    while(NULL != (fgets(buf, MAX_CONF_LINE_LEN, fp))) {
        u32 len;

        /** Avoid the commented lines */
        if(buf[0] == '#')
            continue;

        if(FALSE == isValid_MAC_address(buf))
            continue;

        buf[strlen(buf)-1] = '\0';

        if(*plen < strlen(buf)) {
            *pOut = '\0';
            break;
        }

        len = qsap_scnprintf(pOut, *plen, "%s ", buf);
        cnt++;

        if (cnt >= MAX_ALLOWED_MAC) {
            break;
        }

        pOut += len;
        *plen -= len;
    }

    *plen = strlen(presp);

    fclose(fp);

    return;
}

static int qsap_read_mac_address(s8 *presp, u32 *plen)
{
    char *ptr;
    char  mac[MAC_ADDR_LEN];
    u32   len, i;
    int   nRet = eERR_INVALID_MAC_ADDR;

    len = *plen;

    if(eSUCCESS != qsap_read_cfg(fIni, &qsap_str[STR_MAC_IN_INI], presp, plen, cmd_list[eCMD_MAC_ADDR].name, GET_ENABLED_ONLY)) {
        ALOGE("%s :MAC addr read failure \n",__func__);
        goto end;
    }

    ptr = strchr(presp, '=');
    if(NULL == ptr)
        goto end;

    strlcpy(mac, ptr+1, MAC_ADDR_LEN);
    *plen = qsap_scnprintf(presp, len, "%s %s=", SUCCESS, cmd_list[eCMD_MAC_ADDR].name);
    ptr = presp + strlen(presp);
    len -= strlen(presp); /* decrease the total available buf length */

    for(i=0; i<MAC_ADDR_LEN-5; i+=2) {
        u32 tlen;

        tlen = qsap_scnprintf(ptr, len, "%c%c:", mac[i], mac[i+1]);
        *plen += tlen;
        ptr += tlen;
        len -= tlen; /* decrease the available len of ptr */
    }
    presp[*plen-1] = '\0';
    (*plen)--;

    ptr = strchr(presp, '=');
    if(NULL == ptr)
        goto end;

    ptr++;

    ALOGD("MAC :%s \n", ptr);
    if(TRUE == isValid_MAC_address(ptr)) {
        nRet = eSUCCESS;
    }
    else {
        ALOGE("Invalid MAC in conf file \n");
    }
end:
    return nRet;
}

s8 *qsap_get_config_value(s8 *pfile, struct Command  *pcmd, s8 *pbuf, u32 *plen)
{
    s8 *ptr = NULL;

    if(eSUCCESS == qsap_read_cfg(pfile, pcmd, pbuf, (u32 *)plen, NULL, GET_ENABLED_ONLY)) {
        ptr = strchr(pbuf, '=');
        if(NULL != ptr){
            ptr++;
        }
        else {
            ALOGE("Invalid entry, %s\n", pcmd->name);
        }
    }

    return ptr;
}

static void qsap_read_wps_state(s8 *presp, u32 *plen)
{
    u32  tlen = *plen;
    s32  status;
    s8 *pstate;

    if(NULL == (pstate = qsap_get_config_value(pconffile, &cmd_list[eCMD_WPS_STATE], presp, &tlen))) {
        /** unable to read the wps configuration, WPS is disabled !*/
        ALOGD("%s :wps_state not in cfg file \n", __func__);
        status = DISABLE;
    }
    else {
        status = (atoi(pstate) == WPS_STATE_ENABLE) ? ENABLE : DISABLE;
    }

    *plen = qsap_scnprintf(presp, *plen, "success %s=%ld", cmd_list[eCMD_WPS_STATE].name, status);

    return;
}

/**
 *    Get the channel being used in the soft AP.
 */
int qsap_get_operating_channel(s32 *pchan)
{
    int sock;
    struct iwreq wrq;
    s8 interface[MAX_CONF_LINE_LEN];
    u32 len = MAX_CONF_LINE_LEN;
    s8 *pif;
    int ret;

    if(ENABLE != is_softap_enabled()) {
        goto error;
    }

    if(NULL == (pif = qsap_get_config_value(pconffile, &qsap_str[STR_INTERFACE], interface, &len))) {
        ALOGE("%s :interface error \n", __func__);
        goto error;
    }

    interface[len] = '\0';

    sock = socket(AF_INET, SOCK_DGRAM, 0);
    if(sock < 0) {
        ALOGE("%s :socket error \n", __func__);
        goto error;
    }

    *pchan = 0;

    strlcpy(wrq.ifr_name, pif, sizeof(wrq.ifr_name));
    wrq.u.data.length = sizeof(s32);
    wrq.u.data.pointer = pchan;
    wrq.u.data.flags = 0;

    ret = ioctl(sock, QCSAP_IOCTL_GET_CHANNEL, &wrq);
    if(ret < 0) {
        ALOGE("%s: ioctl failure \n",__func__);
        close(sock);
        goto error;
    }

    ALOGE("Recv len :%d \n", wrq.u.data.length);
    *pchan = *(int *)(&wrq.u.name[0]);
    ALOGE("Operating channel :%ld \n", *pchan);
    close(sock);
    return eSUCCESS;

error:
    *pchan = 0;
    ALOGE("%s: Failed to read channel \n", __func__);
    return eERR_CHAN_READ;
}

/**
 *    Get the sap auto channel selection for soft AP.
 */
int qsap_get_sap_auto_channel_selection(s32 *pautochan)
{
    int sock;
    struct iwreq wrq;
    s8 interface[MAX_CONF_LINE_LEN];
    u32 len = MAX_CONF_LINE_LEN;
    s8 *pif;
    int ret;
    sap_auto_channel_info sap_autochan_info;
    s32 *pchan;

    if(ENABLE != is_softap_enabled()) {
        ALOGE("%s :is_softap_enabled() goto error \n", __func__);
        goto error;
    }

    if(NULL == (pif = qsap_get_config_value(pconffile,
                                 &qsap_str[STR_INTERFACE], interface, &len))) {
        ALOGD("%s :interface error \n", __func__);
        goto error;
    }

    interface[len] = '\0';

     sock = socket(AF_INET, SOCK_DGRAM, 0);
    if(sock < 0) {
        ALOGD("%s :socket error \n", __func__);
        goto error;
    }

    *pautochan = 0;

    memset(&sap_autochan_info, 0, sizeof(sap_autochan_info));
    memset(&wrq, 0, sizeof(wrq));

    strlcpy(wrq.ifr_name, pif, sizeof(wrq.ifr_name));
    wrq.u.data.length = sizeof(s32);
    sap_autochan_info.subioctl = QCSAP_PARAM_GET_AUTO_CHANNEL;
    wrq.u.data.pointer = pautochan;
    memcpy(wrq.u.name, (char *)(&sap_autochan_info), sizeof(sap_autochan_info));
    wrq.u.data.flags = 0;

    ret = ioctl(sock, QCSAP_IOCTL_GETPARAM, &wrq);
    if(ret < 0) {
        ALOGE("%s: ioctl failure \n",__func__);
        close(sock);
        goto error;
    }

    ALOGD("Recv len :%d \n", wrq.u.data.length);
    *pautochan = *(int *)(&wrq.u.name[0]);
    ALOGD("Sap auto channel selection pautochan=%ld \n", *pautochan);
    close(sock);
    return eSUCCESS;

error:
    *pautochan = 0;
    ALOGE("%s: Failed to read sap auto channel selection\n", __func__);
    return eERR_GET_AUTO_CHAN;
}


static int iftypeCallback(struct nl_msg* msg, void* arg)
{
    struct nlmsghdr* ret_hdr = nlmsg_hdr(msg);
    struct nlattr *tb_msg[NL80211_ATTR_MAX + 1];
    int* type = arg;

    struct genlmsghdr *gnlh = (struct genlmsghdr*) nlmsg_data(ret_hdr);

    nla_parse(tb_msg, NL80211_ATTR_MAX, genlmsg_attrdata(gnlh, 0),
              genlmsg_attrlen(gnlh, 0), NULL);

    if (tb_msg[NL80211_ATTR_IFTYPE]) {
        *type = nla_get_u32(tb_msg[NL80211_ATTR_IFTYPE]);

    }
    return NL_SKIP;
}

/**
 *    Get the mode of operation.
 */
int qsap_get_mode(s32 *pmode)
{
    int ret = eERR_UNKNOWN;
    struct nl_sock* sk = NULL;
    int nl80211_id = -1;
    int if_type = -1;
    s8 interface[MAX_CONF_LINE_LEN];
    u32 len = MAX_CONF_LINE_LEN;
    s8 *pif;
    struct nl_msg* msg = NULL;

    //get interface name
    if(NULL == (pif = qsap_get_config_value(pconffile,
                                 &qsap_str[STR_INTERFACE], interface, &len))) {
        ALOGD("%s :interface error \n", __func__);
        goto nla_put_failure;
    }

    interface[len] = '\0';

    //allocate socket
    sk = nl_socket_alloc();

    //return if socket allocation fails
    if(sk == NULL){
       ALOGE( "socket allocation failure");
       return ret;
    }

    //connect to generic netlink
    if (genl_connect(sk)) {
        ALOGE( "Netlink socket Connection failure");
        ret = eERR_UNKNOWN;
        goto nla_put_failure;
    }

    //find the nl80211 driver ID
    nl80211_id = genl_ctrl_resolve(sk, "nl80211");

    //attach a callback
    nl_socket_modify_cb(sk, NL_CB_VALID, NL_CB_CUSTOM,
            iftypeCallback, &if_type);

    //allocate a message
    msg = nlmsg_alloc();

    //return if message allocation fails
    if(msg == NULL){
       ALOGE( "message allocation failure");
       goto nla_put_failure;
    }

    // setup the message
    genlmsg_put(msg, 0, 0, nl80211_id, 0, 0, NL80211_CMD_GET_INTERFACE, 0);

    //add message attributes
    NLA_PUT_U32(msg, NL80211_ATTR_IFINDEX, if_nametoindex(pif));

    // Send the message
    ret = nl_send_auto_complete(sk, msg);
    if (ret < 0 ) {
        ALOGE( "nl_send_auto_complete failure");
        ret = eERR_UNKNOWN;
        goto nla_put_failure;
    }

    //block for message to return
    nl_recvmsgs_default(sk);
    *pmode = if_type;
    ALOGI("%s: (%s) NL80211 Get Mode = %d \n",__func__, pif, (int)*pmode);
    ret = eSUCCESS;

nla_put_failure:
    if (sk)
        nl_socket_free(sk);
    if (msg)
        nlmsg_free(msg);
    return ret;
}

/**
 *    Set the channel Range for soft AP.
 */
int qsap_set_channel_range(s8 *buf)
{
    int sock;
    struct iwreq wrq;
    s8 interface[MAX_CONF_LINE_LEN];
    u32 len = MAX_CONF_LINE_LEN;
    s8 *pif;
    s8 *temp;
    int ret, i;
    sap_channel_info sap_chan_range;
    sta_channel_info sta_chan_range;

    ALOGE("buf :%s\n", buf);

    temp = buf;
    temp = strchr(buf, '=');
    if (NULL == temp) {
        goto error;
    }
    temp++;

    if (NULL == (pif = qsap_get_config_value(pconffile,
                    &qsap_str[STR_INTERFACE], interface, &len))) {
        ALOGE("%s :interface error\n", __func__);
        goto error;
    }

    interface[len] = '\0';

    sock = socket(AF_INET, SOCK_DGRAM, 0);
    if (sock < 0) {
        ALOGE("%s :socket error\n", __func__);
        goto error;
    }

    memset(&sap_chan_range, 0, sizeof(sap_chan_range));
    memset(&sta_chan_range, 0, sizeof(sta_chan_range));
    memset(&wrq, 0, sizeof(wrq));

    if (ENABLE != is_softap_enabled()) {
        strlcpy(wrq.ifr_name, "wlan0", sizeof(wrq.ifr_name));
        sta_chan_range.subioctl = WE_SET_SAP_CHANNELS;
        ret = sscanf(temp, "%d %d %d", &(sta_chan_range.stastartchan),
                &(sta_chan_range.staendchan), &(sta_chan_range.staband));
        if (3 != ret) {
            ALOGE("%s : sscanf is not successful\n", __func__);
            close(sock);
            goto error;
        }
        memcpy(wrq.u.name, (char *)(&sta_chan_range), sizeof(sta_chan_range));

        ALOGE("%s :Softap is off,Send SET_CHANNEL_RANGE over sta interface\n",
                __func__);
        ret = ioctl(sock, WLAN_PRIV_SET_THREE_INT_GET_NONE, &wrq);
    } else {
          strlcpy(wrq.ifr_name, pif, sizeof(wrq.ifr_name));
          ret = sscanf(temp, "%d %d %d", &(sap_chan_range.startchan),
                  &(sap_chan_range.endchan), &(sap_chan_range.band));
          if (3 != ret) {
              ALOGE("%s : sscanf is not successful\n", __func__);
              close(sock);
              goto error;
          }
          memcpy(wrq.u.name, (char *)(&sap_chan_range), sizeof(sap_chan_range));

          ALOGE("%s :SAP is on,Send SET_CHANNEL_RANGE over softap interface\n",
                    __func__);
          ret = ioctl(sock, QCSAP_IOCTL_SET_CHANNEL_RANGE, &wrq);
    }

    if (ret < 0) {
        ALOGE("%s: ioctl failure\n", __func__);
        close(sock);
        goto error;
    }

    ALOGE("Recv len :%d\n", wrq.u.data.length);

    close(sock);
    return eSUCCESS;

error:
    ALOGE("%s: Failed to set channel range\n", __func__);
    return eERR_SET_CHAN_RANGE;
}

int qsap_read_channel(s8 *pfile, struct Command *pcmd, s8 *presp, u32 *plen, s8 *pvar)
{
    s8   *pval;
    s32  chan;
    u32  len = *plen;

   if(eSUCCESS == qsap_get_operating_channel(&chan)) {
            *plen = qsap_scnprintf(presp, len, "%s %s=%lu", SUCCESS, pcmd->name, chan);
             ALOGD("presp :%s\n", presp);
   } else {
          *plen = qsap_scnprintf(presp, len, "%s", ERR_UNKNOWN);
   }

    return eSUCCESS;
}

int qsap_read_auto_channel(struct Command *pcmd, s8 *presp, u32 *plen)
{
    s8   *pval, *pautoval;
    s32  pautochan;
    u32  len = *plen;
    int autochan;

    ALOGE("%s :\n", __func__);

    if (eSUCCESS == qsap_get_sap_auto_channel_selection(&pautochan)) {
          *plen = qsap_scnprintf(presp, len, "%s autochannel=%lu", SUCCESS, pautochan);
          ALOGE("presp :%s\n", presp);
    } else {
          *plen = qsap_scnprintf(presp, len, "%s", ERR_UNKNOWN);
    }

    return eSUCCESS;
}

static int qsap_mac_to_macstr(s8 *pmac, u32 slen, s8 *pmstr, u32 *plen)
{
    int len;
    int totlen = 0;

    while((slen > 0) && (*plen > 0)) {
        len = qsap_scnprintf(pmstr, *plen, "%.2X:%.2X:%.2X:%.2X:%.2X:%.2X ", (int)pmac[0], (int)pmac[1], (int)pmac[2],
                            (int)pmac[3], (int)pmac[4], (int)pmac[5]);
        pmac += 6;
        slen -= 6;
        *plen -= len;
        pmstr += len;
        totlen += len;
    }

    if(totlen > 0) {
        *pmstr--;
        totlen--;
    }
    *pmstr = '\0';
    *plen = totlen;

    return 0;
}

#define MAX_STA_ALLOWED  8
void qsap_get_associated_sta_mac(s8 *presp, u32 *plen)
{
    int sock, ret;
    struct iwreq wrq;
    s8 interface[MAX_CONF_LINE_LEN];
    u32 len = MAX_CONF_LINE_LEN;
    s8 *pif;
    s8 *pbuf, *pout;
    u32 buflen;
    u32 recvLen;
    u32 tlen;

    if(ENABLE != is_softap_enabled()) {
        goto error;
    }

    if(NULL == (pif = qsap_get_config_value(pconffile, &qsap_str[STR_INTERFACE], interface, &len))) {
        ALOGE("%s :interface error \n", __func__);
        goto error;
    }
    interface[len] = '\0';

    sock = socket(AF_INET, SOCK_DGRAM, 0);
    if(sock < 0) {
        ALOGE("%s :socket failure \n", __func__);
        goto error;
    }

    /* response has length field + 6 bytes per STA */
    buflen = sizeof(u32) + (MAX_STA_ALLOWED * 6);
    pbuf = (s8 *)malloc(buflen);
    if(NULL == pbuf) {
        ALOGE("%s :No memory \n", __func__);
        close(sock);
        goto error;
    }


#define SIZE_OF_MAC_INT   (6)
    strlcpy(wrq.ifr_name, pif, sizeof(wrq.ifr_name));
    wrq.u.data.length = buflen;
    wrq.u.data.pointer = (void *)pbuf;
    wrq.u.data.flags = 0;

    ret = ioctl(sock, QCSAP_IOCTL_ASSOC_STA_MACADDR, &wrq);
    if(ret < 0) {
        ALOGE("%s :ioctl failure \n", __func__);
        free(pbuf);
        close(sock);
        goto error;
    }

    recvLen = *(u32 *)(wrq.u.data.pointer);
    recvLen -= sizeof(u32);

    len = qsap_scnprintf(presp, *plen, "%s %s=", SUCCESS, cmd_list[eCMD_ASSOC_STA_MACS].name);
    pout = presp + len;
    tlen = *plen - len;

    qsap_mac_to_macstr(pbuf+sizeof(u32), recvLen, pout, &tlen);

    *plen = len + tlen;

    free(pbuf);
    close(sock);

    return;
error:
    *plen = qsap_scnprintf(presp, *plen, "%s", ERR_UNKNOWN);

    return;
}

static void qsap_read_wep_key(s8 *pfile, struct Command *pcmd, s8 *presp, u32 *plen, s8 *var)
{
    s8 *pwep;
    s8 *pkey;

    if(eSUCCESS != qsap_read_cfg(pfile, pcmd, presp, plen, var, GET_COMMENTED_VALUE))
        return;

    pwep = strchr(presp, '=');
    if(NULL == pwep)
        return;
    pwep++;

    if(pwep[0] == '"') {
        pkey = pwep;
        pwep++;

        while(*pwep != '\0') {
            *pkey = *pwep;
             pkey++;
             pwep++;
        }
        *pkey--;
        *pkey = '\0';
        *plen -= 2;
    }

    return;
}

void qsap_read_ap_stats(s8 *presp, u32 *plen)
{
    int sock, ret;
    struct iwreq wrq;
    s8 interface[MAX_CONF_LINE_LEN];
    u32 len = MAX_CONF_LINE_LEN;
    s8 *pif;
    s8 *pbuf, *pout;
    u32 tlen;

    if(ENABLE != is_softap_enabled()) {
        *plen = qsap_scnprintf(presp, *plen, "%s", ERR_SOFTAP_NOT_STARTED);
        return;
    }

    if(NULL == (pif = qsap_get_config_value(pconffile, &qsap_str[STR_INTERFACE], interface, &len))) {
        ALOGE("%s :interface error \n", __func__);
        goto error;
    }
    interface[len] = '\0';

    sock = socket(AF_INET, SOCK_DGRAM, 0);
    if(sock < 0) {
        ALOGE("%s :socket failure \n", __func__);
        goto error;
    }

    pbuf = (s8 *)malloc(MAX_RESP_LEN);
    if(NULL == pbuf) {
        ALOGE("%s :No memory \n", __func__);
        close(sock);
        goto error;
    }

    strlcpy(wrq.ifr_name, pif, sizeof(wrq.ifr_name));
    wrq.u.data.length = MAX_RESP_LEN;
    wrq.u.data.pointer = (void *)pbuf;
    wrq.u.data.flags = 0;

    ret = ioctl(sock, QCSAP_IOCTL_AP_STATS, &wrq);
    if(ret < 0) {
        ALOGE("%s :ioctl failure \n", __func__);
        free(pbuf);
        close(sock);
        goto error;
    }

    *plen = qsap_scnprintf(presp, *plen, "%s %s=%s", SUCCESS, cmd_list[eCMD_AP_STATISTICS].name, pbuf);

    free(pbuf);
    close(sock);
    return;

error:
    *plen = qsap_scnprintf(presp, *plen, "%s", ERR_UNKNOWN);

    return;
}

void qsap_read_autoshutoff(s8 *presp, u32 *plen)
{
    u32 tlen, time = 0;
    s8 *ptime;

    tlen = *plen;

    if(NULL == (ptime = qsap_get_config_value(fIni, &qsap_str[STR_AP_AUTOSHUTOFF], presp, &tlen))) {
        /** unable to read the AP shutoff time */
        ALOGE("%s :Failed to read AP shutoff time\n", __func__);
    }
    else {
        time = atoi(ptime);
        time = time / 60; /** Convert seconds to minutes */
    }

    *plen = qsap_scnprintf(presp, *plen, "success %s=%ld", cmd_list[eCMD_AP_AUTOSHUTOFF].name, time);

    return;
}


/**
 * @brief
 *       Get the configuration information from the softAP configuration
 *       files
 * @param cNum [INPUT]
 * @param presp [OUTPUT] presp The command output format :
 *                    On success,
 *                            success <cmd>=<value>
 *                    On failure,
 *                            failure <error message>
 * @param plen [IN-OUT] plen
 *                      [IN] The length of the buffer, presp
 *                      [OUT] The length of the response in the buffer, presp
 * @return void
**/
static void qsap_get_from_config(esap_cmd_t cNum, s8 *presp, u32 *plen)
{
    u32 len;
    int status;
    s8 * pval;

    switch(cNum) {
        case eCMD_ENABLE_SOFTAP:
            status = is_softap_enabled();
            *plen = qsap_scnprintf(presp, *plen, "%s %s=%d", SUCCESS, cmd_list[cNum].name, status);
            break;

        case eCMD_WPA_PAIRWISE:
        case eCMD_RSN_PAIRWISE:
        case eCMD_DEFAULT_KEY:
        case eCMD_PASSPHRASE:
        case eCMD_GTK_TIMEOUT:
                qsap_read_cfg(pconffile, &cmd_list[cNum], presp, plen, NULL, GET_COMMENTED_VALUE);
            break;

        case eCMD_SSID:
        case eCMD_BSSID:
        case eCMD_BCN_INTERVAL:
        case eCMD_DTIM_PERIOD:
        case eCMD_HW_MODE:
        case eCMD_AUTH_ALGS:
        case eCMD_MAC_ACL:
        case eCMD_WPS_CONFIG_METHOD:
        case eCMD_UUID:
        case eCMD_DEVICE_NAME:
        case eCMD_MANUFACTURER:
        case eCMD_MODEL_NAME:
        case eCMD_MODEL_NUMBER:
        case eCMD_SERIAL_NUMBER:
        case eCMD_DEVICE_TYPE:
        case eCMD_OS_VERSION:
        case eCMD_FRIENDLY_NAME:
        case eCMD_MANUFACTURER_URL:
        case eCMD_MODEL_DESC:
        case eCMD_MODEL_URL:
        case eCMD_UPC:
        case eCMD_SDK_VERSION:
        case eCMD_COUNTRY_CODE:
                qsap_read_cfg(pconffile, &cmd_list[cNum], presp, plen, NULL, GET_ENABLED_ONLY);
                break;

        case eCMD_WEP_KEY0:
        case eCMD_WEP_KEY1:
        case eCMD_WEP_KEY2:
        case eCMD_WEP_KEY3:
                qsap_read_wep_key(pconffile, &cmd_list[cNum], presp, plen, NULL);
                break;

        case eCMD_CHAN:
                qsap_read_channel(pconffile, &cmd_list[cNum], presp, plen, NULL);
                break;

        case eCMD_FRAG_THRESHOLD:
        case eCMD_REGULATORY_DOMAIN:
        case eCMD_RTS_THRESHOLD:
        case eCMD_IEEE80211H:
                qsap_read_cfg(pconffile, &cmd_list[cNum], presp, plen, NULL, GET_ENABLED_ONLY);
                break;

        case eCMD_ALLOW_LIST: /* fall through */
        case eCMD_DENY_LIST:
                qsap_get_mac_list(pconffile, cNum, presp, plen);
                break;

        case eCMD_SEC_MODE:
                qsap_read_security_mode(pconffile, presp, plen);
                break;

        case eCMD_MAC_ADDR:
                if(eSUCCESS != qsap_read_mac_address(presp, plen)) {
                    *plen = qsap_scnprintf(presp, *plen, "%s", ERR_NOT_SUPPORTED);
                }
                break;

        case eCMD_WMM_STATE:
                qsap_read_cfg(pconffile, &cmd_list[cNum], presp, plen, NULL, GET_ENABLED_ONLY);
                break;

        case eCMD_WPS_STATE:
                qsap_read_wps_state(presp, plen);
                break;

        case eCMD_PROTECTION_FLAG:
                qsap_read_cfg(fIni, &qsap_str[STR_PROT_FLAG_IN_INI], presp, plen, cmd_list[eCMD_PROTECTION_FLAG].name, GET_ENABLED_ONLY);
                break;

        case eCMD_DATA_RATES:
                qsap_read_cfg(fIni, &qsap_str[STR_DATA_RATE_IN_INI], presp, plen, cmd_list[eCMD_DATA_RATES].name, GET_ENABLED_ONLY);
                break;

        case eCMD_ASSOC_STA_MACS:
                qsap_get_associated_sta_mac(presp, plen);
                break;

        case eCMD_TX_POWER:
                qsap_read_cfg(fIni, &qsap_str[STR_TX_POWER_IN_INI], presp, plen, cmd_list[eCMD_TX_POWER].name, GET_ENABLED_ONLY);
                break;

        case eCMD_INTRA_BSS_FORWARD:
                qsap_read_cfg(pconffile, &cmd_list[eCMD_INTRA_BSS_FORWARD], presp, plen, NULL, GET_ENABLED_ONLY);
                break;

        case eCMD_AP_STATISTICS:
                qsap_read_ap_stats(presp, plen);
                break;

        case eCMD_AP_AUTOSHUTOFF:
            qsap_read_autoshutoff(presp, plen);
            break;

        case eCMD_AP_ENERGY_DETECT_TH:
                qsap_read_cfg(fIni, &qsap_str[STR_AP_ENERGY_DETECT_TH], presp, plen, cmd_list[eCMD_AP_ENERGY_DETECT_TH].name, GET_ENABLED_ONLY);
                break;
        case eCMD_GET_AUTO_CHANNEL:
                qsap_read_auto_channel(&cmd_list[cNum],presp, plen);
               break;
        default:
            /** Error case */
            *plen = qsap_scnprintf(presp, *plen, "%s", ERR_INVALID_ARG);
    }

    len = *plen-1;

    /** Remove the space or tabs in the end of response */
    while(len) {
        if((presp[len] == ' ') || (presp[len] == '\t'))
            len--;
        else
            break;
    }
    presp[len+1] = '\0';
    *plen = len+1;

    return;
}

/**
 * @brief
 *        Identify the command number corresponding to the input user command.
 * @param cName [INPUT] command name
 * @return
 *             On success,
 *                     command number in the range 0 to (eCMD_INVALID-1)
 *          On failure,
 *                  eCMD_INVALID
**/
static esap_cmd_t qsap_get_cmd_num(s8 *cName)
{
    s16 i, len;

    for(i=0; i<eCMD_LAST; i++)     {
        len = strlen(cmd_list[i].name);

        if(!strncmp(cmd_list[i].name, cName, len)) {
            if((cName[len] == '=') || (cName[len] == '\0'))
                return i;
        }
    }
    return eCMD_INVALID;
}

/**
 * @brief
 *            Handle the user requests of the form,
 *                "get <cmd num> [<value1> ...]"
 *           These commands are used to retreive the soft AP
 *           configuration information
 *
 * @param pcmd [IN] pointer to the structure, storing the command.
 * @param presp [OUT] pointer to the buffer, to store the command response.
 *                         The command output format :
 *                    On success,
 *                            success <cmd>=<value>
 *                    On failure,
 *                            failure <error message>
 * @param plen [IN-OUT]
 *                 [IN] : Maximum length of the reponse buffer
 *                [OUT]: Reponse length
 * @return
 *         void
*/
static void qsap_handle_get_request(s8 *pcmd, s8 *presp, u32 *plen)
{
    esap_cmd_t cNum;

    pcmd += strlen("get");

    SKIP_BLANK_SPACE(pcmd);

    cNum = qsap_get_cmd_num(pcmd);

    if(cNum == eCMD_INVALID) {
        *plen = qsap_scnprintf(presp, *plen, "%s", ERR_INVALID_PARAM);
        return;
    }

    qsap_get_from_config(cNum, presp, plen);

    return;
}

static s16 is_valid_wep_key(s8 *pwep, s8 *pkey, s16 len)
{
    int weplen;
    s16 ret = TRUE;
    int ascii = FALSE;

    weplen = strlen(pwep);

    /** Remove the double quotes if any */
    if((pwep[0] == '"') && (pwep[weplen-1] == '"')) {
        pwep[weplen-1] = '\0';
        pwep++;
        weplen -= 2;
    }

    /** The WEP key should be of length 5, 13 or 16 characters
      * or 10, 26, or 32 digits */
    switch(weplen) {
        case WEP_64_KEY_ASCII:
        case WEP_128_KEY_ASCII:
        case WEP_152_KEY_ASCII:
                weplen--;
                while(weplen--) {
                    if(0 == isascii(pwep[weplen])) {
                        ALOGD("%c not ascii \n", pwep[weplen]);
                        return FALSE;
                    }
                }
                ascii = TRUE;
                break;

        case WEP_64_KEY_HEX:
        case WEP_128_KEY_HEX:
        case WEP_152_KEY_HEX:
                while(weplen--) {
                    if(0 == isxdigit(pwep[weplen]))
                        return FALSE;
                }
                break;

        default:
            ret = FALSE;
    }

    qsap_scnprintf(pkey, len, (ascii == TRUE) ? "\"%s\"" : "%s", pwep);

    return ret;
}

s16 wifi_qsap_reset_to_default(s8 *pcfgfile, s8 *pdefault)
{
    FILE *fcfg, *ftmp;
    char buf[MAX_CONF_LINE_LEN];
    int status = eSUCCESS;

    fcfg = fopen(pdefault, "r");

    if(NULL == fcfg) {
        ALOGE("%s : unable to open file \n", __func__);
        return eERR_FILE_OPEN;
    }

    qsap_scnprintf(buf, sizeof(buf), "%s~", pcfgfile);

    ftmp = fopen(buf, "w+");
    if(NULL == ftmp) {
        ALOGE("%s : unable to open file \n", __func__);
        fclose(fcfg);
        return eERR_FILE_OPEN;
    }

    while(NULL != fgets(buf, MAX_CONF_LINE_LEN, fcfg)) {
        fprintf(ftmp, "%s", buf);
    }

    fclose(fcfg);
    fclose(ftmp);

    qsap_scnprintf(buf, sizeof(buf), "%s~", pcfgfile);

    if(eERR_UNKNOWN == rename(buf, pcfgfile))
        status = eERR_CONF_FILE;

    /** Remove the temporary file. Dont care the return value */
    unlink(buf);

    return status;
}

#define CTRL_IFACE_PATH_LEN   (128)

void qsap_del_ctrl_iface(void)
{
    u32 len;
    s8 dst_path[CTRL_IFACE_PATH_LEN], *pcif, *pif;
    s8 interface[64];
    s8 path[CTRL_IFACE_PATH_LEN + 64];

    len = CTRL_IFACE_PATH_LEN;

    if(NULL == (pcif = qsap_get_config_value(pconffile, &qsap_str[STR_CTRL_INTERFACE], dst_path, &len))) {
        ALOGE("%s :ctrl_iface path error \n", __func__);
        goto error;
    }

    len = 64;

    if(NULL == (pif = qsap_get_config_value(pconffile, &qsap_str[STR_INTERFACE], interface, &len))) {
        ALOGE("%s :interface error \n", __func__);
        goto error;
    }

    if ((int)sizeof(path) <= snprintf(path, sizeof(path), "%s/%s", pcif, pif)) {
        ALOGE("Iface path : truncating error, %s \n", path);
        goto error;
    }

    unlink(path);

error:
    return;
}

static int qsap_send_cmd_to_hostapd(s8 *pcmd)
{
    int sock;
    struct sockaddr_un cli;
    struct sockaddr_un ser;
    struct timeval timeout;
    int ret = eERR_SEND_TO_HOSTAPD;
    u32 len;
    fd_set read;
    s8 dst_path[CTRL_IFACE_PATH_LEN], *pcif, *pif;
    s8 interface[64];
    s8 *ptr;
    u32 retry_cnt = 3;
    size_t ptr_size;

    len = CTRL_IFACE_PATH_LEN;
    ptr_size = (sizeof(ser.sun_path) < CTRL_IFACE_PATH_LEN)?
        CTRL_IFACE_PATH_LEN : sizeof(ser.sun_path);
    ptr = malloc(ptr_size);
    if(NULL == ptr) {
        ALOGE("%s :No memory \n", __func__);
        return ret;
    }

    if(NULL == (pcif = qsap_get_config_value(pconffile, &qsap_str[STR_CTRL_INTERFACE], dst_path, &len))) {
        ALOGE("%s :ctrl_iface path error \n", __func__);
        goto error;
    }

    len = 64;

    if(NULL == (pif = qsap_get_config_value(pconffile, &qsap_str[STR_INTERFACE], interface, &len))) {
        ALOGE("%s :interface error \n", __func__);
        goto error;
    }

    if ((int)sizeof(ser.sun_path) <= snprintf(ptr, sizeof(ser.sun_path), "%s/%s", pcif, pif)) {
        /* the sun_path is truncated. */
        ALOGE("Iface path : truncating error, %s \n", ptr);
        goto error;
    }

    ALOGD("Connect to :%s\n", ptr);

    sock = socket(PF_UNIX, SOCK_DGRAM, 0);
    if(sock < 0) {
        ALOGE("%s :Socket error \n", __func__);
        goto error;
    }

    cli.sun_family = AF_UNIX;
    qsap_scnprintf(cli.sun_path, sizeof(cli.sun_path), SDK_CTRL_IF);

    ret = bind(sock, (struct sockaddr *)&cli, sizeof(cli));

    if(ret < 0) {
        ALOGE("Bind Failure\n");
        goto close_ret;
    }

    ser.sun_family = AF_UNIX;
    qsap_scnprintf(ser.sun_path, sizeof(ser.sun_path), "%s", ptr);
    ALOGD("Connect to: %s,(%d)\n", ser.sun_path, sock);

    ret = connect(sock, (struct sockaddr *)&ser, sizeof(ser));
    if(ret < 0) {
        ALOGE("Connect Failure...\n");
        goto close_ret;
    }

    ret = send(sock, pcmd, strlen(pcmd), 0);
    if(ret < 0) {
        ALOGE("Unable to send cmd to hostapd \n");
        goto close_ret;
    }
    /* reset the ptr buffer size for recv */
    len = ptr_size;

#define HOSTAPD_RECV_TIMEOUT    (2)
    while(1) {
        timeout.tv_sec = HOSTAPD_RECV_TIMEOUT;
        timeout.tv_usec = 0;

        FD_ZERO(&read);
        FD_SET(sock, &read);

        ret = select(sock+1, &read, NULL, NULL, &timeout);

        if(FD_ISSET(sock, &read)) {

            ret = recv(sock, ptr, len, 0);

            if(ret < 0) {
                ALOGE("%s: recv() failed \n", __func__);
                goto close_ret;
            }

            if ((u32)ret >= len)
                ptr[len-1] = 0;
            else
                ptr[ret] = 0;

            if((ret > 0) && (ptr[0] == '<')) {
                ALOGE("Not the expected response...\n: %s", ptr);
                retry_cnt--;
                if(retry_cnt)
                    continue;
                break;
            }

            if(!strncmp(ptr, "FAIL", 4)) {
                ALOGE("Command failed in hostapd \n");
                goto close_ret;
            }
            else {
                break;
            }
        }
        else {
            ALOGE("%s: Select failed \n", __func__);
            goto close_ret;
        }
    }

    ret = eSUCCESS;

close_ret:
    close(sock);

error:
    free(ptr);
    unlink(SDK_CTRL_IF);
    return ret;
}

static void qsap_update_wps_config(s8 *pVal, s8 *presp, u32 *plen)
{
    u32 tlen = *plen;
    s32 status;
    s8  pwps_state[MAX_INT_STR+1];
    s32 i;

    /* Enable/disable the following in hostapd.conf
     * 1. Update the wps_state
     * 2. Set eap_server=1
     * 3. Update UPnP related variables
     */
    status = atoi(pVal);

    qsap_scnprintf(pwps_state, sizeof(pwps_state), "%d", (status == ENABLE) ? WPS_STATE_ENABLE : WPS_STATE_DISABLE);

    qsap_write_cfg(pconffile, &cmd_list[eCMD_WPS_STATE], pwps_state, presp, &tlen, HOSTAPD_CONF_QCOM_FILE);

    if(eERR_UNKNOWN == qsap_change_cfg(pconffile, &cmd_list[eCMD_WPS_STATE], status)) {
        ALOGE("%s: Failed to enable %s\n", __func__, cmd_list[eCMD_WPS_STATE].name);
        goto error;
    }

    qsap_scnprintf(pwps_state, sizeof(pwps_state), "%d", ENABLE);

    /** update the eap_server=1 */
    qsap_write_cfg(pconffile, &qsap_str[STR_EAP_SERVER], pwps_state, presp, plen, HOSTAPD_CONF_QCOM_FILE);

    for(i=eCMD_UUID; i<=eCMD_UPC; i++) {
        if(eERR_UNKNOWN == qsap_change_cfg(pconffile, &cmd_list[i], status)) {
            ALOGE("%s: failed to set %s\n", __func__, cmd_list[i].name);
            goto error;
        }
    }

    return;
error:
    *plen = qsap_scnprintf(presp, *plen, "%s", ERR_UNKNOWN);

    return;
}

static void qsap_config_wps_method(s8 *pVal, s8 *presp, u32 *plen)
{
    s8 buf[64];
    s8 *ptr;
    int i;
    s32 value;

    /** INPUT : <0/1> <PIN> */
    /** PBC method : WPS_PBC */
    /** PIN method : WPS_PIN any <key> */
    ptr = pVal;
    i = 0;

    while((*ptr != '\0') && (*ptr != ' ')) {
        buf[i] = *ptr;
        ptr++;
        i++;
    }

    buf[i] = '\0';

    /** Identify the WPS method */
    value = atoi(buf);
    if(TRUE != IS_VALID_WPS_CONFIG(value)) {
        *plen = qsap_scnprintf(presp, *plen, "%s", ERR_INVALID_PARAM);
        return;
    }

    SKIP_BLANK_SPACE(ptr);

    if( (value == WPS_CONFIG_PIN) && (*ptr == '\0') ){
        ALOGE("%s :Invalid command \n", __func__);
        *plen = qsap_scnprintf(presp, *plen, "%s", ERR_INVALID_PARAM);
        return;
    }

    if(value == WPS_CONFIG_PBC)
        qsap_scnprintf(buf, sizeof(buf), "WPS_PBC");
    else {
        if(strlen(ptr) < WPS_KEY_LEN) {
            ALOGD("%s :Invalid WPS key length\n", __func__);
            *plen = qsap_scnprintf(presp, *plen, "%s", ERR_INVALID_PARAM);
            return;
        }
        qsap_scnprintf(buf, sizeof(buf), "WPS_PIN any %s", ptr);
    }

    value = qsap_send_cmd_to_hostapd(buf);

    *plen = qsap_scnprintf(presp, *plen, "%s", (value == eSUCCESS) ? SUCCESS: ERR_UNKNOWN);

    return;
}


s32 atoh(u8 *str)
{
    u32 val = 0;
    u32 pos = 0;
    s32 len = strlen((char *)str) - 1;

    while(len >= 0) {
        switch(str[len]) {

        case '0' ... '9':
                val += (str[len] - '0') << pos;
                break;

        case 'a' ... 'f':
                val += (str[len] - 'a' + 10) << pos;
                break;

        case 'A'... 'F':
                val += (str[len] - 'A' + 10) << pos;
                break;
        }
        len--;
        pos += 4;
    }

    return val;
}

int qsap_get_mac_in_bytes(char *psmac, char *pbmac)
{
    int val;
    u8 str[3];
    u32 i;

    str[2] = '\0';

    if(FALSE == isValid_MAC_address(psmac)) {
        return FALSE;
    }

    for(i=0; i<strlen(psmac); i++) {
        if(psmac[i] == ':')
            continue;

        str[0] = psmac[i];
        str[1] = psmac[i+1];
        val = atoh(str);
        *pbmac = val;
        pbmac++;
        i += 2;
    }
    *pbmac = 0;

    return TRUE;
}

void qsap_disassociate_sta(s8 *pVal, s8 *presp, u32 *plen)
{
    int sock, ret = eERR_UNKNOWN;
    struct iwreq wrq;
    s8 pbuf[MAX_CONF_LINE_LEN];
    u32 len = MAX_CONF_LINE_LEN;
    s8 *pif;

    if(ENABLE != is_softap_enabled()) {
        goto end;
    }

    if(NULL == (pif = qsap_get_config_value(pconffile, &qsap_str[STR_INTERFACE], pbuf, &len))) {
        ALOGE("%s :interface error \n", __func__);
        goto end;
    }

    pbuf[len] = '\0';

    sock = socket(AF_INET, SOCK_DGRAM, 0);
    if(sock < 0) {
        ALOGE("%s: socket failure \n", __func__);
        goto end;
    }

    strlcpy(wrq.ifr_name, pif, sizeof(wrq.ifr_name));

    if (TRUE != qsap_get_mac_in_bytes(pVal, (char *) &wrq.u)) {
        ALOGE("%s: Invalid input \n", __func__);
        close(sock);
        goto end;
    }

    ret = ioctl(sock, QCSAP_IOCTL_DISASSOC_STA, &wrq);
    if(ret < 0) {
        ALOGE("%s: ioctl failure \n", __func__);
    }
    close(sock);

end:
    *plen = qsap_scnprintf(presp, *plen, "%s", (ret == eSUCCESS) ? SUCCESS : ERR_UNKNOWN);

    return;
}

static int qsap_set_channel(s32 channel, s8 *tbuf, u32 *tlen)
{
    u32 ulen;
    s8 *pcfgval;
    s8 schan[MAX_INT_STR+1];
    s8 *pcfg = pconffile;

    ulen = *tlen;

    /* Do not worry about hw_mode if intention is to use ACS (channel=0) */
    if (channel == 0)
        goto end;

    /** Read the current operating mode */
    if(NULL == (pcfgval = qsap_get_config_value(pconffile, &cmd_list[eCMD_HW_MODE], tbuf, &ulen))) {
        return eERR_UNKNOWN;
    }

    /** If the operating mode is 'A' and the channel to be set is in between 1 and 14
      * then change the operating mode to 'G' mode */
    if((!strcmp(hw_mode[HW_MODE_A], pcfgval)) && (channel <=14)) {
        /** Change the operating mode to 'G' */
        ulen = *tlen;
        if(eSUCCESS != qsap_write_cfg(pcfg, &cmd_list[eCMD_HW_MODE], hw_mode[HW_MODE_G], tbuf, &ulen, HOSTAPD_CONF_QCOM_FILE)) {
            ALOGE("%s :Unable to update the operating mode \n", __func__);
            return eERR_UNKNOWN;
        }
    }

    /** If the operating mode is NOT 'B' and the channel to be set is  14
      * then change the operating mode to 'B' mode */
    if(strcmp(hw_mode[HW_MODE_B], pcfgval) && (channel == 14)) {
        /** Change the operating mode to 'B' */
        ulen = *tlen;
        if(eSUCCESS != qsap_write_cfg(pcfg, &cmd_list[eCMD_HW_MODE], hw_mode[HW_MODE_B], tbuf, &ulen, HOSTAPD_CONF_QCOM_FILE)) {
            ALOGE("%s :Unable to update the operating mode \n", __func__);
            return eERR_UNKNOWN;
        }
    }

    if(channel > 14) {
        /** Change the operating mode to 'A' */
        ulen = *tlen;
        if(eSUCCESS != qsap_write_cfg(pcfg, &cmd_list[eCMD_HW_MODE], hw_mode[HW_MODE_A], tbuf, &ulen, HOSTAPD_CONF_QCOM_FILE)) {
            ALOGE("%s :Unable to update the operating mode \n", __func__);
            return eERR_UNKNOWN;
        }
    }

end:
    qsap_scnprintf(schan, sizeof(schan), "%ld", channel);

    return qsap_write_cfg(pcfg, &cmd_list[eCMD_CHAN], schan, tbuf, tlen, HOSTAPD_CONF_QCOM_FILE);
}

static int qsap_set_operating_mode(s32 mode, s8 *pmode, int pmode_len, s8 *tbuf, u32 *tlen)
{
    u32 ulen;
    s8 *pcfgval;
    s32 channel;
    s8 sconf[MAX_INT_STR+1];
    s8 *pcfg = pconffile;
    s32 rate_idx;
    s8  ieee11n_enable[] = "1";
    s8  ieee11n_disable[] = "0";

    ulen = *tlen;

    /** Update the operating mode */
    qsap_change_cfg(pcfg, &cmd_list[eCMD_BASIC_RATES],DISABLE);
    qsap_change_cfg(pcfg, &cmd_list[eCMD_REQUIRE_HT],DISABLE);
    qsap_write_cfg(pcfg, &cmd_list[eCMD_IEEE80211N],ieee11n_disable, tbuf, &ulen, HOSTAPD_CONF_QCOM_FILE);
    switch(mode)
    {
        case HW_MODE_G_ONLY:
            qsap_change_cfg(pcfg, &cmd_list[eCMD_BASIC_RATES],ENABLE);
            break;
        case HW_MODE_N_ONLY:
            qsap_change_cfg(pcfg, &cmd_list[eCMD_REQUIRE_HT],ENABLE);
            /* fall through */
        case HW_MODE_N:
        case HW_MODE_G:
        case HW_MODE_A:
        case HW_MODE_ANY:
            ulen = *tlen;
            qsap_write_cfg(pcfg, &cmd_list[eCMD_IEEE80211N],ieee11n_enable, tbuf, &ulen, HOSTAPD_CONF_QCOM_FILE);
            break;
        case HW_MODE_B:
            ulen = *tlen;
            qsap_write_cfg(pcfg, &cmd_list[eCMD_IEEE80211N],ieee11n_disable, tbuf, &ulen, HOSTAPD_CONF_QCOM_FILE);
            break;
    }
    if(mode == HW_MODE_G_ONLY || mode == HW_MODE_N_ONLY || mode == HW_MODE_N ) {
        qsap_scnprintf(pmode, pmode_len, "%s",hw_mode[HW_MODE_G]);
    }
    return qsap_write_cfg(pcfg, &cmd_list[eCMD_HW_MODE], pmode, tbuf, tlen, HOSTAPD_CONF_QCOM_FILE);
}

static int qsap_set_data_rate(s32 drate_idx, s8 *presp, u32 *plen)
{
    u32 ulen;
    s8 *pmode;
    s8 sconf[MAX_INT_STR+1];
    int ret = eERR_UNKNOWN;

    if(TRUE != IS_VALID_DATA_RATE_IDX(drate_idx)) {
        ALOGE("%s :Invalid rate index \n", __func__);
        goto end;
    }

    ulen = *plen;
    /** Read the current operating mode */
    if(NULL == (pmode = qsap_get_config_value(pconffile, &cmd_list[eCMD_HW_MODE], presp, &ulen))) {
        ALOGE("%s :Unable to read mode \n", __func__);
        goto end;
    }

    /** Validate the rate index against the current operating mode */
    if(((!strcmp(pmode, hw_mode[HW_MODE_B])) && (drate_idx > B_MODE_MAX_DATA_RATE_IDX)) ||
        ((!strcmp(pmode, hw_mode[HW_MODE_G]) || (!strcmp(pmode, hw_mode[HW_MODE_G_ONLY]))) &&
        (drate_idx > G_ONLY_MODE_MAX_DATA_RATE_IDX))) {
        ALOGE("%s :Invalid rate index \n", __func__);
        goto end;
    }

    qsap_scnprintf(sconf, sizeof(sconf), "%ld", drate_idx);

    /** Update the rate index in the configuration */
    return qsap_write_cfg(fIni, &qsap_str[STR_DATA_RATE_IN_INI], sconf, presp, plen, INI_CONF_FILE);

end:
    *plen = qsap_scnprintf(presp, *plen, "%s", ERR_UNKNOWN);

    return ret;
}

/**
 * @brief
 *     Handle the user requests of the form,
 *     "set <cmd num> <value1> ..."
 *     These commands are used to update the soft AP
 *     configuration information
 *
 * @param pcmd [IN]   pointer to the string, storing the command.
 * @param presp [OUT] pointer to the buffer, to store the command response.
 *                    The command output format :
 *                    On success,
 *                            success
 *                    On failure,
 *                            failure <error message>
 * @param plen [IN-OUT]
 *                 [IN]: Maximum length of the reponse buffer
 *                [OUT]: Reponse length
 * @return
 *         void
*/
static void qsap_handle_set_request(s8 *pcmd, s8 *presp, u32 *plen)
{
    esap_cmd_t cNum;
    esap_str_t sNum = STR_DENY_MAC_FILE;
    s8 *pVal, *pfile;
    s8 filename[MAX_FILE_PATH_LEN];
    u32 ulen;
    s32 status;
    s32 value;
    s16 ini = HOSTAPD_CONF_QCOM_FILE;
    s8 *pcfg = pconffile;

    pcmd += strlen("set");

    SKIP_BLANK_SPACE(pcmd);

    if(!(strncmp(pcmd, Conf_req[CONF_2g], strlen(Conf_req[CONF_2g])))) {
           pcmd += strlen(Conf_req[CONF_2g]);
           SKIP_BLANK_SPACE(pcmd);
    } else if (!(strncmp(pcmd, Conf_req[CONF_5g], strlen(Conf_req[CONF_5g])))) {
           pcmd += strlen(Conf_req[CONF_5g]);
           SKIP_BLANK_SPACE(pcmd);
    } else if (!(strncmp(pcmd, Conf_req[CONF_owe], strlen(Conf_req[CONF_owe])))) {
           pcmd += strlen(Conf_req[CONF_owe]);
           SKIP_BLANK_SPACE(pcmd);
    } else {
	    // DO NOTHING
    }
    cNum = qsap_get_cmd_num(pcmd);
    if(cNum == eCMD_INVALID) {
        *plen = qsap_scnprintf(presp, *plen, "%s", ERR_INVALID_ARG);
        ALOGE("Invalid command number :%d\n", cNum);
        return;
    }
    pVal = pcmd + strlen(cmd_list[cNum].name);
    if( (cNum != eCMD_COMMIT) &&
        (cNum != eCMD_RESET_TO_DEFAULT) &&
        ((*pVal != '=') || (((eCMD_PASSPHRASE != cNum)) && (strlen(pVal) < 2)))) {
        *plen = qsap_scnprintf(presp, *plen, "%s", ERR_INVALID_ARG);
        return;
    }

    pVal++;

    if((cNum != eCMD_COMMIT) && (cNum != eCMD_RESET_TO_DEFAULT)) {
        ALOGE("Cmd: %s Argument :%s \n", cmd_list[cNum].name, pVal);
    }
    switch(cNum) {
        case eCMD_ADD_TO_ALLOW:
        case eCMD_REMOVE_FROM_ALLOW:
            sNum = STR_ACCEPT_MAC_FILE;
            /* fall through */

        case eCMD_ADD_TO_DENY:
        case eCMD_REMOVE_FROM_DENY:
            ulen = MAX_FILE_PATH_LEN;
            if(NULL != (pfile = qsap_get_allow_deny_file_name(pconffile, &qsap_str[sNum], filename, &ulen))) {
                qsap_update_mac_list(pfile, cNum, pVal, presp, plen);
            }
            else {
                *plen = qsap_scnprintf(presp, *plen, "%s", ERR_RES_UNAVAILABLE);
            }
            return;

        case eCMD_SEC_MODE:
            value = atoi(pVal);
            if(FALSE == IS_VALID_SEC_MODE(value))
                goto error;
            /** Write back the integer value. This is to avoid values like 01, 001, 0001
             * being written to the configuration.
             */
            qsap_scnprintf(pVal, strlen(pVal)+1, "%ld", value);
            qsap_set_security_mode(pconffile, value, presp, plen);
            return;

        case eCMD_MAC_ACL:
            value = atoi(pVal);
            if(FALSE == IS_VALID_MAC_ACL(value))
                goto error;

            /** Write back the integer value. This is to avoid values like 01, 001, 0001
              * being written to the configuration
              */
            qsap_scnprintf(pVal, strlen(pVal)+1, "%ld", value);

            if(ACL_ALLOW_LIST == value) {
                value = ENABLE;
                status = DISABLE;
            }
            else if(ACL_DENY_LIST == value){
                value = DISABLE;
                status = ENABLE;
            }
            else {
                // must be ACL_ALLOW_AND_DENY_LIST
                value = ENABLE;
                status = ENABLE;
            }

            if(eERR_UNKNOWN != qsap_change_cfg(pconffile, &qsap_str[STR_ACCEPT_MAC_FILE], value)) {
                if(eERR_UNKNOWN != qsap_change_cfg(pconffile, &qsap_str[STR_DENY_MAC_FILE], status))
                {
                    qsap_write_cfg(pconffile, &cmd_list[cNum], pVal, presp, plen, HOSTAPD_CONF_QCOM_FILE);
                }
                else {
                    goto error;
                }
            }
            else {
                goto error;
            }
            return;

        case eCMD_COMMIT:
#if 0 // COMMIT is not required currently for ICS framework
            if ( gIniUpdated ) {
                status = wifi_qsap_reload_softap();
                gIniUpdated = 0;
            }
            else {
                status = commit();
            }
            *plen = qsap_scnprintf(presp, *plen, "%s", (status ==  eSUCCESS)? SUCCESS : ERR_UNKNOWN);
#endif
            *plen = qsap_scnprintf(presp, *plen, "%s", SUCCESS);
            return;

        case eCMD_ENABLE_SOFTAP:
            value = atoi(pVal);

            if(TRUE != IS_VALID_SOFTAP_ENABLE(value))
                goto error;

            if ( *pVal == '0' ) {
                    status = wifi_qsap_unload_driver();
            }
            else {
                status = wifi_qsap_load_driver();
            }
            *plen = qsap_scnprintf(presp, *plen, "%s", (status==eSUCCESS) ? SUCCESS : "failure Could not enable softap");
            return;

        case eCMD_ENABLE_WIGIG_SOFTAP:
            value = atoi(pVal);

            if (TRUE != IS_VALID_SOFTAP_ENABLE(value))
                goto error;

            if ( *pVal == '0' ) {
                status = wifi_qsap_stop_wigig_softap();
            }
            else {
                status = wifi_qsap_start_wigig_softap();
            }
            *plen = qsap_scnprintf(presp, *plen, "%s", (status==eSUCCESS) ? SUCCESS : "failure Could not enable Wigig softap");
            return;
        case eCMD_SSID:
            value = strlen(pVal);
            if(SSD_MAX_LEN < value)
                goto error;
            /* Disable ssid2 while setting ssid */
            qsap_change_cfg(pcfg, &cmd_list[eCMD_SSID2], DISABLE);
            break;

        case eCMD_SET_MAX_CLIENTS:
            value = strlen(pVal);
            break;
        case eCMD_BSSID:
            value = atoi(pVal);
            if(FALSE == IS_VALID_BSSID(value))
                goto error;
            /** Write back the integer value. This is to avoid values like 01, 001, 0001
              * being written to the configuration
              */
            qsap_scnprintf(pVal, strlen(pVal)+1, "%ld", value);
            break;
        case eCMD_PASSPHRASE:
            value = strlen(pVal);
            if(FALSE == IS_VALID_PASSPHRASE_LEN(value))
                goto error;
            break;

        case eCMD_CHAN:
            value = atoi(pVal);

            ulen = MAX_FILE_PATH_LEN;
            value = qsap_set_channel(value, filename, &ulen);

            *plen = qsap_scnprintf(presp, *plen, "%s", (value == eSUCCESS) ? SUCCESS : ERR_UNKNOWN);
            return;

        case eCMD_BCN_INTERVAL:
            value = atoi(pVal);
            if(FALSE == IS_VALID_BEACON(value))
                goto error;
            /** Write back the integer value. This is to avoid values like 01, 001, 0001
              * being written to the configuration
              */
            qsap_scnprintf(pVal, strlen(pVal)+1, "%ld", value);
            break;

        case eCMD_DTIM_PERIOD:
            value = atoi(pVal);
            if(FALSE == IS_VALID_DTIM_PERIOD(value))
                goto error;
            /** Write back the integer value. This is to avoid values like 01, 001, 0001
              * being written to the configuration
              */
            qsap_scnprintf(pVal, strlen(pVal)+1, "%ld", value);
            break;

        case eCMD_HW_MODE:
            status = FALSE;
            for(value=HW_MODE_B; value<HW_MODE_UNKNOWN; value++) {
                if(!strcmp(pVal, hw_mode[value])) {
                    status = TRUE;
                    break;
                }
            }

            if(status == FALSE)
                goto error;

            ulen = MAX_FILE_PATH_LEN;
            /* pVal is anull terminated string */
            value = qsap_set_operating_mode(value, pVal, strlen(pVal)+1, filename, &ulen);
            *plen = qsap_scnprintf(presp, *plen, "%s", (value == eSUCCESS) ? SUCCESS : ERR_UNKNOWN);
            return;

        case eCMD_AUTH_ALGS:
            value = atoi(pVal);
            if((value != AHTH_ALG_OPEN) && (value != AUTH_ALG_SHARED) &&
                          (value != AUTH_ALG_OPEN_SHARED))
                goto error;
            /** Write back the integer value. This is to avoid values like 01, 001, 0001
              * being written to the configuration
              */
            qsap_scnprintf(pVal, strlen(pVal)+1, "%ld", value);
            break;

        case eCMD_DEFAULT_KEY:
            value = atoi(pVal);
            if(FALSE == IS_VALID_WEP_KEY_IDX(value))
                goto error;
             /** Write back the integer value. This is to avoid values like 01, 001, 0001
               * being written to the configuration
               */
            qsap_scnprintf(pVal, strlen(pVal)+1, "%ld", value);

            qsap_write_cfg(pcfg, &cmd_list[cNum], pVal, presp, plen, ini);

            ulen = MAX_FILE_PATH_LEN;
            if(SEC_MODE_WEP != qsap_read_security_mode(pcfg, filename, &ulen)) {
                if(eERR_UNKNOWN == qsap_change_cfg(pcfg, &cmd_list[cNum], 0)) {
                    ALOGE("%s: eCMD_DEFAULT_KEY \n", __func__);
                    goto error;
                }
            }

            return;

        case eCMD_WPA_PAIRWISE:
        case eCMD_RSN_PAIRWISE:
            if(FALSE == IS_VALID_PAIRWISE(pVal))
                goto error;

            /** If the encryption type is TKIP, disable the 802.11 HT */
            value = 1;
            if(!strcmp(pVal, "TKIP")) {
                value = 0;
            }

            if(eERR_UNKNOWN == qsap_change_cfg(pconffile, &qsap_str[STR_HT_80211N], value)) {
                ALOGE("%s: unable to update 802.11 HT\n", __func__);
                goto error;
            }

            break;

        case eCMD_WEP_KEY0:
        case eCMD_WEP_KEY1:
        case eCMD_WEP_KEY2:
        case eCMD_WEP_KEY3:
            if(FALSE == is_valid_wep_key(pVal, filename, MAX_FILE_PATH_LEN))
                goto error;

            qsap_write_cfg(pcfg, &cmd_list[cNum], filename, presp, plen, ini);

            /** if the security mode is not WEP, update the WEP features, and
                do NOT set the WEP security */
            ulen = MAX_FILE_PATH_LEN;
            if(SEC_MODE_WEP != qsap_read_security_mode(pcfg, filename, &ulen)) {
                if(eERR_UNKNOWN == qsap_change_cfg(pcfg, &cmd_list[cNum], 0)) {
                    ALOGE("%s: CMD_WEP_KEY0 \n", __func__);
                    goto error;
                }
            }

            return;

        case eCMD_RESET_AP:
            value = atoi(pVal);
            ALOGE("Reset :%ld \n", value);
            if(SAP_RESET_BSS == value) {
                status = wifi_qsap_stop_softap();
                if(status == eSUCCESS) {
                    status = wifi_qsap_start_softap();
                    if (eSUCCESS != status)
                        wifi_qsap_unload_driver();
                }
            }
            else if(SAP_RESET_DRIVER_BSS == value){
                status = wifi_qsap_reload_softap();
            }
            else if(SAP_STOP_BSS == value) {
                status = wifi_qsap_stop_bss();
            }
            else if(SAP_STOP_DRIVER_BSS == value) {
                status = wifi_qsap_stop_softap();
                if(status == eSUCCESS)
                    status = wifi_qsap_unload_driver();
            }
#ifdef QCOM_WLAN_CONCURRENCY
            else if(SAP_INITAP == value) {
                status = wifi_qsap_start_softap_in_concurrency();
            }
            else if(SAP_EXITAP == value) {
                status = wifi_qsap_stop_softap_in_concurrency();
            }
#endif
            else {
                status = !eSUCCESS;
            }
            *plen = qsap_scnprintf(presp, *plen, "%s", (status == eSUCCESS) ? SUCCESS : ERR_UNKNOWN);
            return;

        case eCMD_DISASSOC_STA:
            qsap_disassociate_sta(pVal, presp, plen);
            return;

        case eCMD_RESET_TO_DEFAULT:
            if(eSUCCESS == (status = wifi_qsap_reset_to_default(pconffile, DEFAULT_CONFIG_FILE_PATH))) {
                if(eSUCCESS == (status = wifi_qsap_reset_to_default(fIni, DEFAULT_INI_FILE))) {
                    status = wifi_qsap_reload_softap();
                }
            }
            *plen = qsap_scnprintf(presp, *plen, "%s", (status ==  eSUCCESS) ? SUCCESS : ERR_UNKNOWN);
            return;

        case eCMD_DATA_RATES:
            value = atoi(pVal);
            qsap_set_data_rate(value, presp, plen);
            return;
        case eCMD_UUID:
            value = strlen(pVal);
            if(TRUE != IS_VALID_UUID_LEN(value))
                goto error;
            break;
        case eCMD_DEVICE_NAME:
            value = strlen(pVal);
            if(TRUE != IS_VALID_DEVICENAME_LEN(value))
                goto error;
            break;
        case eCMD_MANUFACTURER:
            value = strlen(pVal);
            if(TRUE != IS_VALID_MANUFACTURER_LEN(value))
                goto error;
            break;

        case eCMD_MODEL_NAME:
            value = strlen(pVal);
            if(TRUE != IS_VALID_MODELNAME_LEN(value))
                goto error;
            break;

        case eCMD_MODEL_NUMBER:
            value = strlen(pVal);
            if(TRUE != IS_VALID_MODELNUM_LEN(value))
                goto error;
            break;

        case eCMD_SERIAL_NUMBER:
            value = strlen(pVal);
            if(TRUE != IS_VALID_SERIALNUM_LEN(value))
                goto error;
            break;

        case eCMD_DEVICE_TYPE:
            value = strlen(pVal);
            if(TRUE != IS_VALID_DEV_TYPE_LEN(value))
                goto error;
            break;

        case eCMD_OS_VERSION:
            value = strlen(pVal);
            if(TRUE != IS_VALID_OS_VERSION_LEN(value))
                goto error;
            break;

        case eCMD_FRIENDLY_NAME:
            value = strlen(pVal);
            if(TRUE != IS_VALID_FRIENDLY_NAME_LEN(value))
                goto error;
            break;

        case eCMD_MANUFACTURER_URL:
        case eCMD_MODEL_URL:
            value = strlen(pVal);
            if(TRUE != IS_VALID_URL_LEN(value))
                goto error;
            break;

        case eCMD_MODEL_DESC:
            value = strlen(pVal);
            if(TRUE != IS_VALID_MODEL_DESC_LEN(value))
                goto error;
            break;

        case eCMD_UPC:
            value = strlen(pVal);
            if(TRUE != IS_VALID_UPC_LEN(value))
                goto error;
            break;
        case eCMD_WMM_STATE:
            value = atoi(pVal);
            if(TRUE != IS_VALID_WMM_STATE(value))
                goto error;

            qsap_scnprintf(pVal, strlen(pVal)+1, "%ld", value);
            break;
        case eCMD_WPS_STATE:
            value = atoi(pVal);
            if(TRUE != IS_VALID_WPS_STATE(value))
                goto error;
            /** Write back the integer value. This is to avoid values like 01, 001, 0001
              * being written to the configuration
              */
            qsap_scnprintf(pVal, strlen(pVal)+1, "%ld", value);
            qsap_update_wps_config(pVal, presp, plen);
            return;

        case eCMD_WPS_CONFIG_METHOD:
            qsap_config_wps_method(pVal, presp, plen);
            return;

        case eCMD_PROTECTION_FLAG:
            value = atoi(pVal);
            if(TRUE != IS_VALID_PROTECTION(value))
                goto error;
            qsap_scnprintf(pVal, strlen(pVal)+1, "%ld", value);
            cNum = STR_PROT_FLAG_IN_INI;
            ini = INI_CONF_FILE;
            break;

        case eCMD_FRAG_THRESHOLD:
            value = atoi(pVal);
            if(TRUE != IS_VALID_FRAG_THRESHOLD(value))
                goto error;
            qsap_scnprintf(pVal, strlen(pVal)+1, "%ld", value);
            break;

        case eCMD_REGULATORY_DOMAIN:
            value = atoi(pVal);

            if(TRUE != IS_VALID_802DOT11D_STATE(value))
                goto error;

            qsap_scnprintf(pVal, strlen(pVal)+1, "%ld", value);
            break;

        case eCMD_RTS_THRESHOLD:
            value = atoi(pVal);
            if(TRUE != IS_VALID_RTS_THRESHOLD(value))
                goto error;
            qsap_scnprintf(pVal, strlen(pVal)+1, "%ld", value);
            break;

        case eCMD_GTK_TIMEOUT:
            value = atoi(pVal);
            if(TRUE != IS_VALID_GTK(value))
                goto error;

            break;

        case eCMD_TX_POWER:
            value = atoi(pVal);
            if(TRUE != IS_VALID_TX_POWER(value))
                goto error;
            qsap_scnprintf(pVal, strlen(pVal)+1, "%ld", value);
            cNum = STR_TX_POWER_IN_INI;
            ini = INI_CONF_FILE;
            break;

        case eCMD_INTRA_BSS_FORWARD:
            value = atoi(pVal);
            if(TRUE != IS_VALID_INTRA_BSS_STATUS(value))
                goto error;

            if(DISABLE == value) {
                status = qsap_change_cfg(pcfg,
                          &cmd_list[eCMD_INTRA_BSS_FORWARD],DISABLE);
            }
             else {
                status = qsap_change_cfg(pcfg,
                          &cmd_list[eCMD_INTRA_BSS_FORWARD],ENABLE);
            }
            *plen = qsap_scnprintf(presp, *plen, "%s", (status == eSUCCESS) ?
                     SUCCESS : ERR_UNKNOWN);
            return;

        case eCMD_COUNTRY_CODE:
            value = strlen(pVal);
            if(value > CTRY_MAX_LEN )
                goto error;
            break;

        case eCMD_AP_AUTOSHUTOFF:
            value = atoi(pVal);
            if(TRUE != IS_VALID_APSHUTOFFTIME(value))
                goto error;
            /* copy a larger value back to pVal. Please pay special care
             * in caller to make sure that the buffer has sufficient size. */
            qsap_scnprintf(pVal, MAX_INT_STR, "%ld", value*60);
            cNum = STR_AP_AUTOSHUTOFF;
            ini = INI_CONF_FILE;
            break;

        case eCMD_AP_ENERGY_DETECT_TH:
            value = atoi(pVal);
            if(TRUE != IS_VALID_ENERGY_DETECT_TH(value))
                goto error;

            qsap_scnprintf(pVal, strlen(pVal)+1, "%ld", value);
            cNum = STR_AP_ENERGY_DETECT_TH;
            ini = INI_CONF_FILE;
            break;

        case eCMD_IEEE80211H:
            value = atoi(pVal);
            if(TRUE != IS_VALID_DFS_STATE(value))
                goto error;

            qsap_scnprintf(pVal, strlen(pVal)+1, "%ld", value);
            break;

        case eCMD_SET_CHANNEL_RANGE:
            ALOGE("eCMD_SET_CHANNEL_RANGE pcmd :%s\n", pcmd);
            value = qsap_set_channel_range(pcmd);
           *plen = qsap_scnprintf(presp, *plen, "%s", (value == eSUCCESS) ? SUCCESS :
                             ERR_UNKNOWN);
            return;
        case eCMD_SSID2:
            /* Disable ssid while setting ssid2 */
            qsap_change_cfg(pcfg, &cmd_list[eCMD_SSID], DISABLE);
            break;

        default: ;
            /** Do not goto error, in default case */
    }

    if(ini == INI_CONF_FILE) {
        ALOGD("WRITE TO INI FILE :%s\n", qsap_str[cNum].name);
        qsap_write_cfg(fIni, &qsap_str[cNum], pVal, presp, plen, ini);
    }
    else {
        qsap_write_cfg(pcfg, &cmd_list[cNum], pVal, presp, plen, ini);
    }

    return;

error:
    *plen = qsap_scnprintf(presp, *plen, "%s", ERR_INVALID_PARAM);
    return;
}

/**
 * @brief
 *      Initiate the command and return response
 * @param pcmd string containing the command request
 *     The format of the command is
 *         get param=value
 *             or
 *         set param=value
 * @param presp buffer to store the command response
 * @param plen length of the respone buffer
 * @return
 *         void
*/
void qsap_hostd_exec_cmd(s8 *pcmd, s8 *presp, u32 *plen)
{
    ALOGD("CMD INPUT  [%s][%lu]\n", pcmd, *plen);
    /* Skip any blank spaces */
    SKIP_BLANK_SPACE(pcmd);

    if(!(strncmp(pcmd, Cmd_req[eCMD_SET], strlen(Cmd_req[eCMD_SET])))) {
       if(!(strncmp(pcmd+4, Conf_req[CONF_2g], strlen(Conf_req[CONF_2g])))) {
           pconffile = CONFIG_FILE_2G;
       } else if (!(strncmp(pcmd+4, Conf_req[CONF_5g], strlen(Conf_req[CONF_5g])))) {
           pconffile = CONFIG_FILE_5G;
       } else if (!(strncmp(pcmd+4, Conf_req[CONF_owe], strlen(Conf_req[CONF_owe])))) {
           pconffile = CONFIG_FILE_OWE;
       } else {
           pconffile = CONFIG_FILE;
       }
    }

    check_for_configuration_files();

    if(!strncmp(pcmd, Cmd_req[eCMD_GET], strlen(Cmd_req[eCMD_GET])) && isblank(pcmd[strlen(Cmd_req[eCMD_GET])])) {
        qsap_handle_get_request(pcmd, presp, plen);
    }

    else if(!(strncmp(pcmd, Cmd_req[eCMD_SET], strlen(Cmd_req[eCMD_SET]))) && isblank(pcmd[strlen(Cmd_req[eCMD_SET])]) ) {
        qsap_handle_set_request(pcmd, presp, plen);
    }

    else {
        *plen = qsap_scnprintf(presp, *plen, "%s", ERR_INVALIDREQ);
    }

    ALOGD("CMD OUTPUT [%s]\nlen :%lu\n\n", presp, *plen);

    return;
}

/* netd and Froyo Native UI specific API */
#define DEFAULT_INTFERACE    "wlan0"
#define DEFAULT_SSID         "SOFTAP_SSID"
#define DEFAULT_CHANNEL      4
#define DEFAULT_PASSPHRASE   "12345678"
#define DEFAULT_AUTH_ALG     1
#define RECV_BUF_LEN         255
#define CMD_BUF_LEN          255
#define SET_BUF_LEN          15

/** Command input
    argv[3] = SSID,
    argv[4] = BROADCAST/HIDDEN,
    argv[5] = CHANNEL
    argv[6] = SECURITY,
    argv[7] = KEY,
*/
int qsapsetSoftap(int argc, char *argv[])
{
    char cmdbuf[CMD_BUF_LEN];
    char respbuf[RECV_BUF_LEN];
    u32 rlen = RECV_BUF_LEN;
    int i;
    int hidden = 0;
    int sec = SEC_MODE_NONE;
    char setCmd[SET_BUF_LEN] = "set";
    int offset = 0;

    ALOGD("%s, %s, %s, %d\n", __FUNCTION__, argv[0], argv[1], argc);

    for ( i=0; i<argc;i++) {
        ALOGD("ARG: %d - %s\n", i+1, argv[i]);
    }

    // check if 2nd arg is dual2g/dual5g
    if (argc > 2
         && (strncmp(argv[2], Conf_req[CONF_2g], 4) == 0
             || strncmp(argv[2], Conf_req[CONF_owe], 3) == 0)) {
            snprintf(setCmd, SET_BUF_LEN, "set %s", argv[2]);
            offset = 1;
            argc--;
    }

    /* set interface */
    if (argc > 2) {
        snprintf(cmdbuf, CMD_BUF_LEN, "%s interface=%s", setCmd, argv[2 + offset]);
    }
    else {
        snprintf(cmdbuf, CMD_BUF_LEN, "%s interface=%s", setCmd, DEFAULT_INTFERACE);
    }
    (void) qsap_hostd_exec_cmd(cmdbuf, respbuf, &rlen);


    /** set SSID */
    if(argc > 3) {
        // In case of dual2g/5g, Set ssid2 with hex values to accomodate sapce and special characters.
        if (offset)
            qsap_scnprintf(cmdbuf, sizeof(cmdbuf), "%s ssid2=%s", setCmd, argv[3 + offset]);
        else
            qsap_scnprintf(cmdbuf, sizeof(cmdbuf), "%s ssid=%s",setCmd, argv[3]);
    }
    else {
        qsap_scnprintf(cmdbuf, sizeof(cmdbuf), "%s ssid=%s_%d", setCmd, DEFAULT_SSID, rand());
    }
    (void) qsap_hostd_exec_cmd(cmdbuf, respbuf, &rlen);

    if(strncmp("success", respbuf, rlen) != 0) {
        ALOGE("Failed to set ssid\n");
        return eERR_UNKNOWN;
    }

    rlen = RECV_BUF_LEN;
    if (argc > 4) {
        if (strcmp(argv[4 + offset], "hidden") == 0) {
             hidden = 1;
        }
        snprintf(cmdbuf, CMD_BUF_LEN, "%s ignore_broadcast_ssid=%d", setCmd, hidden);
        (void) qsap_hostd_exec_cmd(cmdbuf, respbuf, &rlen);
        if(strncmp("success", respbuf, rlen) != 0) {
            ALOGE("Failed to set ignore_broadcast_ssid \n");
            return -1;
        }
    }
    /** channel */
    rlen = RECV_BUF_LEN;
    if(argc > 5) {
        snprintf(cmdbuf, CMD_BUF_LEN, "%s channel=%d", setCmd, atoi(argv[5 + offset]));
        (void) qsap_hostd_exec_cmd(cmdbuf, respbuf, &rlen);

        if(strncmp("success", respbuf, rlen) != 0) {
            ALOGE("Failed to set channel \n");
            return -1;
        }
    }

    /** Security */
    rlen = RECV_BUF_LEN;
    if(argc > 6) {

        /**TODO : need to identify the SEC strings for "wep", "wpa", "wpa2" */
        if(!strcmp(argv[6 + offset], "open"))
            sec = SEC_MODE_NONE;

        else if(!strcmp(argv[6 + offset], "wep"))
            sec = SEC_MODE_WEP;

        else if(!strcmp(argv[6 + offset], "wpa-psk"))
            sec = SEC_MODE_WPA_PSK;

        else if(!strcmp(argv[6 + offset], "wpa2-psk"))
            sec = SEC_MODE_WPA2_PSK;

        qsap_scnprintf(cmdbuf, sizeof(cmdbuf), "%s security_mode=%d",setCmd, sec);
    }
    else {
        qsap_scnprintf(cmdbuf, sizeof(cmdbuf) , "%s security_mode=%d", setCmd, DEFAULT_AUTH_ALG);
    }

    (void) qsap_hostd_exec_cmd(cmdbuf, respbuf, &rlen);

    if(strncmp("success", respbuf, rlen) != 0) {
        ALOGE("Failed to set security mode\n");
        return -1;
    }

    /** Key -- passphrase */
    rlen = RECV_BUF_LEN;
    if ( (sec == SEC_MODE_WPA_PSK) || (sec == SEC_MODE_WPA2_PSK) ) {
        if(argc > 7) {
            /* If the input passphrase is more than 63 characters, consider first 63 characters only*/
            if ( strlen(argv[7 + offset]) > 63 ) argv[7 + offset][63] = '\0';
            qsap_scnprintf(cmdbuf, CMD_BUF_LEN, "%s wpa_passphrase=%s",setCmd, argv[7 + offset]);
        }
        else {
            qsap_scnprintf(cmdbuf, sizeof(cmdbuf), "%s wpa_passphrase=%s", setCmd, DEFAULT_PASSPHRASE);
        }
    }

    (void) qsap_hostd_exec_cmd(cmdbuf, respbuf, &rlen);
    if(strncmp("success", respbuf, rlen) != 0) {
        ALOGE("Failed to set passphrase \n");
        return -1;
    }

    rlen = RECV_BUF_LEN;
    if(argc > 8) {
        qsap_scnprintf(cmdbuf, sizeof(cmdbuf), "%s max_num_sta=%d",setCmd, atoi(argv[8 + offset]));
    }
    (void) qsap_hostd_exec_cmd(cmdbuf, respbuf, &rlen);

    if(strncmp("success", respbuf, rlen) != 0) {
        ALOGE("Failed to set maximun client connections number \n");
        return -1;
    }
    rlen = RECV_BUF_LEN;

    qsap_scnprintf(cmdbuf, sizeof(cmdbuf), "%s commit", setCmd);

    (void) qsap_hostd_exec_cmd(cmdbuf, respbuf, &rlen);

    if(strncmp("success", respbuf, rlen) != 0) {
        ALOGE("Failed to COMMIT \n");
        return -1;
    }

    return 0;
}


static int check_for_config_file_size(FILE *fp)
{
   int length = 0;

   if( NULL != fp )
   {
      fseek(fp, 0L, SEEK_END);
      length = ftell(fp);
   }

   return length;
}

void check_for_configuration_files(void)
{
    FILE * fp;
    char *pfile;

    /* Check if configuration files are present, if not create the default files */

    /* If configuration file does not exist copy the default file */
    if ( NULL == (fp = fopen(pconffile, "r")) ) {
        wifi_qsap_reset_to_default(pconffile, DEFAULT_CONFIG_FILE_PATH);
    }
    else {

        /* The configuration file could be of 0 byte size, replace with default */
        if (check_for_config_file_size(fp) <= 0)
            wifi_qsap_reset_to_default(pconffile, DEFAULT_CONFIG_FILE_PATH);

        fclose(fp);
    }

    /* If Accept MAC list file does not exist, copy the default file */
    if ( NULL == (fp = fopen(ACCEPT_LIST_FILE, "r")) ) {
        wifi_qsap_reset_to_default(ACCEPT_LIST_FILE, DEFAULT_ACCEPT_LIST_FILE_PATH);
    }
    else {

        /* The configuration file could be of 0 byte size, replace with default */
        if (check_for_config_file_size(fp) <= 0)
            wifi_qsap_reset_to_default(ACCEPT_LIST_FILE, DEFAULT_ACCEPT_LIST_FILE_PATH);

        fclose(fp);
    }

    /* Provide read and write permissions to the owner */
    pfile = ACCEPT_LIST_FILE;
    if (chmod(pfile, 0660) < 0) {
        ALOGE("Error changing permissions of %s to 0660: %s",
                pfile, strerror(errno));
    }
    /* If deny MAC list file does not exist, copy the default file */
    if ( NULL == (fp = fopen(DENY_LIST_FILE, "r")) ) {
        wifi_qsap_reset_to_default(DENY_LIST_FILE, DEFAULT_DENY_LIST_FILE_PATH);
    }
    else {

        /* The configuration file could be of 0 byte size, replace with default */
        if (check_for_config_file_size(fp) <= 0)
            wifi_qsap_reset_to_default(DENY_LIST_FILE, DEFAULT_DENY_LIST_FILE_PATH);

        fclose(fp);
    }

    /* Provide read and write permissions to the owner */
    pfile = DENY_LIST_FILE;
    if (chmod(pfile, 0660) < 0) {
        ALOGE("Error changing permissions of %s to 0660: %s",
                pfile, strerror(errno));
    }
    return;
}

void qsap_set_ini_filename(void)
{
    if (property_get("vendor.wlan.driver.config", ini_file, NULL)) {
        fIni = ini_file;
        ALOGE("INI FILE PROP PRESENT %s\n", fIni);
    } else
        ALOGE("INI FILE PROP NOT PRESENT: Use default path %s\n", fIni);
    return;
}

// IOCTL command to create and delete bridge interface //
#ifndef SIOCBRADDBR
#define SIOCBRADDBR 0x89a0
#endif
#ifndef SIOCBRDELBR
#define SIOCBRDELBR 0x89a1
#endif

static int linux_set_iface_flags(int sock, const char *ifname, int dev_up)
{
    struct ifreq ifr;
    int ret;

    if (sock < 0)
        return -1;

    memset(&ifr, 0, sizeof(ifr));
    strlcpy(ifr.ifr_name, ifname, IFNAMSIZ);

    if (ioctl(sock, SIOCGIFFLAGS, &ifr) != 0) {
        ret = errno ? -errno : -999;
        ALOGE("Could not read interface %s flags: %s",
               ifname, strerror(errno));
        return ret;
    }

    if (dev_up) {
        if (ifr.ifr_flags & IFF_UP)
            return 0;
        ifr.ifr_flags |= IFF_UP;
    } else {
        if (!(ifr.ifr_flags & IFF_UP))
            return 0;
        ifr.ifr_flags &= ~IFF_UP;
    }

    if (ioctl(sock, SIOCSIFFLAGS, &ifr) != 0) {
        ret = errno ? -errno : -999;
        ALOGE("Could not set interface %s flags (%s): %s",
               ifname, dev_up ? "UP" : "DOWN", strerror(errno));
        return ret;
    }
    return 0;
}

int qsap_control_bridge(int argc, char ** argv)
{
    int br_socket;

    if (argc < 4) {
        ALOGE("Command not supported");
        return -1;
    }

    br_socket = socket(PF_INET, SOCK_DGRAM, 0);
    if (br_socket < 0) {
        ALOGE("socket(PF_INET,SOCK_DGRAM): %s",strerror(errno));
        return -1;
    }
    if (!strncmp(argv[2],"create", 6)) {
        if (ioctl(br_socket, SIOCBRADDBR, argv[3]) < 0) {
            ALOGE("Could not add bridge %s: %s", argv[3], strerror(errno));
            return -1;
        }
    } else if (!strncmp(argv[2],"remove", 6)) {
        if (ioctl(br_socket, SIOCBRDELBR, argv[3]) < 0) {
            ALOGE("Could not add remove %s: %s", argv[3], strerror(errno));
            return -1;
        }
    } else if (!strncmp(argv[2],"up", 2)) {
        return linux_set_iface_flags(br_socket, argv[3], 1);
    } else if (!strncmp(argv[2],"down", 4)) {
        return linux_set_iface_flags(br_socket, argv[3], 0);
    } else {
        ALOGE("Command %s not handled.", argv[2]);
        return -1;
    }

    return 0;
}


int linux_get_ifhwaddr(const char *ifname, char *addr)
{
    struct ifreq ifr;
    int sock = socket(AF_INET, SOCK_DGRAM, 0);

#ifndef MAC2STR
#define MAC2STR(a) (a)[0], (a)[1], (a)[2], (a)[3], (a)[4], (a)[5]
#define MACSTR "%02x:%02x:%02x:%02x:%02x:%02x"
#endif
    memset(&ifr, 0, sizeof(ifr));
    strlcpy(ifr.ifr_name, ifname, IFNAMSIZ);
    if (ioctl(sock, SIOCGIFHWADDR, &ifr)) {
        ALOGE("Could not get interface %s hwaddr: %s", ifname, strerror(errno));
        return -1;
    }

    if (ifr.ifr_hwaddr.sa_family != ARPHRD_ETHER) {
        ALOGE("%s: Invalid HW-addr family 0x%04x", ifname, ifr.ifr_hwaddr.sa_family);
        return -1;
    }
    memcpy(addr, ifr.ifr_hwaddr.sa_data, ETH_ALEN);
    ALOGE("%s: " MACSTR, ifname, MAC2STR(addr));

    return 0;
}


int qsap_add_or_remove_interface(const char *newIface , int createIface)
{
    const char *wlanIface = "wlan0";
    int retVal = 0;
    struct nl_msg *msg = NULL;
    struct nl_cb *cb = NULL;
    struct nl_cb *s_cb = NULL;
    struct nl_sock *nl_sock = NULL;
    int nl80211_id;
    enum nl80211_iftype type = NL80211_IFTYPE_AP;

    /*  Allocate a netlink socket */
    s_cb = nl_cb_alloc(NL_CB_DEFAULT);
    if (!s_cb) {
        ALOGE( "Failed to allocate Netlink Socket");
        retVal = -ENOMEM;
        goto nla_put_failure;
    }

    nl_sock = nl_socket_alloc_cb(s_cb);
    if (!nl_sock) {
        ALOGE( "Netlink socket Allocation failure");
        retVal = -ENOMEM;
        goto nla_put_failure;
    }

    /* connect to generic netlink socket */
    if (genl_connect(nl_sock)) {
        ALOGE( "Netlink socket Connection failure");
        retVal = -ENOLINK;
        goto nla_put_failure;
    }

    nl80211_id = genl_ctrl_resolve(nl_sock, "nl80211");
    if (nl80211_id < 0) {
        ALOGE( "nl80211 generic netlink not found");
        retVal = -ENOENT;
        goto nla_put_failure;
    }

    msg = nlmsg_alloc();
    if(!msg) {
        ALOGE( "Failed to allocate netlink message");
        retVal = -ENOMEM;
        goto nla_put_failure;
    }

    cb = nl_cb_alloc(NL_CB_DEFAULT);
    if (!cb) {
        ALOGE( "Failed to allocate netlink callback");
        retVal = -ENOMEM;
        goto nla_put_failure;
    }

    if (createIface == 1) {
       /* Issue NL80211_CMD_NEW_INTERFACE */
       genlmsg_put( msg, 0, 0, nl80211_id, 0, 0, NL80211_CMD_NEW_INTERFACE, 0);
       nla_put_u32( msg, NL80211_ATTR_IFINDEX, if_nametoindex( wlanIface ));
       NLA_PUT_STRING( msg, NL80211_ATTR_IFNAME, newIface);
       nla_put_u32( msg, NL80211_ATTR_IFTYPE, type);
    } else {
       genlmsg_put( msg, 0, 0, nl80211_id, 0, 0, NL80211_CMD_DEL_INTERFACE, 0);
       nla_put_u32( msg, NL80211_ATTR_IFINDEX, if_nametoindex( newIface ));
    }

    retVal = nl_send_auto_complete(nl_sock, msg );
    if (retVal < 0 ) {
        goto nla_put_failure;
    }
    else {
        ALOGD("Interface %s is %s - Ok", (createIface == 1 ? "created":"removed") ,newIface);
    }
nla_put_failure:
    if (nl_sock)
        nl_socket_free(nl_sock);
    if (s_cb)
        nl_cb_put(s_cb);
    if (msg)
        nlmsg_free(msg);
    if (cb)
        nl_cb_put(cb);
    return retVal;
}
 642  softap/sdk/qsap_api.h 
@@ -0,0 +1,642 @@
/*
 * Copyright (c) 2010, The Linux Foundation. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *  * Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of The Linux Foundation nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 * THIS SOFTWARE IS PROVIDED "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS
 * BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
 * BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 * OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN
 * IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


#ifndef _QSAP_API_H_
#define _QSAP_API_H_

#if __cplusplus
extern "C" {
#endif
#include <android/log.h>
typedef unsigned char      u8;
typedef char               s8;
typedef unsigned short int u16;
typedef signed short int   s16;
typedef unsigned int       u32;
typedef signed int         s32;

/** Success and error messages */
#define SUCCESS                     "success"
#define ERR_INVALID_ARG             "failure invalid arguments"
#define ERR_INVALID_PARAM           "failure invalid parameter"
#define ERR_UNKNOWN                 "failure unknown error"
#define ERR_INVALIDCMD              "failure invalid command"
#define ERR_INVALIDREQ              "failure invalid request"
#define ERR_FEATURE_NOT_ENABLED     "failure feature not enabled"
#define ERR_NOT_SUPPORTED           "failure not supported"
#define ERR_NOT_READY               "failure not ready"
#define ERR_RES_UNAVAILABLE         "failure resource unavailable"
#define ERR_SOFTAP_NOT_STARTED      "failure softap not started"

/** Error numbers used with the SDK */
enum error_val {
    eERR_UNKNOWN = -1,
    eSUCCESS = 0,
    eERR_STOP_BSS,
    eERR_BSS_NOT_STARTED,
    eERR_COMMIT,
    eERR_START_SAP,
    eERR_STOP_SAP,
    eERR_RELOAD_SAP,
    eERR_FILE_OPEN,
    eERR_CONF_FILE,
    eERR_INVALID_MAC_ADDR,
    eERR_SEND_TO_HOSTAPD,
    eERR_CONFIG_PARAM_MISSING,
    eERR_CHAN_READ,
    eERR_FEATURE_NOT_ENABLED,
    eERR_UNLOAD_FAILED_SDIO,
    eERR_UNLOAD_FAILED_SOFTAP,
    eERR_LOAD_FAILED_SDIOIF,
    eERR_LOAD_FAILED_SOFTAP,
    eERR_SET_CHAN_RANGE,
    eERR_GET_AUTO_CHAN
};

#ifndef WIFI_DRIVER_CONF_FILE
#define WIFI_DRIVER_CONF_FILE            NULL
#endif

#ifndef WIFI_DRIVER_DEF_CONF_FILE
#define WIFI_DRIVER_DEF_CONF_FILE        NULL
#endif

/** Configuration file name for SAP+SAP*/
#define CONFIG_FILE_2G "/data/vendor/wifi/hostapd/hostapd_dual2g.conf"
#define CONFIG_FILE_5G "/data/vendor/wifi/hostapd/hostapd_dual5g.conf"

/** Configuration file name for OWE-transition */
#define CONFIG_FILE_OWE "/data/vendor/wifi/hostapd/hostapd_owe.conf"

/** Configuration file name */
#define CONFIG_FILE "/data/vendor/wifi/hostapd/hostapd.conf"

/** Default configuration file path */
#define DEFAULT_CONFIG_FILE_PATH "/vendor/etc/hostapd/hostapd_default.conf"

/** Default Accept list file name */
#define DEFAULT_ACCEPT_LIST_FILE_PATH "/vendor/etc/hostapd/hostapd.accept"

/** Accept list file name */
#define ACCEPT_LIST_FILE "/data/vendor/wifi/hostapd/hostapd.accept"

/** Default Deny list file name */
#define DEFAULT_DENY_LIST_FILE_PATH "/vendor/etc/hostapd/hostapd.deny"

/** Deny list file name */
#define DENY_LIST_FILE "/data/vendor/wifi/hostapd/hostapd.deny"

/** Default Ini file */
#define DEFAULT_INI_FILE "/persist/qcom/softap/qcom_cfg_default.ini"

/** SDK control interface path */
#define SDK_CTRL_IF "/data/vendor/wifi/hostapd/ctrl/softap_sdk_ctrl"

/** Maximum length of the line in the configuration file */
#define MAX_CONF_LINE_LEN  (156)

/** MAC address length in acsii string format*/
#define MAC_ADDR_LEN       (17)

/** MAC address length, as integer */
#define MAC_ADDR_LEN_INT   (6)
/** Maximum number of MAC address in the allow / deny MAC list */
#define MAX_ALLOWED_MAC    (15)

/** Maximum length of the file path */
#define MAX_FILE_PATH_LEN  (128)

/** WPS key length - 8 digit key, usually*/
#define WPS_KEY_LEN   (8)

/** Maximum length of the SSID */
#define SSD_MAX_LEN (32)
#define CTRY_MAX_LEN (3)

/** Beacon interval 50 to 65535 */
#define BCN_INTERVAL_MIN  (1)
#define BCN_INTERVAL_MAX  (65535)

/** Passphrase max length 63 bytes, Minumum lenght is 8.
  * NOTE: If Passphrase length is 64, then phassphrase is treated as PSK.
  */
#define PASSPHRASE_MIN    (8)
#define PASSPHRASE_MAX    (63)

/** DTIM period 1 to 255 -- Qualcomm 10 */
#define DTIM_PERIOD_MIN    (1)
#define DTIM_PERIOD_MAX    (255)

/** WEP key lengths in ASCII and hex */
#define WEP_64_KEY_ASCII  (5)
#define WEP_64_KEY_HEX    (10)

#define WEP_128_KEY_ASCII (13)
#define WEP_128_KEY_HEX   (26)

#define WEP_152_KEY_ASCII (16)
#define WEP_152_KEY_HEX   (32)

#define WPS_PIN_LEN (8)

#define CHANNEL_MIN    (0)
#define CHANNEL_MAX    (14)
#define AUTO_CHANNEL    (0)
#define BG_MAX_CHANNEL  (11)

/** Fragmentation threshold 256 to 2346 */
#define FRAG_THRESHOLD_MIN  (256)
#define FRAG_THRESHOLD_MAX  (2346)

/** RTS threshold 1 to 2347 */
#define RTS_THRESHOLD_MIN   (1)
#define RTS_THRESHOLD_MAX   (2347)

#define MIN_UUID_LEN   (1)
#define MAX_UUID_LEN   (36)

#define MIN_DEVICENAME_LEN   (1)
#define MAX_DEVICENAME_LEN   (32)

#define MIN_MANUFACTURER_LEN   (1)
#define MAX_MANUFACTURER_LEN   (64)

#define MIN_MODELNAME_LEN   (1)
#define MAX_MODELNAME_LEN   (32)

#define MIN_MODELNUM_LEN   (1)
#define MAX_MODELNUM_LEN   (32)

#define MIN_SERIALNUM_LEN  (1)
#define MAX_SERIALNUM_LEN  (32)

#define MIN_DEV_TYPE_LEN  (1)
#define MAX_DEV_TYPE_LEN  (20)

#define MIN_OS_VERSION_LEN  (1)
#define MAX_OS_VERSION_LEN  (12)

#define MIN_FRIENDLY_NAME_LEN  (1)
#define MAX_FRIENDLY_NAME_LEN  (64)

#define MAX_URL_LEN  (128)

#define MIN_MODEL_DESC_LEN  (1)
#define MAX_MODEL_DESC_LEN  (128)

#define MIN_UPC_LEN  (1)
#define MAX_UPC_LEN  (128)

#define GTK_MIN   (30)

#define MAX_INT_STR (8)

/** Tx Power range 2dBm to 18 dBm */
#define MIN_TX_POWER (2)
#define MAX_TX_POWER (30)

/** Data rate index */
#define MIN_DATA_RATE_IDX (0)
#define MAX_DATA_RATE_IDX (28)
#define AUTO_DATA_RATE                   (0)
#define B_MODE_MAX_DATA_RATE_IDX         (4)
#define G_ONLY_MODE_MAX_DATA_RATE_IDX    (12)

/** parameters for read config */
#define GET_COMMENTED_VALUE 1
#define GET_ENABLED_ONLY    0

#define MAX_RESP_LEN 255

/** AP shutoff time */
#define AP_SHUTOFF_MIN    (0)
#define AP_SHUTOFF_MAX    (120)

/** AP shutoff time */
#define AP_ENERGY_DETECT_TH_MIN    (0)
#define AP_ENERGY_DETECT_TH_MAX    (9)

/** command request index - in the array Cmd_req[] */
enum eCmd_req {
    eCMD_GET = 0,
    eCMD_SET = 1,

    eCMD_REQ_LAST
};

/** config request index - in the array Conf_req[] */
enum eConf_req {
    CONF_2g = 0,
    CONF_5g = 1,
    CONF_owe = 2,

    CONF_REQ_LAST
};

/**
  * Command numbers, these numbers form the index into the array of
  * command names stored in the 'cmd_list'.
  *
  * Warning: An addtion of an entry in 'esap_cmd', should be followed
  * by an addition of a command name string in the 'cmd_list' array
  */
typedef enum esap_cmd {
    eCMD_INVALID             = -1,
    eCMD_SSID                = 0,
    eCMD_BSSID               = 1,
    eCMD_CHAN                = 2,
    eCMD_BCN_INTERVAL        = 3,
    eCMD_DTIM_PERIOD         = 4,
    eCMD_HW_MODE             = 5,
    eCMD_AUTH_ALGS           = 6,
    eCMD_SEC_MODE            = 7,
    eCMD_WEP_KEY0            = 8,
    eCMD_WEP_KEY1            = 9,
    eCMD_WEP_KEY2            = 10,
    eCMD_WEP_KEY3            = 11,
    eCMD_DEFAULT_KEY         = 12,
    eCMD_PASSPHRASE          = 13,
    eCMD_WPA_PAIRWISE        = 14,
    eCMD_RSN_PAIRWISE        = 15,
    eCMD_MAC_ADDR            = 16,
    eCMD_RESET_AP            = 17,
    eCMD_MAC_ACL             = 18,
    eCMD_ADD_TO_ALLOW        = 19,
    eCMD_ADD_TO_DENY         = 20,
    eCMD_REMOVE_FROM_ALLOW   = 21,
    eCMD_REMOVE_FROM_DENY    = 22,
    eCMD_ALLOW_LIST          = 23,
    eCMD_DENY_LIST           = 24,
    eCMD_COMMIT              = 25,
    eCMD_ENABLE_SOFTAP       = 26,
    eCMD_DISASSOC_STA        = 27,
    eCMD_RESET_TO_DEFAULT    = 28,
    eCMD_PROTECTION_FLAG     = 29,
    eCMD_DATA_RATES          = 30,
    eCMD_ASSOC_STA_MACS      = 31,
    eCMD_TX_POWER            = 32,
    eCMD_SDK_VERSION         = 33,
    eCMD_WMM_STATE           = 34,

    /** WARNING: The order of WPS commands should not be altered.
        New commands SHOULD be added above or below this            */
    eCMD_WPS_STATE           = 35,
    eCMD_WPS_CONFIG_METHOD     = 36,
    eCMD_UUID                = 37,
    eCMD_DEVICE_NAME         = 38,
    eCMD_MANUFACTURER        = 39,
    eCMD_MODEL_NAME          = 40,
    eCMD_MODEL_NUMBER        = 41,
    eCMD_SERIAL_NUMBER       = 42,
    eCMD_DEVICE_TYPE         = 43,
    eCMD_OS_VERSION          = 44,
    eCMD_FRIENDLY_NAME       = 45,
    eCMD_MANUFACTURER_URL    = 46,
    eCMD_MODEL_DESC          = 47,
    eCMD_MODEL_URL           = 48,
    eCMD_UPC                 = 49,
    /******************************************************/

    eCMD_FRAG_THRESHOLD      = 50,
    eCMD_RTS_THRESHOLD       = 51,
    eCMD_GTK_TIMEOUT         = 52,
    eCMD_COUNTRY_CODE        = 53,
    eCMD_INTRA_BSS_FORWARD   = 54,
    eCMD_REGULATORY_DOMAIN   = 55,
    eCMD_AP_STATISTICS       = 56,
    eCMD_AP_AUTOSHUTOFF      = 57,
    eCMD_AP_ENERGY_DETECT_TH = 58,
    eCMD_BASIC_RATES         = 59,
    eCMD_REQUIRE_HT          = 60,
    eCMD_IEEE80211N          = 61,
    eCMD_SET_CHANNEL_RANGE   = 62,
    eCMD_GET_AUTO_CHANNEL    = 63,
    eCMD_IEEE80211W          = 64,
    eCMD_WPA_KEY_MGMT        = 65,
    eCMD_SET_MAX_CLIENTS     = 66,
    eCMD_IEEE80211AC         = 67,
    eCMD_VHT_OPER_CH_WIDTH   = 68,
    eCMD_ACS_CHAN_LIST       = 69,
    eCMD_HT_CAPAB            = 70,
    eCMD_IEEE80211H          = 71,

    eCMD_ENABLE_WIGIG_SOFTAP = 72,
    eCMD_INTERFACE           = 73,
    eCMD_SSID2               = 74,
    eCMD_BRIDGE              = 75,
    eCMD_CTRL_INTERFACE      = 76,
    eCMD_VENDOR_ELEMENT      = 77,
    eCMD_ASSOCRESP_ELEMENT   = 78,
    eCMD_ACS_EXCLUDE_DFS     = 79,
    eCMD_WOWLAN_TRIGGERS     = 80,
    eCMD_ACCEPT_MAC_FILE     = 81,
    eCMD_DENY_MAC_FILE       = 82,
    eCMD_OWE_TRANS_IFNAME    = 83,
    eCMD_SAE_REQUIRE_MPF     = 84,

    eCMD_LAST     /** New command numbers should be added above this */
} esap_cmd_t;

/** non-commands */
typedef enum esap_str {
    STR_WPA                      = 0,
    STR_ACCEPT_MAC_FILE          = 1,
    STR_DENY_MAC_FILE            = 2,
    STR_MAC_IN_INI               = 3,
    STR_PROT_FLAG_IN_INI         = 4,
    STR_DATA_RATE_IN_INI         = 5,
    STR_TX_POWER_IN_INI          = 6,
    STR_FRAG_THRESHOLD_IN_INI    = 7,
    STR_RTS_THRESHOLD_IN_INI     = 8,
    STR_COUNTRY_CODE_IN_INI      = 9,
    STR_INTRA_BSS_FORWARD_IN_INI = 10,
    STR_WMM_IN_INI               = 11,
    STR_802DOT11D_IN_INI         = 12,
    STR_HT_80211N                = 13,
    STR_CTRL_INTERFACE           = 14,
    STR_INTERFACE                = 15,
    STR_EAP_SERVER               = 16,
    STR_AP_AUTOSHUTOFF           = 17,
    STR_AP_ENERGY_DETECT_TH      = 18,
    eSTR_LAST
} esap_str_t;

/** Supported security mode */
typedef enum sec_mode {
    SEC_MODE_NONE            = 0,
    SEC_MODE_WEP             = 1,
    SEC_MODE_WPA_PSK         = 2,
    SEC_MODE_WPA2_PSK        = 3,
    SEC_MODE_WPA_WPA2_PSK    = 4,

    SEC_MODE_INVALID
} sec_mode_t;

/** security mode in the configuration file */
enum wpa_in_conf_file {
    WPA_IN_CONF_FILE = 1,
    WPA2_IN_CONF_FILE = 2,
    WPA_WPA2_IN_CONF_FILE = 3
};

enum {
    DISABLE   = 0,
    ENABLE    = 1
};

enum {
    FALSE = 0,
    TRUE = 1
};

/** IEEE 802.11 operating mode */
enum oper_mode {
    HW_MODE_B = 0,
    HW_MODE_G = 1,
    HW_MODE_N = 2,
    HW_MODE_G_ONLY = 3,
    HW_MODE_N_ONLY = 4,
    HW_MODE_A = 5,
    HW_MODE_ANY = 6,

    HW_MODE_UNKNOWN
};

/** Authentication algorithm */
enum auth_alg {
    AHTH_ALG_OPEN = 1,
    AUTH_ALG_SHARED = 2,
    AUTH_ALG_OPEN_SHARED = 3,

    AUTH_ALG_INVALID
};

/** Allow or Deny MAC address list selection */
enum macaddr_acl {
    ACL_DENY_LIST = 0,
    ACL_ALLOW_LIST = 1,
    ACL_ALLOW_AND_DENY_LIST = 2
};

enum ap_reset {
    SAP_RESET_BSS = 0,
    SAP_RESET_DRIVER_BSS = 1,
    SAP_STOP_BSS = 2,
    SAP_STOP_DRIVER_BSS = 3,
#ifdef QCOM_WLAN_CONCURRENCY
    SAP_INITAP = 4,
    SAP_EXITAP = 5,
#endif
    SAP_RESET_INVALID
};

enum wmm_state {
    WMM_AUTO_IN_INI = 0,
    WMM_ENABLED_IN_INI = 1,
    WMM_DISABLED_IN_INI = 2
};

enum wps_state {
    WPS_STATE_DISABLE = 0,
    WPS_STATE_ENABLE  = 2
};


enum wps_config {
    WPS_CONFIG_PBC = 0,
    WPS_CONFIG_PIN = 1,
};

/** Choose the configuration file */
enum eChoose_conf_file {
    HOSTAPD_CONF_QCOM_FILE = 0,
    INI_CONF_FILE = 1
};

struct Command
{
    s8  * name;
    s8  * default_value;
};

/** STA Channel information*/
typedef struct sta_channel_info {
        int subioctl;
        int stastartchan;
        int staendchan;
        int staband;
} sta_channel_info;

/**SAP Channel information*/
typedef struct sap_channel_info {
        int startchan;
        int endchan;
        int band;
} sap_channel_info;

/**SAP  auto Channel information*/
typedef struct sap_auto_channel_info {
        int subioctl;
} sap_auto_channel_info;

/** Validate enable / disable softap */
#define IS_VALID_SOFTAP_ENABLE(x) (((value == ENABLE) || (value == DISABLE)) ? TRUE: FALSE)

/** Validate the channel */
#define IS_VALID_CHANNEL(x) ((value >= CHANNEL_MIN) && (value <= CHANNEL_MAX) ? TRUE : FALSE)

/** Validate the security mode */
#define IS_VALID_SEC_MODE(x) (((x >= SEC_MODE_NONE) && (x < SEC_MODE_INVALID)) ? TRUE : FALSE)

/** Validate the selection of access or deny MAC address list */
#define IS_VALID_MAC_ACL(x) (((x==ACL_DENY_LIST) || (x==ACL_ALLOW_LIST) || (x==ACL_ALLOW_AND_DENY_LIST)) ? TRUE : FALSE)

/** Validate the broadcast SSID status */
#define IS_VALID_BSSID(x) (((value == ENABLE) || (value == DISABLE)) ? TRUE: FALSE)

/** Validate the length of the passphrase */
#define IS_VALID_PASSPHRASE_LEN(x) ((((x >= PASSPHRASE_MIN) && (x <= PASSPHRASE_MAX)) || (x == 0)) ? TRUE: FALSE)

/** Validate the beacon interval */
#define IS_VALID_BEACON(x) (((x >= BCN_INTERVAL_MIN) && (x <= BCN_INTERVAL_MAX)) ? TRUE: FALSE)

/** Validate the DTIM period */
#define IS_VALID_DTIM_PERIOD(x) (((x >= DTIM_PERIOD_MIN) && (x <= DTIM_PERIOD_MAX)) ? TRUE: FALSE)

/** Validate the WEP index */
#define IS_VALID_WEP_KEY_IDX(x) ((x >= 0) && (x < 4) ? TRUE : FALSE)

/** Validate the pairwise encryption */
#define IS_VALID_PAIRWISE(x) (((!strcmp(x, "TKIP")) || (!strcmp(x, "CCMP")) || \
                    (!strcmp(x, "TKIP CCMP")) || (!strcmp(x, "CCMP TKIP"))) ? TRUE : FALSE)

/** Validate the WMM status */
#define IS_VALID_WMM_STATE(x) (((x >= WMM_AUTO_IN_INI) && (x <= WMM_DISABLED_IN_INI)) ? TRUE: FALSE)

/** Validate the WPS status */
#define IS_VALID_WPS_STATE(x) (((x == ENABLE) || (x == DISABLE)) ? TRUE: FALSE)

/** Validate the fragmentation threshold */
#define IS_VALID_FRAG_THRESHOLD(x) (((x >= FRAG_THRESHOLD_MIN) && (x <= FRAG_THRESHOLD_MAX)) ? TRUE: FALSE)

/** Validate the RTS threshold value */
#define IS_VALID_RTS_THRESHOLD(x) (((x >= RTS_THRESHOLD_MIN) && (x <= RTS_THRESHOLD_MAX)) ? TRUE: FALSE)

/** Validate the GTK */
#define IS_VALID_GTK(x) ((x >= GTK_MIN) ? TRUE: FALSE)

/** Validate the intra-bss forwarding status */
#define IS_VALID_INTRA_BSS_STATUS(x) (((x == ENABLE) || (x == DISABLE)) ? TRUE: FALSE)

/** Validate the protection flag */
#define IS_VALID_PROTECTION(x) (((x == ENABLE) || (x == DISABLE)) ? TRUE: FALSE)

/** Validate the UUID length */
#define IS_VALID_UUID_LEN(x) (((x >= MIN_UUID_LEN) && (x <= MAX_UUID_LEN)) ? TRUE : FALSE)

/** Validate the device name length */
#define IS_VALID_DEVICENAME_LEN(x) (((x >= MIN_DEVICENAME_LEN) && (x <= MAX_DEVICENAME_LEN)) ? TRUE : FALSE)

/** Validate the Manufacturer length */
#define IS_VALID_MANUFACTURER_LEN(x) (((x >= MIN_MANUFACTURER_LEN) && (x <= MAX_MANUFACTURER_LEN)) ? TRUE : FALSE)

/** Validate the Model name length */
#define IS_VALID_MODELNAME_LEN(x) (((x >= MIN_MODELNAME_LEN) && (x <= MAX_MODELNAME_LEN)) ? TRUE : FALSE)

/** Validate the Model number length */
#define IS_VALID_MODELNUM_LEN(x) (((x >= MIN_MODELNUM_LEN) && (x <= MAX_MODELNUM_LEN)) ? TRUE : FALSE)

/** Validate the Model serial number length */
#define IS_VALID_SERIALNUM_LEN(x) (((x >= MIN_SERIALNUM_LEN) && (x <= MAX_SERIALNUM_LEN)) ? TRUE : FALSE)

/** Validate the Primary device type length */
#define IS_VALID_DEV_TYPE_LEN(x) (((x >= MIN_DEV_TYPE_LEN) && (x <= MAX_DEV_TYPE_LEN)) ? TRUE : FALSE)

/** Validate the OS version length */
#define IS_VALID_OS_VERSION_LEN(x) (((x >= MIN_OS_VERSION_LEN) && (x <= MAX_OS_VERSION_LEN)) ? TRUE : FALSE)

/** Validate the friendly name length */
#define IS_VALID_FRIENDLY_NAME_LEN(x) (((x >= MIN_FRIENDLY_NAME_LEN) && (x <= MAX_FRIENDLY_NAME_LEN)) ? TRUE : FALSE)

/** Validate the URL length */
#define IS_VALID_URL_LEN(x) (((x > 0) && (x <= MAX_URL_LEN)) ? TRUE : FALSE)

/** Validate the model description length */
#define IS_VALID_MODEL_DESC_LEN(x) (((x > MIN_MODEL_DESC_LEN) && (x <= MAX_MODEL_DESC_LEN)) ? TRUE : FALSE)

/** Validate the Universal Product Code (UPC) length */
#define IS_VALID_UPC_LEN(x) (((x > MIN_UPC_LEN) && (x <= MAX_UPC_LEN)) ? TRUE : FALSE)

/** Validate the Tx power index */
#define IS_VALID_TX_POWER(x) (((x >= MIN_TX_POWER ) && (x <= MAX_TX_POWER)) ? TRUE : FALSE)

/** Validate the Data rate */
#define IS_VALID_DATA_RATE_IDX(x) (((x >= MIN_DATA_RATE_IDX) && (x <= MAX_DATA_RATE_IDX)) ? TRUE : FALSE )

/** Validate WPS config */
#define IS_VALID_WPS_CONFIG(x) (((x == WPS_CONFIG_PBC) || (x == WPS_CONFIG_PIN)) ? TRUE : FALSE)

/** Validate the 802dot11d state */
#define IS_VALID_802DOT11D_STATE(x) (((x == ENABLE) || (x == DISABLE)) ? TRUE: FALSE)

/** Validate the AP shutoff time */
#define IS_VALID_APSHUTOFFTIME(x) (((x >= AP_SHUTOFF_MIN) && (x <= AP_SHUTOFF_MAX)) ? TRUE : FALSE)

/** Validate the AP shutoff time */
#define IS_VALID_ENERGY_DETECT_TH(x) ((((x >= AP_ENERGY_DETECT_TH_MIN) && (x <= AP_ENERGY_DETECT_TH_MAX)) ||( x == 128)) ? TRUE : FALSE)

/** Validate the 802dot11h state */
#define IS_VALID_DFS_STATE(x) (((x == ENABLE) || (x == DISABLE)) ? TRUE: FALSE)

/** Function declartion */
int qsap_hostd_exec(int argc, char ** argv);
void qsap_hostd_exec_cmd(s8 *pcmd, s8 *presp, u32 *plen);
s8 *qsap_get_config_value(s8 *pfile, struct Command *pcmd, s8 *pbuf, u32 *plen);
int qsapsetSoftap(int argc, char *argv[]);
int qsap_add_or_remove_interface(const char *iface_name, int create_iface);
void qsap_del_ctrl_iface(void);
s16 wifi_qsap_reset_to_default(s8 *pcfgfile, s8 *pdefault);
void check_for_configuration_files(void);
void qsap_set_ini_filename(void);
int qsap_set_channel_range(s8 * cmd);
int qsap_get_sap_auto_channel_slection(s32 *pautochan);
int qsap_get_mode(s32 *pmode);
int qsap_prepare_softap(void);
int qsap_unprepare_softap(void);
int qsap_is_fst_enabled(void);
int qsap_control_bridge(int argc, char ** argv);
int linux_get_ifhwaddr(const char *ifname, char *addr);

#if __cplusplus
};  // extern "C"
#endif

#endif

 67  system_prop.mk 
@@ -1,37 +1,39 @@
# Audio	# Audio
PRODUCT_PROPERTY_OVERRIDES += \	PRODUCT_PROPERTY_OVERRIDES += \
    ro.vendor.audio.sdk.fluencetype=fluencepro \	    ro.vendor.audio.sdk.fluencetype=fluencepro \
    persist.vendor.audio.fluence.audiorec=false \	    persist.vendor.audio.fluence.audiorec=false \
    persist.vendor.audio.fluence.speaker=false \	    persist.vendor.audio.fluence.speaker=false \
    persist.vendor.audio.fluence.voicecall=true \	    persist.vendor.audio.fluence.voicecall=true \
    persist.vendor.audio.fluence.voicecomm=true \	    persist.vendor.audio.fluence.voicecomm=true \
    persist.vendor.audio.fluence.voicerec=false \	    persist.vendor.audio.fluence.voicerec=false \
    persist.speaker.prot.enable=true \	    persist.speaker.prot.enable=true \
    ro.config.vc_call_vol_steps=7 \	    ro.config.vc_call_vol_steps=7 \
    persist.vendor.audio.calfile0=/etc/acdbdata/Bluetooth_cal.acdb \	    persist.vendor.audio.calfile0=/etc/acdbdata/Bluetooth_cal.acdb \
    persist.vendor.audio.calfile1=/etc/acdbdata/General_cal.acdb \	    persist.vendor.audio.calfile1=/etc/acdbdata/General_cal.acdb \
    persist.vendor.audio.calfile2=/etc/acdbdata/Global_cal.acdb \	    persist.vendor.audio.calfile2=/etc/acdbdata/Global_cal.acdb \
    persist.vendor.audio.calfile3=/etc/acdbdata/Handset_cal.acdb \	    persist.vendor.audio.calfile3=/etc/acdbdata/Handset_cal.acdb \
    persist.vendor.audio.calfile4=/etc/acdbdata/Hdmi_cal.acdb \	    persist.vendor.audio.calfile4=/etc/acdbdata/Hdmi_cal.acdb \
    persist.vendor.audio.calfile5=/etc/acdbdata/Headset_cal.acdb \	    persist.vendor.audio.calfile5=/etc/acdbdata/Headset_cal.acdb \
    persist.vendor.audio.calfile6=/etc/acdbdata/Speaker_cal.acdb \	    persist.vendor.audio.calfile6=/etc/acdbdata/Speaker_cal.acdb \
    persist.spkr.cal.duration=0 \	    persist.spkr.cal.duration=0 \
    ro.qc.sdk.audio.ssr=false \	    ro.qc.sdk.audio.ssr=false \
    persist.audio.ssr.3mic=true \	    persist.audio.ssr.3mic=true \
    av.offload.enable=false \	    av.offload.enable=false \
    audio.offload.buffer.size.kb=32 \	    audio.offload.buffer.size.kb=32 \
    audio.offload.pcm.16bit.enable=false \	    audio.offload.pcm.16bit.enable=false \
    audio.offload.gapless.enabled=false \	    audio.offload.gapless.enabled=false \
    audio.offload.passthrough=false \	    audio.offload.passthrough=false \
    audio.offload.pcm.24bit.enable=true \	    audio.offload.pcm.24bit.enable=true \
    audio.offload.multiple.enabled=false \	    audio.offload.multiple.enabled=false \
    audio.deep_buffer.media=true \	    audio.deep_buffer.media=true \
    tunnel.audio.encode=false \	    tunnel.audio.encode=false \
    use.dedicated.device.for.voip=true \	    use.dedicated.device.for.voip=true \
    af.fast_track_multiplier=1 \	    af.fast_track_multiplier=1 \
    audio_hal.period_size=192 \	    audio_hal.period_size=192 \
    ro.audio.flinger_standbytime_ms=300 \	    ro.audio.flinger_standbytime_ms=300 \
    use.voice.path.for.pcm.voip=false \	    use.voice.path.for.pcm.voip=false \
    ro.config.media_vol_steps=25 \
    ro.config.vc_call_vol_steps=7


# Bluetooth	# Bluetooth
PRODUCT_PROPERTY_OVERRIDES += \	PRODUCT_PROPERTY_OVERRIDES += \
    bluetooth.chip.vendor=brcm \	    bluetooth.chip.vendor=brcm \
    qcom.bluetooth.soc=rome \	    qcom.bluetooth.soc=rome \
    ro.bt.bdaddr_path="/data/misc/bluetooth/bdaddr" \	    ro.bt.bdaddr_path="/data/misc/bluetooth/bdaddr" \
    persist.bt.enableAptXHD=true	    persist.bt.enableAptXHD=true


# Boot animation
TARGET_SCREEN_HEIGHT := 2560
TARGET_SCREEN_WIDTH := 1440
TARGET_BOOT_ANIMATION_RES := 1440

# Camera	# Camera
PRODUCT_PROPERTY_OVERRIDES += \	PRODUCT_PROPERTY_OVERRIDES += \
    camera.hal1.packagelist=com.skype.raider,com.whatsapp,com.instagram.android \	    camera.hal1.packagelist=com.skype.raider,com.whatsapp,com.instagram.android \
    ro.qc.sdk.camera.facialproc=false \	    ro.qc.sdk.camera.facialproc=false \
    ro.qc.sdk.gestures.camera=false \	    ro.qc.sdk.gestures.camera=false \
    camera2.portability.force_api=1 \	    camera2.portability.force_api=1 \
    ro.factorytest=0	    persist.camera.video.ubwc=0 \
    persist.camera.HAL3.enabled=1 \
    persist.ts.postmakeup=false \
    persist.ts.rtmakeup=false \
    camera.no_navigation_bar=true \
    ro.factorytest=0 \
# Enable low power video mode for 4K encode
    vidc.debug.perf.mode=2 \
    vidc.enc.dcvs.extra-buff-count=2


# DRM	# DRM
PRODUCT_PROPERTY_OVERRIDES += \	PRODUCT_PROPERTY_OVERRIDES += \
    drm.service.enabled=true	    drm.service.enabled=true
# Dalvik	# Dalvik
PRODUCT_PROPERTY_OVERRIDES += \	PRODUCT_PROPERTY_OVERRIDES += \
    dalvik.vm.heapstartsize=8m \	    dalvik.vm.heapstartsize=8m \
    dalvik.vm.heapgrowthlimit=256m \	    dalvik.vm.heapgrowthlimit=256m \
    dalvik.vm.heapsize=512m \	    dalvik.vm.heapsize=512m \
    dalvik.vm.heaptargetutilization=0.50 \	    dalvik.vm.heaptargetutilization=0.50 \
    dalvik.vm.heapminfree=1m \	    dalvik.vm.heapminfree=1m \
    dalvik.vm.heapmaxfree=8m	    dalvik.vm.heapmaxfree=8m
# Dexopt (try not to use big cores during dexopt)	# Dexopt (try not to use big cores during dexopt)
PRODUCT_PROPERTY_OVERRIDES += \	PRODUCT_PROPERTY_OVERRIDES += \
    dalvik.vm.boot-dex2oat-threads=4 \	    dalvik.vm.boot-dex2oat-threads=4 \
    dalvik.vm.dex2oat-threads=2 \	    dalvik.vm.dex2oat-threads=4 \
    dalvik.vm.image-dex2oat-threads=4	    dalvik.vm.image-dex2oat-threads=4 \
    dalvik.vm.image-dex2oat-filter=speed \
    ro.vendor.qti.am.reschedule_service=true


# Display	# Display
PRODUCT_PROPERTY_OVERRIDES += \	PRODUCT_PROPERTY_OVERRIDES += \
    ro.sf.lcd_density=560 \	    ro.sf.lcd_density=560 \
    qemu.hw.mainkeys=0 \	    qemu.hw.mainkeys=0 \
    ro.qualcomm.cabl=2	    ro.qualcomm.cabl=2


# Properties to improve rendering	# Properties to improve rendering
    debug.composition.type=gpu \
    debug.cpurend.vsync=false \
    debug.enable.sglscale=1 \	    debug.enable.sglscale=1 \
    debug.enabletr=true \
    debug.egl.profiler=1 \
    debug.egl.hw=1 \	    debug.egl.hw=1 \
    debug.overlayui.enable=1 \
    debug.performance.tuning=1 \
    debug.sf.hw=1 \	    debug.sf.hw=1 \
    debug.sf.disable_hwc=0 \	    debug.sf.disable_hwc=0 \
    debug.sf.recomputecrop=0 \	    debug.sf.recomputecrop=0 \
    debug.sf.disable_backpressure=1 \	    debug.sf.disable_backpressure=1 \
    debug.sf.latch_unsignaled=1 \	    debug.sf.latch_unsignaled=1 \
    hw3d.force=1 \
    persist.hwc.ptor.enable=true \	    persist.hwc.ptor.enable=true \
    debug.cpurend.vsync=false \	    video.accelerate.hw=1
    debug.performance.tuning=1	


# MSM8992 HAL settings	# MSM8992 HAL settings
# 196610 is decimal for 0x30002 to report major/minor versions as 3/2	# 196610 is decimal for 0x30002 to report major/minor versions as 3/2
PRODUCT_PROPERTY_OVERRIDES += \	PRODUCT_PROPERTY_OVERRIDES += \
    debug.composition.type=c2d \	
    debug.mdpcomp.logs=0 \	    debug.mdpcomp.logs=0 \
    persist.debug.wfd.enable=1 \	    persist.debug.wfd.enable=1 \
    persist.demo.hdmirotationlock=false \	    persist.demo.hdmirotationlock=false \
    persist.hwc.enable_vds=1 \	    persist.hwc.enable_vds=1 \
    persist.hwc.mdpcomp.enable=true \	    persist.hwc.mdpcomp.enable=true \
    persist.mdpcomp.4k2kSplit=1 \	    persist.mdpcomp.4k2kSplit=1 \
    persist.mdpcomp_perfhint=50 \	    persist.mdpcomp_perfhint=50 \
    persist.metadata_dynfps.disable=true \	    persist.metadata_dynfps.disable=true \
    persist.sys.ui.hw=1 \
    persist.sys.wfd.virtual=0 \	    persist.sys.wfd.virtual=0 \
    ro.opengles.version=196610	    ro.opengles.version=196610 \
    ro.sf.compbypass.enable=0


# FIFO: enable scheduling for UI and Render threads by default	# FIFO: enable scheduling for UI and Render threads by default
PRODUCT_PROPERTY_OVERRIDES += \	PRODUCT_PROPERTY_OVERRIDES += \
    sys.use_fifo_ui=1	    sys.use_fifo_ui=1
# Fling Velocity	# Fling Velocity
PRODUCT_PROPERTY_OVERRIDES += \	PRODUCT_PROPERTY_OVERRIDES += \
    ro.min.fling_velocity=8000 \	    ro.min.fling_velocity=8000 \
    ro.max.fling_velocity=12000 \	    ro.max.fling_velocity=12000 \
    ro.min_pointer_dur=8 \	    ro.min_pointer_dur=8 \
    persist.sys.scrollingcache=3 \	    persist.sys.scrollingcache=3 \
    touch.presure.scale=0.001 \	    touch.presure.scale=0.001 \
    windowsmgr.max_events_per_sec=150	    windowsmgr.max_events_per_sec=150
# FRP	# FRP
PRODUCT_PROPERTY_OVERRIDES += \	PRODUCT_PROPERTY_OVERRIDES += \
    ro.frp.pst=/dev/block/bootdevice/by-name/persistent	    ro.frp.pst=/dev/block/bootdevice/by-name/persistent
# GPS	# GPS
PRODUCT_PROPERTY_OVERRIDES += \	PRODUCT_PROPERTY_OVERRIDES += \
    persist.gps.qc_nlp_in_use=1 \	    persist.gps.qc_nlp_in_use=1 \
    persist.loc.nlp_name=com.qualcomm.services.location \	    persist.loc.nlp_name=com.qualcomm.services.location \
    ro.gps.agps_provider=1 \	    ro.gps.agps_provider=1 \
    ro.qc.sdk.izat.premium_enabled=0 \	    ro.qc.sdk.izat.premium_enabled=0 \
    ro.qc.sdk.izat.service_mask=0x0	    ro.qc.sdk.izat.service_mask=0x0


# LMKD
PRODUCT_PROPERTY_OVERRIDES += \
    ro.lmk.low=1001 \
    ro.lmk.medium=80 \
    ro.lmk.critical=0 \
    ro.lmk.critical_upgrade=false \
    ro.lmk.upgrade_pressure=100 \
    ro.lmk.downgrade_pressure=100 \
    ro.lmk.kill_heaviest_task=true \
    ro.lmk.kill_timeout_ms=100

# Media	# Media
PRODUCT_PROPERTY_OVERRIDES += \	PRODUCT_PROPERTY_OVERRIDES += \
    persist.media.treble_omx=false \	    persist.media.treble_omx=false \
    mm.enable.qcom_parser=3379827 \	    mm.enable.qcom_parser=3379827 \
    mm.enable.smoothstreaming=true \	    mm.enable.smoothstreaming=true \
    media.aac_51_output_enabled=true \	    media.aac_51_output_enabled=true \
    media.stagefright.legacyencoder=true
    media.stagefright.less-secure=true
    vidc.debug.level=1 \	    vidc.debug.level=1 \
    vidc.debug.perf.mode=2 \	    vidc.debug.perf.mode=2 \
    vidc.enc.dcvs.extra-buff-count=2 \	    vidc.enc.dcvs.extra-buff-count=2 \
    persist.camera.cpp.duplication=false \	    persist.camera.cpp.duplication=false \
    ro.config.avoid_gfx_accel=true	    ro.config.avoid_gfx_accel=true
# Memory Optimizations	# Memory Optimizations
PRODUCT_PROPERTY_OVERRIDES += \	PRODUCT_PROPERTY_OVERRIDES += \
    ro.vendor.qti.sys.fw.bg_apps_limit=10 \	    ro.vendor.qti.sys.fw.bg_apps_limit=10 \
    ro.vendor.qti.am.reschedule_service=true \	    ro.vendor.qti.am.reschedule_service=true \
    ro.vendor.qti.sys.fw.bservice_enable=true \	    ro.vendor.qti.sys.fw.bservice_enable=true \
    ro.vendor.qti.sys.fw.bservice_age=5000 \	    ro.vendor.qti.sys.fw.bservice_age=5000 \
    ro.vendor.qti.sys.fw.bservice_limit=5	    ro.vendor.qti.sys.fw.bservice_limit=5


# Perf	# Perf
PRODUCT_PROPERTY_OVERRIDES += \	PRODUCT_PROPERTY_OVERRIDES += \
    persist.dpm.feature=1 \
    persist.timed.enable=true \	    persist.timed.enable=true \
    ro.qualcomm.cabl=2 \	    ro.qualcomm.cabl=2 \
    ro.qualcomm.perf.cores_online=2 \	    ro.qualcomm.perf.cores_online=2 \
    ro.vendor.extension_library=libqti-perfd-client.so \	    ro.vendor.extension_library=libqti-perfd-client.so \
    persist.dpm.feature=1 \	
    ro.min_freq_0=384000 \	    ro.min_freq_0=384000 \
    ro.min_freq_4=384000	    ro.min_freq_4=384000 \
    ro.vold.umsdirtyratio=50


# RIL	# RIL
PRODUCT_PROPERTY_OVERRIDES += \	PRODUCT_PROPERTY_OVERRIDES += \
    rild.libpath=/vendor/lib64/libril-qc-qmi-1.so \	    rild.libpath=/vendor/lib64/libril-qc-qmi-1.so \
    ril.subscription.types=NV,RUIM \	    ril.subscription.types=NV,RUIM \
    persist.data.mode=concurrent \	    persist.data.mode=concurrent \
    persist.data.netmgrd.qos.enable=true \	    persist.data.netmgrd.qos.enable=true \
    persist.data.qmi.adb_logmask=0 \	    persist.data.qmi.adb_logmask=0 \
    persist.qcril.disable_retry=true \	    persist.qcril.disable_retry=true \
    persist.radio.apm_sim_not_pwdn=1 \	    persist.radio.apm_sim_not_pwdn=1 \
    persist.radio.custom_ecc=1 \	    persist.radio.custom_ecc=1 \
    persist.radio.sib16_support=1 \	    persist.radio.sib16_support=1 \
    ro.data.large_tcp_window_size=true \	    ro.data.large_tcp_window_size=true \
    ro.use_data_netmgrd=true \	    ro.use_data_netmgrd=true \
    ro.telephony.default_network=12 \	    ro.telephony.default_network=12 \
    ro.ril.svlte1x=false \	    ro.ril.svlte1x=false \
    ro.ril.svdo=false \	    ro.ril.svdo=false \
    persist.telephony.oosisdc=false \
    #Improve Speech Quality
    ro.ril.enable.amr.wideband=1

# RIL Powersaving
    persist.radio.add_power_save=1 \	    persist.radio.add_power_save=1 \
    persist.telephony.oosisdc=false	    pm.sleep_mode=1 \
    ro.ril.disable.power.collapse=0 \
    ro.ril.fast.dormancy.rule=1 \
    ro.ril.fast.dormancy.timeout=3 \
    ro.mot.eri.losalert.delay=1000


# Security patch level	# Security patch level
PRODUCT_PROPERTY_OVERRIDES += \	PRODUCT_PROPERTY_OVERRIDES += \
    ro.vendor.build.security_patch=2017-07-01	    ro.vendor.build.security_patch=2017-07-01
# Sensors	# Sensors
PRODUCT_PROPERTY_OVERRIDES += \	PRODUCT_PROPERTY_OVERRIDES += \
    ro.qc.sdk.sensors.gestures=true \	    ro.qc.sdk.sensors.gestures=true \
    persist.debug.sensors.hal=e \	    persist.debug.sensors.hal=e \
    debug.qualcomm.sns.daemon=e \	    debug.qualcomm.sns.daemon=e \
    debug.qualcomm.sns.hal=e \	    debug.qualcomm.sns.hal=e \
    debug.qualcomm.sns.libsensor1=e	    debug.qualcomm.sns.libsensor1=e
# Storage	# Storage
PRODUCT_PROPERTY_OVERRIDES += \	PRODUCT_PROPERTY_OVERRIDES += \
    ro.sys.sdcardfs=true	    ro.sys.sdcardfs=true
# Fix graphical glitches on skiagl	# Fix graphical glitches on skiagl
PRODUCT_PROPERTY_OVERRIDES += \	PRODUCT_PROPERTY_OVERRIDES += \
    debug.hwui.renderer=opengl	    debug.hwui.renderer=opengl
# OTA server	# OTA server
PRODUCT_PROPERTY_OVERRIDES += \	PRODUCT_PROPERTY_OVERRIDES += \
    lineage.updater.uri=http://sfxota.binbash.rocks:8009/e-os/pie/api/v1/{device}/{type}/{incr}	    lineage.updater.uri=http://sfxota.binbash.rocks:8009/e-os/pie/api/v1/{device}/{type}/{incr}
0 comments on commit 5724558
@I-Cat
 one commit
