import numpy as np
from matplotlib import pyplot as plt

import os
from django.conf import settings


def random_noise_img():
	try:
		x = (np.random.rand(150) * 100).astype(np.uint8)
		y = (np.random.rand(150) * 100).astype(np.uint8)
		plt.scatter(x,y)
		# plt.savefig(os.path.join(settings.BASE_DIR, 'templates/profiler/assets/test.png'),format='png')
		# plt.savefig(os.path.join(settings.BASE_DIR, 'static/profiler/assets/test.png'),format='png')
		# plt.savefig("static/assets/img.png", format='png')
		plt.savefig(os.path.join(settings.BASE_DIR, 'profiler/static/assets/img.png'),format='png')

	except Exception as e:
		return "ERROR :C \b" + str(e)
	else:
		return "SUCCESS :D"